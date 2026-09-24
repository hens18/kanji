/* Guest reviews, transcribed from Yelp screenshots supplied by the client.
   Kept verbatim except: Don T. drops "Check out the video" (the video lives on Yelp),
   and Lisa M. drops a stray "I" typo ("to our table I on a little train"). */
const REVIEWS = [
  {
    name: "Ray R.",
    place: "Alexandria, VA",
    date: "2026-04-11",
    rating: 5,
    plate: "salmon",
    pull: "One of the best sushi deals in the area.",
    body: [
      "Dear reader,",
      "Kanji AYCE Sushi in Springfield offers, quite simply, one of the best sushi deals in the area. There is something deeply satisfying about being able to order whatever you fancy without feeling like every additional roll requires a minor financial consultation. Better still, the quality is actually very good, which is where many all-you-can-eat arrangements lose the plot. Here, the fish is fresh, the options are plentiful, and the whole experience feels properly worth it. This is absolutely a place to arrive hungry and leave very happy indeed. A strong showing for Springfield and an easy recommendation for any sushi-loving member of society."
    ]
  },
  {
    name: "Lisa M.",
    place: "Alexandria, VA",
    date: "2026-05-09",
    rating: 5,
    plate: "wasabi",
    pull: "This place does it all.",
    body: [
      "What a fun experience, we will be back! This place does it all: hibachi, teriyaki, tempura, noodles, made to order sushi, sashimi, conveyor belt sushi and more! And it's all you can eat for a reasonable price! Our server was friendly and checked in on us regularly as we kept ordering more options that were delivered to our table on a little train. The restaurant was clean and modern with booths and bar seating."
    ]
  },
  {
    name: "Don T.",
    place: "Fairfax, VA",
    date: "2026-08-01",
    rating: 5,
    plate: "tamago",
    pull: "Very unique delivery system to your table!",
    body: [
      "Fresh sushi made to order. Great quality. Very unique delivery system to your table!"
    ]
  },
  {
    name: "Tiana N.",
    place: "Lake Ridge, VA",
    date: "2026-08-13",
    rating: 5,
    plate: "maguro",
    pull: "Service is always top tier!",
    body: [
      "I come here all the time and service is always top tier ! Today, we came in me and my friends, we were sat very quickly and food came out very fast. Brandon(Our wonderful waiter) and Bella the hostess, were amazing. Brandon was very personable and he kept us laughing and his service was a 10/10 DO RECOMMEND ! We will for sure keep coming back !"
    ]
  },
  {
    name: "Dennis C.",
    place: "Valrico, FL",
    badge: "Yelp Elite",
    date: "2025-12-20",
    rating: 5,
    plate: "ebi",
    pull: "Hands down one of the best AYCE-sushi spots in the NATION!",
    body: [
      "This is hands down one of the best AYCE-sushi spots in the NATION! Seriously... no cap.",
      "This review a bit overdue, but it is impossible for me to not give Kanji Sushi and Hibachi its flowers after my experience there.",
      "I was in town for a business trip, along with a couple of coworkers in the last week of November 2025. After flying into town on a Sunday and checking into our hotel down the road, we were looking forward to dinner. One of the coworkers recommended Kanji as he previously lived in and was familiar with the area.",
      "We arrived at the venue around 6pm and were seated promptly. It was fairly open when we arrived, with a good rotation of patrons in and out, however it picked up quite a bit after we were seated.",
      "As briefed to us by our server (the service was great by the way), the kaiten-zushi (sushi conveyor belt) items were intended to be super light-eats. So in that regard, it is a bit underwhelming when compared to other similar concept places such as Kura. However, the money train (no pun intended) were the actual shuttles that ran along the top rails over the communal belt.",
      "There is a great selection of appetizer, sushi, rolls, and hibachi items for the AYCE menu. Compared to other AYCE venues, you will have to order your items each time the server comes around as opposed to ordering electronically from a table kiosk. Save a few items here and there, we tried almost every item on the menu and they were all spectacular. Great standard rolls with quality and flavor - all the rolls that I've had here were probably the best rolls I've had in a while. The hibachi meats were tender and on point. THEY HAVE TAKOYAKI!!!",
      "Usually when going to AYCE-sushi restaurants, the bar and expectations are set pretty low when it comes to the quality of the food due to the amount of food that needs to be churned out at speed. This is not the case with Kanji - the chefs definitely know how to create the perfect balance of speed and quality. All of which is delivered directly to your tables on the shuttles with a great turn around time after your order is submitted.",
      "If you want sashimi (the fish without the rice), there is an additional surcharge, however there is a one-time sashimi \"sampler\" plate that is included with your AYCE pricing. Even with the base pricing, you will get a thorough experience.",
      "Hands down recommend Kanji Sushi and Hibachi for all those in town and those visiting! I will 100% be returning to Kanji the next time I am in Springfield. You CANNOT go wrong with Kanji!"
    ]
  }
];

