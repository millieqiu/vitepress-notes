# Vue

## Vue 2.7 版本

Vue 2.7 版本是 Vue 2.x 的最後一個版本，為了讓大家能從 Vue2 慢慢過渡到 Vue 3，因此已經新增了幾乎所有 Vue 3 的特性，在**綁定實例的寫法上也是參照 Vue 3 的寫法**。

> 🌟 Vue.js 作者尤雨溪發文聲稱，Vue 2 將不會再繼續更新，隨著 Vue 3 的成熟，Vue 2 也會漸漸被淘汰掉。所以雖然我曾經踩過這個坑，但未來應該是不會再遇到了（？

## Vue 3 `props` 回傳資料失敗

**失敗原因：** <br>

如果只是要從父組件回傳「純字串」的話，前面不需要加 `:`，否則會被視為 `v-bind` 而找不到資料。

```html
<!-- 在 HTML 引入父組件 -->
  <modal-upload-file ref="modalUploadFile" uploadFile="testApply"></modal-upload-file>
```

```vue{5}
// 子組件 props
export default {
  props: {
    'uploadFile': {
      type: String,
      default: '預設值',
      required: true,
    }
  }
}
```

## 自定義元件（Component）無法渲染

**失敗原因：** <br>

將 Vue Component 引入到 DOM 元件中時，需要以「烤肉串命名（Kebab case）」。

```vue
// 在父層 JS 檔中引用 MyComponent 子元件
import MyComponent from './MyComponent.vue'

export default {
  components: {
    MyComponent
  }
}
```

```vue
<!-- 在父層 DOM 文件中引用 MyComponent 子元件 -->
<!-- 錯誤示範 ❌ -->
<MyComponent></MyComponent>
```

::: tip 解決方法：

```vue
<!-- 在父層 DOM 文件中引用 MyComponent 子元件 -->
<!-- 正確 ✔ -->
<my-component></my-component>
```

:::

因為在 HTML 的規則裡，不允許使用駝峰式的大寫，因此一定要改成烤肉串命名才可以，而且不可以使用自閉合 `<my-component/>`。 <br>

其他有關於 Vue 元件檔的命名規則可以參考以下：

> [組件基礎 | Vue.js](https://cn.vuejs.org/guide/essentials/component-basics#in-dom-template-parsing-caveats)  <br>
> [Priority B Rules: Strongly Recommended - Vue.js Docs](https://cn.vuejs.org/style-guide/rules-strongly-recommended#self-closing-components)

## `v-show` 失效問題

```html
<div class="d-flex align-items-center" v-show="tab == 1"></div>
```

有一段類似上方寫法的程式碼，會造成 `v-show` 失效，是因為 `v-show` 是將元素的 `display` 設置為 none，若在同一個元素上又設定 `display:flex;` 則會導致失效。

::: tip 解決方法：
在元素外部再包一層 div，並將 `v-show` 套用到外層的 div 上。
:::

## 在 Vue3 註冊客製化的 directives

```javascript
<script setup>
import { myDirective as vMyDirective } from './MyDirective.js'
</script>
```

👆 參考 [Vue.js Doc](https://vuejs.org/api/sfc-script-setup.html#using-custom-directives)

如果外部引入的檔案只有 `export default`，沒有給予預設的名稱的話，也可以直接這樣寫：

```javascript
<script setup>
import vMyDirective from './MyDirective.js'
</script>
```