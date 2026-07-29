// Generates per-product English docs + translated docs for every configured locale.
// Run with: node scripts/generate-content.mjs
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const products = JSON.parse(
  await (await import("node:fs/promises")).readFile(
    path.join(ROOT, "data/products.json"),
    "utf-8"
  )
);

// Non-English locales this site supports (English is the defaultLocale and lives in docs-<id>/ directly).
const LOCALES = ["ko", "de", "fr", "zh-Hans", "ja", "es", "pt", "it"];

const STRINGS = {
  en: {
    introTitle: "Introduction",
    gettingStartedTitle: "Getting Started",
    apiRefTitle: "API Reference",
    keyFeaturesTitle: "Key features",
    welcome: (p) => `Welcome to the ${p} documentation.`,
    overview: (p) => `${p} is one of the product lines in the Northwind Cloud platform. ${TAGLINE_PLACEHOLDER}`,
    whatYoullFind: "What you'll find here",
    whatYoullFindBody: "This section covers installation, configuration, and the core concepts you need to integrate with this product.",
    prerequisites: "Prerequisites",
    prerequisitesBody: (p) => `Before you begin, make sure you have a Northwind Cloud account and API access enabled for ${p}.`,
    installation: "Installation",
    installationBody: (p) => `Install the ${p} SDK using your package manager of choice, then initialize it with your project API key.`,
    quickStart: "Quick start",
    quickStartBody: (p) => `The fastest way to see ${p} in action is to run the quick-start example in your local environment.`,
    authentication: "Authentication",
    authenticationBody: (p) => `All requests to the ${p} API must include a valid bearer token in the Authorization header.`,
    endpoints: "Endpoints",
    endpointsBody: (p) => `The table below lists the primary endpoints exposed by the ${p} API.`,
    support: "Support",
    supportBody: (p) => `For questions about ${p}, contact the product team or visit the community forum.`,
  },
  ko: {
    introTitle: "소개",
    gettingStartedTitle: "시작하기",
    apiRefTitle: "API 참조",
    keyFeaturesTitle: "주요 기능",
    welcome: (p) => `${p} 문서에 오신 것을 환영합니다.`,
    overview: (p) => `${p}는 Northwind Cloud 플랫폼의 제품 라인 중 하나입니다.`,
    whatYoullFind: "이 문서에서 다루는 내용",
    whatYoullFindBody: "이 섹션에서는 설치, 구성, 그리고 이 제품과 연동하기 위해 필요한 핵심 개념을 다룹니다.",
    prerequisites: "사전 준비 사항",
    prerequisitesBody: (p) => `시작하기 전에 Northwind Cloud 계정과 ${p}에 대한 API 접근 권한이 활성화되어 있는지 확인하세요.`,
    installation: "설치",
    installationBody: (p) => `원하는 패키지 관리자를 사용하여 ${p} SDK를 설치한 다음, 프로젝트 API 키로 초기화하세요.`,
    quickStart: "빠른 시작",
    quickStartBody: (p) => `${p}를 가장 빠르게 체험하는 방법은 로컬 환경에서 빠른 시작 예제를 실행하는 것입니다.`,
    authentication: "인증",
    authenticationBody: (p) => `${p} API에 대한 모든 요청에는 Authorization 헤더에 유효한 베어러 토큰이 포함되어야 합니다.`,
    endpoints: "엔드포인트",
    endpointsBody: (p) => `아래 표는 ${p} API가 제공하는 주요 엔드포인트를 나열한 것입니다.`,
    support: "지원",
    supportBody: (p) => `${p}에 대한 문의는 제품 팀에 연락하거나 커뮤니티 포럼을 방문해 주세요.`,
  },
  de: {
    introTitle: "Einführung",
    gettingStartedTitle: "Erste Schritte",
    apiRefTitle: "API-Referenz",
    keyFeaturesTitle: "Hauptfunktionen",
    welcome: (p) => `Willkommen in der ${p}-Dokumentation.`,
    overview: (p) => `${p} ist eine der Produktlinien der Northwind-Cloud-Plattform.`,
    whatYoullFind: "Was Sie hier finden",
    whatYoullFindBody: "Dieser Abschnitt behandelt Installation, Konfiguration und die wichtigsten Konzepte für die Integration mit diesem Produkt.",
    prerequisites: "Voraussetzungen",
    prerequisitesBody: (p) => `Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für ${p} verfügen.`,
    installation: "Installation",
    installationBody: (p) => `Installieren Sie das ${p}-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.`,
    quickStart: "Schnellstart",
    quickStartBody: (p) => `Der schnellste Weg, ${p} in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.`,
    authentication: "Authentifizierung",
    authenticationBody: (p) => `Alle Anfragen an die ${p}-API müssen ein gültiges Bearer-Token im Authorization-Header enthalten.`,
    endpoints: "Endpunkte",
    endpointsBody: (p) => `Die folgende Tabelle listet die wichtigsten Endpunkte der ${p}-API auf.`,
    support: "Support",
    supportBody: (p) => `Bei Fragen zu ${p} wenden Sie sich an das Produktteam oder besuchen Sie das Community-Forum.`,
  },
  fr: {
    introTitle: "Introduction",
    gettingStartedTitle: "Prise en main",
    apiRefTitle: "Référence API",
    keyFeaturesTitle: "Fonctionnalités clés",
    welcome: (p) => `Bienvenue dans la documentation de ${p}.`,
    overview: (p) => `${p} est l'une des gammes de produits de la plateforme Northwind Cloud.`,
    whatYoullFind: "Contenu de cette section",
    whatYoullFindBody: "Cette section couvre l'installation, la configuration et les concepts essentiels pour intégrer ce produit.",
    prerequisites: "Prérequis",
    prerequisitesBody: (p) => `Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour ${p}.`,
    installation: "Installation",
    installationBody: (p) => `Installez le SDK ${p} avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.`,
    quickStart: "Démarrage rapide",
    quickStartBody: (p) => `Le moyen le plus rapide de découvrir ${p} est d'exécuter l'exemple de démarrage rapide dans votre environnement local.`,
    authentication: "Authentification",
    authenticationBody: (p) => `Toutes les requêtes vers l'API ${p} doivent inclure un jeton porteur valide dans l'en-tête Authorization.`,
    endpoints: "Points de terminaison",
    endpointsBody: (p) => `Le tableau ci-dessous liste les principaux points de terminaison exposés par l'API ${p}.`,
    support: "Assistance",
    supportBody: (p) => `Pour toute question sur ${p}, contactez l'équipe produit ou consultez le forum communautaire.`,
  },
  "zh-Hans": {
    introTitle: "简介",
    gettingStartedTitle: "快速入门",
    apiRefTitle: "API 参考",
    keyFeaturesTitle: "核心功能",
    welcome: (p) => `欢迎查阅 ${p} 文档。`,
    overview: (p) => `${p} 是 Northwind Cloud 平台众多产品线之一。`,
    whatYoullFind: "本节内容",
    whatYoullFindBody: "本节介绍安装、配置以及与该产品集成所需的核心概念。",
    prerequisites: "前提条件",
    prerequisitesBody: (p) => `开始之前，请确保您已拥有 Northwind Cloud 账户，并已为 ${p} 启用 API 访问权限。`,
    installation: "安装",
    installationBody: (p) => `使用您常用的包管理器安装 ${p} SDK，然后使用项目的 API 密钥进行初始化。`,
    quickStart: "快速开始",
    quickStartBody: (p) => `体验 ${p} 最快的方式是在本地环境中运行快速入门示例。`,
    authentication: "身份验证",
    authenticationBody: (p) => `对 ${p} API 的所有请求都必须在 Authorization 请求头中包含有效的 Bearer 令牌。`,
    endpoints: "接口列表",
    endpointsBody: (p) => `下表列出了 ${p} API 提供的主要接口。`,
    support: "技术支持",
    supportBody: (p) => `如对 ${p} 有任何疑问，请联系产品团队或访问社区论坛。`,
  },
  ja: {
    introTitle: "はじめに",
    gettingStartedTitle: "使ってみる",
    apiRefTitle: "API リファレンス",
    keyFeaturesTitle: "主な機能",
    welcome: (p) => `${p} のドキュメントへようこそ。`,
    overview: (p) => `${p} は Northwind Cloud プラットフォームの製品ラインのひとつです。`,
    whatYoullFind: "このセクションの内容",
    whatYoullFindBody: "このセクションでは、インストール、設定、およびこの製品と連携するために必要な基本概念について説明します。",
    prerequisites: "前提条件",
    prerequisitesBody: (p) => `開始する前に、Northwind Cloud アカウントと ${p} の API アクセスが有効になっていることを確認してください。`,
    installation: "インストール",
    installationBody: (p) => `お好みのパッケージマネージャーで ${p} SDK をインストールし、プロジェクトの API キーで初期化してください。`,
    quickStart: "クイックスタート",
    quickStartBody: (p) => `${p} を最も早く試す方法は、ローカル環境でクイックスタートのサンプルを実行することです。`,
    authentication: "認証",
    authenticationBody: (p) => `${p} API へのすべてのリクエストには、Authorization ヘッダーに有効なベアラートークンを含める必要があります。`,
    endpoints: "エンドポイント",
    endpointsBody: (p) => `以下の表は、${p} API が提供する主なエンドポイントの一覧です。`,
    support: "サポート",
    supportBody: (p) => `${p} に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。`,
  },
  es: {
    introTitle: "Introducción",
    gettingStartedTitle: "Primeros pasos",
    apiRefTitle: "Referencia de la API",
    keyFeaturesTitle: "Características principales",
    welcome: (p) => `Bienvenido a la documentación de ${p}.`,
    overview: (p) => `${p} es una de las líneas de producto de la plataforma Northwind Cloud.`,
    whatYoullFind: "Qué encontrarás aquí",
    whatYoullFindBody: "Esta sección cubre la instalación, la configuración y los conceptos clave para integrarte con este producto.",
    prerequisites: "Requisitos previos",
    prerequisitesBody: (p) => `Antes de comenzar, asegúrate de tener una cuenta de Northwind Cloud y acceso a la API habilitado para ${p}.`,
    installation: "Instalación",
    installationBody: (p) => `Instala el SDK de ${p} con el gestor de paquetes que prefieras y luego inicialízalo con la clave de API de tu proyecto.`,
    quickStart: "Inicio rápido",
    quickStartBody: (p) => `La forma más rápida de ver ${p} en acción es ejecutar el ejemplo de inicio rápido en tu entorno local.`,
    authentication: "Autenticación",
    authenticationBody: (p) => `Todas las solicitudes a la API de ${p} deben incluir un token de portador válido en el encabezado Authorization.`,
    endpoints: "Endpoints",
    endpointsBody: (p) => `La siguiente tabla enumera los principales endpoints expuestos por la API de ${p}.`,
    support: "Soporte",
    supportBody: (p) => `Si tienes preguntas sobre ${p}, contacta al equipo de producto o visita el foro de la comunidad.`,
  },
  pt: {
    introTitle: "Introdução",
    gettingStartedTitle: "Primeiros passos",
    apiRefTitle: "Referência da API",
    keyFeaturesTitle: "Principais recursos",
    welcome: (p) => `Bem-vindo à documentação do ${p}.`,
    overview: (p) => `${p} é uma das linhas de produtos da plataforma Northwind Cloud.`,
    whatYoullFind: "O que você vai encontrar aqui",
    whatYoullFindBody: "Esta seção aborda instalação, configuração e os principais conceitos para integrar com este produto.",
    prerequisites: "Pré-requisitos",
    prerequisitesBody: (p) => `Antes de começar, garanta que você tem uma conta Northwind Cloud e acesso à API habilitado para ${p}.`,
    installation: "Instalação",
    installationBody: (p) => `Instale o SDK do ${p} usando o gerenciador de pacotes de sua preferência e inicialize-o com a chave de API do seu projeto.`,
    quickStart: "Início rápido",
    quickStartBody: (p) => `A forma mais rápida de ver o ${p} em ação é executar o exemplo de início rápido no seu ambiente local.`,
    authentication: "Autenticação",
    authenticationBody: (p) => `Todas as requisições à API do ${p} devem incluir um token bearer válido no cabeçalho Authorization.`,
    endpoints: "Endpoints",
    endpointsBody: (p) => `A tabela abaixo lista os principais endpoints expostos pela API do ${p}.`,
    support: "Suporte",
    supportBody: (p) => `Para dúvidas sobre o ${p}, entre em contato com a equipe de produto ou visite o fórum da comunidade.`,
  },
  it: {
    introTitle: "Introduzione",
    gettingStartedTitle: "Guida introduttiva",
    apiRefTitle: "Riferimento API",
    keyFeaturesTitle: "Caratteristiche principali",
    welcome: (p) => `Benvenuto nella documentazione di ${p}.`,
    overview: (p) => `${p} è una delle linee di prodotto della piattaforma Northwind Cloud.`,
    whatYoullFind: "Cosa troverai qui",
    whatYoullFindBody: "Questa sezione copre installazione, configurazione e i concetti fondamentali per integrarsi con questo prodotto.",
    prerequisites: "Prerequisiti",
    prerequisitesBody: (p) => `Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per ${p}.`,
    installation: "Installazione",
    installationBody: (p) => `Installa l'SDK di ${p} con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.`,
    quickStart: "Avvio rapido",
    quickStartBody: (p) => `Il modo più veloce per vedere ${p} in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.`,
    authentication: "Autenticazione",
    authenticationBody: (p) => `Tutte le richieste all'API di ${p} devono includere un token bearer valido nell'header Authorization.`,
    endpoints: "Endpoint",
    endpointsBody: (p) => `La tabella seguente elenca i principali endpoint esposti dall'API di ${p}.`,
    support: "Supporto",
    supportBody: (p) => `Per domande su ${p}, contatta il team di prodotto o visita il forum della community.`,
  },
};