(() => {
  const section = document.querySelector(".reviews");
  if (!section) return;
  const track = section.querySelector(".belt__track");
  const prev = section.querySelector("[data-belt-prev]");
  const next = section.querySelector("[data-belt-next]");
  const pauseBtn = section.querySelector("[data-belt-pause]");
  const status = section.querySelector("[data-belt-status]");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const fmt = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
  const STEP_MS = 7000;

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  const stars = n => {
    const wrap = el("span", "stars");
    wrap.setAttribute("role", "img");
    wrap.setAttribute("aria-label", `${n} out of 5 stars`);
    for (let i = 0; i < 5; i++) {
      const s = el("span", i < n ? "star star--on" : "star");
      s.setAttribute("aria-hidden", "true");
      wrap.append(s);
    }
    return wrap;
  };

  REVIEWS.forEach((r, i) => {
    const li = el("li", "plate");
    li.dataset.plate = r.plate;
    li.style.setProperty("--i", i);
    const card = el("article", "plate__card");
    const id = `review-${i}`;
    card.setAttribute("aria-labelledby", `${id}-name`);

    const head = el("header", "plate__head");
    const mono = el("span", "plate__dish", r.name.split(" ").map(w => w[0]).join(""));
    mono.setAttribute("aria-hidden", "true");
    const who = el("div", "plate__who");
    const name = el("h3", "plate__name", r.name);
    name.id = `${id}-name`;
    if (r.badge) name.append(" ", el("span", "plate__badge", r.badge));
    who.append(name, el("p", "plate__place", r.place));
    head.append(mono, who);

    const meta = el("p", "plate__meta");
    const time = el("time", null, fmt.format(new Date(r.date)));
    time.dateTime = r.date;
    meta.append(stars(r.rating), time);

    const quote = el("blockquote", "plate__quote");
    quote.append(el("p", "plate__pull", `“${r.pull}”`));
    const body = el("div", "plate__body");
    body.id = `${id}-body`;
    r.body.forEach(p => body.append(el("p", null, p)));
    quote.append(body);

    const more = el("button", "plate__more", "Read full review");
    more.type = "button";
    more.hidden = true;
    more.setAttribute("aria-controls", body.id);
    more.setAttribute("aria-expanded", "false");
    more.addEventListener("click", () => {
      const open = card.classList.toggle("is-open");
      more.setAttribute("aria-expanded", String(open));
      more.textContent = open ? "Show less" : "Read full review";
      sync();
    });

    card.append(head, meta, quote, more);
    li.append(card);
    track.append(li);
  });

  // Only offer "Read full review" where the clamp actually hides text.
  const measure = () => {
    track.querySelectorAll(".plate__card").forEach(card => {
      if (card.classList.contains("is-open")) return;
      const body = card.querySelector(".plate__body");
      card.querySelector(".plate__more").hidden = body.scrollHeight <= body.clientHeight + 2;
    });
  };

  const plates = () => [...track.children];
  const current = () => {
    const x = track.scrollLeft;
    let best = 0, dist = Infinity;
    plates().forEach((p, i) => {
      const d = Math.abs(p.offsetLeft - track.offsetLeft - x);
      if (d < dist) { dist = d; best = i; }
    });
    return best;
  };
  const atEnd = () => track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  const go = i => {
    const list = plates();
    const target = list[(i + list.length) % list.length];
    track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: reduced.matches ? "auto" : "smooth" });
  };
  const step = dir => {
    if (dir > 0 && atEnd()) go(0);
    else if (dir < 0 && track.scrollLeft <= 4) go(plates().length - 1);
    else go(current() + dir);
  };

  prev.addEventListener("click", () => step(-1));
  next.addEventListener("click", () => step(1));
  track.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  });

  // The belt moves on its own, like the kaiten line, until anything says stop.
  const hold = { user: false, hover: false, focus: false, offscreen: true, hidden: document.hidden };
  let timer = 0;
  const running = () =>
    !reduced.matches && !hold.user && !hold.hover && !hold.focus && !hold.offscreen && !hold.hidden &&
    !track.querySelector(".is-open");

  function sync() {
    const on = running();
    section.classList.toggle("is-running", on);
    clearInterval(timer);
    if (on) timer = setInterval(() => step(1), STEP_MS);
  }

  pauseBtn.addEventListener("click", () => {
    hold.user = !hold.user;
    pauseBtn.setAttribute("aria-pressed", String(hold.user));
    pauseBtn.querySelector("span").textContent = hold.user ? "Play belt" : "Pause belt";
    status.textContent = hold.user ? "Belt paused" : "Belt moving";
    sync();
  });
  const belt = section.querySelector(".belt");
  belt.addEventListener("pointerenter", () => { hold.hover = true; sync(); });
  belt.addEventListener("pointerleave", () => { hold.hover = false; sync(); });
  belt.addEventListener("focusin", () => { hold.focus = true; sync(); });
  belt.addEventListener("focusout", e => {
    if (!belt.contains(e.relatedTarget)) { hold.focus = false; sync(); }
  });
  document.addEventListener("visibilitychange", () => { hold.hidden = document.hidden; sync(); });
  reduced.addEventListener("change", sync);

  // Already on screen at load: show the cards now rather than waiting on the observer.
  if (section.getBoundingClientRect().top < innerHeight) section.classList.add("in");

  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) section.classList.add("in");
    hold.offscreen = !entry.isIntersecting;
    sync();
  }, { threshold: 0.25 }).observe(section);

  // Retire the entrance stagger once it has played, so hovers never lag.
  section.addEventListener("transitionend", e => {
    if (e.target.classList.contains("plate") && e.propertyName === "transform") e.target.classList.add("is-settled");
  });

  measure();
  addEventListener("resize", measure);
  document.fonts && document.fonts.ready.then(measure);
  sync();
})();
