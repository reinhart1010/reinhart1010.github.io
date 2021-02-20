---
layout: post
title: "Dynamic Programming: Fibonacci Sequence"
categories: [binus, binus-socs]
tags: [id-id, comp6049]
theme_color: "#7C3AED"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.0A931BAD-7928-4A0C-A5BC-25F69E58383B?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6049 - Algorithm Design and Analysis](https://curriculum.binus.ac.id/course/comp6049/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Fibonacci Sequence merupakan sebuah deret di mana setiap angka dalam derettersebut merupakan hasil penjumlahan antara kedua bilangan sebelumnya (kecuali 2 angka pertama, yakni 1 dan 1). Jika saya ingin menghitung bilangan Fibonacci ke-<i>N</i>, saya tentunya dapat melakukannya seperti ini:

<b><u>FIB</u></b><br>
<b>Read</b> <i>N</i><br>
<b>IF</b> <i>N</i> <= 2 <b>THEN</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;<b>Return</b> 1<br>
<b>ENDIF</b><br>
<b>Return FIB(</b><i>N</i> - 2<b>) + FIB(</b><i>N</i> - 1<b>)</b><br>
<b><u>END</u></b>

Namun, jika program tersebut dijalankan dengan nilai <i>N</i> yang besar (seperti 100), program tersebut akan memakan waktu yang sangat lama. Mengapa?

Jika kita telusuri <i>pseudocode</i> tersebut, untuk memanggil <b>FIB(</b>100<b>)</b> kita harus memanggil <b>FIB(</b>99<b>)</b> dan <b>FIB(</b>98<b>)</b>. Untuk memanggil <b>FIB(</b>99<b>)</b>, saya harus memanggil <b>FIB(</b>98<b>)</b> dan  <b>FIB(</b>97<b>)</b>, sedangkan untuk memanggil <b>FIB(</b>98<b>)</b> saya harus memanggil <b>FIB(</b>97<b>)</b> dan <b>FIB(</b>96<b>)</b>. Di sini kita dapat melihat bahwa perintah <b>FIB(</b>98<b>)</b>, <b>FIB(</b>97<b>)</b>, <b>FIB(</b>96<b>)</b>, hingga <b>FIB(</b>1<b>)</b> dipanggil berulang-ulang dengan hasil yang sama (tidak ada pengacakan/<i>randomization</i> yang dilakukan oleh algoritma tersebut).

Masalah ini dapat diselesaikan dengan memodifikasi algoritma tersebut. Jika sebelumnya fungsi <b>FIB(</b><i>N</i><b>)</b> akan menghitung nilai secara rekursif, kali ini fungsi tersebut akan mengecek apakah hasil perhitungan sebelumnya sudah disimpan.

<b><u>START</u></b><br>
<b>Set</b> <i>fib_array</i><br>
<b>DO</b> <i>index</i>=1 to <i>number_of_elements</i><br>
&nbsp;&nbsp;&nbsp;&nbsp;<i>fib_array</i>(<i>index</i>) = 0<br>
<b>ENDDO</b><br>
<b>FIB(</b>100<b>)</b><br>
<b><u>END</u></b><br>

<b><u>FIB</u></b><br>
<b>Read</b> <i>N</i><br>
<b>IF</b> <i>fib_array</i>(<i>N</i>) != 0 <b>THEN</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;<b>Return</b> <i>fib_array</i>(<i>N</i>)<br>
<b>ENDIF</b><br>
<b>Set</b> <i>result</i><br>
<b>IF</b> <i>N</i> <= 2 <b>THEN</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;<i>result</i> = 1<br>
<b>ELSE</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;<i>result</i> = <b>FIB(</b><i>N</i> - 2<b>) + FIB(</b><i>N</i> - 1<b>)</b><br>
<i>fib_array</i>(<i>N</i>) = <i>result</i><br>
<b>Return</b> <i>result</i><br>
<b><u>END</u></b><br>

Teknik ini sering disebut sebagai Dynamic Programming, atau lebih spesifiknya lagi, proses Memoization. Proses ini ditujukan untuk menyimpan hasil perhitungan <b>FIB(</b><i>N</i><b>)</b> pertama yang akan dapat dipakai dalam perhitungan <b>FIB(</b><i>N</i><b>)</b> berikutnya. Teknik ini juga serupa dengan mekanisme <i>caching</i> yang sering dipakai dalam berbagai program dan software.