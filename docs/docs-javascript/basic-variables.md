# [basic] Variable Declaration / Data Types

在 JavaScript 中，變數必須使用字母（letter）、下底線（\_）、錢號（$）作為開頭；後面的字員組成可以包含數字（0-9）。JavaScript 是區分大小寫的，大寫字母（'A' ~ 'Z'）和小寫字母（'a' ~ 'z'）皆可使用且不相等。

## 資料型別（Data types）

> Keywords：**`by value`**、**`by reference`** <br>

最新 ECMAScript 標準定義，JavaScript 內建的型別主要可以分成基本型別（Primitives）與物件型別（Object）兩大類。

- 資料型別（Primitives）大致上可以分成以下六種 :

  - Boolean：true 跟 false。
  - null：undefined 是因為某變數還沒有賦值，所以對 JavaScript 來說，它不知道該變數的值是什麼，所以要讀取該變數時，會是 undefined。
    不過 null 則是我們賦予某個變數 null 這一個值。
  - undefined：如果是宣告了，但沒有賦予某個值，這時因為對 JavaScript 來說，它不知道該變數的值是什麼，所以會印出 undefined。
  - Number：JavaScript 與一些語言不同，沒有分整數與浮點數，而是都用 number 這個原生值。不論整數或浮點數，都是 number 這個型別。
    在 JavaScript 當中，+Infinity、-Infinity 與 NaN 都是 number 這個型別，所以我們用 typeof 來檢查的話，會得到 number。
  - String
  - Symbol：ES 2015 發展出的新型別。它是一個獨特（unique）值，多半會搭配物件一起使用，作為物件的鍵 （key）。

- 物件型別（Object）
  - [ ] <mark>TODO: 待補充</mark>
