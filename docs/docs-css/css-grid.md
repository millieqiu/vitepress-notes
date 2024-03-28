# Grid 格線排版

適合用來排 Dashboard 的排版。 在父層容器加上 `display: grid`：

```css
.parent {
  display: grid;
}
```

Grid 預設為一個欄位（Single column），並會基於子層元素的數量自行創造需要的列數（Row）；此外，父層的預設高度也是由子層來決定。 <br>

但我們也可以給父層容器 fixed 的高度，此時子層元素的高度就會被自動均分，假如有三個 children，則每個的高度各為 100 px，假如有六個，則會被平分為各 50 px。

```css
.parent {
  display: grid;
  height: 300px;
}
```

- **自定義 Grid 欄位數與欄寬**

```css
  .parent {
    display: grid;
    grid-template-columns: 25% 75%;
  }
```

```html
<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
</div>
```

若有兩個子元素，則呈現方式如下：

![](/grid-1.png){data-zoomable}

此時若加入第三個 `div` 子元素，Grid 就會自動幫你生出第二列！簡單來說，Grid 可以靈活地去判斷你給定的欄位數、欄寬跟子元件的數量去做到響應式排版 👀。 <br>

要決定 Grid 欄位的寬度，可以用任何有效的 CSS 單位，例如 percentage、pixels、rems、viewport，也可以使用一個新的單位叫做 `fr`。

```css
.parent {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
```

`fr` 代表的是「分數」（fraction）。在上述的例子中，我們定義了第一欄應該佔一個單位，第二欄佔三個單位，則此欄總共被分成四個單位，第一欄為 ¼，第二欄為 ¾。`fr` 單位的出現，讓 `flex` 中的 shrink 和 grow 變得更簡潔。

如果想在子元素之間加入 `gap`，`fr` 的計算方式會先扣除 `gap` 再去按照比例分攤元素，% 則不會，因此容易造成元素寬度溢出父容器。

![](/grid-2.png){data-zoomable}

![](/grid-3.png){data-zoomable}

- **設定 Grid 列高**

除了可以設定欄寬，當然也能設定列高囉！

```css
.parent {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 5rem 1fr;
  }
```

```html
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>
```

- **重複 Grid 設定**

今天我們想要一個七欄的格線排版，每一欄只佔一個單位，剛開始可能會寫成這樣：

```css
.calendar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

但是神奇的 Grid 還有一個 `repeat` 方法可以幫助我們更簡潔地做到這件事，用法如下：

```css
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
```

- [ ] <mark>TODO: 客製化區塊 / 跨欄位設定</mark>

---

Reference：

> [An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/?utm_source=pocket_reader) <br>
> [CSS Grid 格線佈局 - 一顆藍莓](https://b-l-u-e-b-e-r-r-y.github.io/post/Grid/)