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
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
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
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/millieqiu/vitepress-notes" },
    ],
  },

  markdown: {
    config: (md) => {
      // 使用更多的 Markdown-it 插件！
      md.use(markdownItTaskCheckbox);
    },
  },
});
