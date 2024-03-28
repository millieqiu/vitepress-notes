# Array Methods

## 基本

介紹 `Array.push()`、`Array.pop()`、`Array.shift()`、`Array.unshift()`。

- [ ] <mark>TODO: 待補充</mark>

## 常用

### `forEach()`

`forEach()` 會將陣列中每個元素套用到指定的函式裡進行運算，可以取代 for 的用法，但不會回傳任何東西，只單純執行每個陣列內的物件或值。

**回呼函式之參數**

- element：原始陣列當前正在處理中的元素。

- index：正在處理中的元素索引（可省略）。

- array：原始陣列（可省略）。

**回傳值** <br>

沒有回傳值，結果會是 `undefined`。

```javascript
let arr = [1, 3, 5, 11, -2, 8];
arr.forEach((item, index, array) => {
  array[index] = item * 2;
});

console.log("arr: ", arr);
// arr: [2, 6, 10, 22, -4, 16]
```

### `map()`

`map()` 方法會建立一個新的陣列，它會將 array 中<span class="bolder">所有的值都經過處理</span>，有「select」、「重組」的概念。 <br>

**回呼函式之參數**

- value：原陣列目前所迭代處理中的元素。

- index：正在處理中的元素索引（可省略）。

- array：原陣列（可省略）。

**回傳值** <br>

回傳一組新的陣列，且新陣列的內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。

```javascript
let arr = [1, 2, 3];
let newArr = arr.map(function (val, idx, array) {
  return val * 2; //  建立一個新的陣列，並將 1, 2, 3 分別乘 2 後依序傳入到陣列當中
});

console.log(arr); // [1, 2, 3]
console.log(newArr); // [2, 4, 6]
```

```javascript
// 用不到 idx 跟 array 參數因此省略，並使用箭頭函式的寫法
let newArr = arr.map((val) => val * 2);
```

`map()` 適合用在需要改動資料，但又不想變更原始陣列時。如果不想建立新的陣列，就可以採用 `forEach` 方法。

> [!NOTE] 備註：
> 如果有在寫 React 的話，因為 React 沒有像 Vue 一樣的 `v-for` 語法糖，因此在需要顯示某個 array 的資料時，幾乎都會使用 `map` 處理。

---

Reference：

> [JavaScript | 你常用的 Array Methods 是我常用的嗎？ - Medium](https://medium.com/starbugs/javascript-%E4%BD%A0%E5%B8%B8%E7%94%A8%E7%9A%84-array-methods-%E6%98%AF%E6%88%91%E5%B8%B8%E7%94%A8%E7%9A%84%E5%97%8E-6fe235953951)
