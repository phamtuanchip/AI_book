#!/usr/bin/env node
// Build a single print-ready HTML (build/book-print.html) from chapters/*.html
// and templates/phu-luc-*.html, then render it to build/AI-Book.pdf using a
// locally installed Chrome/Edge in headless mode.
//
// Usage: node scripts/build-pdf.js

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const CHAPTERS_DIR = path.join(ROOT, "chapters");
const TEMPLATES_DIR = path.join(ROOT, "templates");
const BUILD_DIR = path.join(ROOT, "build");

const CHAPTERS = [
  "01-ai-la-gi.html",
  "02-lam-viec-cua-llm.html",
  "03-he-sinh-thai-mo-hinh.html",
  "04-gioi-han-va-rui-ro.html",
  "05-nguyen-ly-prompting-co-ban.html",
  "06-ky-thuat-prompting-nang-cao.html",
  "07-prompting-cho-code.html",
  "08-cong-cu-ai-coding-ide.html",
  "09-lam-viec-voi-cli-agent.html",
  "10-danh-gia-chat-luong-output.html",
  "11-case-study-thuc-hanh.html",
  "12-ai-agent-la-gi.html",
  "13-kien-truc-agent-pho-bien.html",
  "14-xay-dung-agent-don-gian.html",
  "15-agent-cong-viec-phi-lap-trinh.html",
  "16-quan-tri-rui-ro-agent.html",
  "17-buc-tranh-sdlc-voi-ai.html",
  "18-ai-trong-planning-requirement.html",
  "19-ai-trong-thiet-ke-kien-truc.html",
  "20-ai-trong-code-test-review-cicd.html",
  "21-ai-trong-van-hanh-bao-tri.html",
  "22-kien-truc-agentic-sdlc.html",
  "23-bao-mat-agentic-sdlc.html",
  "24-xay-dung-ai-native-team.html",
  "25-tu-applyer-den-architect.html",
  "26-tong-ket.html",
];

const APPENDICES = [
  "phu-luc-a-prompting-co-ban.html",
  "phu-luc-b-prompting-cho-code.html",
  "phu-luc-c-system-prompt-agent.html",
  "phu-luc-d-prompt-sdlc.html",
  "phu-luc-e-prompt-engineer.html",
];

function chapterId(filename) {
  const m = filename.match(/^(\d{2})-/);
  return "ch" + m[1];
}

function appendixId(filename) {
  const m = filename.match(/^phu-luc-([a-z])-/);
  return "apx-" + m[1];
}

// Extract everything inside <div class="page"> ... the matching closing
// </div> right before </body>. Chapter files have no nested .page divs, so
// "last </div> before </body>" is a safe delimiter given the fixed template.
function extractPageContent(html) {
  const startMarker = '<div class="page">';
  const startIdx = html.indexOf(startMarker);
  const bodyEndIdx = html.lastIndexOf("</body>");
  if (startIdx === -1 || bodyEndIdx === -1) {
    throw new Error("Unexpected file structure — missing .page div or </body>");
  }
  let inner = html.slice(startIdx + startMarker.length, bodyEndIdx);
  // Drop the trailing closing </div> of .page (last one before </body>).
  const lastDivClose = inner.lastIndexOf("</div>");
  inner = inner.slice(0, lastDivClose) + inner.slice(lastDivClose + "</div>".length);
  return inner.trim();
}

function stripPrintNoise(html) {
  return html
    // remove "← Mục lục" back-link
    .replace(/<a class="toc-back"[^>]*>.*?<\/a>\s*/s, "")
    // remove prev/next chapter-nav block entirely
    .replace(/<nav class="chapter-nav">.*?<\/nav>\s*/s, "");
}

function fixCrossLinks(html) {
  return html
    .replace(/href="\.\.\/templates\/phu-luc-([a-z])-[a-z-]*\.html"/g, 'href="#apx-$1"')
    .replace(/href="phu-luc-([a-z])-[a-z-]*\.html"/g, 'href="#apx-$1"')
    .replace(/href="(\d{2})-[a-z-]*\.html"/g, 'href="#ch$1"')
    .replace(/href="index\.html"/g, 'href="#toc"');
}

function buildSection(id, title, innerHtml) {
  return `<section id="${id}" class="print-chapter">\n${innerHtml}\n</section>`;
}

function main() {
  if (!fs.existsSync(BUILD_DIR)) fs.mkdirSync(BUILD_DIR, { recursive: true });

  const css = fs.readFileSync(path.join(ROOT, "assets", "style.css"), "utf8");

  const tocRaw = fs.readFileSync(path.join(CHAPTERS_DIR, "index.html"), "utf8");
  let tocInner = extractPageContent(tocRaw);
  tocInner = fixCrossLinks(tocInner);

  const sections = [buildSection("toc", "Mục lục", tocInner)];

  for (const file of CHAPTERS) {
    const raw = fs.readFileSync(path.join(CHAPTERS_DIR, file), "utf8");
    let inner = extractPageContent(raw);
    inner = stripPrintNoise(inner);
    inner = fixCrossLinks(inner);
    sections.push(buildSection(chapterId(file), file, inner));
  }

  for (const file of APPENDICES) {
    const raw = fs.readFileSync(path.join(TEMPLATES_DIR, file), "utf8");
    let inner = extractPageContent(raw);
    inner = stripPrintNoise(inner);
    inner = fixCrossLinks(inner);
    sections.push(buildSection(appendixId(file), file, inner));
  }

  const printCss = `
    @page { margin: 16mm 14mm; }
    body { padding: 0; }
    .page { display: none; } /* unused wrapper class not present in combined doc */
    .print-chapter { max-width: 760px; margin: 0 auto; padding: 18mm 0 10mm; page-break-before: always; }
    .print-chapter:first-child { page-break-before: avoid; }
    .cover { text-align: center; padding-top: 30vh; page-break-after: always; }
    .cover h1 { font-size: 2.4rem; }
    a { text-decoration: none; }
    nav.chapter-nav, .toc-back { display: none; }
  `;

  const cover = `
<section class="cover print-chapter" id="cover">
  <p class="part-label">AI_book</p>
  <h1>AI cho người lập trình:<br>từ Prompting đến AI SDLC Architect</h1>
  <p>Nhập môn AI nhanh, prompting, công cụ AI hỗ trợ lập trình, AI agents, và áp dụng AI xuyên suốt
  vòng đời phát triển phần mềm (SDLC).</p>
</section>`;

  const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>AI cho người lập trình — bản in</title>
<style>
${css}
${printCss}
</style>
</head>
<body>
${cover}
${sections.join("\n\n")}
</body>
</html>
`;

  const outHtml = path.join(BUILD_DIR, "book-print.html");
  fs.writeFileSync(outHtml, html, "utf8");
  console.log("Wrote", outHtml);

  const candidates = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  ];
  const browser = candidates.find((p) => fs.existsSync(p));
  if (!browser) {
    console.log("No Chrome/Edge found — HTML written, skipping PDF step.");
    return;
  }

  const outPdf = path.join(BUILD_DIR, "AI-Book.pdf");
  const fileUrl = "file:///" + outHtml.replace(/\\/g, "/");
  console.log("Rendering PDF with", browser);
  execFileSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${outPdf}`,
      "--print-to-pdf-no-header",
      "--no-sandbox",
      fileUrl,
    ],
    { stdio: "inherit" }
  );
  console.log("Wrote", outPdf);
}

main();
