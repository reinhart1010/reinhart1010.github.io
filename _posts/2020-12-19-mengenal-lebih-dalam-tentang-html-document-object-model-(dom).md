---
layout: post
title: Mengenal lebih dalam tentang HTML Document Object Model (DOM)
description: Melalui entri blog ini, saya akan membahas tentang DOM dan bagaimana hal tersebut dapat dipakai untuk mengubah atribut-atribut HTML secara mudah.
categories: [kotakode, web-development]
tags: [id-id, html, javascript]
as_seen_on:
  - title: Kotakode
    url: https://kotakode.com/blogs/3235
---
Dalam mempelajari bahasa pemrograman JavaScript, Anda mungkin pernah diminta untuk mengubah tampilan sebuah tag HTML secara dinamis. Misalnya, sebuah tag `<p>` yang memiliki teks yang berubah-ubah setiap detiknya, atau sebuah tag `<div>` yang memiliki `background-color` yang dapat diubah oleh pengguna setelah pengguna tersebut memasukkan warna baru dalam tag `<input>` dan menge-klik sebuah `<button>`. Masalah-masalah tersebut sering diselesaikan menggunakan JavaScript, namun untuk memahami cara elemen-elemen HTML tersebut diubah Anda perlu mempelajari konsep dan sistem Document Object Model (DOM). Melalui entri blog ini, saya akan membahas tentang DOM dan bagaimana hal tersebut dapat dipakai untuk mengubah atribut-atribut HTML secara mudah.

Saya akan memulainya dengan sebuah tag `<h1>` yang berisikan teks "Hello, World!". Sangat sederhana, bukan?

