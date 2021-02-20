---
layout: post
title: Kapan menggunakan Selection dan Repetition Control Structure?
categories: [binus, binus-socs]
tags: [id-id, reinhartmenjawab, comp6056]
theme_color: "#de3e80"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.DC40C989-2092-46DD-BB8A-00787A22513E?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6056 - Program Design Methods](https://curriculum.binus.ac.id/course/comp6056/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

## Selection Control
Menurut saya, <b>selection control</b> sebaiknya digunakan jika <i>output</i> dari sebuah algoritma ditentukan berdasarkan karakteristik setiap input. Salah satu contoh sederhana dari konsep selection ini adalah algoritma untuk menentukan bilangan ganjil dan genap:
<br>
<br><b>Pseudocode</b>
<br>
<br><b><i>START</i></b>
<br><b>Read</b> input as <i>number</i>
<br><b>IF</b> <i>number</i> is divisible by 2 <b>THEN</b>
<br>    <b>Display</b> "<i>number</i> is an even number!"
<br><b>ELSE</b>
<br>    <b>Display</b> "<i>number</i> is an odd number!"
<br><b>END IF</b>
<br><b><i>END</i></b>
<br>
<br>Namun, selection control sebaiknya <b>tidak</b> digunakan saat jumlah <i>parameter</i> (hal-hal yang dipertimbangkan dalam melakukan selection) dalam suatu algoritma sangatlah banyak. Salah satu contoh yang saya berikan adalah sebuah algoritma yang mengeluarkan teks untuk menirukan suara suatu hewan.
<br>
<br><b><i>START</i></b>
<br><b>Read</b> input as <i>animal</i>
<br><b>IF</b> <i>animal</i> is "dog" <b>THEN</b>
<br>    <b>Display</b> "Woof!"
<br><b>ELSE IF</b> <i>animal</i> is "cat" <b>THEN</b>
<br>    <b>Display</b> "Meow!"
<br><b>ELSE IF</b> <i>animal</i> is "lion" <b>THEN</b>
<br>    <b>Display</b> "Roar!"
<br><b>ELSE IF</b> <i>animal</i> is "birb" <b>THEN</b>
<br>    <b>Display</b> "Chirp!"
<br><b>ELSE IF</b> <i>animal</i> is "owl" <b>THEN</b>
<br>    <b>Display</b> "Hoot!"
<br><b>ELSE IF</b> <i>animal</i> is "alpaca" <b>THEN</b>
<br>    <b>Display</b> "Hmmm..."
<br><b>ELSE IF</b> <i>animal</i> is "pig" <b>THEN</b>
<br>    <b>Display</b> "Oink..."
<br><b>ELSE IF</b> <i>animal</i> is "bee" <b>THEN</b>
<br>    <b>Display</b> "Buzz..."
<br><b>ELSE IF</b> <i>animal</i> is "horse" <b>THEN</b>
<br>    <b>Display</b> "Neigh!"
<br><b>ELSE IF</b> <i>animal</i> is "cow" <b>THEN</b>
<br>    <b>Display</b> "Moo..."
<br><b>ELSE IF</b> <i>animal</i> is "bird" <b>THEN</b>
<br>    <b>Display</b> "Tweet..."
<br><b>ELSE IF</b> <i>animal</i> is "tiger" <b>THEN</b>
<br>    <b>Display</b> "Grrrrr..."
<br><b>END IF</b>
<br><b><i>END</i></b>
<br>
<br><b>Catatan:</b> Algoritma tersebut terinspirasi dari kode sumber game <i>Yandere Simulator</i> yang sempat bocor ke publik.
<br>
<br>Jika selection control itu diteruskan untuk menerima lebih banyak nama hewan, kompleksitas waktu algoritma tersebut menjadi O(n). Padahal, algoritma tersebut dapat dipersingkat jika data "suara hewan" (String) tersebut disimpan di dalam sebuah <b>hashmap</b>, sehingga kompleksitas waktu tersebut dapat dikurangi menjadi O(1).
<br>
<br><b><i>START</i></b>
<br><b>Define</b> a <i>HashMap</i> with [key = <i>animal</i>] and [value = <i>sound</i>]
<br><b>Read</b> input as <i>animal</i>
<br><b>IF</b> <i>animal</i> is found on <i>HashMap</i> <b>THEN</b>
<br>    <b>Display</b> the <i>animal</i>'s <i>sound</i> according to the <i>HashMap</i>
<br><b>END IF</b>
<br><b><i>END</i></b>
<br>
<br>

## Repetition Control
Menurut saya <b>repetition control</b> sebaiknya digunakan jika terdapat beberapa perulangan atas perintah-perintah pada suatu algoritma. Misalnya, daripada membangun sebuah algoritma seperti ini:
<br>
<br><b><i>START</i></b>
<br><b>Display</b> "1"
<br><b>Display</b> "2"
<br><b>Display</b> "3"
<br>...
<br><b>Display</b> "98"
<br><b>Display</b> "99"
<br><b>Display</b> "100"
<br><b><i>END</i></b>
<br>
<br>Anda dapat mempersingkat algoritma tersebut menjadi
<br>
<br><b><i>START</i></b>
<br><b>Set</b> <i>number</i> to 1
<br><b>REPEAT</b>
<br>    <b>Display</b> <i>number</i>
<br>    <b>Increase</b> <i>number</i> by 1
<br><b>UNTIL</b> <i>number</i> = 101
<br><b><i>END</i></b>
<br>
<br>Melalui repetition control, Anda tidak usah menulis kode secara tidak lazim seperti ini yang justru dapat mengurangi efisiensi algoritma:
<br>
<br><b><i>START</i></b>
<br><b>Read</b> input as <i>number</i>
<br>
<br><b>IF</b> (input &gt; 0) <b>THEN</b>
<br>    <b>Display</b> "1"
<br><b>END IF</b>
<br>
<br><b>IF</b> (input &gt; 1) <b>THEN</b>
<br>    <b>Display</b> "2"
<br><b>END IF</b>
<br>
<br><b>IF</b> (input &gt; 2) <b>THEN</b>
<br>    <b>Display</b> "3"
<br><b>END IF</b>
<br>
<br>
<br><b>IF</b> (input &gt; 3) <b>THEN</b>
<br>    <b>Display</b> "4"
<br><b>END IF</b>
<br>
<br><b>IF</b> (input &gt; 4) <b>THEN</b>
<br>    <b>Display</b> "5"
<br><b>END IF</b>
<br>...
<br><b>IF</b> (input &gt; 99) <b>THEN</b>
<br>    <b>Display</b> "100"
<br><b>END IF</b>
<br><b><i>END</i></b>
<br>
<br>Namun, penggunaan repetition control juga dapat menjadi <b>kurang</b> efisien jika jumlah inkremen dalam suatu loop sangat kecil dan sama sekali tidak mengubah hasil output algoritma tersebut (jika ada perintah <b>Display</b> maupun selection control di dalamnya). Di sini, sebuah program <i>timer</i> tidak usah menghitung jumlah waktu tersisa (dalam hitungan menit) setiap detiknya.
<br>

## Referensi
<ol><li><a href="https://www.youtube.com/watch?v=7qz5GefNwh4" target="_blank">"The Horrific Yandere Simulator Coding | A Breakdown" - Spoctor (via YouTube), https://www.youtube.com/watch?v=7qz5GefNwh4</a>.</li><li><a href="https://www.youtube.com/watch?v=wxds6MAtUQ0" target="_blank">"Intro to Programming: Loops" - Codecademy (via YouTube), https://www.youtube.com/watch?v=wxds6MAtUQ0</a>.</li>
<br></ol>