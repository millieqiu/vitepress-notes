# Array Methods

## 基本方法

介紹 `Array.push()`、`Array.pop()`、`Array.shift()`、`Array.unshift()`。

- [ ] <mark>TODO: 待補充</mark>

## 個人常用方法

### ◾ `slice()`

slice 在英文裡本身就帶有「切割、把某物切成薄片」的意思。用語意化的方法來記憶，就是指將我們傳入的陣列「**切片取出來**」，**回傳值為一組新的陣列**。

語法：

```javascript
arr.slice([begin, end])
```

- `begin` 參數：代表自哪個索引開始，若不填就回預設從 index 0 開始。可以傳入負數的索引值，例如 `slice(-2)` 就代表從陣列中的倒數第二個元素開始提取。
- `end` 參數：代表提取結束的位置，但結果並**不會包含這個位置的值**。舉例來說，`slice(1, 4)` 提取了陣列中第二個元素至第四個元素前為止，也就是索引 1、2 以及 3。可使用負數索引。若省略了 end 或傳入的值大於陣列長度，則 slice 會提取至陣列的最後一個元素。

可使用 `slice` 來進行陣列的淺拷貝，示範如下：

```javascript
const arr = [a, b, c, d, e];

// 兩者會得到一樣的結果
console.log(arr.slice());
console.log([...arr]); // 個人偏好做法
```

### ◾ `splice()`

splice 在英文裡的意思為「粘接」或「拼接」，從字面上的意思來看，就可以想像是針對原始的陣列進行操作，可以藉由刪除既有元素並（或）加入新元素來**改變一個陣列的內容**。

語法：

```javascript
array.splice(start, deleteCount[, item1, item2...])
```

- `start` 參數：代表自哪個索引開始（起始為 0）。
- `deleteCcount`：表示欲刪除的原陣列元素數量。若省略或假如其值大於從 `start` 算起的剩餘元素數量，則所有從 `start` 開始到陣列中最後一個元素都會被刪除。
- `item1, item2...`：從 `start` 開始，要加入到陣列的元素。 如果你沒有指定任何元素，則只會依照 `start` 和 deleteCount 刪除陣列的元素。

#### 回傳值

一個包含被刪除的元素陣列。如果只有一個元素被刪除，依舊是回傳包含一個元素的陣列。 倘若沒有元素被刪除，則會回傳空陣列。

使用範例：

```javascript
// 從索引 2 的位置開始，刪除 0 個元素並插入「drum」

let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 0, "drum");

console.log(myFish); // ["angel", "clown", "drum", "mandarin", "sturgeon"]
console.log(removed); // []
```

```javascript
// 從索引 2 的位置開始，刪除 1 個元素並插入「trumpet」

let myFish = ["angel", "clown", "drum", "sturgeon"];
let removed = myFish.splice(2, 1, "trumpet");

console.log(myFish); // ["angel", "clown", "trumpet", "sturgeon"]
console.log(removed); // ["drum"]
```

### ◾ `forEach()`

`forEach()` 會將陣列中每個元素套用到指定的函式裡進行運算，可以取代 for 的用法，但不會回傳任何東西，只單純執行每個陣列內的物件或值。

> 🔗 看其他陣列遍歷的方法請點 [這篇](/docs-javascript/js-array-iteration.md)。

**回呼函式之參數**

- element：原始陣列當前正在處理中的元素。

- index：正在處理中的元素索引（可省略）。

- array：原始陣列（可省略）。

**回傳值** <br>

沒有回傳值，結果會是 `undefined`。

```javascript
// 單純遍歷每個元素並印出結果
const movements = [200, 3000, -600, 800, -1000];

movements.forEach((movement) => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
```

```javascript
// 將每個元素乘以兩倍後印出
let arr = [1, 3, 5, 11, -2, 8];
arr.forEach((item, index, array) => {
  array[index] = item * 2;
});

console.log("arr: ", arr);
// arr: [2, 6, 10, 22, -4, 16]
```

#### 補充：`Map` 跟 `Set` 的 forEach 方法

```javascript
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`);
}

new Map([
  ['foo', 3],
  ['bar', {}],
  ['baz', undefined],
]).forEach(logMapElements);

// Expected output: "m[foo] = 3"
// Expected output: "m[bar] = [object Object]"
// Expected output: "m[baz] = undefined"
```

**參回呼函式之參數數** <br>

- `value`：迭代物件的 value 值

- `key`：迭代物件的 key 值，運用在 `Set` 時會永遠跟 `value` 參數相同

- `map` / `set`：該次迭代的物件主體

### ◾ `map()`

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

### ◾ `filter()`

`filter()` 方法依據字面上的意思，可以幫助我們「篩選、過濾」陣列中的元素，對**符合給定條件**的一部份陣列進行淺拷貝（Shallow Copy），並 `return` 一組新的陣列。

```javascript
const nums = [89, 32, 104, 46, 249, 71, 515];