function overviewLine(strings, product) {
  if (strings === STRINGS.en) {
    return `${product.name} is one of the product lines in the Northwind Cloud platform. ${product.tagline}.`;
  }
  return strings.overview(product.name);
}

function introDoc(strings, product) {
  const features = product.keyFeatures.map((f) => `- ${f}`).join("\n");
  return `---
title: ${strings.introTitle}
sidebar_position: 1
---

# ${strings.introTitle}

${strings.welcome(product.name)}

${overviewLine(strings, product)}

## ${strings.keyFeaturesTitle}

${features}

## ${strings.whatYoullFind}

${strings.whatYoullFindBody}
`;
}

function gettingStartedDoc(strings, product) {
  return `---
title: ${strings.gettingStartedTitle}
sidebar_position: 2
---

# ${strings.gettingStartedTitle}

## ${strings.prerequisites}

${strings.prerequisitesBody(product.name)}

## ${strings.installation}

${strings.installationBody(product.name)}

\`\`\`bash
npm install @northwind/${product.id}
\`\`\`

## ${strings.quickStart}

${strings.quickStartBody(product.name)}

\`\`\`js
import { ${product.name} } from "@northwind/${product.id}";

const client = new ${product.name}({ apiKey: process.env.NORTHWIND_API_KEY });
\`\`\`
`;
}

