# Kanji Sushi site rebuild

Rebuild of https://www.kanjispringfield.com/ (Kanji Sushi AYCE, 8430-A Old Keene Mill Rd, Springfield, VA).
Goal: interactive, not reliant on 3D. Must include all their social media links and a reviews section.

## Standing rule: live link after every commit

After EVERY commit (and push), publish the current site as the live preview and give the user the link:

1. `node scripts/build-preview.js` (bundles `site/` into `.preview/index.html`)
2. Publish `.preview/index.html` with the Artifact tool. Reuse the same URL every time:
   pass `url` = the live link below so it updates in place instead of creating a new one.
   Images are not inlined: pass every image under `site/assets/` in `files`,
   e.g. {"assets/hero.jpg": "site/assets/hero.jpg", "assets/photos/rolls.jpg": "site/assets/photos/rolls.jpg", ...}.
3. End the reply with the live link.

Live preview link: https://claude.ai/artifact/MMwJLygHTGuRkTasgnw4iZ (private until shared from its Share menu)

## Business facts

- Name on their site: "Kanji Sushi & Bar (Springfield)". Yelp/Instagram use "Kanji Sushi AYCE".
- 8430-A Old Keene Mill Rd, Springfield, VA 22152 · (703) 563-1078
- Hours (from their site): Sun-Thu 12-10 PM, Fri-Sat 12-11 PM. Source of truth: `HOURS` in `site/assets/main.js`.
- Order Online: https://order.tastyfuture.com/menu?store=2714485465345 (from their site).
- Google Maps: https://maps.app.goo.gl/E62i17QUfP6FbHxg9
- Their site links Yelp listing `kanji-sushi-and-bar-west-springfield-2`; the reviews we use come from `kanji-sushi-ayce-west-springfield`.
- Photos in `site/assets/` come from kanjispringfield.com (s3.ezordernow.com). They look like platform stock photos,
  only 1000px wide; replace with the restaurant's own shots when available. Yelp blocks automated downloads (403).
- Socials: Instagram @kanjisushiandbar_springfield, Facebook, Yelp, Snapchat place page (links in footer).
- NEEDS OWNER CONFIRMATION: AYCE prices ($30 adult, $15 kids 7-11, $12 kids 4-6, 3 and under free)
  and the 90-minute seating limit come from a 2024 TikTok, not the restaurant.

- À la carte menu (image supplied by the user): matches menutoeat.com's April 2026 copy (Honeymoon $16, Salmon Roll $6,
  California $6.50, Miso $3, Takoyaki $9, Rainbow $14) except Dragon Roll ($14 on the menu image, $18 online).
  DoorDash prices run about 25% higher (Old Keene Mill Roll $18.75 vs $15), which is normal delivery markup.
- Food reel photos (`site/assets/photos/*-roll.jpg`, `nigiri-*.jpg`) were supplied by the user, 348px, likely from Yelp:
  confirm the owner has permission from the photographers before launch.

## Design direction (current)

- Minimal sushi-restaurant look, modeled on Nobu Miami, Tanuki Miami and Yume Sushi Bar: plain white nav,
  full-bleed hero photo/video with headline bottom-left, clean light sections, one deep red accent.
- Hero: nigiri photo from kanjispringfield.com, mirrored (`site/assets/hero.jpg`).
- Planned hero video (Higgsfield): a PLAIN SALMON ROLL only, no other fillings, sliced with a Japanese
  yanagiba in one long horizontal pulling stroke (never a straight-down chop). Start frame must use
  `quality: "high"`, `resolution: "2k"`; the default low/1k frame caused the grainy rice.
  Video: kling3_0, mode pro, sound off, 5s (8.75 credits). Check the balance first.

## Layout

- `site/index.html` + `site/assets/` : plain HTML/CSS/vanilla JS, no build step (per the 10k-websites skill).
  `reviews.css` holds the design tokens, `site.css` the sections, `main.js` hero fallback/tabs/hours, `reviews.js` the review data and belt.
- Menu: the full à la carte menu lives in `scripts/menu_data.py` (transcribed from the printed menu).
  Edit it there, then run `python3 scripts/build_menu.py` to regenerate the menu section in `site/index.html`.
  "THE MENU" heading uses Dela Gothic One. The "How it works" section was removed at the user's request.
- `10k-websites-skill (1).zip` : design skill used for critique and build standards. Keep it out of `site/`.
