---
layout: post
title: Pembuatan Halaman Website
description: Apakah pembuatan halaman website hanya dengan menggunakan bahasa JavaScript lebih baik daripada pembuatan halaman website dengan menggunakan html dan css. Apa kekurangan dan kelebihannya dibandingkan dengan pembuatan halaman website seperti biasanya (menggunakan html dan css).
categories: [kotakode]
tags: [id-id, reinhartmenjawab, javascript, html, css]
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/pertanyaan/113/
---
> **Berikut ini adalah jawaban dari sebuah pertanyaan yang ditanyakan melalui situs Kotakode. Klik link di atas untuk melihat pertanyaan aslinya.**
> 
> Apakah pembuatan halaman website hanya dengan menggunakan bahasa JavaScript lebih baik daripada pembuatan halaman website dengan menggunakan html dan css. Apa kekurangan dan kelebihannya dibandingkan dengan pembuatan halaman website seperti biasanya (menggunakan html dan css).
> 
> contoh:
> 
> `<script type="text/javascript">"<h1>Hello WEB</h1>"</script>`

Pada umumnya, pengembangan tampilan aplikasi GUI (baik situs web, aplikasi mobile, dan program komputer lainnya) memiliki cara-cara yang berbeda. Secara garis besar, kamu bisa membuat tampilan website secara **imperatif** (menginstruksikan), **deklaratif** (mendefinisikan), dan **kombinasi** dari kedua cara tersebut.

### Cara Deklaratif

Jika kamu membuat sebuah website hanya dengan menggunakan HTML dan CSS, maka kamu sedang menggunakan cara **deklaratif** untuk membuat website tersebut. Pada kenyataannya, kamu sendiri mendefinisikan bagaimana situs tersebut seharusnya ditampilkan, mulai dari isi (seperti teks atau tag HTML lainnya), penempatan/layout, warna, dan sebagainya.

Cara deklaratif tersebut memang sangat mudah untuk dipelajari, dan orang-orang yang sama sekali belum pernah mengenal bahasa pemrograman apapun juga dapat memahami dan membuat situs tersebut dengan mudah. Namun, setiap komponen website yang dibuat secara deklaratif tersebut bersifat statis, sehingga jika kamu membuat aplikasi semacam To-Do, kamu harus menggunakan bahasa pemrograman lain seperti PHP dan Node.js untuk membuat kode HTML dan CSS baru setiap kali daftar dan isi To-Do tersebut diubah agar tampilan situs tersebut sesuai dengan data To-Do yang terbaru.

### Cara Imperatif

Sedangkan, salah satu contoh sederhana dari pembuatan tampilan **imperatif** dapat dilihat saat seseorang hendak menggunakan sebuah tag HTML khusus bernama `<canvas>`. Dalam kasus tersebut, orang tersebut dapat menginstruksikan web browser (atau lebih tepatnya web engine) seperti Google Chrome dan Firefox untuk "menulis" atau menggambar sesuatu di dalam `<canvas>`, baik sebuah lingkaran, segitiga, gambar PNG, atau sebagainya, di dalam posisi yang sudah ditentukan oleh orang tersebut. "Bahasa" HTML dan CSS sendiri tidak dapat dipakai tanpa JavaScript untuk menampilkan website secara imperatif, karena bahasa-bahasa tersebut sama sekali tidak memiliki perintah **IF-ELSE** dan **FOR** yang sering dipakai di dalam proses imperatif tersebut.

Cara imperatif ini memang dapat memberi kontrol kepada siapapun untuk mengontrol tampilan website sebelum dan sesudah tampilan tersebut di-render di dalam web browser. Namun, cara ini **ribet** karena kamu harus mengerti cara untuk:

1. Membuat objek elemen (HTML) baru, mengingat bahwa JavaScript itu juga menggunakan prinsip Object-Oriented Programming (OOP),
2. Memasukkan atribut-atribut ke dalam objek tersebut secara manual (kalau di CSS kan tinggal langsung masukkin selector seperti nama class yang tampilannya mau diatur),
3. Memanggil fungsi render untuk menampilkan elemen tersebut.

### Kombinasi

Karena cara-cara tersebut memiliki kekurangan masing-masing, para website saat ini sering menggunakan **kombinasi** antara deklaratif dan imperatif, di mana orang akan mendefinisikan tampilan komponen/template tertentu (seperti card) secara deklaratif, namun komponen-komponen tersebut akan dimasukkan secara imperatif ke dalam laman website tersebut. Hal ini dapat dilihat di dalam banyak framework JavaScript termasuk React dan Vue, di mana dalam sebuah situs React saya dapat mendefinisikan komponen HTML yang sering dipakai (seperti tombol/button, header, dan footer) secara deklaratif menggunakan "bahasa" JSX, namun komponen tersebut harus ditampilkan (di-render) secara imperatif menggunakan perintah `ReactDOM.render()` di dala JavaScript.

### Catatan
Oh iya, prinsip serta kelebihan/kekurangan atas cara-cara deklaratif, imperatif, dan kombinasi ini juga berlaku untuk pembuatan aplikasi GUI (Graphical User Interface) lain termasuk program komputer dan aplikasi ponsel. Dalam pengembangan aplikasi Android, misalnya, sebuah file XML akan mendefinisikan tampilan sebuah aplikasi secara deklaratif, sedangkan kode Java, Kotlin, atau C/C++ dapat mendefinisikan tampilan tersebut secara imperatif. Sehingga, file XML tersebut setara dengan HTML pada pengembangan website dan kode Java/Kotlin/C/C++ tersebut juga setara dengan JavaScript.