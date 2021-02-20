---
layout: post
title: "Dynamic Programming: Chicken McNuggets (Coin Change) Problem"
categories: [binus, binus-socs]
tags: [id-id, comp6049]
theme_color: "#7C3AED"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.994EBC68-20CD-47E6-BB71-B9D6D58B4EAD?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6049 - Algorithm Design and Analysis](https://curriculum.binus.ac.id/course/comp6049/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Selamat malam, kali ini saya akan menjelaskan masalah Coin Change Problem berdasarkan masalah nyata yang sempat populer di Amerika Serikat: <b>Chicken McNuggets (McDonalds)</b>.

<iframe class="w-full h-300" src="https://www.youtube.com/embed/vNTSugyS038" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

Pada tahun 2012, produk tersebut dijual dalam tiga jenis paket atau kemasan, dengan paket A sebanyak 6 buah, paket B sebanyak 9 buah, dan paket C sebanyak 20 buah. Para customer tidak dapat membelinya secara satuan, sehingga, jika seseorang hendak membeli sebanyak <i>N</i> satuan, maka petugas McDonalds harus mengelompokannya dalam kemasan-kemasan paket McNuggets sebelum diberikan kepadanya.

Hal ini juga menyebabkan ada sekumpulan nilai <i>N</i> yang tidak dapat dibeli di dalam restoran tersebut. Salah satu contohnya adalah 43, karena 43 dan 9 sama-sama bilangan ganjil, 43 - 9 = 34, 34 sendiri tidak bisa dibagi penuh oleh 6, 34 - 20 = 14 dan 14 - 2*6 = 2.

Jika saya ingin memesan beberapa paket McNuggets dengan total <i>N</i> buah, maka saya dapat membuat algoritma serupa dengan penerapan Coin Change problem. Setidaknya terdapat dua jenis algoritma untuk menyelesaikan masalah tersebut, yakni dengan metode Pull dan metode Push.

Metode Push memiliki predikat sebagai berikut. Agar <i>N</i> buah McNuggets dapat dikelompokkan dalam sekumpulan paket secara penuh (tanpa sisa atau kelebihan), Saya juga harus mengecek apakah setidaknya ada satu dari (<i>N</i> - 6), (<i>N</i> - 9), dan (<i>N</i> - 20) yang juga dapat dikelompokkan secara penuh.

Sedangkan, metode Pull memiliki predikat sebagai berikut. Jika <i>N</i> buah McNuggets dapat dikelompokkan secara penuh, maka <i>N</i> + 6, <i>N</i> + 9, dan <i>N</i> + 20 buah McNuggets juga dapat dikelompokkan secara penuh.

Demikian penjelasan dari saya, terima kasih.