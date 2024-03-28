# Class & Style Bindings

## 原理

在實務上經常需要將資料與 CSS 的樣式做綁定，此時可以和其他 attribute 一樣使用 `v-bind` 來進行動態綁定。與一般 attribute 較為不同的是，在綁定 class 與 style 時還可以用<span class="bolder">陣列或物件</span>的方式。

## 常見使用範例

1. **HTML 單一樣式綁定**

```html
<div :class="{ active: isActive }"></div>
```

上面的程式碼表示樣式 `active` 是否存在取決於變數 `isActive` 的真假值。 <br>

你可以在 DOM 元素中指定多個屬性来操作多個 class。底下舉個例子 🌰：

```javascript
// JS 檔案中的資料
const isActive = ref(true);
const hasError = ref(false);
```

```html
<!-- 與上段 JS 配合的 DOM 文件寫法 -->
<div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>

<!-- 在瀏覽器中的渲染結果 ⬇ -->
<div class="static active"></div>
```