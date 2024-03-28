# [advanced] Pass by Value vs. Reference

<span class="subtitle">JavaScript 特殊的函式特性</span>

> Keywords：**`primitives & objects`**（**`primitives types & reference types`**）

## by value

```javascript
let a = 10;
let b = a;

console.log(a); // 10
console.log(b); // 10
```

由上述的例子可以看出，變數 `b` 的值是透過複製變數 `a` 的值而來。但並不代表當變數 `a` 更新之後，會去影響變數 `b` 的數值：

```javascript
a = 100;

// 變數 b 依然是 10，而變數 a 變成了 100
console.log(a); // 100
console.log(b); // 10
```

原因就是，當我們在建立 primitive type 的變數時（數字、字串、布林）， 其變數會在記憶體中存在一個自己的位置。 <br>

若 `a` 的位置叫做 0x001，表面上看起來變數 b 的內容是透過複製變數 `a` 而來，實際上變數 `b` 也是去建立另一個獨立的記憶體位置（假設叫做 0x002），然後將變數 `a` 的內容複製了一份過來。 <br>

也就是說，這時候 `a` 與 `b` 各自**存在於兩個不同的記憶體位置**，因此彼此並不會乎相干擾影響。**這種情況，我們就稱為「傳值」（by value）**，而這種情形會發生在 primitive type 的變數。

![](/by-value.png){data-zoomable}

## by reference

除了基本型別，其他型別都算是物件型別，則會以 by reference 傳址的方式傳遞：

![](/by-reference.png){data-zoomable}

根據上面這張圖片，當變數 `a` 為 Object 時，一樣會在記憶體中給它一個位置（假設叫做 0x001）；但是當我建立一個變數 `b`，並將變數 `a` 的值賦予 `b`，這時候並不會再給它一個新的位置，而是**一樣指定到物件 `a` 的位置（即 0x001）**，此時變數 `a` 和 `b` 都會被指稱到相同的位置（即 0x001）。 <br>

因此，當 `a` 的值改變的時候 `b` 的值也會改變，因為它們實際上是指稱到相同的位置，這種情形我們就稱為「傳址」（By Reference），這樣情況會發生在 Object type 的變數上。 <br>

這樣的規則即使是在 function 裡面的參數（parameter）也是一樣的：

```javascript
let a = { greeting: "你好" };
let b = a;

console.log(a.greeting); // "你好"
console.log(b.greeting); // "你好"

function change(obj) {
  obj.greeting = "Hello";
}

change(a);
console.log(a.greeting); // "Hello"
console.log(b.greeting); // "Hello"
```

## 例外情況

當我們今天是直接以等號賦予新的值，或是利用 [物件實字](ES6-object-literal.md)（Object literal）的方式指定物件的值，那麼就會再建立一個新的記憶體位置，屬於例外的情況：

```javascript{5}
let arr1 = [1, 2, 3];
let arr2 = arr1;

// 用等號賦予陣列新的值
arr1 = [4, 5, 6];
console.log(arr2); // [1,2,3]
```

```javascript{5}
let c = { greeting: "你好" };
let d = c;

// 用物件實字賦予物件新值
c = { greeting: "Hello" };
console.log(d.greeting); // "你好"
```

::: details 🔑 老師叮嚀
Jonas 補充說明，JavaScript 沒有傳址（Pass by reference），只有看起來很像的行為，但背後都是傳值（Pass by value）而已。 上述的 Object 傳參數情況，它傳的還是一個 value，只是這個 value 包含了記憶體位址。
:::

---

Reference：

> [[筆記] 談談 JavaScript 中 by reference 和 by value 的重要觀念](https://pjchender.blogspot.com/2016/03/javascriptby-referenceby-value.html) <br> [[JavaScript] Javascript 中的傳值 by value 與傳址 by reference](https://medium.com/itsems-frontend/javascript-pass-by-value-reference-sharing-5d6095ae030b)