const numsBiggerThan100 = nums.filter(num => num > 100);

console.log(numsBiggerThan100);
// [104, 249, 515]
```

適用場景：也可以用於關鍵字搜尋，幫助我們篩選出符合指定條件的元素。

```javascript
const fruits = [
  { name: 'apple', quantity: 0 }, 
  { name: 'orange', quantity: 1 }, 
  { name: 'watermelon', quantity: 2 },
  { name: 'grape', quantity: 3 }
]

const fruitsWithG = fruits.filter(fruit => fruit.name.toLowerCase().includes('g'))
console.log(fruitsWithG); // 只會印出 orange 跟 grape 的物件
```

## 其他補充方法

### ◾ `reverse()`

`reverse()` 方法用來將陣列倒轉，將第一個元素換到最後一個，最後一個元素換到第一個，依此類推。

語法：

```javascript
arr.reverse()
```

`reverse()` 方法會返回倒轉後的陣列（會改變原始陣列）。

```javascript
let arr = ['one', 'two', 'three'];
let reversed = arr.reverse(); 

console.log(arr); // ["three", "two", "one"]
// 倒轉是 in place 的操作，返回同一個陣列
```

### ◾ `concat()`

將兩個或多個陣列結合起來。此方法不會改變原本的陣列，而是會**回傳一個新的陣列**。

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// ["a", "b", "c", "d", "e", "f"]
```

#### `concat()` 方法與展開運算子的比較

用展開運算子（...）同樣可以將兩個或多個陣列結合起來，那麼這兩種作法有哪些差異呢？

展開運算子語法：

```javascript
const newArrayName = [...arr1, ...arr2];
// 展開運算子同樣會回傳一組新的陣列
```

> 🔗 想看更多關於 Spread Operator（展開運算子）的介紹，請走[這邊](/docs-javascript/spread-operator.md)。

相異之處：

1. 展開運算子可用於陣列或物件，`concat()` 方法則只能用在陣列上（或另一種 `Symbol.isConcatSpreadable` 被設置為 true 的情況）。
2. `concat()` 方法可以同時結合其他的陣列方法使用（can be used in a chain of methods）。
3. `concat()` 方法可以將陣列與單一值（value）結合起來。

```javascript
// 單一值範例

const letters = ["a", "b", "c"];
const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]
```

### ◾ `at()`

對 `at()` 方法傳入一個整數（正數或負數皆可），則會回傳一個該索引值對應的元素。

以下範例：

```javascript
const arr = ["apple", "banana", "watermelon"];

console.log(arr.at(0)); // "apple"
console.log(arr.at(-1)); // "watermelon"
```

#### 回傳值

返回陣列中與給定的索引值匹配的元素。如果 `index < -array.length` 或 `index >= array.length`，則會返回 `undefined`。 <br>

雖然前面有提過其他可以返回索引值元素的作法，例如利用 `arr.[index]` 來實現，但今天如果我們不知道目標陣列的長度，卻又想取得其最後一個位置的值，`at()` 方法的呈現方式就顯得簡潔且易讀。

```javascript
const arr = ["apple", "banana", "watermelon", "orange", "pear"];

// 方法一
console.log(arr[arr.length - 1]);

// 方法二
console.log(arr.slice(-1)[0]);

// 方法三
console.log(arr.at(-1));
```

::: details 🔑 老師叮嚀
使用情境：<br>
如果是想從陣列的**最後面**開始取得元素，可以使用 `at()` 方法會比較直覺，或是想使用「Method Chaining」的時候，用 `at()` 也是一個好方法；而如果只是想快速取得陣列中的某個元素時，則可以繼續使用 `[]` 。
:::

> [!NOTE] 備註：
> `at()` 方法也可以用在字串上，例如：
> ``` javascript
> const str = "Hello World";
> console.log(str.at(0)); // "H"
> ```

---

Reference：

> [JavaScript | 你常用的 Array Methods 是我常用的嗎？ - Medium](https://medium.com/starbugs/javascript-%E4%BD%A0%E5%B8%B8%E7%94%A8%E7%9A%84-array-methods-%E6%98%AF%E6%88%91%E5%B8%B8%E7%94%A8%E7%9A%84%E5%97%8E-6fe235953951)
