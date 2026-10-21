import { parse } from "@babel/parser";

/** Collapse ordinary HTML whitespace without touching JavaScript expressions. */
export function compactHtmlTemplates(source) {
  const file = parse(source, { sourceType: "module", plugins: ["typescript"] });
  const edits = [];
  const visit = (node) => {
    if (!node || typeof node.type !== "string") return;
    if (node.type === "TaggedTemplateExpression" && node.tag.type === "Identifier" && node.tag.name === "html") {
      const template = source.slice(node.quasi.start, node.quasi.end);
      if (/<(?:pre|textarea|script|style)\b|white-space\s*:\s*(?:pre|break-spaces)/iu.test(template)
        || /\\\r?\n/u.test(template)) return;
      for (const { start, end } of node.quasi.quasis) {
        const raw = source.slice(start, end);
        const text = raw.replace(/[ \t]*\r?\n[ \t\r\n]*/gu, " ");
        if (text !== raw) edits.push({ start, end, text });
      }
    }
    for (const child of Object.values(node)) {
      if (Array.isArray(child)) child.forEach(visit);
      else if (child && typeof child === "object") visit(child);
    }
  };
  visit(file);
  for (const { start, end, text } of edits.sort((left, right) => right.start - left.start)) {
    source = source.slice(0, start) + text + source.slice(end);
  }
  return source;
}