![image.png](https://storage.googleapis.com/kotakode-prod-public/images/76c51829-4ff1-4ffe-9932-22ef029a229b-image.png)

Tag tersebut tentunya dapat dipercantik lagi dalam mengubah jenis font, warna, posisi/lokasi, dan sebagainya. Saya juga percaya bahwa Anda sering menggunakan CSS untuk mengubahnya.

![image.png](https://storage.googleapis.com/kotakode-prod-public/images/bed18d11-7a8f-4790-9f82-9b776827e204-image.png)

Tapi, sebagai sebuah tag HTML saya seharusnya juga dapat mengubah isi teks yang ada di dalam tersebut, atau memuat tag-tag HTML baru di dalamnya, misalnya dari sekedar `<h1>Hello, World!</h1>` menjadi `<h1>Hello <i>JavaScript</i>!</h1>`. Setelah mengganti warna dalam tag `<h1>` tersebut, saya dapat membuatnya menjadi seperti ini.

![image.png](https://storage.googleapis.com/kotakode-prod-public/images/af64e206-3228-444b-aa61-c5db2a240254-image.png)

Dan terakhir, melalui JavaScript saya seharusnya dapat menambahkan *event trigger* dalam tag tersebut. Misalnya, jika saya menge-klik tag `<h1>` ini, maka saya dapat menampilkan sebuah pesan *alert* dengan pesan "Halo Semuanya!".

![image.png](https://storage.googleapis.com/kotakode-prod-public/images/5025f898-bc5e-4f08-bc43-ea87832f3165-image.png)

Jika Anda pernah mempelajari tentang konsep pemrograman berbasis objek (*Object-Oriented Programming*/OOP), Anda tentunya paham bahwa setiap objek dapat memiliki berbagai atribut dan fungsi (*method*). Kabar baiknya adalah, bahasa pemrograman JavaScript sebenarnya sudah menerapkan konsep ini dalam mengolah sebuah dokumen HTML, melalui sebuah model bernama **Document Object Model (DOM)**. Dalam Document Object Model, setiap tag HTML (termasuk tag `<html>`, `<head>`, dan `<body>` sendiri) dapat direpresentasikan sebagai sebuah objek yang memiliki atribut dan fungsi yang dapat saya kategorikan menjadi lima hal berikut:

> Kelima istilah ini **bukan** merupakan istilah standar yang dipakai dalam [spesifikasi DOM yang disahkan oleh W3C](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/).


> **W3C (The World-Wide Web Consortium)** merupakan sebuah lembaga konsorsium internasional yang melakukan standarisasi terhadap teknologi web yang dipakai di seluruh dunia, termasuk spesifikasi HTML, CSS, dan JS.

1. **Atribut**: jenis tag, nama `id`, `class`, dan atribut khusus, seperti atribut `loop` dalam sebuah tag `<audio>` atau `<video>` untuk dapat memutarkan audio/video tersebut secara berulang.
2. **Isi**: memuat isi dari tag tersebut, baik berupa teks biasa maupun teks yang mengandung tag HTML di dalamnya.
3. **Tampilan**: memuat aturan tampilan yang berlaku atas tag tersebut, layaknya atribut `<div style="">` dalam HTML murni maupun aturan yang ada di dalam file CSS.
4. **Fungsi/Method**: menjalankan salah satu fungsi atau *method* yang dimiliki oleh tag tersebut, seperti memutar sebuah tag `<audio>`/`<video>` secara langsung.
5. **Event Trigger**: menjalankan fungsi atau perintah tertentu berdasarkan *event* atau kejadian yang terjadi dalam tag tersebut, di antaranya:
   + Saat tag tersebut di-klik atau ditekan (`onclick`)
   + Saat tag tersebut, khususnya `<input>`, telah terisi (`oninput`)
   + Saat pengguna menekan kombinasi *keyboard* tertentu, seperti "WASD" dalam sebuah permainan (`onkeyboardinput`)
   + Saat tag tersebut dipilih/di-*select* untuk disalin/di-*copy* (`oncopy`)

Selain DOM, JavaScript juga memiliki beberapa obyek/`Object` khusus yang memuat informasi tentang tampilan/*viewport*, jenis peramban/*web browser*, bahkan preferensi pengguna seperti bahasa utama yang dipakai (*default language*). Sebagian orang menyebutnya sebagai **Browser Object Model (BOM)**, meskipun istilah tersebut jarang muncul dalam spesifikasi resmi oleh W3C.

Setidaknya terdapat empat `Object` utama yang memenuhi kriteria tersebut, dan karena itu Anda tidak dapat membuat sebuah variabel JavaScript dengan nama-nama ini:

+ `document`: Memuat informasi tentang (keseluruhan) dokumen HTML itu sendiri. Objek ini memiliki beberapa fungsi di antaranya `document.getElementById()` dan `document.querySelector()` yang akan saya bahas nanti.
+ `window`: Memuat informasi tentang jendela *viewport* di mana HTML tersebut ditampilkan/di-*render*. Anda dapat mengubah nilai dari atribut `window.location` untuk membuat sebah *redirect*, dan menggunakan fungsi `window.open()` untuk membuka sebuah situs atau URI di tab atau jendela/*window* yang terpisah.
+ `navigator`: Memuat informasi tentang jenis dan preferensi peramban web (*web browser*) dan memuat beberapa API khusus seperti Geolocation API dan Web Share API. Salah satu atribut (bersifat *read-only*) yang terdapat dalam objek ini adalah `navigator.userAgent`, yang berfungsi untuk mendeteksi jenis peramban (Chrome, Firefox, Safari, dll.), jenis OS (Windows, macOS, Linux, Android, iOS), bahkan mengecek apakah website tersebut diakses menggunakan perangkat *smartphone* atau *tablet*.
+ `console`: Memuat beberapa fungsi untuk menampilkan teks di dalam Web Console. Jika anda sebelumnya pernah memakai JavaScript dalam Node.js, Anda mungkin pernah menggunakan perintah `console.log()` untuk melakukan hal tersebut. Dalam pemrograman website, Console ini hanya akan dimunculkan dalam panel **Web Inspector**, yang dapat digunakan untuk melakukan *logging* terhadap pesan-pesan galat/*error* yang terjadi di dalam website tersebut.

Nah, kembali ke topik soal DOM. Jika saya ingin mengubah isi dan tampilan teks `<h1>` dari "Hello, World!", Anda mungkin terbiasa untuk menambahkan atribut `id` ke dalam tag `<1>` tersebut, menjadi

```html
<h1 id="teks1">Hello, World!</h1>
```

Untuk mengubah isi teks `Hello, World` menjadi `Hello <i>JavaScript</i>!`, saya dapat menggunakan perintah **document.getElementById("teks1")** untuk mencari elemen HTML dengan atribut `id` bernilai "teks1". Hasilnya ya tag `<h1>` tadi. Jangan lupa untuk menyimpan objek tersebut (objek `Element`) ke dalam sebuah variabel, misalnya `elemenHtml`.

```js
var elemenHtml = document.getElementById("teks1");
```

Objek yang terkandung di dalam `elemenHtml` ini memiliki atribut `innerHTML` untuk mengatur isi dari elemen tersebut. Saat ini, nilai dari `elementHtml.innerHTML` adalah "Hello, World!", dan di sini kita dapat mengubahnya dengan menjalankan perintah

```js
elemenHtml.innerHTML = "Hello <i>JavaScript</i>!";
```

> **Catatan**: Jika elemen tersebut memiliki atribut lain, misalnya `<i class="color-red">`, kamu harus melakukan salah satu dari dua hal ini:
>
> 1. Mengganti karakter `"` di dalam tag HTML tersebut menjadi `\"` (Escaped character), misalnya `"Hello <i class=\"color-red\">JavaScript</i>!"`
> 2. Mengganti karakter `"` di awal dan akhir string HTML menjadi `'` atau ```, misalnya `'Hello <i class="color-red">JavaScript</i>!'`

Seluruh atribut tampilan/*style* CSS pun dapat diakses dan dimodifikasi di dalam objek ini. Jika saya ingin mengganti teks menjadi warna putih (foreground) di atas merah (background), maka saya harus menjalankan perintah

```js
elemenHtml.style.color = "#ffffff";           //Sebelumnya "black" atau "#000000" atau "inherit"
elemenHtml.style.backgroundColor = "#ff0000"; //Sebelumnya "none"
```

Dalam baris kode JavaScript terakhir, nama atribut yang digunakan untuk mengubah atribut warna latar belakang (*background color*) elemen tersebut adalah `backgroundColor`, bukan `background-color` (layaknya dalam menulis kode CSS). Hal ini karena simbol "-" dalam JavaScript merupakan salah satu simbol operator aritmetik. Karena itu, penamaan atribut tampilan di JavaScript menggunakan *style* seperti itu.

Selain `document.getElementById()`, bahasa pemrograman JavaScript juga memiliki beberapa perintah lain untuk memilih elemen HTML berdasarkan nama tag (`document.getElementsByTagName()`) dan nama class (`document.getElementsByClassName()`). Setiap Class dan nama (`<h1>`, `<img>`, dsb.) di HTML dapat dipakai di dalam lebih dari satu tag, karena itu kedua fungsi ini akan mengembalikan sekumpulan objek `Element` yang masih dapat diakses layaknya sebuah Array (misal: menggunakan fungsi `Array.forEach()`). Bahasa JavaScript juga memiliki fitur **Query Selector** (`document.querySelector()` dan `document.querySelectorAll()`) yang berfungsi untuk memilih elemen HTML berdasarkan *query* yang sering dipakai di dalam CSS untuk mengatur tampilan elemen tersebut, misalnya `#home div.card` untuk memilih sebuah `<div class="card">` yang berada di dalam sebuah elemen dengan ID `home`. Anda mungkin pernah menggunakan fitur ini dalam library **JQuery** melalui perintah `$("#home div.card")`.

Nah, demikianlah penjelasan saya tentang DOM untuk saat ini. Menurut saya, DOM sendiri akan cukup mudah untuk dipelajari jika Anda pernah mengubah atribut-atribut HTML baik melalui CSS maupun meng-edit tag HTML itu sendiri. Jika Anda ingin mengetahui jenis Methods atau Events yang dapat dimiliki oleh tag HTML tertentu, Anda dapat melihat keseluruhan dokumentasi tag tersebut di situs [MDN (Mozilla Developer Network) Web Docs](https://mdn.mozilla.org) yang cukup lengkap dibandingkan situs lainnya, misalnya W3Schools.com. Misalnya, saya dapat mengunjungi laman https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Events untuk melihat jenis-jenis Event (`onplay`, `oncomplete`, dll.) yang terdapat dalam sebuah tag `<video>`. Sampai jumpa di entri blog berikutnya!