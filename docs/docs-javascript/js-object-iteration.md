# JS Object Iteration
<span class="subtitle">主要介紹 Object.values、Object.keys、Object.entries</span>

`for` loops、`forEach()`、`map()` 都是執行迴圈（loop）的常見方式，但卻無法使用在 Object 上，因為 JS 中的 Object 物件是<span class="bolder">不可迭代的（not iterable）。</span> <br>

但這並不代表我們不能遍歷 Object 中的屬性，只是說明了 `forEach()` 等方法雖然可以用在陣列上，卻無法用在 Object 上。 <br>

JavaScript 的開發人員最早需要迭代物件時，會使用 `for-in` loop 來處理，並搭配 `hasOwnProperty` 來確認該屬性（Properties）是否有包含在 Object 中。

```javascript
const population = {
  male: 4,
  female: 93,
  others: 10
};

// Iterate through the object
for (const key in population) {
  if (population.hasOwnProperty(key)) {
    console.log(`${key}: ${population[key]}`);
  }
}
```

## `Object.keys()`

在 ES5 以後，新增了 `Object.keys()`，可以直接傳入一個物件，並將其 key 值以陣列的方式呈現。

```javascript
let object = { a: 1, b: 2, c: 3 };

console.log(Object.keys(object));
// ["a", "b", "c"]
```

因為 `Object.keys()` 回傳的是陣列，而 JS 的陣列是迭代物件，所以可以使用 `for-of` 陳述句或 `forEach` 方法來進行更進一步的迭代。 <br>

例如想知道物件有幾個 property，可用 `Object.keys()` 搭配 `Array.length` 取得：

```javascript
let object = { a: 1, b: 2, c: 3 };

let propertyCount = Object.keys(object).length;

console.log(propertyCount);
// 3
```

## `Object.values()`

`Object.values()` 是在 ES2017 新增的語法，可以直接傳入一個物件，並**將傳入的物件直接轉為陣列的形式**。

```javascript
// 原始物件
const people = {
  '001': {
    name: 'Casper',
    like: '鍋燒意麵',
    age: 18,
  },
  '002': {
    name: 'Wang',
    like: '炒麵',
    age: 24,
  },
  '004': {
    name: '滷蛋',
    like: '蘿蔔泥',
    age: 3,
  },
};
```

以此範例來說，`Object.values(people)` 會把 people 物件轉為純陣列，因此會得到以下的結果：

```
[{
  age: 18,
  like: "鍋燒意麵",
  name: "Casper"
}, {
  age: 24,
  like: "炒麵",
  name: "Wang"
}, {
  age: 3,
  like: "蘿蔔泥",
  name: "滷蛋"
}]
```

## `Object.entries()`

`Object.entries()` 可以直接取得所有 property 的 name 和 value，並以陣列回傳。 <br>

同樣以上方的例子來去，得到的結果如下：

```
[
  ["001", {
    age: 18,
    like: "鍋燒意麵",
    name: "Casper"
  }],
  ["002", {
    age: 24,
    like: "炒麵",
    name: "Wang"
  }],
  ["004", {
    age: 3,
    like: "蘿蔔泥",
    name: "滷蛋"
  }]
]
```

利用**解構賦值**，我們也可以這樣做：

```javascript
const entries = Object.entries(people);

for (const [key, {name, like, age}] of entries) {
    console.log(`${name}今年 ${age} 歲，最喜歡吃${like}`)
}

// "Casper今年 18 歲，最喜歡吃鍋燒意麵"
// "Wang今年 24 歲，最喜歡吃炒麵"
// "滷蛋今年 3 歲，最喜歡吃蘿蔔泥"
```

---

Reference：

> [Loop Through an Object in JavaScript – How to Iterate Over an Object in JS - freeCodeCamp](https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/)