# Regenerates the menu section in site/index.html from scripts/menu_data.py.
# Run: python3 scripts/build_menu.py
import html, re, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from menu_data import MENU

def price(p):
    return f"{p:.2f}".rstrip("0").rstrip(".") if p % 1 else str(int(p))

def item(name, p, desc, raw):
    mark = '<span class="raw" title="Contains raw fish"><span class="sr-only">Contains raw fish</span></span>' if raw else ""
    d = f'\n                <p class="item__desc">{html.escape(desc)}</p>' if desc else ""
    return (f'              <li class="item">\n'
            f'                <p class="item__row"><span class="item__name">{html.escape(name)}{mark}</span>'
            f'<span class="item__price">{price(p)}</span></p>{d}\n'
            f'              </li>')

tabs, panels = [], []
for i, (key, label, groups) in enumerate(MENU):
    sel = i == 0
    tabs.append(f'            <button role="tab" id="tab-{key}" aria-controls="panel-{key}" aria-selected="{str(sel).lower()}"'
                + ('' if sel else ' tabindex="-1"') + f'>{html.escape(label)}</button>')
    body = []
    for title, items in groups:
        body.append(f'          <div class="menu__group">\n            <h3 class="menu__group-title">{html.escape(title)}</h3>\n'
                    f'            <ul class="items">\n' + "\n".join(item(*it) for it in items) + '\n            </ul>\n          </div>')
    panels.append(f'        <div class="tabpanel" role="tabpanel" id="panel-{key}" aria-labelledby="tab-{key}" tabindex="0"'
                  + ('' if sel else ' hidden') + '>\n' + "\n".join(body) + '\n        </div>')

section = f'''    <section class="menu" id="menu" aria-labelledby="menu-title">
      <div class="wrap">
        <div class="menu__head">
          <h2 class="menu__title" id="menu-title">The Menu</h2>
          <p class="muted menu__note">À la carte prices. All you can eat is available too, just ask your server. <span class="raw" aria-hidden="true"></span> marks raw fish.</p>
        </div>
        <div class="tabs" role="tablist" aria-label="Menu categories">
{chr(10).join(tabs)}
        </div>
{chr(10).join(panels)}
        <p class="menu__advisory">Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness.</p>
      </div>
    </section>'''

p = pathlib.Path(__file__).parent.parent / "site/index.html"
s = p.read_text()
s, n = re.subn(r'    <section class="menu" id="menu".*?\n    </section>', lambda m: section, s, count=1, flags=re.S)
assert n == 1, "menu section not found"
p.write_text(s)
print("menu rebuilt:", sum(len(it) for _, _, g in MENU for _, it in g), "items")
