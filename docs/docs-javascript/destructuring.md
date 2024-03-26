# Destructuring

**解構賦值**（Destructuring assignment）語法是一種 JavaScript 運算式，可以把陣列或物件中的資料<span class="bolder">解開</span>擷取成為獨立變數。

## Array Destructuring

解構賦值（Destructuring Assignment）是一個在 ES6 的新特性，用於提取（extract）陣列或物件中的資料，新語法可以讓程式碼在撰寫時更為簡短與提高閱讀性。

> The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals. 

根據上述 MDN 對解構賦值的解釋，這個語法的使用方式，如同「**鏡子**」一般，對映出陣列或物件字面的結構，也就是一種樣式（pattern）對映的語法。用法如下：

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1, 2, 3
```

### 當輸入的變數多於所給的值

當變數的數量多於賦予的值時，多出來的那個變數會被賦予 undefined 的值（d = undefined）：

```javascript
// 當變數多於所給的值
let [a, b, c, d] = [1, 2, 3];
console.log(a, b, c, d); // 1, 2, 3, undefined
```
### 當輸入的變數少於所給的值

當輸入的變數少於所給的值的時候，只有被指定到的變數會有值，少掉的變數可以直接空過去：

```javascript
// 當變數少於給的值
let [g, , i] = [1, 2, 3];
console.log(g, i);  // 1, 3
```

## Object Destructuring

### 無宣告指派

變數可以在宣告式後，再透過解構進行指派。

```
let a, b;

({ a, b } = { a: 1, b: 2 });
```

> [!NOTE] 備註：
> 當針對物件進行解構，而該句式沒有進行宣告時，指派式外必須加上括號 ( ... ) 。 <br>
> `{a, b} = {a: 1, b: 2}` 不是有效的獨立語法，因為左邊的 `{a, b}` 被視為程式碼區塊而非物件。 <br>
> 然而，`({a, b} = {a: 1, b: 2})` 是有效的，如同 `const {a, b} = {a: 1, b: 2} ( ... )` 表達式前句需要以分號結束，否則可能把上一句視為函式隨即執行。

### 指派到新的變數名稱

用解構賦值來指派到新的變數名稱，適合用於接收第三方 API 資料時。 <br>

物件中的屬性可以解構並擷取到名稱跟該屬性不一樣的變數。

```javascript
const restaurant = { name: 'YummyMommy', location: 'Tainan, Taiwan' };
const { name: restaurantName, location: restaurantLocation } = restaurant;

console.log(restaurantName); // "YummyMommy"
console.log(restaurantLocation ); // "Tainan, Taiwan"
```

舉例來說， `const {name: restaurantName} = restaurant` 把物件 `restaurant` 裡名為 `name` 的屬性解出並指派到一個名為 `restaurantName` 的本地變數。

### 預設值

當解構物件中對應的值是 `undefined` 時，變數可以設定預設值。

```javascript
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

### 巢狀物件或陣列的解構

其實只要兩邊的結構（patterns）一樣，左邊的變數就會被賦予對應的值，所以用在 nested object 或 array 也行：

```javascript
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/zh-TW/docs/Tools/Scratchpad",
};

let {
  title: englishTitle, // 指派新的變數名稱
  translations: [
    {
      title: localeTitle, // 指派新的變數名稱
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
```

### 將物件扁平化

> Keywords：**`array to object`**、**`object flatten`**

```javascript
let arr = [{ a: 10 }, { b: 20 }, { c: 30 }];

let obj = arr.reduce((acc, current, index, array) => {
  return Object.assign(acc, current);
}, {});
console.log(obj); // { a: 10, b: 20, c: 30 }

console.log({ ...arr }); // { 0: { a: 10 }, 1: { b: 20 }, 2: { c: 30 } }
```

---

Reference：

> [解構賦值 - MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) <br>
> [[筆記] JavaScript ES6 中的陣列解構賦值（array destructuring）](https://pjchender.blogspot.com/2017/01/es6-array-destructuring.html)