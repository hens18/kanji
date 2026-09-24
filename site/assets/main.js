(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const NAMES = { salmon: "Salmon nigiri", maguro: "Tuna nigiri", tamago: "Tamago nigiri", ebi: "Shrimp nigiri" };

  // Pause every loop on hidden tabs.
  document.addEventListener("visibilitychange", () => document.body.classList.toggle("paused", document.hidden));

  /* ---------- The line: conveyor belt + shuttle ---------- */
  const line = document.querySelector(".line");
  if (line) {
    const belt = line.querySelector("[data-conveyor]");
    const order = [["salmon", "salmon"], ["tamago", "tamago"], ["maguro", "maguro"], ["ebi", "ebi"], ["salmon", "wasabi"], ["maguro", "tamago"]];
    // Two identical runs so the belt loops without a seam.
    for (let r = 0; r < 2; r++) {
      order.forEach(([fish, plate]) => {
        const p = document.createElement("span");
        p.className = "cplate";
        p.style.setProperty("--plate", `var(--plate-${plate})`);
        const n = document.createElement("span");
        n.className = "nigiri";
        n.dataset.fish = fish;
        p.append(n);
        belt.append(p);
      });
    }
    new IntersectionObserver(([e]) => line.classList.toggle("is-on", e.isIntersecting)).observe(line);

    const shuttle = line.querySelector("[data-shuttle]");
    const dish = line.querySelector("[data-shuttle-dish]");
    const send = line.querySelector("[data-send]");
    const status = line.querySelector("[data-send-status]");
    const rail = line.querySelector(".rail");
    const setRun = () => shuttle.style.setProperty("--run", `${rail.clientWidth - shuttle.offsetWidth}px`);
    setRun();
    addEventListener("resize", setRun);

    const current = () => line.querySelector('input[name="fish"]:checked').value;
    line.querySelectorAll('input[name="fish"]').forEach(i =>
      i.addEventListener("change", () => { if (!send.disabled) dish.dataset.fish = current(); }));

    const wait = ms => new Promise(r => setTimeout(r, reduced.matches ? 0 : ms));
    const arrive = () => new Promise(res => {
      if (reduced.matches) return res();
      const done = e => { if (e.propertyName === "transform") { shuttle.removeEventListener("transitionend", done); res(); } };
      shuttle.addEventListener("transitionend", done);
    });

    send.addEventListener("click", async () => {
      const fish = current();
      dish.dataset.fish = fish;
      send.disabled = true;
      status.textContent = `${NAMES[fish]} is on its way...`;
      setRun();
      const there = arrive();
      shuttle.classList.add("is-there");
      await there;
      status.textContent = `${NAMES[fish]}, delivered. Every order you place arrives just like this.`;
      await wait(1400);
      shuttle.style.visibility = "hidden"; // plate "lifted off" at the table
      shuttle.classList.remove("is-there");
      await wait(1500);
      shuttle.style.visibility = "";
      send.disabled = false;
      send.textContent = "Send another";
    });
  }

  /* ---------- Menu tabs (ARIA tabs pattern) ---------- */
  const tabs = [...document.querySelectorAll('.tabs [role="tab"]')];
  const select = tab => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", e => {
      const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (k) { e.preventDefault(); const n = tabs[(i + k + tabs.length) % tabs.length]; select(n); n.focus(); }
      if (e.key === "Home") { e.preventDefault(); select(tabs[0]); tabs[0].focus(); }
      if (e.key === "End") { e.preventDefault(); select(tabs.at(-1)); tabs.at(-1).focus(); }
    });
  });

  /* ---------- Hours with today + open now (Springfield time) ---------- */
  // From kanjispringfield.com: Sun-Thu 12 PM - 10 PM, Fri & Sat 12 PM - 11 PM.
  const HOURS = [ // index = day of week, 0 = Sunday. [open, close] in 24h
    ["Sunday", 12, 22], ["Monday", 12, 22], ["Tuesday", 12, 22], ["Wednesday", 12, 22],
    ["Thursday", 12, 22], ["Friday", 12, 23], ["Saturday", 12, 23]
  ];
  const fmt = h => `${h > 12 ? h - 12 : h} ${h >= 12 ? "PM" : "AM"}`;
  const body = document.querySelector("[data-hours]");
  if (body) {
    const parts = Object.fromEntries(new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23"
    }).formatToParts(new Date()).map(p => [p.type, p.value]));
    const today = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday);
    const now = +parts.hour + parts.minute / 60;

    // Show Monday first, the way people read a week.
    [1, 2, 3, 4, 5, 6, 0].forEach(d => {
      const [name, o, c] = HOURS[d];
      const tr = document.createElement("tr");
      if (d === today) tr.className = "is-today";
      tr.innerHTML = `<td>${name}</td><td>${fmt(o)} to ${fmt(c)}</td>`;
      body.append(tr);
    });

    const pill = document.querySelector("[data-open-pill]");
    if (today >= 0) {
      const [, o, c] = HOURS[today];
      const open = now >= o && now < c;
      pill.classList.toggle("is-open", open);
      pill.textContent = open ? `Open now · until ${fmt(c)}` : now < o ? `Opens today at ${fmt(o)}` : "Closed now · opens at 12 PM";
    }
  }
})();
