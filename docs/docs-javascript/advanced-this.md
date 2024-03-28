# [advanced] JS this & call / apply / bind

<span class="subtitle">介紹 JavaScript 頭號難題 this 以及三種函式方法 call、apply、bind</span>

> 🌟 面試常考題再加一

## 頭號難題－`this`

先說結論：`this` 是 JavaScript 的一個關鍵字，是 Function 執行時，自動產生的一個內部物件。在大多數的情況下，`this` 代表的就是<span class="bolder">呼叫函式物件</span>（Owner Object of the function）。

```javascript
// 以最經典的物件來舉例 🌰

const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

console.log(test.func()); // 42
```

這裡有個重要的觀念：函式中的 `this` 並不是一個固定不變的值。`this` 的值，是在<span class="bolder">被呼叫的當下才會決定的</span>，因此會跟著程式的運作而動態改變。舉個例子：

```javascript
const greet = function() {
  console.log(`Hello, My name is ${this.name}`);
}

const classmate1 = {
  name: 'John',
  greet()
};

const classmate2 = {
  name: 'Chris',
  greet()
};

classmate1.greet(); // Hello, My name is John
classmate2.greet(); // Hello, My name is Chris
```

根據上面的例子，第 15 行呼叫 `greet` 函式的是 `classmate1` 的物件，第 16 行呼叫 `greet` 函式的則是 `classmate2` 的物件，雖然是呼叫同一個函式，但根據呼叫的物件不同，也會印出不一樣的結果。

### 箭頭函式的 `this`

- [ ] <mark>TODO: 待補充</mark>

## `call()`

可以使用 `call` 方法來強制指定執行函式時 `this` 指向的物件。

```javascript
// 或許不太正統的寫法，但可以快速幫助理解 🧐

const course1 = {
  courseName: "Math",
  getScore: function(studentName, score) {
    console.log(`${studentName}'s ${this.courseName} score is ${score}`);
  }
}

course1.getScore('Millie', '100'); // Millie's math score is 100

const course2 = {
  courseName: "English",
}

course1.getScore.call(course2, 'Andy', 60); // Andy's English score is 60
```

在上面的程式碼中，雖然我們從 `course1` 物件來調用 `getScore` 函式，但可以透過 `call()` 方法再強制將 `this` 指定到 `course2` 物件上，打印出我們最終要的結果。 <br>

也可以將 `getScore` 函式抽出來，使用 `call()` 方法分別指定 `this` 指向的物件：

```javascript
const course1 = {
  courseName: "Math",
}

const course2 = {
  courseName: "English",
}

const getScore = function(studentName, score) {
  console.log(`${studentName}'s ${this.courseName} score is ${score}`);
}

getScore.call(course1, 'Millie', 100);
getScore.call(course2, 'Andy', 60);
```

## `apply()`

除了 `call()` 以外，還有一個 `apply()` 方法。這兩個方法基本上在做的是一樣的事情，都會在呼叫的當下立即執行函式，唯一的差別在於傳入參數的方式不同。 <br>

`call()` 傳入參數的方式是由「逗點」隔開，而 `apply()` 則是傳入整個陣列作為參數，而不是命名過的接收參數。

> [!NOTE] 備註：
> 從 ECMAScript 5 開始，apply 的第二個參數不僅可以是泛型的 array-like 物件，而不一定要是一組陣列。

## `bind()`

第三種方法 bind 一樣可以幫助我們手動去設置 this keyword 的值，但跟上面兩者較為不同的是，bind 不會馬上呼叫函式，而是會將 function 綁定到我們指定的物件上，並<span class="bolder">回傳一個新的 function</span>，而且一旦綁定了，其 `this` 值就無法再被修改。

```javascript
function hello() {
  console.log(this)
}

const myHello = hello.bind('my')
myHello() // my
```

繼續沿用上面的成績例子，我們也可以先幫 bind 的新函式設定一個「預設值」：

```javascript
const course1 = {
  courseName: "Math",
}

const course2 = {
  courseName: "English",
}

const getScore = function(studentName, score) {
  console.log(`${studentName}'s ${this.courseName} score is ${score}`);
}

// 把 Millie 當作新函式的參數 studentName 的預設值
const newMathScore = getScore.bind(course1, 'Millie');
const newEngScore = getScore.bind(course2, 'Millie');

newMathScore(100); // Millie's Math score is 100
newEngScore(70); // Millie's English score is 70
```

### `bind()` 方法與 EventListener

如果是使用 eventListener 時，`this` 會指向「<span class="bolder">觸發事件的元素</span>」上：

```html
<button class="btn">Click me!</button>
```

```javascript
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", function (e) {
  console.log(this); // <button class="btn">Click me!</button>
});
```

因此如果我們想透過 eventListener 來呼叫存在於某個物件中的方法時，很有可能會產生錯誤（因為 `this` 優先指向觸發事件的元素，而不是我們要的物件）。

```javascript
const course1 = {
  courseName: "Math",
  score: 90,
  getResult: function() {
    console.log( this.score >= 60 ? 'Passed 🙌' : 'Failed 🙁' )
  }
}

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", course1.getResult); // Failed 🙁 (得到錯誤的結果)
```

這時候我們就可以利用 `bind` 先將函式綁定到物件上，再回傳新的函式。

```javascript
const course1 = {
  courseName: "Math",
  score: 90,
  getResult: function() {
    console.log( this.score >= 60 ? 'Passed 🙌' : 'Failed 🙁' )
  }
}

const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", course1.getResult.bind(course1)); // Passed 🙌
```

### 局部調用

可以利用 `bind()` 來局部調用第一行的函式，並給定一個預設值。

```javascript
const addTax = (rate, val) => val + val * rate;

// 由於這個地方並不需要特別指定 this 值，因此將第一個參數設為 null 即可
const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100)); // 123
```

寫法會等同於創造 Returning Function：

```javascript
const addTax = function(val) {
  return function(rate) {
    console.log(val += val * rate);
  }
}

addTax(100)(0.2); // 120
```

---

Reference：

> [this - MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/this) <br>
> [解釋 JavaScript 中 this 的值？| ExplainThis](https://www.explainthis.io/zh-hant/swe/what-is-this) <br>
> [[教學] JavaScript this 的用法](https://www.shubo.io/javascript-this/) <br>
> [淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂](https://blog.techbridge.cc/2019/02/23/javascript-this/)