# [advanced] Callback Functions

<span class="subtitle">（很難，感覺要打三顆星 🔥）</span>

> Keywords：**`First-class Function`**、**`Callback functions`**

## First-class Function（一級函式）

一級函式並非是 JavaScript 專有的特性，只要該語言的「函式可被視為與其它變數一樣時」，就可以稱為該語言有<span class="bolder">一級函式</span>的特性。

> A programming language is said to have **First-class functions** when functions in that language are treated like any other variable. - [MDN](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

由於 JavaScript 擁有 First-Class Function 的特性，因此會將函式當作單一值，且將它視為其中一種物件型態，即 `typeof function = object`。我們可以：

1. 將函式儲存在變數（Variable）或是物件屬性（Properties）裡

```javascript
const foo = function () {
  console.log("foobar");
};
// 用一個變數來呼叫函式
foo();
```

```javascript
const counter = {
  value: 1,
  // 將函式存成物件的屬性（方法）
  inc: function () {
    this.value++;
  },
};
```

2. 指定參數為函式並傳入其他函式中

```javascript
function enGreet(name) {
  return `Hello ${name}!`;
}

function greeting(greetFn, name) {
  console.log(greetFn(name));
}

greeting(enGreet, "Millie"); // Hello Millie!
```

3. 返回（return）一個函式

```javascript
function sayHello() {
  return function () {
    console.log("Hello!");
  };
}

sayHello()(); // Hello!
```

4. 對函式操作自己的方法，例如 `bind`。

也是因為 First-class Function 的特性，才讓我們能創造出並使用**高階函式（Higher-Order Function）**。

## Higher-order Function（高階函式）

高階函式（Higher order function）是指當一個函式可以**接受另一個函式作為參數或者返回一個函式作為結果的函式**。

> 更詳細的內容可以看 👉 我的部落格－[Daily notes #2：什麼是 Callback function？](https://millieqiu-blog.hashnode.dev/daily-note-callback-function)

## Functions Returning Functions

```javascript
const greet = function (greetings) {
  // 底下這個 Function 就是「被另一個函式當作結果回傳」的函式
  return function (name) {
    console.log(`${greetings}, ${name}`);
  };
};

// 將 return 回來的函式先存成 greeter 變數，再呼叫
const greeter = greet("Hey");
greeter("Millie"); // Hey, Millie

// 也可以直接呼叫 returning function，只是看起來會有點奇怪
greet("Hello")("Stacy"); // Hello, Stacy
```

![](/returning-fn.png){data-zoomable}

---

Reference：

> [First-Class Function (一級函式)](https://b-l-u-e-b-e-r-r-y.github.io/post/FirstClassFunction/) <br> [一級函式（First-class Function）](https://developer.mozilla.org/zh-TW/docs/Glossary/First-class_Function)
