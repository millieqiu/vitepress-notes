# Git 版控

## Error message: `failed to push some refs to`

如下圖，要將本地端的 commit push 到遠端的 dev 分支時，發現本地端與遠端不在同一個分支上，導致出現錯誤訊息「failed to push some refs to」。

![image](/截圖%202023-11-21%20下午3.10.18.png){data-zoomable}

::: tip 解決方法：
利用 `git reset` 先拆除原本建立的 commit，再用 `git stash` 將變動過的檔案暫存起來，切換到本地端的 dev 分支（如果沒有先 stash 就無法切換分支），最後利用 `git tree` 確認本地端的 dev 是否跟遠端在同一個分支上，若是的話，將 stash 中的檔案取回，重新 commit + push 即可。
:::

## `git rebase` 遇到衝突時處理

`git commit` 完之後 pull -- rebase 遠端的程式碼若遇到衝突：

1. 先打開 vscode 解決衝突（確認所有程式碼皆有整理乾淨，沒有遺留奇怪的符號）

2. `git add .`

3. `git rebase --continue`，此時會進入到 vim 的編輯模式，如果看到最下面有「INSERT」提示，代表可以打字編輯，在視窗的第一行重新輸入 commit 訊息。

4. 輸入完畢後，按 ESC 離開編輯模式 :wq 存擋，就可以繼續進行 `git push` 了。

## 無法刪除分支

指令 `git branch -d [分支名稱]`，可以刪除分支。然而今天在操作的過程中，跳出了以下的錯誤訊息：

```shell
error: Cannot delete branch '[分支名稱]' checked out at ...
```

原因是我正處於該分支上，因此無法刪除，就像 windows 系統無法刪除打開的文件是一樣的道理。

::: tip 解決方法：
先切換到任意其他的分支，再刪除原本想刪的分支就可以囉。
:::

## 如何偵測遠端新開的分支？

先在遠端的 repo 開了一個新的分支 feature，再回到本地端用 `git branch feature` 開一個新分支，這時直接下 `git pull origin feature` 想把遠端的檔案抓下來是不行的！（失敗原因還在研究中）

```shell
fatal: refusing to merge unrelated histories
```

::: tip 解決方法：
先用 `git fetch` 確認有偵測到遠端新開的 feature 分支，再直接 `git checkout feature` 就可以實現遠端和本地的分支同步了。
:::

