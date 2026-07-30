// Works around a bug in docusaurus-plugin-llms: for versioned + multi-instance docs,
// its generateMarkdownFiles feature produces colliding filenames (intro.md, intro-2.md, ...)
// that don't map to the real versioned URLs, and in some cases mixes content across
// products entirely. See meta/AI_READINESS.md for the full writeup.
//
// This script generates the correct per-page .md file directly from the known source
// directories, placed at the exact path the real HTML page is served from, for every
// versioned product x every locale. Run automatically via `npm run build` (postbuild).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const products = JSON.parse(readFileSync(path.join(ROOT, "data/products.json"), "utf-8")).filter(
  (p) => p.versioned
);
const LOCALES = ["en", "ko", "de", "fr", "zh-Hans", "ja", "es", "pt", "it"];

function stripFrontmatter(content) {
  return content.replace(/^---\n[\s\S]*?\n---\n/, "").trim() + "\n";
}

function copyCleaned(sourceDir, targetDir) {
  if (!existsSync(sourceDir)) return 0;
  mkdirSync(targetDir, { recursive: true });
  let count = 0;
  for (const file of readdirSync(sourceDir)) {
    if (!file.endsWith(".md")) continue;
    const content = readFileSync(path.join(sourceDir, file), "utf-8");
    writeFileSync(path.join(targetDir, file), stripFrontmatter(content), "utf-8");
    count++;
  }
  return count;
}

function removeStraySuffixedFiles(dir) {
  if (!existsSync(dir)) return;
  for (const file of readdirSync(dir)) {
    const full = path.join(dir, file);
    if (/-\d+\.md$/.test(file)) {
      rmSync(full);
    }
  }
}

let totalFixed = 0;

for (const product of products) {
  const versions = JSON.parse(readFileSync(path.join(ROOT, `${product.id}_versions.json`), "utf-8"));
  const [latestVersion, ...olderVersions] = versions;

  for (const locale of LOCALES) {
    const localePrefix = locale === "en" ? "" : `${locale}/`;
    const buildProductDir = path.join(ROOT, "build", localePrefix, "docs", product.id);

    const latestSource =
      locale === "en"
        ? path.join(ROOT, `${product.id}_versioned_docs/version-${latestVersion}`)
        : path.join(
            ROOT,
            `i18n/${locale}/docusaurus-plugin-content-docs-${product.id}/version-${latestVersion}`
          );
    totalFixed += copyCleaned(latestSource, buildProductDir);

    for (const v of olderVersions) {
      const source =
        locale === "en"
          ? path.join(ROOT, `${product.id}_versioned_docs/version-${v}`)
          : path.join(ROOT, `i18n/${locale}/docusaurus-plugin-content-docs-${product.id}/version-${v}`);
      totalFixed += copyCleaned(source, path.join(buildProductDir, v));
    }

    const currentSource =
      locale === "en"
        ? path.join(ROOT, `docs-${product.id}`)
        : path.join(ROOT, `i18n/${locale}/docusaurus-plugin-content-docs-${product.id}/current`);
    totalFixed += copyCleaned(currentSource, path.join(buildProductDir, "next"));

    removeStraySuffixedFiles(buildProductDir);
  }
}

console.log(
  `Fixed per-page markdown for ${products.length} versioned products across ${LOCALES.length} locales (${totalFixed} files written).`
);
