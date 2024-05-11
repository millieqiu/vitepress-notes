# JS Array Iteration

> 🌟 **面試常見考題之一**

## for loop

用法語最基本的 `for` 迴圈相同，透過冗長的命令式寫法來達到遍歷陣列的效果，優點是可以使用 `break` 結束循環或使用 `continue` 跳出當前迴圈。

```javascript
let arr = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (i > 2) break;
  console.log(arr[i]);
}
// 0
// 1
// 2
```

## for...in loop

遍歷的是 `鍵值 (key)`，而在陣列中的 `鍵值 (key)` 就是 `索引 (index)`。

```javascript
const arr = ["apple", "orange", "banana"];
for (const item in arr) {
  console.log(item);
}
// 0
// 1
// 2
```

## for...of loop

ES6 之後出現的語法，依然可以使用 `continue` 跟 `break` 關鍵字，但跟第一個 `for` 迴圈的寫法比起來相對簡潔。

```javascript
const arr = ['apple', 'orange', 'banana'];

for (const item of arr) console.log(item);
// 'apple'
// 'orange'
// 'banana'

for (const item of arr.entries()) console.log(item);
// [0, 'apple']
// [1, 'orange']
// [2, 'banana']
```

上面範例中的 `.entries()` 是什麼？ <br>

`for...of` 會先檢查對象 `[Symbol.iterator]` 這個屬性，但由於 Object 並不具備 `[Symbol.iterator]` 這個屬性，所以 `for...of` 並不能使用在 Object 上。

> [!NOTE] 備註：
> `for...of` 遍歷的是陣列中的**元素值 (value)**；而 `for...in` 是遍歷的是**鍵值 (key)**，換句話說 `for...in` 是遍歷陣列中的 `索引 (Index)`。

```javascript
var arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
// 10 20 30

---

var arr = [10, 20, 30];

for (let value in arr) {
  console.log(value);
}
// 0 1 2
```

## forEach

陣列原生的遍歷方法。

- 會針對每一個元素執行提供的函式。
- `forEach` 方法只會遍歷原陣列，並不會回傳一個新陣列。所以如果需要從一個舊陣列中建構出另一個新陣列，應該使用 `map` 方法。

> 🔗 整理過後更詳細的 [forEach()](/docs-javascript/array-methods.md#foreach) 和 [map()](/docs-javascript/array-methods.md#map) 說明。

```javascript
const scores = [22, 54, 76];

scores.forEach((score) => {
    console.log(score);
});

// 22
// 54
// 76
```

---

Reference：

> [JavaScript 中有哪些陣列 (Array) 的遍歷方法(for loop, for...in, for…of, forEach, map, filter, every, some) - ExplainThis.io](https://www.explainthis.io/zh-hant/swe/iterate-array) <br>
> [JavaScript 遍歷 Array 的四種方法：for、for-in、for-of、forEach()](https://tigercosmos.xyz/post/2021/06/js/js-array-for-methods/)