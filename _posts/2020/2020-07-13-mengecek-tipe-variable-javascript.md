---
layout: post
title: Mengecek Tipe Variable JavaScript
description: Bila saya mempunyai kode di bawah ini, bagaimana caranya saya bisa mengecek tipe a? const a = 1;
categories: [kotakode]
tags: [id-id, reinhartmenjawab, javascript]
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/pertanyaan/113/
---
> **Berikut ini adalah jawaban dari sebuah pertanyaan yang ditanyakan melalui situs Kotakode. Klik link di atas untuk melihat pertanyaan aslinya.**
> 
> Bila saya mempunyai kode di bawah ini, bagaimana caranya saya bisa mengecek tipe a?
> 
> `const a = 1;`

JavaScript memiliki kata kunci `typeof` (Lihat dokumentasi di [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) | [W3Schools](https://www.w3schools.com/js/js_datatypes.asp)) untuk mengetahui tipe data dan variabel. Misalnya

```
console.log(typeof "Abcde"); // "string"
console.log(typeof 500000);  // "number"
console.log(typeof false);   // "boolean"
console.log(typeof (req, res) => {res.status(200)}); // "function"

console.log(typeof 3.142);      // "number"
console.log(typeof NaN);        // "number"
console.log(typeof null);       // "object"
console.log(typeof []);         // "object"
console.log(typeof {});         // "object"
console.log(typeof /[a-z]*/gi); // "object"

console.log(typeof new String(1));
// "object", karena memanggil Constructor yang berada di dalam Object/Class bernama String
```
Anda juga dapat menggunakan `typeof` tersebut di dalam perbandingan (misal. `if`, `while`) sebagai berikut

```
let a = "Hello World!";
if (typeof a == "string"){
  console.log(a + " is a string!");
} else {
  console.log(a + " is not a string!");
}
// Hasil: "Hello World! is a string!"
```

Namun, tidak semua tipe data dapat dideteksi secara akurat. Misalnya, bilangan desimal dan bahkan `NaN` (*not a number* / bukan sebuah bilangan) akan tetap dinyatakan sebagai `number`, `array` dan `null` akan tetap dinyatakan sebagai `object`. Karena itu, JavaScript meemiliki beberapa fungsi tambahan untuk mendeteksi nilai-nilai tersebut, di antaranya:

+ `Number.isInteger()`: Untuk mengetahui bilangan bulat
+ `Number.isFinite()`: Untuk mengetahui bilangan (termasuk desimal) yang valid dan bukan `Infinity`
+ `Number.isNaN()`
+ `Array.isArray()`
+ `Object.isObject()`
+ `instanceof`: Berguna untuk mencari *parent class* dari sebuah `object`, misalnya

```
const str = new String(1);
console.log(typeof str);            // "object"
console.log(str instanceof String); // true
```