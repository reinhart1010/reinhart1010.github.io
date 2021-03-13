---
layout: post
title: Mengapa saya suka menggunakan Python selain untuk Artificial Intelligence dan Machine Learning?
description: "AI: Artificial Intelligence, bukan Adobe Illustrator. ML: Machine Learning, bukan Mobile Legends: Bang Bang"
categories: [kotakode]
tags: [id-id, python]
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/blogs/6955
---
Python, oh, Python, bahasa pemrograman yang katanya cuman populer setiap kali ngebahas tentang *Artificial Intelligence* (AI, bukan *Adobe Illustrator*) dan *Machine Learning* (ML, bukan *Mobile Legends: Bang Bang*). Salah satu adegan *hackathon* dalam K-drama "Start Up" pun menggunakan Python dengan *library* `matplotlib` untuk membuat sebuah "program" pendeteksi teks, sedangkan teman-teman saya yang berada di [jurusan Teknik Informatika (Computer Science) BINUS University](https://curriculum.binus.ac.id/program/computer-science/7/) mulai menggunakan Jupyter Notebook untuk mata-mata kuliah yang hanya berhubungan dengan AI dan ML.

Beberapa orang terdekat saya mungkin sudah mengetahui bahwa saya sering mengoding untuk hal-hal di luar urusan perkuliahan dan pekerjaan. Misalnya, saya pernah membantu membuat sebuah program C untuk membuat hampir 800 *e-certificate* untuk salah satu acara yang diselenggarakan oleh HIMTI (Himpunan Mahasiswa Teknik Informatika) BINUS University. Saya juga pernah menggunakan C untuk urusan *mail merge* acara lainnya, kemudian mendistribusikan program tersebut kepada beberapa anggota panitia untuk menjalankan menyalin teks yang dibuat oleh program tersebut. Namun, lama-kelamaan saya lebih sering dan terbiasa menggunakan Python untuk membuat *script* serupa, termasuk [sebuah *script* baru](https://twitter.com/reinhart1010/status/1369886398778544132) yang akan membuat *template* pesan secara otomatis untuk melaporkan beberapa situs *popup* palsu yang dimasukkan ke database situs [PopupDB.org](https://popupdb.org ).

**Saya justru malah tertarik menggunakan Python bukan karena soal AI dan ML.** Bahkan, saya sama sekali belum pernah menggunakan *library* seperti `numpy`, `pandas`, `matplotlib`, dan ~~bahkan~~ tentunya `tensorflow`. Saat saya diminta untuk membuat algoritma **Strongly Connected Components (SCC)** terhadap sebuah *graph*  menggunakan Python, saya hanya menggunakan struktur data `dict` biasa untuk menyimpan data *graph* tanpa menggunakan *library* apapun karena tipe data ini sangat serupa dengan tipe data `Object` dalam bahasa pemrograman JavaScript yang sudah saya kenal sebelumnya.

Berikut ini adalah beberapa jenis program selain AI dan ML yang dapat dibuat menggunakan Python, yang sekaligus menjadi alasan saya untuk menggunakan Python meskipun saya juga sudah familar dengan C dan JavaScript.

## 1. Karena lebih mudah daripada C dengan compiler/intepreter yang lebih terstandar serta high-level library
Bahasa pemrograman C dapat dikatakan sebagai sebuah bahasa yang bersifat *low-level*. C memiliki jenis tipe dan struktur data yang terbatas (seperti ukuran string dan array yang terbatas, tidak seperti bahasa pemrograman JavaScript). Hal ini membuat bahasa C (dan C++) sangat cocok untuk pemrograman program atau aplikasi yang bersifat ringan (*lightweight*) dan untuk berbagai perangkat *embedded* seperti Arduino yang memiliki kapasitas penyimpanan dan memori (RAM) yang terbatas.

Namun, C juga memiliki banyak fungsi dan *library* yang hanya spesifik terhadap para *compiler* C tertentu. Misalnya, Anda tidak dapat memanggil fungsi `strupr()` dan `strlwr()` yang didukung oleh beberapa *compiler* C untuk DOS dan Windows (Borland C++, TDM-GCC, Microsoft Visual C++) dalam GCC (GNU C Compiler) versi murni seperti yang diinstal pada perangkat sistem operasi Linux. Bahkan, kedua fungsi tersebut **bukan** merupakan fungsi yang didefinisikan dalam standar ANSI bahasa C, sehingga ketidakhadiran kedua fungsi tersebut dalam GCC masih dinilai sebagai hal yang wajar.[1]

Perbedaan seperti ini justru dapat menimbulkan berbagai masalah bagi para pengembang program C, karena mereka harus dapat beradaptasi dari satu jenis *compiler* ke dalam *compiler* yang lain agar program mereka dapat berjalan secara *cross-platform*, misalnya dengan menggunakan perintah `#ifdef` untuk mencari apakah sebuah *function* tertentu tersedia oleh *standard library* sebuah *compiler*. Oh iya, saya masih menamti-nanti adanya [masalah-masalah baru kodingan bahasa C yang ditanyakan di Kotakode](https://kotakode.com/pertanyaan/tagged/c) yang hanya disebabkan oleh perbedaan *compiler* saja.

Sedangkan, bahasa Python memiliki sebuah *intepreter* yang terstandar bagi berbagai sistem operasi dan arsitektur CPU (misal: x86, ARM, RISC-V, dan sebagainya). Sehingga, saya tidak perlu mengingat dan mengecek fungsi apa saja yang tersedia bagi sebagian besar kombinasi sistem operasi dan arsitektur tersebut. Jika saya hendak membuat sebuah HTTP request di dalam program Python saya, saya hanya perlu memanggil [*library* sistem `HTTPConnection`](https://docs.python.org/3.8/library/http.client.html#http.client.HTTPConnection.request) saja, dibandingkan dengan C/C++ yang mengharuskan saya untuk menggunakan berbagai *library* sistem *low-level* seperti `winsock` dan `libsoup` yang terkadang hanya spesifik terhadap sistem operasi tertentu saja.[2]

## 2. Karena lebih cepat daripada JavaScript (Node.js)
*Intepreter* Node.js ini sebenarnya mengadopsi sebuah *browser JavaScript engine* bernama **V8** yang juga digunakan di dalam *web browser* Google Chrome, Opera, Microsoft Edge, Vivaldi, serta *browser* berbasis Chromium lainnya. Karena itu, performa sebuah program Node.js ini sangat bergantung terhadap performa V8 sendiri. Namun, kecepatan V8 dan Node.js ini masih dapat dibilang relatif lebih lama dibandingkan dengan Python **dan bahkan lebih lama daripada Java**.

Saya sendiri pernah mencoba menyelesaikan beberapa soal *competitive programming* sederhana dalam situs [URI Online Judge](https://www.urionlinejudge.com.br/ ) menggunakan C, Python, Java, dan JavaScript. Misalnya, dalam menjawab soal [URI 1006](https://www.urionlinejudge.com.br/judge/en/problems/view/1006) yang hanya meminta untuk mencari nilai rata-rata, jawaban C dan Python saya dapat dieksekusi dalam hampir 0 detik, sedangkan jawaban program Java ini masih lebih cepat dibandingkan dengan jawaban JavaScript (meskipun menggunakan `java.util.Scanner` daripada `java.io.BufferedReader` yang lebih direkomendasikan untuk *competitive programming*).

**C** (Berhasil dijalankan dalam hampir 0 detik)

```c
#include <stdio.h>
int main(){
    double a, b, c;
    scanf("%lf\n%lf\n%lf", &a, &b, &c);
    printf("MEDIA = %.1lf\n", (a * 2 + b * 3 + c * 5) / 10);
    return 0;
}
```

**Python 3.8.2** (Berhasil dijalankan dalam 0,020 detik)

```python
# -*- coding: utf-8 -*-
a = float(input())
b = float(input())
c = float(input())

print("MEDIA = {:.1f}".format((a * 2 + b * 3 + c * 5) / 10))
```

**Java** (Berhasil dijalankan dalam 0,151 detik)

```java
import java.io.IOException;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) throws IOException {
        Scanner s = new Scanner(System.in);
        double a = s.nextDouble(), b = s.nextDouble(), c = s.nextDouble();
        System.out.printf("MEDIA = %.1f\n", (a * 2 + b * 3 + c * 5) / 10);
    }
}
```

**JavaScript** (Berhasil dijalankan dalam 0,491 detik)

```js
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log("MEDIA = " + ((lines[0] * 2 + lines[1] * 3 + lines[2] * 5)/10).toFixed(1));
```

Karena itu, secara kesimpulan Python masih dapat digunakan sebagai alternatif dari Java dan JavaScript untuk membuat program yang berperforma tinggi.

## 3. Karena Python juga bisa dipakai di luar AI dan ML
Anda mungkin pernah mengenal sebuah *framework* Python bernama Flask yang bertujuan untuk membangun aplikasi server untuk berbagai jenis *website*. Namun, Python ini ternyata juga dapat digunakan untuk mengembangkan aplikasi desktop, mobile, dan bahkan untuk perangkat *embedded* seperti Arduino.

Para pengembang Python dapat menggunakan berbagai *library* dan *framework* seperti Tkinter untuk membuat tampilan GUI terhadap program Python tersebut. Namun, selain Tkinter, bahasa ini juga dapat diintegrasikan dengan *framework* GTK dan Qt yang sering dipakai di dalam program atau aplikasi yang ditujukan untuk berbagai sistem operasi, khususnya Linux. [**PyGObject**](https://www.gtk.org/docs/language-bindings/python/ ), misalnya, telah menjadi salah satu *library* GTK untuk Python yang cukup terkenal, bahkan banyak aplikasi Linux sendiri seperti Lollypop, GNOME Music, PiTiVi, dan Meld dibuat menggunakan bahasa pemrograman Python.[3] Python juga dapat digunakan untuk mengembangkan aplikasi mobile melalui beberapa *framework* seperti Kivy, meskipun saya sendiri lebih tertarik untuk menggunakan Dart dengan Flutter.

## Kesimpulan dan Roadmap saya dalam pemrograman menggunakan Python
Saat ini saya telah memutuskan untuk menggantikan C dengan Python untuk membuat beberapa *script* CLI baru untuk membantu pengerjaan tugas saya. Program https://github.com/reinhart1010/webcompat-triagetools, misalnya, saya telah buat dalam bahasa Python untuk (saat ini) mencari alamat kontak sebuah situs dengan mengekstrak file `robots.txt` dan `sitemap.xml`. [*Script* PopupDB baru saya](https://twitter.com/reinhart1010/status/1369886398778544132) juga dibuat menggunakan Python yang terkoneksi langsung dengan salah satu instansi lokal Apache CouchDB yang telah saya pasang sebelumnya. Saya berencana untuk menggunakan Python untuk membuat *script* serupa serta membuat beberapa aplikasi GUI menggunakan PyGObject dengan GTK 4. Namun, saya mungkin juga akan belajar menggunakan beberapa *library* Python umum untuk AI dan ML seperti `numpy` dan `pandas`, khususnya agar saya dapat [menjawab pertanyaan-pertanyaan Kotakode](https://kotakode.com/pertanyaan/tagged/python ) yang terkait dengan penggunaan *library* tersebut.

Saya sebenarnya juga tertarik dalam bahasa pemrograman Cython, dan jika ada waktu saya akan mempelajarinya.

## Referensi Tambahan
[1] https://stackoverflow.com/questions/26327812/are-strupr-and-strlwr-in-string-h-part-of-the-ansi-standard
[2] https://docs.python.org/3.8/library/http.client.html#http.client.HTTPConnection.request
[3] https://github.com/unrelentingtech/awesome-gtk