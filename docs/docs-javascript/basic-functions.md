# [basic] Functions
<span class="subtitle">函式運算式、函式表達式、箭頭函式</span>

## 箭頭函式（Arrow Functions）
箭頭函式是在 ES6 後出現的一種函式表現方式，雖然也是函式的一種，但有部分的特性是跟一般函式有差異的，例如 `this`、`hoisting`、`argument` 等特性。

**基本寫法：**
```javascript
// 在箭頭函式中如果沒有帶入參數時，一樣要加上空括號
const greeting = () => {
  console.log('Hello, JavaScript!');
};

greeting();
```

### 箭頭函式帶入參數值

當函式擁有兩個以上的參數時，一樣可以使用括號來帶入參數，寫法像是下面這樣子：

```javascript
const add = (a, b) => a + b;
console.log(add(3, 5));

// 等同於這樣寫
const add = function (a, b) {
  return a + b;
};
```

但是當函式只有一個參數時，可以省略括號不寫，因此，當我們的函式只有一個參數時，我們的函式長得像這樣：

```javascript
const greeting = (person) => `Hello, ${person}`;
greeting('Aaron'); // Hello, Aaron

// 等同於這樣寫
const greeting = function (person) {
  return `Hello, ${person}`;
};
```

**與傳統宣告方式的差異：**

- 語法更為簡潔
  除了少去 `function` 關鍵字，如果只有一個參數，箭頭函式可以省略括號；只有一行程式碼，就是直接簡單返回一個變數或簡單的表達式，可以省略大括號和 `return`。
- `this` 值與一般函式不同
  箭頭函式沒有自己的 this 值，箭頭函式的 `this` 值是在一開始定義時就決定，永遠會是最接近自己的外層的普通函式中的 `this` 值。
此外，箭頭函式也不適合使用 call、 apply 和 bind 來綁定 `this` 值，綁定值會無效。
- 沒有自己的 `arguments`

## 預設參數（Default Parameters）

在過去，若我們需要為函式參數設定預設值，需要透過**短路求值**的方法如下：
```javascript
const scores = [];

const getScore = function(name, score) {
    score = score || 60;
    const result = {
        name,
        score
    };
    scores.push(result);
    console.log(scores);
}

getScore("Anne", 98);
getScore("Jason"); // Jason 沒有填成績，因此只給他預設及格分數
```

然後在 ES6 過後，提供了一個更簡單的方法，用上述例子改寫：

```javascript
const getScore = function(name, score = 60) {
    const result = {
        name,
        score
    };
    scores.push(result);
    console.log(scores);
}
```

```javascript
// 此時若傳入 undefined，同樣也會帶入預設值
getScore("Mike", undefined); // {name: "Mike", score: 60}
```

> 🔗 本篇只會介紹基本的函式用途，要看更進階的函式特性（例如傳值傳址、回呼函式等），可以從 這篇 開始看。

---

Reference：

> [Day06【ES6 小筆記】函式參數預設值 - 基礎範例（Default Arguments）](https://ithelp.ithome.com.tw/articles/10213774)