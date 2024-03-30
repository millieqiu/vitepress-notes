# [basic] Array / Object

<span class="subtitle">JavaScript 陣列（Array）及物件（Object）的基礎觀念</span>

## 陣列（Array）

## 物件（Object）

```javascript
// 以「物件實字」的方式建立一個物件
let person = {
  name: "Mary",
  job: "Project Manager",
  birthDate: "1998-03-23",
  interests: ["Reading📖", "Swimming🏊", "Traveling🚗"],
};
```

> 🔗 更多物件實字的補充，請參考 [這個章節](ES6-object-literal.md)。 <br>

### 物件屬性存取

1. 點記法（Dot notation）
   我們可以用 . 運算子來存取物件的屬性。用法如下：

```javascript
person.name; // "Mary"
person.interests[0]; // "Reading📖"
```

2. 括弧記法（Bracket notation）
   也可以透過 [ ]（中括號）來進行存取，例如：

```javascript
person["name"]; // "Mary"
person["interests"][0]; // "Reading📖"
```

後者的好處是，當物件的索引鍵剛好是不合法的 JavaScript 識別字（如帶有空白的字串或是數字）時，執行就會出現錯誤。舉例如下：

```javascript
let classmates =  {
    "01": "Jerry",
    "02": "Mark"
}

console.log(classmates.01); // Uncaught SyntaxError
console.log(classmates["01"]); // "Jerry"
```

---

Reference：

> [[JS] JavaScript 物件（Object）](https://pjchender.dev/javascript/js-object/#%E8%A4%87%E8%A3%BD%E7%89%A9%E4%BB%B6) <br> [JavaScript 物件基礎概念 - MDN](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/Objects/Basics) <br> [重新認識 JavaScript: Day 22 深入理解 JavaScript 物件屬性](https://ithelp.ithome.com.tw/articles/10193747)
