# Spread operator / Rest operator (...)

## 展開運算子

基本用法：

```javascript
const arr = [x, y, z];
const badNewArr = [a, b, arr[0], arr[1], arr[2]]; // 想建立一個新的陣列，並在前面多加兩個變數，這是第一種寫法，但較繁瑣

const wrongNewArr = [a, b, arr]; // 如果直接把 arr 放進新的變數中，代表是把「整個陣列」一起放進去，無法取出原本陣列中的值
console.log(wrongNewArr); // [a, b,  [x, y, z]]

// 利用 ES6 的展開運算子，則可以利用以下的寫法輕鬆做到：
const newArr = [a, b, ...arr];
console.log(newArr); // a b x y z
```

簡單來說，當我們需要<span class="bolder">把某一陣列中的元素個別取出來</span>時，就可以用展開運算子。

### 拷貝陣列

```javascript
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 此時變成 [1, 2, 3, 4]
// arr 則不受影響，因為只有執行「淺拷貝」
```

用展開運算子複製陣列的行為與 `Object.assign` 類似，都是執行**淺拷貝**。

### 只能用於可迭代的對象

JavaScript 語言中內建的可迭代（iterable）物件有 String、Array、TypedArray、Map 與Set 物件。

::: warning 注意：
在 2018 年以後，JavaScript 的剩餘運算子也可以用來處理 Object 物件了。（儘管如此還是要特別註記，Object 並不是可迭代的物件）
:::

```javascript
const aString = "foo"
const chars = [ ...aString ] // [ "f", "o", "o" ]
```

如果將展開運算子用在 Object 上，就會產生錯誤訊息：

```javascript
var obj = { key1: "value1" };
var array = [...obj]; // TypeError: obj is not iterable
```

> [!NOTE] 備註：
> 根據 Airbnb 的建議以及參照 ES7 的標準，盡可能使用展開運算子來取代 `Object.assign`。也可用展開運算子來取代 `slice` 或 `concat`。

## 剩餘運算子

**其餘參數（rest parameter）** 語法可以讓我們表示不確定數量的剩餘參數，並將其轉變為一個陣列。

```javascript
const [a, b ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// 1
// 2
// [3, 4, 5]
```

因為 `theArgs` 是一個陣列，所以它會有 `length` 屬性，作為表示參數數量：

```javascript
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

既然是一個其餘運算子是參數的語法，自然也能用在函式的傳入參數定義。

```javascript
function sum(…numbers) {
  const result = 0;

  numbers.forEach(function (number) {
    result += number
  });

  return result;
}

sum(1) // 1
sum(1, 2, 3, 4, 5) // 15
```

---

ES7 過後，在物件中也能使用展開及剩餘運算子：

```javascript
// Rest Properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
console.log(x) // 1
console.log(y) // 2
console.log(z) // { a: 3, b: 4 }

// Spread Properties
let n = { x, y, ...z };
console.log(n);
// { x: 1, y: 2, a: 3, b: 4 }
```

根據上述的說明，可以看到在宣告式的左右兩邊皆可使用 `...` 運算符，但其代表的意義不同：在左邊代表剩餘運算子；在右邊代表展開運算子。

---

Reference：

> [其餘參數 - MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/rest_parameters) <br>
> [展开语法 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)