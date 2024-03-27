# Nullish coalescing operator (??) / Optional chainign (?.)
<span class="subtitle">Nullish coalescing operator ?? / Optional chainign ?.</span>

## 空值合併運算子（`??`）

**Nullish coalescing（`??`）operator** 可用來**判斷空值**，即為 <span class="bolder">null</span> 或 <span class="bolder">undefined</span>。若左邊的運算元為空值，則會繼續執行右邊的運算元；若左邊的運算元不為空值，則會直接返該運算元。

> [!NOTE] 備註：
> 與 `AND` 和 `OR` 運算子的短路求值稍微有些差異，前者是用來判斷「真值（truthy value）或假值（falsy value）」，空值合併運算子則是用來判斷是否為「空值」。

```javascript
const foo = null ?? 'default string';
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0
```

此外，若要將這個運算子與 `AND` 和 `OR` 同時使用，則必須在外層加上括號 `()` 才可以。

```javascript
let x = 1 && 2 ?? 3; // Syntax error
let y = (1 && 2) ?? 3; // Works
```

### 在實務中會用到的情況

假設我們現在要撰寫一個可以動態設定介面樣式的行為，要從 API 取得一個高度的設定值用以設定元素的高度，而如果 API 沒有提供此欄位時則預設高度為 `300` 。大略的程式碼如下：

```javascript
const response = await fetch(GET_CONFIG_API);
const itemHeight = response?.data?.height || 300;
document.getElementById('item').style.height = `${itemHeight}px`;
```

這樣一來，當 API 沒有提供 `height` 欄位、或是萬一 `response` 或 `data` 為空值時， `itemHeight` 就會自動被指派成 `||` 後面的 `300`。

## 可選串連運算子（`.?`）

當串連物件裡面的參照或方法可能是 `undefined` 或 `null` 時，可選串連運算子提供簡單的方法去存取這些串連物件下的值。

舉例來說，我們有一個 articles 的陣列，並在裡面的各個物件中存放一些文章的資料：

```javascript
const articles = [
  {
    id: 101,
    title: 'First Article',
    author: { id: 101, name: 'John' },
  },
  {
    id: 102,
    title: 'Second Article',
  },
  {
    id: 103,
    title: 'Article 3',
    author: { id: 102, name: 'Austin' },
  },
]
articles.forEach(article => {
  const authorName = article.author.name;
});
```

在這個例子中，`forEach` 迴圈內會先取得 `article` 的 `author` 屬性、再馬上取得 `author` 屬性這個物件底下的 `name` 屬性，並指派給 `authorName`。

只要試著存取 `articles[1]` 的 `author.name` 的話，就會因為 `articles[1].author` 相當於 `undefined` 的緣故，造成程式中斷並拋出（throw）下列錯誤：

![](/2023-12-11%20225155.png){data-zoomable}

這是因為 JavaScript 的語法規範中，不允許針對 `null` 或 `undefined` 等所謂的「Nullish value」進行屬性存取。為避免此錯誤，傳統的 JavaScript 開發過程中會這樣檢查：

```javascript
const authorName = article && article.author
  ? article.author.name
  : unde
```

但隨著資料的類型變得更多、更複雜，必須透過這種方式檢查每個屬性是否存在，就會降低程式的可讀性。因此，在 ES2020 之後，發展出了 Optional Chaining，使用「以回傳 `undefined` 代替拋出錯誤」的概念來精簡程式碼：

```javascript
const authorName = article?.author?.name;
```

從普通的 dot notation 取值改成 `?.` 後，當運算子左邊的值並非 `null` 或 `undefined` 時，才會繼續往右手邊取值下去，否則便直接回傳 `undefined`。因此在上述的 `articles` 範例中， `articles[1]` 的 authorName 就會變成 `undefined`，而非造成執行錯誤。

### 可選串連呼叫函數

可以使用可選串連來嘗試呼叫一個或許沒有存在的方法。這可能有助於，舉例來說，使用一些未能提供服務的 API ，這可能因為過時的應用或是使用者的裝置未能支援某種功能。 <br>

當需要使用的方法並不存在時，透過可選串連去進行呼叫將不會抛出錯誤，取而代之的是回傳 `undefined`：

```javascript
let result = someInterface.customMethod?.();
```

---

Reference：

> [Nullish coalescing operator (??) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) <br>
> [What is the Nullish Coalescing Operator in JavaScript, and how is it useful - freeCodeCamp](https://www.freecodecamp.org/news/what-is-the-nullish-coalescing-operator-in-javascript-and-how-is-it-useful/) <br>
> [前端開發 🦏 來談 JavaScript 的 Optional Chaining 和 Nullish Coalescing (一)](https://medium.com/%E7%A8%8B%E5%BC%8F%E7%8C%BF%E5%90%83%E9%A6%99%E8%95%89/%E4%BE%86%E8%AB%87-javascript-%E7%9A%84-optional-chaining-%E5%92%8C-nullish-coalescing-part-i-992625a1861d) <br>
> [可選串連 - MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Optional_chaining#%E5%8F%AF%E9%81%B8%E4%B8%B2%E9%80%A3%E8%A1%A8%E8%BF%B0%E5%BC%8F)