function apiRefDoc(strings, product) {
  const rows = product.endpoints
    .map((e) => `| ${e.method} | \`${e.path}\` | ${e.description} |`)
    .join("\n");
  return `---
title: ${strings.apiRefTitle}
sidebar_position: 3
---

# ${strings.apiRefTitle}

## ${strings.authentication}

${strings.authenticationBody(product.name)}

## ${strings.endpoints}

${strings.endpointsBody(product.name)}

| Method | Path | Description |
| --- | --- | --- |
${rows}

## ${strings.support}

${strings.supportBody(product.name)}
`;
}

function writeDoc(dir, filename, content) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, filename), content, "utf-8");
}

let fileCount = 0;

for (const product of products) {
  // English (source) docs, one directory per product -> one plugin instance each.
  const enDir = path.join(ROOT, `docs-${product.id}`);
  writeDoc(enDir, "intro.md", introDoc(STRINGS.en, product));
  writeDoc(enDir, "getting-started.md", gettingStartedDoc(STRINGS.en, product));
  writeDoc(enDir, "api-reference.md", apiRefDoc(STRINGS.en, product));
  fileCount += 3;

  for (const locale of LOCALES) {
    const strings = STRINGS[locale];
    const localeDir = path.join(
      ROOT,
      "i18n",
      locale,
      `docusaurus-plugin-content-docs-${product.id}`,
      "current"
    );
    writeDoc(localeDir, "intro.md", introDoc(strings, product));
    writeDoc(localeDir, "getting-started.md", gettingStartedDoc(strings, product));
    writeDoc(localeDir, "api-reference.md", apiRefDoc(strings, product));
    fileCount += 3;
  }
}

// Shared autogenerated sidebar used by every product plugin instance.
const sharedSidebarPath = path.join(ROOT, "sidebars-product.js");
if (!existsSync(sharedSidebarPath)) {
  writeFileSync(
    sharedSidebarPath,
    `// Shared by every per-product docs plugin instance (multi-instance docs).
module.exports = {
  productSidebar: [{ type: "autogenerated", dirName: "." }],
};
`,
    "utf-8"
  );
}

console.log(`Generated ${fileCount} markdown files across ${products.length} products and ${LOCALES.length + 1} locales.`);
