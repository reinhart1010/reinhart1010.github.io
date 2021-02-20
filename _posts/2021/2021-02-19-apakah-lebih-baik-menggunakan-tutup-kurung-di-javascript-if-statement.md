---
layout: post
title: Apakah lebih baik menggunakan tutup kurung di javascript if statement?
categories: [kotakode]
tags: [id-id, reinhartmenjawab, webdev, javascript]
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/pertanyaan/6211/
---
> **Berikut ini adalah jawaban dari sebuah pertanyaan yang ditanyakan melalui situs Kotakode. Klik link di atas untuk melihat pertanyaan aslinya.**
> 
> Saya ada lihat kode di javascript seperti 
> ```js
> if (cond) 
>   console.log("Hello world")
> ```
> saya rasa ini sangat membingungkan karena tidak ada `{}`.
> 
> Sebagai best-practice apakah lebih baik untuk menggunakan `{}` ?
> 
> Terima kasih sebelumnya

Saya sebenarnya lebih menyukai untuk menggunakan tutup kurung untuk IF-ELSE, SWITCH-CASE, FOR, WHILE, dan DO-WHILE di JavaScript. Sintaks tutup kurung pada kelima jenis *statement block* di JavaScript sebenarnya terinspirasi dari bahasa pemrograman lain, termasuk Java dan C/C++.

Bandingkan ketiga function di bawah ini.

```js
function a(n){
  if (n % 2 == 0){
    window.alert(n + " adalah nomor genap");
  } else {
    window.alert(n + " adalah nomor ganjil");
}

// Seperti yang ditanyakan
function b(n){
  if (n % 2) window.alert(n + " adalah nomor genap");
  else window.alert(n + " adalah nomor ganjil");
}

// Menggunakan ternary operator
function c(n){
  window.alert(n + " adalah nomor " + (n % 2 == 0 ? "genap" : "ganjil"));
}
```

Ketiga fungsi di atas sebenarnya melakukan hal yang sama, yakni memunculkan pesan menggunakan fungsi `window.alert()` kepada pengguna bahwa *n* merupakan bilangan ganjil atau genap. Fungsi `a(n)` menggunakan cara yang semestinya dilakukan saat membuat *statement block* saat melakukan IF condition, sedangkan kode yang Anda berikan serupa dengan fungsi `b(n)` (hanya berbeda dengan spasi dan line break). Ternary operator seperti dalam fungsi `c(n)` hanya digunakan jika Anda hendak membuat statement IF sederhana yang sudah dipastikan akan me-ngembalikan nilai tertentu. Dalam fungsi `c(n)`, ternary operator tersebut digunakan untuk mengembalikan nilai String `"genap"` untuk bilangan genap dan `"ganjil"` untuk bilangan ganjil.

**Di sini, cara penulisan *statement* IF pada fungsi `b(n)` hanya berlaku jika Anda hanya mau menaruh satu perintah di dalam *block* tersebut,** dalam kasus ini yaitu memanggil fungsi `window.alert()` saja. Jika Anda mau memasukkan lebih dari satu perintah di dalam *block tersebut*, maka Anda harus menulisnya dengan cara seperti fungsi `a(n)`.

## Referensi
+ <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else>
+ <https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Operators/Conditional_Operator>