import assert from "node:assert/strict";
import test from "node:test";
import { compactHtmlTemplates } from "../../scripts/compact_html_templates.mjs";

for (const [name, source, expected = source] of [
  ["ordinary HTML whitespace", "html`<p>\n  hello\n  world\n</p>`", "html`<p> hello world </p>`"],
  ["CRLF whitespace", "html`<p>\r\n  hello\r\n</p>`", "html`<p> hello </p>`"],
  ["expression comments", "html`<p>\n${value // keep this comment\n}\n</p>`", "html`<p> ${value // keep this comment\n} </p>`"],
  ["nested templates", "html`<p>\n${html`<b>\n  nested\n</b>`}\n</p>`", "html`<p> ${html`<b> nested </b>`} </p>`"],
  ["UTF-16 offsets", 'const emoji = "🗺️"; html`<p>\n  preserved\n</p>`', 'const emoji = "🗺️"; html`<p> preserved </p>`'],
  ["preformatted text", "html`<pre>\n  preserved\n</pre>`"],
  ["inherited preformatted text", "html`<pre>${html`<span>\n  preserved\n</span>`}</pre>`"],
  ["textarea", "html`<textarea>\n  preserved\n</textarea>`"],
  ["style", "html`<style>\n p { color: red }\n</style>`"],
  ["script", "html`<script>\n return\n value\n</script>`"],
  ["untagged template", "const code = `return\n  value`; // untouched\n"],
  ["escape sequences", "html`<p>escaped\\ntext and \\`backtick</p>`"],
  ["line continuation", "html`hello" + "\\" + "\n" + "  world`"],
]) {
  test(name, () => assert.equal(compactHtmlTemplates(source), expected));
}
