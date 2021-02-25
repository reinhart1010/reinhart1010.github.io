---
layout: post
title: "Operasi Aritmetik dan Cashless Society dalam bahasa pemrograman KopiHati"
description: "Ada $'Kopi Susu' harganya 20000. $Budi membeli $'Kopi Susu' pakai $nopay cashback 30% maksimum 5000."
categories: [kopihati]
tags: [id-id]
cover_image: "https://user-images.githubusercontent.com/17312341/106588956-ff17cf80-657d-11eb-9041-90a80395930f.jpg"
---
Salah satu fitur utama yang wajib dimiliki oleh setiap bahasa pemrograman adalah kemampuan untuk menghitung operasi aritmatika, yang tentunya sudah kalian pelajari dalam mata pelajaran matematika.

<iframe class="w-full h-300" src="https://www.youtube.com/embed/rOzoWoA0b7Q" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

Banyak bahasa pemrograman seperti C, C++, Java, Python, dan JavaScript menggunakan beberapa simbol seperti `+` (tambah), `*` (kali), `%` (modulo), dan bahkan `**` (pangkat). Namun untuk mendukung terciptanya *cashless society* di Indonesia, kami juga akan menerima pembayaran ~~non-tunai~~ non-simbol menggunakan `ditambah`, `belikan`, `bayar`, `diskon`, `cashback`, dan kata kunci lainnya.

Dalam bog post ini kami akan menjelaskan daftar operator yang juga dapat digunakan di dalam bahasa KopiHati, selain operator-operator simbol yang ada di dalam bahasa pemrograman lainnya.

## Kata kunci ditambah, dikurangi, dikali, dibagi, modulo (disingkat mod), dan pangkat.
Keenam kata tersebut merupakan *alias* dari simbol operator aritmetik `+`, `-`, `*`, `/`, `%`, dan `**`. Kamu masih bisa mencampurkannya dengan simbol operator yang sudah ada seperti `()`. Namun, Anda juga dapat mencampur salah satu operator aritmetik tersebut dengan simbol `,` di dalam `()` untuk membuat sebuah keajaiban seperti berikut.

```
Ada $a (nom), isinya 2 + (3, 4, 5).
Maksudnya, variabel a = 2 + 3 + 4 + 5 = 9.

Perintah tersebut juga dapat ditulis sebagai
Ada $b (nom), isinya 2 ditambah (3, 4, 5).

Perintah tersebut setara dengan perintah SUM() di dalam aplikasi spreadsheet.
```

## Kata kunci belikan, membelikan, dan membayar
KopiHati juga memiliki sebuah kata kunci operatur khusus bernama `belikan` yang setara dengan simbol `+=` di dalam bahasa pemrograman lainnya. Anda juga dapat menggunakan kombinasi "`,` di dalam `()`" untuk mem-`belikan` lebih dari satu nilai.

```
Ada $total (nom), isinya 0.
Ada $"Green Tea Latte" (nom), harganya 25000.

Belikan $total 3 $"Green Tea Latte".
Karena itu, nilai dari $total saat ini adalah 75000 (25000 x 3).

$total = 0.

Belikan $total (5000, $"Green Tea Latte").
Karena itu, nilai dari $total saat ini adalah 30000 (25000 + 5000).
```

Selain itu, Anda juga dapat menggunakan kata kunci `membelikan` dan `membayar` seperti berikut.

```
Ada $dompet (nom), isinya 100000.
Ada $"Green Tea Latte" (nom), harganya 25000.

$dompet membelikan $"Green Tea Latte".
Karena itu, nilai dari $dompet saat ini adalah 75000 (100000 - 25000).

Ada $budi (nom), isinya 0.

$dompet membelikan $budi 2 $"Green Tea Latte".
Karena itu, nilai dari $dompet saat ini adalah 25000 (75000 - 50000).
Sedangkan, nilai dari $budi saat ini adalah 50000 (0 + 50000).

Ada $"Es Teler" (nom), harganya 15000.
$dompet membayar $"Es Teler".

Karena itu, nilai dari $dompet saat ini adalah 10000 (25000 - 15000).
Sedangkan, nilai dari $"Es Teler" masih sama, yakni 15000.

$"Es Teler" membayar 10000 kepada $dompet.

Karena itu, nilai dari $dompet saat ini adalah 20000 (10000 + 10000).
Sedangkan, nilai dari $"Es Teler" berkurang menjadi 5000 (15000 - 10000).
```

## Kata kunci diskon dan cashback
Nah, saatnya yang ditunggu-tunggu, nih! Setiap kode KopiHati dapat menggunakan kata kunci `diskon` dan `cashback` dengan syarat dan ketentuan berlaku. Berikut ini adalah contoh-contoh sintaksnya.

```
Ada $a (nom), isinya 100000 diskon 20%.
Adapun $b (nom), isinya 100000 cashback 20%.
Perintah tersebut mengurangi nilai dari $a dan $b sebanyak 20 persen (20000).
```

Kamu tentunya dapat memberikan syarat dan ketentuan di dalam perintah tersebut, dan karena itu kamu tidak usah untuk menggunakan perintah kondisi seperti `jika` untuk melakukannya.

```
cashback 20% maksimum 10000

```