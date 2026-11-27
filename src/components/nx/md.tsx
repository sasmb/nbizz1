import type { ReactNode } from "react";

export const slugify = (s: string) =>
  s.toLowerCase().replace(/\*\*/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-medium text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

/** The headings (## and ###) of a post, for its table of contents. */
export function headings(src: string) {
  return src
    .split("\n")
    .filter((l) => /^#{2,3} /.test(l))
    .map((l) => ({ level: l.startsWith("### ") ? 3 : 2, text: l.replace(/^#+ /, "").replace(/\*\*/g, ""), id: slugify(l.replace(/^#+ /, "")) }));
}

/** A small, safe renderer for the blog's Markdown subset: headings, lists, bold and paragraphs. */
export function Markdown({ src }: { src: string }) {
  const lines = src.split("\n");
  const out: ReactNode[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let para: string[] = [];
  const flushPara = () => {
    if (para.length) out.push(<p key={out.length}>{inline(para.join(" "))}</p>);
    para = [];
  };
  const flushList = () => {
    if (!list) return;
    const items = list.items.map((it, i) => <li key={i}>{inline(it)}</li>);
    out.push(list.ordered ? <ol key={out.length}>{items}</ol> : <ul key={out.length}>{items}</ul>);
    list = null;
  };
  for (const raw of lines) {
    const l = raw.trim();
    if (l.startsWith("#TITLE ") || /^# /.test(l)) continue;
    const h = /^(#{2,3}) (.*)$/.exec(l);
    const ul = /^[-*] (.*)$/.exec(l);
    const ol = /^\d+\. (.*)$/.exec(l);
    if (h) {
      flushPara();
      flushList();
      const Tag = h[1].length === 2 ? "h2" : "h3";
      out.push(
        <Tag key={out.length} id={slugify(h[2])}>
          {inline(h[2])}
        </Tag>
      );
    } else if (ul || ol) {
      flushPara();
      const ordered = !!ol;
      if (!list || list.ordered !== ordered) {
        flushList();
        list = { ordered, items: [] };
      }
      list.items.push((ul || ol)![1]);
    } else if (!l) {
      flushPara();
      flushList();
    } else {
      flushList();
      para.push(l);
    }
  }
  flushPara();
  flushList();
  return <div className="nx-prose">{out}</div>;
}
