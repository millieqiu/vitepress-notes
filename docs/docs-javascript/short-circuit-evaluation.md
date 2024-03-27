# Short-circuit Evaluation

通常我們會利用邏輯運算子來連結兩個布林值，但事實上，`OR` 跟 `AND` 運算子能做到的可不僅僅是這樣。

## OR 的短路求值

OR `||` 運算子會由左至右進行判斷，返回所有運算元中遇到的第一個 truthy value（真值），倘若前面所有運算元皆為 falsy value（假值），則回傳最後一個值。

```javascript
console.log(3 || 'Orange'); // 3
console.log('' || 'Orange'); // 'Orange'
console.log(true || 0); // true
console.log(undefined || null); // null
```

在底下的例子中，我們想知道 `person` 物件中是否有 `job` 這個 key，若沒有的話則回傳預設值 unemployed，透過短路求值，可以簡化原本用 `if` 設定預設值的方式。

```javascript
const person = {
  name: 'Jack',
  age: 34
}

// 原本的寫法
console.log(person.job ? person.job : 'unemployed'); // 'unemployed'
// 短路求值寫法
console.log(person.job || 'unemployed'); // 'unemployed'
```

## AND 的短路求值

AND `&&` 運算子的運作模式幾乎與 OR 相反，會返回所有運算元中遇到的第一個 falsy value，若前面所有運算元皆為 truthy value，則會回傳最後一個值。

```javascript
console.log(0 && 'Orange'); // 0
console.log('' && 'Orange'); // ''
console.log(true && null); // null
console.log('Apple' && 'Orange'); // 'Orange'
```

我們也可以理解為：<span class="bolder">如果第一個條件成立，才會繼續執行後面的程式碼</span>。因此可利用 `AND` 的短路求值來簡化 `if` 判斷式。

在下面的例子中，我們想確認 `person` 物件中的 `age` 值是否有大於 18，若大於 18 才會回傳「Driving allowed」字串。

```javascript
const person = {
  name: 'Jack',
  age: 34
}

// 原本的寫法
if (person.age > 18) {
  return 'Driving allowed';
}
// 短路求值
console.log(person.age > 18 && 'Driving allowed'); // 'Driving allowed'
```

::: warning 注意：
雖然透過 `AND` 短路求值可以簡短 `if` 判斷式寫法，但在程式碼中還是不宜過度運用，以免降低程式碼的易讀性，讓後續接手的人要花更多時間理解。
:::

