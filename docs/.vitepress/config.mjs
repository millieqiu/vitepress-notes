import { defineConfig } from "vitepress";
import markdownItTaskCheckbox from "markdown-it-task-checkbox";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-Hant-TW",
  title: "Millie Qiu",
  description: "Hi，我是 Millie！歡迎來到我的前端個人筆記本",
  lastUpdated: true,
  head: [
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

    nav: [{ text: "Examples", link: "/markdown-examples" }],

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
});
