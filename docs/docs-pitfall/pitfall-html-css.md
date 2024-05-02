# HTML / CSS

## [Bootstrap] Collapse / Accordion 效果動畫卡頓

![](/螢幕擷取畫面%202024-03-29%20005800.png){data-zoomable}

::: tip 解決方法：
調整最外層容器的 `padding` 為 0。
:::

## [CSS] z-index 無效

沒有設定 `position`，`z-index` 就不會起作用。

## [CSS] 隱藏數字輸入框（Input Number）的小箭頭

```css
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
```

## [Bootstrap] 開啟 Modal 頁面偏移

大部分的情況下使用 Bootstrap Modal 都沒事，但前幾天突然在某個特定頁面開啟 Modal 時會造成背景頁面不自然偏移（具體原因尚在釐清中）。 <br>

為了先解決這個問題，可以參考以下兩篇文章：

> [Bootstrap出现模态框页面抖动且出现滚动条](https://blog.csdn.net/w5206666/article/details/122676949) <br>
> [Bootstrap中模态框（modal）出现时页面抖动情况的解决方法](https://blog.csdn.net/fd214333890/article/details/80274160)

::: tip 解決方法：
總結原因是因為 Modal 打開後，body 會多出右側 padding 15px，因此需要在 CSS 中添加一段 `padding-right: 0 !important;` 來固定 body 的內距寬度。
:::

## [CSS] 外層 `border-radius` 被內層吃掉無法顯示

雖然已經給外層容器加了 `border-radius` 圓角，但當內層有設置背景顏色時，卻無法正常顯示圓角。

::: tip 解決方法：
在父層（或是設置 `border` 跟 `border-radius` 的那層容器），再多設置一個 `overflow: hidden;` 屬性。
:::

更完整的解析可以參考：

> [有关CSS的overflow和border-radius的那些事，你的圆角被覆盖了吗？](https://www.cnblogs.com/sanshi/p/9712426.html) <br>
> [CSS偶有所得 - table 边框加圆角踩坑](https://juejin.cn/post/6844903957219934222) 👈 如果有需要幫 table 設置圓角可以參考

## [HTML] 瀏覽器預覽列印，顯示空白畫面

專案設定列印模式的 HTML 結構如下：

```html
<div class="view">
...
</div>
<div class="print">
...
</div>
```

切版完後不知道為何無法正確跑出列印格式，點擊列印按鈕後會一直顯示為空白畫面。

::: tip 解決方法：
原來是因為 `view` 的 div 少了閉合標籤，導致瀏覽器以為 `print` 是包在 `view` 裡面的元素，無法正確渲染出列印格式。<br>
補上 `view` 的 `</div>` 閉合標籤即可。（好愚蠢的問題啊）
:::