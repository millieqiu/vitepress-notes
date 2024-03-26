# [basic] Scope & Scope Chain
<span class="subtitle">作用域（Scope）與作用域鏈（Scope Chain）</span>

## 作用域（Scope）
**JavaScript 的作用域分為三種：**
- 全域（Global Scope）
- 函式作用域（Function Scope）
- 區塊作用域（Block Scope）

## 作用鏈（Scope Chain）
當 JavaScript 使用每一個變數的時候，會先嘗試在<span class="bolder">當前作用域中</span>尋找該變數，若在當前的作用域找不到該變數，會一直往父層作用域尋找，直到全局作用域還是沒找到，就會直接報錯，這一層一層的關係，就是作用域鏈。 <br>

讓我們透過以下程式碼來了解：

```javascript
let a = 100;

function find() {
  // 在 find 函式作用域中沒有變數 a，於是透過作用域鏈往父層尋找
  // 在這邊的父層是全域，也就找到了 a 變數
  console.log(a); // 100
}

find();
```