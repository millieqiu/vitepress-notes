import { defineConfig } from "vitepress";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  lang: "zh-Hant-TW",
  title: "Millie Qiu 筆記",
  description: "Hi，我是 Millie！歡迎來到我的前端個人筆記本。本網站為我在學習前端技術時的手札，內容包含 HTML、CSS、JavaScript、Git、Vue.js 等，除了幫助自己複習，更希望能夠幫助到有需要的人。",
  lastUpdated: true,
  head: [
    // <meta name="google-site-verification" content="65sQAE2BarZ4abRYbJL9ExdsBBL9BKy3mNgb7X5lcZQ" />
    ["meta", { name: "google-site-verification", content: "65sQAE2BarZ4abRYbJL9ExdsBBL9BKy3mNgb7X5lcZQ" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
        rel: "stylesheet",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/Logo_36.svg",

    search: {
      provider: "local",
    },

    lastUpdated: {
      text: "Last modified",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    outline: [2, 3],

    nav: [{ text: "Blog", link: "https://millieqiu-blog.hashnode.dev/" }],

    // > ----- sidebar ----------
    sidebar: [
      {
        text: "README",
        items: [
          { text: "首頁", link: "/" },
          { text: "寫作原則", link: "/writing-guidelines.md" },
        ],
      },
      {
        text: "JavaScript",
        collapsed: true,
        items: [
          {
            text: "[basic] Variable Declaration / Data Types",
            link: "/docs-javascript/basic-variables.md",
          },
          {
            text: "[basic] Array / Object",
            link: "/docs-javascript/basic-array-and-object.md",
          },
          {
            text: "[basic] Scope & Scope Chain",
            link: "/docs-javascript/basic-scope",
          },
          {
            text: "[basic] String",
            link: "/docs-javascript/basic-string",
          },
          {
            text: "[basic] Functions",
            link: "/docs-javascript/basic-functions",
          },
          {
            text: "[basic] Execution context",
            link: "/docs-javascript/basic-execution-context.md",
          },
          {
            text: "Destructuring",
            link: "/docs-javascript/destructuring",
          },
          {
            text: "Spread operator / Rest operator (...)",
            link: "/docs-javascript/spread-operator",
          },
          {
            text: "Short-circuit Evaluation",
            link: "/docs-javascript/short-circuit-evaluation",
          },
          {
            text: "Nullish coalescing operator (??) / Optional chainign (?.)",
            link: "/docs-javascript/nullish-coalescing-operator",
          },
          {
            text: "JS Array Iteration",
            link: "/docs-javascript/js-array-iteration",
          },
          {
            text: "JS Object Iteration",
            link: "/docs-javascript/js-object-iteration",
          },
          {
            text: "ES6 Object Literal",
            link: "/docs-javascript/ES6-object-literal",
          },
          {
            text: "Sets / Maps",
            link: "/docs-javascript/sets-and-maps",
          },
          {
            text: "Array Methods",
            link: "/docs-javascript/array-methods",
          },
          {
            text: "[advanced] Pass by Value vs. Reference",
            link: "/docs-javascript/advanced-value-and-reference",
          },
          {
            text: "[advanced] Callback Functions",
            link: "/docs-javascript/advanced-callback",
          },
          {
            text: "[advanced] JS this & call / apply / bind",
            link: "/docs-javascript/advanced-this",
          },
          {
            text: "[advanced] IIFE & Closure",
            link: "/docs-javascript/advanced-closure",
          },
        ],
      },
      {
        text: "HTML",
        collapsed: true,
        items: [],
      },
      {
        text: "CSS",
        collapsed: true,
        items: [
          {
            text: "🔖 Intro",
            link: "/docs-css/",
          },
          {
            text: "Grid 格線排版",
            link: "/docs-css/css-grid",
          },
          {
            text: "[SASS] @include & @mixin",
            link: "/docs-css/sass-include-mixin",
          },
        ],
      },
      {
        text: "Git 版控",
        collapsed: true,
        items: [],
      },
      {
        text: "Vue",
        collapsed: true,
        items: [
          {
            text: "Class & Style Bindings",
            link: "/docs-vue/style-binding",
          },
        ],
      },
      {
        text: "曾經踩過的坑",
        collapsed: true,
        items: [
          {
            text: "🔖 Intro",
            link: "/docs-pitfall/",
          },
          {
            text: "HTML / CSS",
            link: "/docs-pitfall/pitfall-html-css",
          },
          {
            text: "Vue",
            link: "/docs-pitfall/pitfall-vue",
          },
          {
            text: "Git 版控",
            link: "/docs-pitfall/pitfall-git",
          },
          {
            text: "其他（dotnet / 專案問題）",
            link: "/docs-pitfall/pitfall-other",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/millieqiu/vitepress-notes" },
    ],
  },

  markdown: {
    theme: {
      light: "rose-pine-dawn",
      dark: "rose-pine-moon",
    },
    config: (md) => {
      // 使用更多的 Markdown-it 插件！
      md.use(markdownItTaskCheckbox);
    },
  },

  sitemap: {
    hostname: 'https://millie-qiu-notebook.netlify.app/'
  }
});
