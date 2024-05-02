# Sets / Maps

在 ES6 新推出的 Sets 跟 Maps 資料型態。 <br>

先用簡單一句話破題：ES6 中<span class="bolder">如果希望「陣列（Array）」的元素不會重複，可以使用 `Set`；如果是希望物件（Object）的鍵不會重複，則可以使用 `Map`</span>。

## Set

Set 的中文翻譯與數學裡面的「集合」相同，**集合中的元素只會出現一次**，意即集合中的值是唯一的。 <br>

基本用法：

```javascript
// new Set Type
let classroom = new Set([
    "Jack",
    "Jack",
    "Alan"
]);

console.log(classroom);
// Set(2) {"Jack", "Alan"}
// 只剩下兩個元素，因為重複的 Jack 被移除了
```

### `.size`

利用 `.size` 方法而不是 `.length` 來取得 Set 物件的長度。

```javascript
console.log(classroom.size); // 2
```

### `.has`

有 `has()` 這個方法，可以``快速判斷該 Set 中是否包含某個元素``，重點不是讓我們把 Set 中的元素取出來用，並返回 true 或 false。

```javascript
console.log(classroom.has("Alan")); // true
console.log(classroom.has("Josh")); // false
```

### `.add` / `.delete`

```javascript
classroom.add("Austin");
classroom.delete("Alan");
console.log(classroom);
// Set(2) {"Jack", "Austin"}classroom.add("Austin");
classroom.delete("Alan");
console.log(classroom);
// Set(2) {"Jack", "Austin"}
```

在 Set 中沒有 index 資訊，無法像 Array 一樣利用中括號（`[]`）取得該位置的值。

::: details 🔑 老師叮嚀
我們不需要像操作 Array 一樣對 Set 取值，因為 Set 中的值都是唯一的（Unique），真正重要的資訊是「**這個值是否有被加進 Set 中**」。 <br>
如果你真的需要將資料以排序的方式儲存，並對其做存取，應該使用 Array 而不是 Set。
:::

除了 `.add` 跟 `.delete` 方法之外，也可以用 `.clear` 來清除 Set 中所有資料。

### 陣列與集合間轉換

```javascript
// 原始陣列
const product = ["skirt", "sneakers", "shirts", "sneakers", "coat", "sneakers"];

// 轉成 Set
const productSet = new Set(products);

// 將 Set 轉成 Array
const productUnique = [...productSet];
```

## Map

ES6 推出了 Map 物件，讓開發者可以透過這個資料結構進行鍵值對（key-value pairs）的操作，不同於 Object 的 **key 值只能放字串，Map 的 key 值資料型別可以是 Array、Object，也可以是另一個 Map。** <br>

Map 的內部資料結構其實就是 `[key, value]` 的形式，我們可以利用 `new` 來產生一個 Map 物件，並在建立 Map 時直接代入內容，如同下面的例子：

```javascript
// 建立 Map
let myMap = new Map(); // 建立空的 Map
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
]); // 建立 Map 時直接代入內容
```

也可以利用 `.set(key, value)` 的方式在 Map 中添加屬性：

```javascript
// new Map type
let classmates = new Map(); // 先建立一個空的 Map

// 透過 .set(key, value) 來在 Map 中添加屬性
classmates.set("name", "Asutin");
classmates.set("age", 16);
console.log(classmates);
```

Map 的 key 值可以包含不同的資料型態：

```javascript
let myMap = new Map();

let keyString = 'a string',
  keyObj = {},
  keyFunc = function () {};

// 透過 .set(key, value) 來在 Map 中添加屬性
myMap.set(keyString, 'value associated with string');
myMap.set(keyObj, 'value associated with object');
myMap.set(keyFunc, 'value associated with function');
```

### Map 的操作方法

- `set(key, value)`：設置內容

- `get(key)`：獲取指定 key 的內容，若找不到返回 `undefined`

- `has(key)`：檢查是否存在此 key，有則返回 ture，無則返回 false

- `delete(key)`：刪除指定 key 的內容，成功返回 ture，失敗返回 false

- `clear()`：刪除所有內容成員

- `size 屬性`：取得內容成員總數

::: warning 注意：

```javascript
let myMap = new Map();
myMap.set([1, 2], 'Test');
console.log(myMap.get([1, 2])); // undefined
```

原因是因為 `.set()` 中的陣列和 `.get()` 中的陣列**記憶體儲存位置不同**！ <br>

如果想讓這個操作成功的話，可以改用下面的方法代替：

```javascript
let arr = [1, 2];
myMap.set(arr, 'Test');
console.log(myMap.get(arr)); // Test
```

:::

### Map 的迭代方式

```javascript
const todos = new Map([
    ["Mon", "Wash dishes"],
    ["Tue", "go to gym 🏋"],
    ["Wed", "drinking with Enna 🍷"]
]);
```

以利用 `for...of` 方式來取得所有 key 值跟 value 值，或者將其轉換成 Array：

```javascript
// 作法等同於 [...todos.entries()]
for (let [key, value] of todos) {
    console.log(key, value);
}

// Convert Map to Array
console.log([...todos]);
console.log([...todos.keys()]);
console.log([...todos.values()]);
```

### 補充：`Map` 與 `Object` 的差異

Object 和 Map 類似。兩者都允許設置對應的鍵值對，進行檢索及刪除。正因為如此，Object 在歷史上一直被當作 Map 使用；然而在某些情況下，使用 Map 有一些重要的不同之處：<br>

1. Object 的**鍵值**大多是由「字串」組成（MDN 提到也可以是 `Symbol`，不過這邊我們先不談），而在 Map 中則可以是任意的資料型態，包括函數，對象以及原始的資料型態。<br>

2. 可以使用 `size` 屬性輕鬆地獲得 Map 的大小，而 Object 中的屬性數量必須手動確認。

3. Map 是可迭代（iterable）的，因此可以直接迭代，而在 Object 上迭代則需要以某種方式獲取其鍵並對其進行迭代。

## 總結

資料的來源通常可以分成以下三種：

- 來自程式本身

- 來自使用者介面（e.g. 使用者在網頁上的 input 輸入框填寫資料）

- 來自 Web API（通常會拿到 JSON 格式的資料）

![image](/截圖%202024-01-12%20下午5.07.30.png){data-zoomable}

---

Reference：

> [在 JavaScript 中，Map 與 object 的差別？為什麼有 object 還需要 Map？- ExplainThis.io](https://www.explainthis.io/zh-hant/swe/map-vs-object) <br>
> [[JS] JavaScript Map - PJCHENder 未整理筆記](https://pjchender.dev/javascript/js-map/) <br>
> [Map - MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Map)