// Bundles site/ into one self-contained page for the live preview link.
// The preview host wraps pages in its own <html>/<head>/<body>, so those are stripped,
// and local CSS/JS are inlined. Output: .preview/index.html (git-ignored).
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const site = path.join(root, "site");
let html = fs.readFileSync(path.join(site, "index.html"), "utf8");

html = html
  .replace(/<link rel="stylesheet" href="(assets\/[^"]+)">/g, (_, f) =>
    `<style>\n${fs.readFileSync(path.join(site, f), "utf8")}</style>`)
  .replace(/<script src="(assets\/[^"]+)"><\/script>/g, (_, f) =>
    `<script>\n${fs.readFileSync(path.join(site, f), "utf8")}</script>`)
  .replace(/<!doctype html>\s*/i, "")
  .replace(/<\/?(html|head|body)[^>]*>\s*/gi, "")
  .replace(/<meta (charset|name="viewport")[^>]*>\s*/gi, "");

fs.mkdirSync(path.join(root, ".preview"), { recursive: true });
fs.writeFileSync(path.join(root, ".preview", "index.html"), html);
console.log("Wrote .preview/index.html");
