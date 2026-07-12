#!/usr/bin/env node
/*
 * build-standalone.js
 *
 * Generates `standalone.html` — a single self-contained page (all CSS/JS
 * inlined, no external requests) from the source files:
 *   index.html + assets/css/styles.css + assets/js/data.js + assets/js/app.js
 *
 * This is the file published as the Claude Artifact preview, so the repo
 * (the live GitHub Pages site) and the artifact share ONE source of truth:
 * edit the assets, run `node build-standalone.js`, and both stay in sync.
 *
 * The output is a body-fragment (title + <style> + markup + <script>), which
 * is what the Artifact publisher expects (it supplies <!doctype>/<head>/<body>).
 */
const fs = require("fs");
const path = require("path");

const root = __dirname;
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

const html = read("index.html");
const css = read("assets/css/styles.css");
const dataJs = read("assets/js/data.js");
const appJs = read("assets/js/app.js");

// <title> from the source head
const title = (html.match(/<title>[\s\S]*?<\/title>/i) || ["<title>Same As It Ever Was</title>"])[0];

// body inner content (everything the page renders)
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
if (!bodyMatch) throw new Error("Could not find <body> in index.html");
let body = bodyMatch[1];

// swap the external <script src> tags for inlined code, in original order.
// NOTE: use function replacers — a replacement STRING would interpret `$$`,
// `$&`, etc. specially and corrupt the JS (e.g. the `$$` DOM helper).
body = body
  .replace(/<script\s+src=["']assets\/js\/data\.js["']><\/script>/i, () => `<script>\n${dataJs}\n</script>`)
  .replace(/<script\s+src=["']assets\/js\/app\.js["']><\/script>/i, () => `<script>\n${appJs}\n</script>`);

const fragment = `${title}\n<style>\n${css}\n</style>\n${body.trim()}\n`;

fs.writeFileSync(path.join(root, "standalone.html"), fragment);
console.log(`Wrote standalone.html (${fragment.length} bytes)`);
