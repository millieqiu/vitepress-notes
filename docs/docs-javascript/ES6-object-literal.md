# ES6 Object Literal

<span class="subtitle">Object Literal</span>

在早期要建立一個自定義的物件，可能會透過 `new` 關鍵字來實現。

```javascript
let person = new Object();
person.name = "Mary";
person.job = "Project Manager";
```

後來，大家更常直接用大括號（`{}`）來建立一個新的物件，並且在建立物件的同時，直接指定屬性至該物件內，這種方式就稱為物件實字（Object Literals）。

```javascript
let user = {
  name: "Qinn",
  age: 20,
  born: "2000-01-01",
  showInfo: function () {
    return `${this.name} 今年 ${this.age} 歲`;
  },
};
```

**物件實字的語法重點：**

- 用大括號表示。
- 裡面的<b>屬性（Properties）</b>用<b>名值對（name-value pairs）</b>表示。
- 多個屬性以逗號（comma）分隔。
- 宣告完後，還是可以再增加 Properties 進去。

底下會介紹幾種 ES6 推出的新特性 Enhanced Object Literals，讓物件實字寫起來更簡潔。

## Key 值設定簡寫

```javascript{1,2}
const name = "Qinn"
const age = 20

const person = {
  name: name,
  age: age,
}
```

在上述的範例中，我們創造一個 person 物件，並將當中的 `name` 和 `age` 屬性指派給第一、二行的變數 name 和 age。 <br>

在 JavaScript 開發的過程中，我們經常需要將 Object 的 key 值設定給擁有相同名稱的變數，因此到了 ES6，當**屬性名稱**和**變數名稱**相同時，只需要在括號中設置變數名稱即可。

```javascript
const name = "Qinn";
const age = 20;

const person = {
  name,
  age,
};
```

## 物件方法簡寫

增加在 Object 中定義 Function 的精簡寫法。

```javascript
// 這是一般的寫法
const person = {
  sayHi: function () {
    console.log("Hi");
  },
};
```

```javascript
// 這是 ES6 過後的簡短寫法
const person = {
  sayHi() {
    console.log("Hi");
  },
};
```

如上面所示，移除了 `function` keyword，讓方法定義起來可以更簡便。

## 動態賦值

在 ES6 中，允許將<span class="bolder">表達式作為屬性的名稱</span>，只需要使用（`[ ]`）就可以了，透過這樣的方式，我們更可以去動態賦予屬性名稱。

```javascript
const dynamicKey = "name";
const index = 1;

const person = {
  [dynamicKey]: "Qinn",
  ["age" + index]: 20,
};
```

透過上面的方式，會得到下面的結果：

```javascript
{
  "name": "Qinn",
  "age1": 20
}
```

---

Reference：

> [Enhanced Object Literals](https://blog.webdevsimplified.com/2021-02/javascript-enhanced-object-literals/) <br> > [[筆記] JavaScript ES6 中的物件的擴展（object literal extension）](https://pjchender.blogspot.com/2017/01/es6-object-literal-extension.html)
