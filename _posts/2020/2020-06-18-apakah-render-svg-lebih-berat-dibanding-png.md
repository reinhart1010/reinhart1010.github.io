---
layout: post
title: Apakah render svg lebih berat dibanding png?
categories: [qna, kotakode]
tags: [id-id, react-native]
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/pertanyaan/173/
---
> **Berikut ini adalah jawaban dari sebuah pertanyaan yang ditanyakan melalui situs Kotakode. Klik link di atas untuk melihat pertanyaan aslinya.**
> 
> File SVG seringkali lebih ringan dibanding PNG karena mereka scalable.
> Tapi, apakah ada drawback dari sisi performance pada saat SVG di render di layar? Specifically, kalau kita menggunakan library renderer seperti `react-native-svg`

Menurut saya, *rendering performance* dari sebuah file SVG sangat bergantung terhadap kompleksitas benda-benda yang dimasukkan di dalam SVG.

Pada umumnya, file PNG memang relatif lebih berat daripada SVG karena 2 alasan:

- PNG adalah sebuah format gambar *loseless* (tidak melakukan kompresi terhadap data gambar secara *bitmap*)
- PNG menyimpan data gambar berupa *bitmap* (menyimpan data gambar dalam sekumpulan *pixel*)

dan file berukuran besar tentunya akan memakan waktu lebih lama untuk dikirim dalam *network* (download, upload) dan melakukan *parsing* atas gambar tersebut.

Namun, hal ini tidak selalu menjanjikan bahwa performance sebuah file SVG lebih ringan daripada PNG.

SVG menyimpan data gambar dalam bentuk *vector* yang terdiri atas *points* (titik), *lines* (garis, termasuk bentuk-bentuk *polygon*), dan *groups* (kelompok). Setiap *points* akan dicatat berdasarkan posisi koordinat Kartesius, misal. 20px dari kiri, 30px dari kanan. Sedangkan, setiap *line* dibentuk berdasarkan fungsi matematika dalam sebuah grafik, misalnya *y* = *f*(*x*) = 2*x* + 20px dengan limit 10px ≤ *x* < 30px.

Sebagian besar dari proses *rendering* SVG melibatkan komputasi matematika atas garis-garis tersebut. Jika fungsi garis tersebut lebih kompleks (misal. melibatkan fungsi kuadratik dan memerlukan *floating-point precision*), maka waktu yang dibutuhkan untuk "menggambar" garis tersebut dapat memakan waktu lebih lama.

Tidak hanya itu, sebuah file SVG juga dapat memuat beberapa elemen seperti *gradient* dan gambar *bitmap* lainnya, yang juga dapat memakan waktu lama dalam proses *rendering*. **Karena itu, *performance* sebuah SVG hanya dapat ditentukan berdasarkan jumlah dan kompleksitas elemen yang terkandung.**