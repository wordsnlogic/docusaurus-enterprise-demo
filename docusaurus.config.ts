import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import products from './data/products.json';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const ORG_NAME = 'wordsnlogic';
const PROJECT_NAME = 'docusaurus-enterprise-demo';

// One @docusaurus/plugin-content-docs instance per product line.
// This is the pattern that lets a single site host N product doc sets,
// each independently versioned, without one giant docs tree.
// See meta/ARCHITECTURE.md for the write-up.
const productDocsPlugins: Config['plugins'] = products.map((product) => [
  '@docusaurus/plugin-content-docs',
  {
    id: product.id,
    path: `docs-${product.id}`,
    routeBasePath: `docs/${product.id}`,
    sidebarPath: './sidebars-product.js',
    editUrl: `https://github.com/${ORG_NAME}/${PROJECT_NAME}/tree/main/`,
  } satisfies Preset.Options['docs'],
]);

const config: Config = {
  title: 'Northwind Cloud',
  tagline: 'Composable cloud APIs for analytics, payments, identity, and more',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
    faster: true,
  },

  url: 'https://northwind-cloud.vercel.app',
  baseUrl: '/',

  organizationName: ORG_NAME,
  projectName: PROJECT_NAME,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko', 'de', 'fr', 'zh-Hans', 'ja', 'es', 'pt', 'it'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en-US'},
      ko: {label: '한국어', htmlLang: 'ko-KR'},
      de: {label: 'Deutsch', htmlLang: 'de-DE'},
      fr: {label: 'Français', htmlLang: 'fr-FR'},
      'zh-Hans': {label: '简体中文', htmlLang: 'zh-CN'},
      ja: {label: '日本語', htmlLang: 'ja-JP'},
      es: {label: 'Español', htmlLang: 'es-ES'},
      pt: {label: 'Português', htmlLang: 'pt-BR'},
      it: {label: 'Italiano', htmlLang: 'it-IT'},
    },
  },

  presets: [
    [
      'classic',
      {
        // No default docs instance — every product line is its own plugin
        // instance (see productDocsPlugins below). The architecture/strategy
        // write-ups behind this site live in the repo's meta/ folder, not on
        // the live site itself.
        docs: false,
        blog: {
          showReadingTime: true,
          blogTitle: 'Release notes',
          blogDescription: 'Cross-product release notes for the Northwind Cloud platform',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: `https://github.com/${ORG_NAME}/${PROJECT_NAME}/tree/main/`,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // No `sitemap: { lastmod: 'date' }` — it reads git history, which
        // isn't available on `vercel --prod` CLI deploys (only file uploads,
        // no .git), so it breaks there even though it works locally.
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    ...productDocsPlugins,
    [
      'docusaurus-plugin-llms',
      {
        title: 'Northwind Cloud Docs',
        description:
          'API documentation for the Northwind Cloud platform: 15 product lines.',
        // English source only — mirrors productDocsPlugins above. Generating
        // llms.txt per-locale would multiply this 9x for no real benefit;
        // see meta/I18N_STRATEGY.md's "translate what's read" reasoning.
        docsDir: products.map((product) => ({
          path: `docs-${product.id}`,
          routeBasePath: `docs/${product.id}`,
          label: product.name,
        })),
        includeBlog: true,
        generateMarkdownFiles: true,
        excludeImports: true,
        removeDuplicateHeadings: true,
        pathTransformation: {
          ignorePaths: products.map((product) => `docs-${product.id}`),
        },
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        // NOTE: 'ko' is intentionally excluded — lunr-languages' Korean trimmer
        // (via @easyops-cn/docusaurus-search-local 0.55.2) throws "Lone quantifier
        // brackets" when combined with other CJK languages in one index. Korean
        // pages are still indexed and searchable, just without Hangul-aware
        // word segmentation. Tracked as a known limitation, see meta/PERFORMANCE.md.
        language: ['en', 'de', 'fr', 'zh', 'ja', 'es', 'pt', 'it'],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: products.map((p) => `/docs/${p.id}`),
        // There is no "default" docs plugin instance in this site (see docs: false
        // above) — without this, the search bar's version-awareness crashes on
        // non-docs pages (e.g. the homepage) trying to look up a "default" plugin
        // id that doesn't exist.
        docsPluginIdForPreferredVersion: products[0].id,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Northwind Cloud',
      logo: {
        alt: 'Northwind Cloud Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/products', label: 'Products', position: 'left'},
        {to: '/blog', label: 'Release Notes', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: `https://github.com/${ORG_NAME}/${PROJECT_NAME}`,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {label: 'All products', to: '/products'},
            {label: 'Atlas', to: '/docs/atlas/intro'},
            {label: 'Beacon', to: '/docs/beacon/intro'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Release notes', to: '/blog'},
            {label: 'GitHub', href: `https://github.com/${ORG_NAME}/${PROJECT_NAME}`},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Northwind Cloud (demo project). Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
