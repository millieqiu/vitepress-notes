# [basic] String
<span class="subtitle">Working with Strings!!</span>

字串（String）型別可以用來儲存「文字」型態的資料。

```javascript
let dish1 = "Sushi";
let dish2 = "Curry Rice";

// 利用中括號取得特定位置的字元
console.log(dish1[0]); // "S"
console.log("Steak"[1]) // "t"

// legnth 方法取得字串長度
console.log(dish2.length); // 10

// indexOf 取得特定字元的 index 號碼（第一個出現的）
console.log(dish2.indexOf("r")); // 2

// lastIndexOf 最後一個出現的字元
console.log(dish2.lastIndexOf("r")); // 3

// 也可以利用 indexOf 來搜尋一整個單字的位置
console.log(dish2.indexOf("Rice")); // 6
console.log(dish2.indexOf("rice")); // -1（找不到的話會回傳 -1）
```

## 字串處理
- **`slice()`** <br>

字串的 `slice()` 方法可以將特定某個字串的區段「切片取出」，並回傳一個新的字串。此方法不會改變原本的字串。

```javascript
const str = "Hello World!";
str.slice(startIndex[, endIndex]); // endIndex 參數可以省略，若省略的話則從 startIndex 切到最後

// ----- Examples ----------
console.log(str.slice(6)); // "World!"
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(-3)) // "ld!"
console.log(str.slice(1, -1)) // "ello World"
```

- **`split()`** <br>

將字串根據給定的 separator 參數拆開，並回傳成一個新的陣列。

```javascript
const greeting = "Have-a-nice-day";
console.log(greeting.split("-")); // ["Have", "a", "nice", "day"]

// 搭配解構賦值
const [firstName, lastName] = "Quinn White".split(" ");
console.log(firstName, lastName); // "Quinn", "White"

// 搭配 Array.join() 組合成新的字串
const newName = ["Ms.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); // "Ms. Quinn WHITE"
```

- **`trim()`** <br>

`trim()` 方法會移除字串起始及結尾處的空白字元。包含所有空格字元（如：空格、欄標、無間斷空格等等）及換行字元（如：換行、回車等等）。

```javascript
const greeting = '   Hello world!   ';

console.log(greeting);
// "   Hello world!   ";

console.log(greeting.trim());
// "Hello world!";
```

**回傳值** <br>

回傳一個新的字串，其為把 `str` 起始及結尾處的空白字元移除後的值。 <br>

如果 `str` 的起始及結尾處沒有任何的空白字元，此方法不會拋出任何例外，且仍然會回傳一個新的字串（本質上為 `str` 的複製）。 <br>

如果只是想要去除字串起始處或結尾處其中之一的空白字元，那麼可以選擇使用 `trimStart()` 或者 `trimEnd()`。 <br>

- **`replace()`** <br>

`replace()` 方法返回一個新的字串，原始的字串不會改變，且<span class="bolder">只會取代第一個匹配的字串符</span>，範例如下：

```javascript
const annoucement = "Please come to door 23, door 23."
console.log(annoucement.replace("door", "gate"));
// "Please come to gate 23, door 23."
```

若想一次取代<span class="bolder">所有</span>符合的字串，可以參考 `replaceAll()`。或者，也可以用正規表達式的寫法：

```javascript
console.log(annoucement.replace(/door/g, "gate")); // g flag 代表全域 global
```

### 大小寫轉換
```javascript
const airline = "TPA Air Italy";
console.log(airline.toUpperCase()); // "TPA AIR ITALY"
console.log(airline.toLowerCase()); // "tpa air italy"

// ----- Examples ----------
// Fix captalization in name
const passengerName = "mILliE";
const passengerNameLower = passengerName.toLowerCase();
const passengerNameCorrect = passengerNameLower[0].toUpperCase() + passengerNameLower.slice(1);
console.log(passengerNameCorrect); // "Millie"
```

### 返回布林（Boolean）值
```javascript
const plane = "Airbus A320neo";

// includes() 方法會區分大小寫來搜尋
console.log(plane.includes("A320")); // true
console.log(plane.includes("Neo")); // false

// 檢驗字串開頭＆結尾
console.log(plane.startsWith("Air")); // true
console.log(plane.endsWith("neo")); // true
```

### 補齊字串長度
```javascript
str.padStart(Number, 'String')
str.padEnd(Number, 'String')
```
在真實開發中會遇到的情境：將輸入的信用卡卡號隱藏，僅顯示末四碼。
```javascript
const maskCreditCard = function(num) {
    let str = num + '';
    let lastNum = str.slice(-4);
    return lastNum.padStart(str.length, "*");
}
```

::: details 🔑 老師叮嚀
在處理字串時，建議都先將拿回來的資料**以 `toLowerCase()` 方法轉成小寫**，會比較方便進行後續的比對及操作。
:::

---

Reference：
> [[JS] JavaScript 字串（String） | PJCHENder 未整理筆記](https://pjchender.dev/javascript/js-string/) <br>
> [[JS] 正則表達式（Regular Expression, regex）](https://pjchender.dev/javascript/js-regex/) <br>
> [Regular expressions - javascript.info](https://javascript.info/regular-expressions)