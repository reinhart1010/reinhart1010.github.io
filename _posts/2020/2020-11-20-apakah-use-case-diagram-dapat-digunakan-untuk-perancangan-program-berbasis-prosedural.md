---
layout: post
title: Apakah Use Case Diagram dapat digunakan dalam perancangan program berbasis prosedural?
categories: [binus, binus-socs]
tags: [id-id, reinhartmenjawab, comp6056]
theme_color: "#de3e80"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.5F27F687-FA30-4AB7-9885-F2DB96D1E0A4?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6056 - Program Design Methods](https://curriculum.binus.ac.id/course/comp6056/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

<b>Apakah Use Case Diagram dapat digunakan untuk pemograman berbasis prosedural?</b> Meskipun beberapa diagram UML (seperti Class Diagram) hanya berlaku untuk Object-Oriented Programming, Use Case Diagram <b>tetap dapat digunakan</b> dalam paradigma pemrograman selain OOP (termasuk Prosedural), karena:

<ol><li>Setiap program berhak untuk melakukan fungsi yang berbeda-beda melalui <b>selection control</b> (khususnya: IF statement)</li><li>Use Case Diagram tidak merincikan cara kerja setiap fungsi atau fitur yang berada di dalam program, sehingga hal ini tidak akan menjadi masalah bagi desain para program yang dibuat menggunakan paradigma prosedural</li></ol>

Salah satu contoh program prosedural yang dapat memiliki banyak fitur adalah menampilkan menu kepada para pengguna dapat dilihat di dalam <i>pseudocode</i> berikut.

<b><u>START</u></b><br>
<b>Set</b> <i>loop</i> to true<br>
<b>DO WHILE</b> <i>loop</i> = true<br>
&nbsp;&nbsp;&nbsp;&nbsp;<b>Print</b> Menu<br>
&nbsp;&nbsp;&nbsp;&nbsp;<b>Get</b> <i>menu_option</i><br>
&nbsp;&nbsp;&nbsp;&nbsp;<b>CASE</b> based on <i>menu_option</i><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1: <b>Print</b> "Your Student ID is" + <i>student_id</i><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2: <b>Print</b> "Your current credit is" + <i>student_credit</i><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3: <b>print_class_schedule()</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4: <b>Return</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;<b>ENDCASE</b><br>
<b>ENDDO</b><br>
<b><u>END</u></b>

Melalui Menu tersebut, seorang <i>End User</i> dapat memilih berbagai pilihan fitur yang ada, layaknya menu dalam aplikasi-aplikasi GUI (<i>Graphical User Interface</i>) yang sering dibuat menggunakan konsep OOP dan MVC. Dan berdasarkan kondisi <b>IF</b> yang ada, program tersebut memiliki setidaknya tiga fitur utama yakni melihat Student ID (NIM), Credit (Indeks Prestasi Kumulatif/Indeks Prestasi Semester), serta jadwal perkuliahan. Ketiga fitur ini tentunya dapat digambarkan di dalam sebuah <i>Use Case Diagram</i> meskipun program tersebut dibuat secara prosedural.

Demikian penjelasan dari saya. Terima kasih.