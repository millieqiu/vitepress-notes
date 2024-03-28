# [SASS] @include & @mixin

簡單來說，`@mixin` 可以幫助我們<span class="bolder">節省撰寫重複 CSS 樣式的時間</span>，將會重用的樣式包裝成一個物件，並使用 `@include` 載入已建立好的 mixin 即可完成取用動作。

## `@mixin` 語法

- 以 `@mixin` 開頭，並自定義一個名稱，將需要重複使用的 CSS 放在 `{ }` 裡面。

- 可以在名稱後面加 `()`，放入參數、預設值做進階的使用。

- 參數名稱以 `$` 開頭。

## `@include` 語法

- 搭配 `@mixin`，我們在 `@mixin` 定義好 CSS，再透過 `@include` 呼叫使用。

- 若定義的 `@mixin` 有設定參數，那麼在呼叫使用的時候，就要傳入相對應的引數。

##　基本用法

假設在網頁中，每篇文章 ‵.article‵ 跟每張圖片 `.image` 的邊框都要加 5px 的圓角再加一點陰影，就可以把 CSS 拉出來做 `@mixin`，並在需要該樣式設定的時候使用 `@include`。

```sass
  @mixin rounded-border-shadow {
    border: 2px #333 solid;
    border-radius: 5px;
    box-shadow: 1px 2px 2px #666;
  }
  
  .article {
    @include rounded-border-shadow;
  }

  .image {
    @include rounded-border-shadow;
  }
```

在網頁中，我們也長長遇到需要設定長寬的情境，因此就可以將 `width` 及 `height` 屬性用一個 mixin 包起來，並套用到 box 物件中，範例如下：

```sass
@mixin size($num1, $num2) {
  width: $num1;
  height: $num2;
}

.box {
  @include size(200px, 200px);
}
```

```sass
// 先給定預設值的情況
@mixin size($num1: 150px, $num2: 150px) {
  width: $num1;
  height: $num2;
}

.box {
  // 由於只給了一個參數（num1），因此 num2 會自動編譯帶入預設值 150 px
  @include size(120px);
}
```

## Mixin 搭配 import 用法

搭配 `@import` 使用，可以將 Mixin 整理成一個檔案或多個檔案進行整合後，並整合至主樣式檔：

```sass
@import "variable"; /* 變數檔 */
@import "normalize"; /* CSS Reset */
@import "mixin"; /* Mixin 檔 */
@import "main"; /* 自己的 SCSS */
```

> 🌟 記得先引入 Mixin 後再載入自訂 SCSS 檔，使由上而下編譯時能夠先識別 Mixin（如同變數）。

---

Reference：

> [新手也可以輕鬆玩轉 SASS - @mixin and @include - 五倍紅寶石](https://5xcampus.com/posts/play-sass-mixin-and-include.html) <br>
> [透過 Mixin，統整需要重複使用的 Sass 語法！](https://guiblogs.com/sass-mixin/)