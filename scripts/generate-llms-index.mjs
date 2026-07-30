// Replaces docusaurus-plugin-llms's llms.txt/llms-full.txt generation with our
// own, addressing real issues found in review: wrong cross-product links,
// truncated/repetitive summaries, inconsistent capitalization, and the blog
// (now removed) leaking into the index. See meta/AI_READINESS.md.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://northwind-cloud.vercel.app";

const products = JSON.parse(readFileSync(path.join(ROOT, "data/products.json"), "utf-8"));

const PAGE_TITLES = {
  intro: "Introduction",
  concepts: "Concepts",
  "getting-started": "Getting Started",
  "api-reference": "API Reference",
  "migration-guide": "Migration Guide",
};

// Purpose-written, product-aware summaries — not truncated first sentences.
function summaryFor(page, product) {
  const { name, tagline } = product;
  switch (page) {
    case "intro":
      return `${tagline}.`;
    case "concepts":
      return `Core objects and data model behind ${name} — the concepts referenced throughout the rest of the docs.`;
    case "getting-started":
      return `Create an API key, install the SDK or use cURL directly, and send your first request.`;
    case "api-reference":
      return `Full REST endpoint reference for ${name}: requests, responses, authentication, and error codes.`;
    case "migration-guide":
      return `What changed for ${name} between the previous release and the current one.`;
    default:
      return "";
  }
}

function pagesForProduct(product) {
  const dir = path.join(ROOT, `docs-${product.id}`);
  const files = readdirSync(dir).filter((f) => f.endsWith(".md"));
  const order = ["intro", "concepts", "getting-started", "api-reference", "migration-guide"];
  return order.filter((p) => files.includes(`${p}.md`));
}

// Mirrors the URL structure produced by scripts/fix-versioned-docs-markdown.mjs:
// latest/default version at the root, migration-guide (current-only) under /next/.
function urlFor(product, page) {
  const base = `${SITE_URL}/docs/${product.id}`;
  if (page === "migration-guide") {
    return `${base}/next/${page}.md`;
  }
  return `${base}/${page}.md`;
}

let llmsTxt = `# Northwind Cloud Docs

> Reference documentation for Northwind Cloud's ${products.length} cloud products. Each section below
> links to that product's introduction, core concepts, getting-started guide, and API reference.

`;

let llmsFullTxt = `# Northwind Cloud Docs — Full Reference

> Complete content for all ${products.length} Northwind Cloud products, concatenated for a single-fetch
> context window. For a shorter curated index instead, see /llms.txt.

`;

for (const product of products) {
  const pages = pagesForProduct(product);
  llmsTxt += `## ${product.name}\n\n${product.tagline}.\n\n`;
  llmsFullTxt += `\n---\n\n## ${product.name}\n\n${product.tagline}.\n\n`;

  for (const page of pages) {
    const title = PAGE_TITLES[page];
    const url = urlFor(product, page);
    const summary = summaryFor(page, product);
    llmsTxt += `- [${title}](${url}): ${summary}\n`;

    const sourceDir = path.join(ROOT, `docs-${product.id}`);
    const raw = readFileSync(path.join(sourceDir, `${page}.md`), "utf-8");
    const body = raw.replace(/^---\n[\s\S]*?\n---\n/, "").trim();
    llmsFullTxt += `\n### ${product.name} — ${title}\n\n${body}\n`;
  }
  llmsTxt += "\n";
}

writeFileSync(path.join(ROOT, "static/llms.txt"), llmsTxt, "utf-8");
writeFileSync(path.join(ROOT, "static/llms-full.txt"), llmsFullTxt, "utf-8");

console.log(
  `Generated llms.txt (${llmsTxt.length} chars) and llms-full.txt (${llmsFullTxt.length} chars) for ${products.length} products.`
);
