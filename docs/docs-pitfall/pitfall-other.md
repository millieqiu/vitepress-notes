# 其他（dotnet / 專案問題）

## Run 專案時報錯：「`address already in use`」

如下圖，Run 專案的時候會遇到偶爾報錯，告訴我「`address already in use`」，port 號已經被佔用了。

![image](/截圖%202023-12-12%20下午5.03.34.png){data-zoomable}

::: tip 解決方法：
 1. 打開終端機輸入 `sudo lsof -i:port`（將 port 換成被佔用的 port 號）
 2. 輸入 `sudo kill -9 pid`（將 pid 換成列表中的 pid 碼）
 3. `sudo lsof -i:port` 再檢查一次，確認被佔用的 port 號已經被刪除了，就可以重新執行專案了！
:::

## Bootstrap dropdown 失效問題

在頁面引用 BS5 的 dropdown 功能，點擊無反應，console 沒有出現任何錯誤訊息，後來發現在 `_Layout.cshtml` 的檔案最下面有插入一段，使每支 html 檔都會讀到這個外部引用的 js 檔。

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
</script>
```

::: tip 解決方法：
由於專案透過 npm 預先安裝了 BS5 其中就包含內建的 jQuery 了，造成重複引用，沒辦法正確執行 dropdown 效果。移除 `_Layout.cshtml` 中該段程式碼即可。
:::

> 🌟 Bootstrap 只要重複引用到 JS 檔，就會造成原本可以正常操作的地方不能動（例如 Dropdown 無法作用），在使用時務必要檢查一下引用的路徑。

## Git push 錯誤 `ERROR: Permission to .git denied to user`

**問題描述：** <br>

使用 `git push` 到遠端的 repo 時，會出現錯誤訊息 ERROR: Permission to .git denied to user ，其中 user 是我舊的 github 帳號（Qiumodo1110） 但明明 `git config user.name` 也確認了是現在的 github 帳號，`git pull` 的指令也沒問題，也添加過 SSH 的密鑰了，還是不曉得哪裡出問題。

![image](/Windows%20Credentials.png){data-zoomable}

::: tip 解決方法：
以前設置過舊的 github 帳號，被微軟的認證管理員記住了，只要找到認證管理員 > 開啟 windows 認證，把舊的 github 資訊刪除，就可以了。 <br>
未來 mac 如果遇到同樣的問題，可以參考[這篇文章](https://stackoverflow.com/questions/5335197/gits-famous-error-permission-to-git-denied-to-user)。
:::

## Mac / Windows 跨平台協作開發亂碼問題

原因是編碼不同。

::: tip 解決方法：
用 VSCode 打開後先用 reopen with Big-5 把亂碼變成中文，再 save with UTF-8。 <br>
也可以直接請後端幫忙（？）
:::

## Vue-Multiselect 報錯「TypeError: Cannot read properties of undefined (reading '_c')」

照著套件的官方手冊引入，會一直報錯，經過一番研究（找資料），發現可以看這篇 [Github](https://github.com/shentao/vue-multiselect/issues/1533) 的討論，才發現這個問題竟然從 2022 年就開始存在了？！

![image](/截圖%202024-02-26%20下午2.39.31.png){data-zoomable}

將套件降版重新安裝後果然順利解決了這個問題，也讓我了解到在引用第三方套件時，有時不一定是自己的寫法有錯，也可以到 Github 的 issue 裡看看大家使用上有沒有遇到同樣的問題～