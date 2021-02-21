---
layout: post
title: Soal Competitive Programming ini ternyata bisa diselesaikan menggunakan Regular Expression!
categories: [kotakode]
tags: [id-id, competitive-programming, regex]
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/blogs/6333
other_languages:
  en-us: /posts/2021/02/21/this-competitive-programming-question-can-be-solved-by-a-simple-regular-expression.html
---
## Soal
**Diambil dari [ICPC Indonesia National Contest (INC) 2014, Problem H](https://tlx.toki.id/problems/inc-2014/H)**

Seseorang sedang mengomel di sebuah postingan Facebook.

![image](https://sandalphon.tlx.toki.id/api/v2/problems/JIDPROGRXN7JpK5h0XB433Clweb/render/c.jpg)

Perhatikan bahwa di dalam postingan tersebut terdapat beberapa kata yang diwarnai biru. Mereka semua merupakan hashtags, karena diawali oleh sebuah karakter *hash*/pagar/#. Namun, tidak semua kata yang diawali dengan karakter tersebut dianggap sebagai hashtag menurut sistem Facebook, seperti `#)(*`, `#*C)`, dan `##CM` (hanya kata `#CM` saja yang diterima sebagai sebuah hashtag).

Sebuah hashtag yang valid (dalam kasus ini) harus dimulai dengan karakter *hash*/pagar/#, diikuti oleh sebuah alfabet (a-z, A-Z), dan dapat dakhiri oleh sekumpulan karakter alfanumerik apapun (a-z, A-Z, 0-9). Setiap hashtag **tidak boleh** mengikuti hashtag sebelumnya tanpa dipisah melalui sebuah karakter spasi atau non-alfanumerik lainnya (misalnya "^", "}", ".", dan ";"). Berikut ini adalah beberapa contoh hashtag yang valid, berdasarkan aturan tersebut.

+ **Invalid:** `#1234`, `#$1-13LL`, `#alpha#beta` (hanya `#alpha` saja yang valid), `#%#{#[}#hello` (hanya `#hello` saja yang valid)
+ **Valid:** `#t0D4y1L3aRnED`, `#alpha£#beta` (kedua `#alpha` dan `#beta` diterima sebagai hashtag yang berbeda)

Anda akan diberikan sebuah input berupa *T*, yang menunjukkan jumlah *test case* untuk menjawab soal ini (1 <= *T* <= 100), dan kemudian untuk setiap kasus Anda akan diberi sebuah string untuk dihitung (jumlah hashtag-nya). Program anda harus mengeluarkan hasil dalam *format* “Case #*X*: *A*”, di mana *X* merupakan nomor urut kasus (dari 1 sampai *T*) dan *A* merupakan jumlah hashtag yang valid. Program anda juga perlu untuk mengeluarkan seluruh hashtag valid yang dideteksi oleh algoritma Anda untuk setiap kasus yang dipisah oleh karakter *line break* / `\n`.

## Hasil Regex Pattern
Menurut saya, *pattern* regex yang tepat untuk menjawab soal tersebut adalah

```
(#[A-Za-z][0-9A-Za-z]*)(#[A-Za-z][0-9A-Za-z]*){0,1}
```

*Pattern* tersebut terdiri atas

```
(< Capture Group 1 >)(< Capture Group 2 >){0,1}
```

Seperti yang dijelaskan di atas, *pattern* ini menggunakan 2 **Capture Group** untuk mendeteksi 1 hingga 2 hashtag valid secara sekaligus. Hal ini bertujuan untuk memblokir para hashtag valid yang ternyata berdekatan dengan hashtag valid sebelumnya. Karena itu, saya nantinya akan mengambil nama hashtag valid dari **Capture Group 1**.

Isi dari Capture Group 1 dan 2 sebenarnya sama, yakni

```
#[A-Za-z][0-9A-Za-z]*
```

Di sini Anda dapat memahami bahwa *pattern* tersebut sudah mengikuti aturan-aturan hashtag valid lainnya, yakni:

1. Dimulai dengan `#`,
2. kemudian dilanjutkan oleh sebuah karakter alfabetik (`[A-Za-z]`),
3. dan diikuti oleh (0 atau lebih) karakter alfanumerik (`[0-9A-Za-z]*`).

## Penutup
Ajang-ajang perlombaan *competitive programming* seperti ICPC dan INC ini memiliki aturan bahwa hasil program yang dibuat harus dikumpulkan dalam bentuk *source code* dengan bahasa pemrograman C, C++, Java, atau Python. Untungnya, *pattern* regex tersebut dapat kemudian kita implementasikan dalam bahasa C++, Java, dan Python melalui *standard library* bahasa pemrograman masing-masing. Tahap terakhir dalam menjawab soal ini adalah membuat ptogram yang menerima format input dan output yang ditetapkan di dalam soal tersebut.

Saya penasaran apakah para kontestan INC 2014 pada waktu itu sudah menyadari bahwa soal ini dapat diselesaikan menggunakan regex, meskipun mereka juga bisa menggunakan metode atau algoritma *string matching* lain yang mungkin lebih efisien daripada metode regex ini. Namun, soal ini masih tetap menjadi salah satu favorit saya karena saya dapat menyelesaikannya dengan cara unik seperti ini.
