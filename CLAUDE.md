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

## Layout

- `site/index.html` + `site/assets/` : plain HTML/CSS/vanilla JS, no build step (per the 10k-websites skill).
- `10k-websites-skill (1).zip` : design skill used for critique and build standards. Keep it out of `site/`.
