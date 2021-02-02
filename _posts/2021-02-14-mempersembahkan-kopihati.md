---
layout: post
title: "Mempersembahkan KopiHati"
description: "Bahasa pemrograman yang berasal dari kopi, turun ke hati."
categories: [kotakode, projects, kopihati]
tags: [id-id]
cover_image: "https://user-images.githubusercontent.com/17312341/106588956-ff17cf80-657d-11eb-9041-90a80395930f.jpg"
as_seen_on:
  - site_type: "kotakode"
    url: ""
---
**KopiHati** merupakan sebuah bahasa pemrograman yang terinspirasi dari sekelompok *brand* gerai kopi, minuman, dan kafe di Jakarta, yang sempat mengalami puncak keemasannya pada tahun 2018-2019.

Nama bahasa pemrograman ini juga terinspirasi dari kesenangan masyarakat Indonesia serta para programmer seluruh dunia dalam meminum kopi. Bahkan, nama bahasa pemrograman "Java" pun sebenarnya berasal dari varian kopi yang sering ditemui di pulau Jawa. Banyak kafe, gerai, dan warung kopi yang bertebaran di seluruh pelosok Indonesia, sedangkan Indonesia ini juga menjadi salah satu pengekspor biji dan bubuk kopi di seluruh dunia. Minuman kopi ini sering pula dijadikan sebagai meme dan bahan candaan bagi para programmer sebagai berikut.

Tujuan utama dari bahasa pemrograman KopiHati ini adalah, ya, memperkenalkan masyarakat Indonesia dalam dunia pemrograman. KopiHati memiliki berbagai sintaks yang fleksibel dan mudah dimengerti oleh sebagian besar masyarakat Indonesia, dan rencananya bahasa ini dapat dilokalisir ke bahasa daerah dan *slang* yang berada di Indonesia.

Sebuah program "Hello, World!" dalam bahasa KopiHati dapat dibuat semudah:

```
Katakan "Hello, World!".
```

tanpa memerlukan tanda-tanda kurung, titik koma, dan tentunya istilah Inggris seperti:

```python
# Python 3
print("Hello, World!")
```

```javascript
// JavaScript
console.log("Hello, World!");
```

```c
// C/C++
#include <stdio.h>
int main(){
  puts("Hello, World!");
  return 0;
}
```

```java
// Java (paling buruk)
public class Main {
  public static void main(String []args) {
    System.out.println("Hello, World!");
  }
}
```

Setiap blok perintah dalam KopiHati dapat diakhiri dengan tanda titik (".", layaknya tanda baca pada umumnya) dan/atau baris berikutnya ("\n").

