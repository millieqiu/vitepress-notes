# Millie's notebook

基於 `vitepress` 搭建的個人向前端筆記（持續更新中） <br>
<br>
🔗 網站連結：[Millie Qiu 筆記](https://millie-qiu-notebook.netlify.app/) <br>

## 前言

原本將個人筆記放在 Gitbook 上面，沒想到前陣子 Gitbook 大更新，他們的系統開始變得不穩定，除了發布文章時會發生錯誤（幸好草稿都還在），在中文輸入上也常常出現奇妙的 bug，例如按下 Enter 鍵之後剛剛打的文字會重複兩次？！使我下定決心要正式自架網站。 <br>
<br>
挑選 `vitepress` 的主要原因除了**搭建方式簡單方便**之外，還有**內建主題很好看**，如此一來就可以不用花這麼多時間客製化 CSS 了。 <br>
<br>
這次搭建個人靜態網頁的過程非常有趣，也讓我學到一個寶貴的教訓：一定要找可以匯出 `.md` 檔案的平台，就不用花這麼多時間搬運文章了 :)

## ✨ 主要功能
- 支持 markdown 語法、程式碼區塊高亮提示
- 折疊式側邊欄選項
- 內建搜尋功能，方便快速查閱文章
- 圖片可點擊 zoom in 查看
- 基於 Giscus 打造留言板

## 寫作原則
- 文章樣式皆遵循個人寫作風格 [Writing Guidelines](https://millie-qiu-notebook.netlify.app/writing-guidelines.html) <br>
- 文案遵循 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)，致力於打造舒適的閱讀體驗

## 部署
透過 [Netfily](https://www.netlify.com/) 部署及託管靜態網頁

## 未來優化項目
- [ ] 加入 google analytics 代碼
- [ ] 客製化主題

---

Reference：

> [Vitepress](https://vitepress.dev/) <br>
> [實現 Vitepress 點擊圖片放大](https://github.com/vuejs/vitepress/issues/854) <br>
> [How to Integrate Giscus Comments into VitePress](https://aiktb.dev/blog/giscus-with-vitepress)
