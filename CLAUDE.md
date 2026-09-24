# Kanji Sushi site rebuild

Rebuild of https://www.kanjispringfield.com/ (Kanji Sushi AYCE, 8430-A Old Keene Mill Rd, Springfield, VA).
Goal: interactive, not reliant on 3D. Must include all their social media links and a reviews section.

## Standing rule: live link after every commit

After EVERY commit (and push), publish the current site as the live preview and give the user the link:

1. `node scripts/build-preview.js` (bundles `site/` into `.preview/index.html`)
2. Publish `.preview/index.html` with the Artifact tool. Reuse the same URL every time:
   pass `url` = the live link below so it updates in place instead of creating a new one.
3. End the reply with the live link.

Live preview link: https://claude.ai/artifact/MMwJLygHTGuRkTasgnw4iZ (private until shared from its Share menu)

## Business facts

- Name on their site: "Kanji Sushi & Bar (Springfield)". Yelp/Instagram use "Kanji Sushi AYCE".
- 8430-A Old Keene Mill Rd, Springfield, VA 22152 · (703) 563-1078
- Hours (from their site): Sun-Thu 12-10 PM, Fri-Sat 12-11 PM. Source of truth: `HOURS` in `site/assets/main.js`.
- Order Online currently lives on the old site (Go3 Technology); the new site links there.
- Socials: Instagram @kanjisushiandbar_springfield, Facebook, Yelp, Snapchat place page (links in footer).
- NEEDS OWNER CONFIRMATION: AYCE prices ($30 adult, $15 kids 7-11, $12 kids 4-6, 3 and under free)
  and the 90-minute seating limit come from a 2024 TikTok, not the restaurant.

## Design direction (current)

- Minimal sushi-restaurant look, modeled on Nobu Miami, Tanuki Miami and Yume Sushi Bar: plain white nav,
  full-bleed hero photo/video with headline bottom-left, clean light sections, one deep red accent.
- Hero: a photo from kanjispringfield.com for now (`site/assets/hero.jpg`).
- Planned hero video (Higgsfield): a PLAIN SALMON ROLL only, no other fillings, sliced with a Japanese
  yanagiba in one long horizontal pulling stroke (never a straight-down chop). Start frame must use
  `quality: "high"`, `resolution: "2k"`; the default low/1k frame caused the grainy rice.
  Video: kling3_0, mode pro, sound off, 5s (8.75 credits). Check the balance first.

## Layout

- `site/index.html` + `site/assets/` : plain HTML/CSS/vanilla JS, no build step (per the 10k-websites skill).
  `reviews.css` holds the design tokens, `site.css` the sections, `main.js` hero shuttle/tabs/hours, `reviews.js` the review data and belt.
- `10k-websites-skill (1).zip` : design skill used for critique and build standards. Keep it out of `site/`.