## Antara Esoterik dengan Pseudocode
Bahasa ini awalnya memang dibentuk sebagai [bahasa pemrograman esoterik](https://en.wikipedia.org/wiki/Esoteric_programming_language) layaknya [ArnoldC](https://lhartikk.github.io/ArnoldC/), [LOLCODE](http://www.lolcode.org/), dan [Shakespeare Programming Language (SPL)](http://shakespearelang.sourceforge.net/), sebagai candaan dan meme atas maraknya *brand* dan franchise minuman milenial Indonesia seperti [Chatime](https://chatime.co.id/), [Dum Dum](https://www.instagram.com/dumdumthaidrinks/), [Haus!](https://www.instagram.com/haus.indonesia/), [KOI Thé](https://www.koithe.com/en/global/koi-indonesia), [Kokumi](https://kokumiworld.com/), [Kopi Kenangan](https://www.kopikenangan.com/), [Tiger Sugar](https://www.instagram.com/tigersugarindonesia/), [Xing Fu Tang](https://www.xingfutang.co.id/), dan sebagainya. Para *brand* minuman tersebut sudah mempunyai akun resmi Instagram, dan karena itu KopiHati dapat menjadi bahasa pemrograman milenial pertama yang memiliki akun resmi di Instagram.

Namun, setelah dipikir matang-matang, bahasa ini dapat berpotensi menggantikan pseudocode dengan menggunakan bahasa Indonesia dan format perintah yang mudah dibaca. Selain "Hello, World !" tadi, saya juga akan memberikan contoh konsep program yang ditulis dalam bahasa KopiHati.

```
Katakan "Selamat datang di KopiHati!".
Katakan "Nama kamu siapa?".
Tunggu jawaban $"nama pelanggan" (n). Misalnya "Nina".

Kamu perlu tahu, setiap nama variabel dan atribut objek harus diawali dengan $, layaknya PHP.

Perintah ini akan membuat sebuah variabel baru bernama "nama pelanggan".
Oh iya, nama kelas, atribut objek, dan variabel boleh pakai spasi asal pakai tanda baca $"...", $'...', atau $`...`.

Ucapkan "Halo", $"nama pelanggan". Seharusnya hasil perintah ini adalah "Halo Nina"
```

Salah satu keunggulan kode KopiHati seperti di atas adalah saya dapat menulis kata kunci (*keyword*) komentar layaknya kalimat biasa. Kata kunci seperti "Kamu perlu..." ini memang sengaja dikhususkan untuk menulis komentar. Sehingga, saya tidak perlu untuk menggunakan simbol khusus seperti `#`, `//`, dan `/* ... */`.

Sedangkan, kata kunci "Misalnya ..." dan "Seharusnya ..." ini dapat digunakan untuk menguji fungsi tersebut secara otomatis. Hal ini bertujuan agar para pemrogram KopiHati dapat melaksanakan Unit Testing sederhana secara mudah, tanpa memerlukan script dan framework khusus seperti [Mocha](https://mochajs.org/) untuk JavaScript.

Tipe data dalam KopiHati pun juga sangat disederhanakan, terinspirasi dari salah satu struk belanja franchise kopi di atas dengan Kamus Besar Bahasa Indonesia (KBBI) revisi terkini:
+ **(a)**djektiva: Object, karena memiliki deskripsi dan sifat dalam bentuk atribut dan Method
+ **(adv)**erbia: Boolean (`benar`/`salah`), `void`, dan `undefined`
+ **(n)**omina: Kalimat/String, dan tidak ada tipe data `char`
+ **(num)**eralia: Bilangan (dalam bentuk *double-precision floating point*), setara dengan `Number` dalam JavaScript, `float` dalam Python, dan `double` dalam C, C++, dan Java
+ **(pron)**omina: Pointer
+ **(v)**erba: Function (atau Method dalam Object/adjektiva)

## Contoh Tambahan
Kodingan di bawah ini adalah contoh tambahan KopiHati dengan blok **if-else** dan **for loop**.

```
Ini $Jojo (a).

$Jojo punya $"nomor telepon" (n) 080989999.

Perintah tersebut secara otomatis akan menjadikan $Jojo sebuah adjektiva dengan atribut nomina $"nomor telepon" yang memiliki nilai "080989999".

Berikut ini adalah berbagai cara lain untuk menyetel sebuah atribut dalam Objek/adjektiva

$Jojo ber-$usia (num) 21.
$alamat $Jojo (n) adalah "Jalan Melati Nomor 1, Jakarta Pusat".
$Jojo tidak punya $member (num).
["Green Tea Macchiato", "Hazelnut Milk Tea", dan "Snow Fairy"] adalah daftar $"minuman favorit" $Jojo (n).
Perintah ini akan secara otomatis memmbuat sebuah array nomina.

Kamu perlu tahu:
  Rencananya, komentar dalam program KopiHati dapat ditulis menggunakan **markdown**.

  KopiHati memang didesain untuk mengurangi pemakaian ~~kantong dan sedotan plastik~~
  berbagai jenis tanda kurung seperti (...), [...], dan {...} agar kodingannya lebih mudah dibaca oleh orang lain.
Cukup itu saja.

Katakan "Hai Jojo!"
Katakan ["Kamu mau pesen ", $"minuman favorit" $Jojo pertama, " ?"]
Tunggu jawaban $pesan (adv). Harus mau atau tidak.

Perintah berikut merupakan sebuah function bernama "kurangi".
Ada $"cek pembayaran" (v, $total, $dibayar), isinya:
  Ada $selisih, isinya $dibayar dikurangi $total.
  Jika $selisih kurang dari 0, katakan ["Uangnya belum cukup, kurang ", kurang $selisih].
  Namun, jika $selisih adalah 0, katakan "Uangnya pas ya!".
  Namun, jika cinta bertepuk sebelah tangan, katakan ["Kembali ", kurang $selisih].
Cukup itu saja.

Perintah berikut merupakan sebuah implementasi dari IF-ELSE.
Jika mau $pesan:
  Ucapkan "Totalnya Rp.20.000."
  Tanya "Masukkan nominal uang yang dibayar" untuk $nominal
  Jalankan $"cek pembayaran" 20000 dengan $nominal
Jika tidak, katakan "Oke deh."
Cukup itu saja.

Perintah berikut merupakan sebuah FOR LOOP untuk mencetak 5 angka acak/random
Ulangi cetak (nom) antara 1, 3, 5, 7, 9, 11, dan 13 sebanyak 5 kali.

Perintah di atas sama dengan
Ulangi 5 kali:
  Ada $"nomor acak" (nom), isinya antara 1, 3, 5, 7, 9, 11, dan 13.
  Cetak $"nomor acak".
Cukup itu saja.
```

## Roadmap
Bahasa KopiHati ini memiliki berbagai potensi untuk menjadi sebuah bahasa pemrograman yang:
1. mudah dipahami dan dipelajari,
2. dapat diterjemahkan dalam bahasa lain,
3. memiliki fitur-fitur modern seperti *in-built unit testing* di atas,
4. memiliki komunitas besar yang terdiri atas para programmer dan non-programmer (misalnya jurnalis), dan
5. dapat dipakai sebagai sebuah bahasa pemrograman matang untuk pengembangan software dan aplikasi baik di dalam kalangan individu maupun *enterprise*

Namun, hal tersebut tentunya tidak akan terjadi tanpa:
1. Standarisasi spesifikasi dan skema sintaks KopiHati
2. Pembuatan *intepreter* resmi untuk menguji spesifikasi dan menjalankan kodingan KopiHati
3. Pembuatan module dan *library* system yang dapat dipakai dalam program KopiHati lainnya
4. Melakukan studi banding dengan kerajinan sastra dan jurnalistik untuk mengevaluasi efisiensi KopiHati dalam mengajarkan pemrograman bagi masyarakat luas
5. Membentuk komunitas dan organisasi, seperti [Python Software Foundation](https://www.python.org/psf/) dan [OpenJS Foundation](https://openjsf.org/), untuk melanjutkan pengembangan bahasa pemrograman KopiHati dalam jangka panjang

Demikianlah

