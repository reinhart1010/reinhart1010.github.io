---
layout: post
title: "Minimax: Penerapan struktur data Heap dalam Combinatorial Game Theory"
categories: [binus, binus-socs]
tags: [id-id, comp6049]
theme_color: "#7C3AED"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.A8C12637-D362-46F8-BA7F-23F82B55A39A?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6049 - Algorithm Design and Analysis](https://curriculum.binus.ac.id/course/comp6049/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Salah satu penerapan dari Heap yang sering dipakai dalam Combinatorial Game Theory adalah Minimax Algorithm. Sesuai dengan namanya, algorithm ini memanfaatkan fungsi min() dan max() untuk menentukan langkah apa saja yang harus ditempuh agar seorang <i>maximizing player</i> (pemain yang melangkah yang lebih jauh) dapat memenangkan seorang <i>minimizing player</i> (pemain yang melangkah lebih sedikit). Namun, perlu diketahui bahwa agar struktur data Heap ini dapat dipakai, jumlah kemungkinan langkah atau <i>moves</i> yang dapat dilakukan setiap pemain haruslah 2 (dua).

Pada umumnya, sebuah Combinatorial Game memiliki karakteristik seperti berikut:

<ol><li>Permainan ini hanya terdapat 2 pemain</li><li>Permainan ini memiliki sekumpulan <i>state</i> yang memuat posisi kedua pemain (dan <i>state</i> lainnya seperti skor, penalti, dsb.)</li><li>Permainan ini memiliki peraturan yang mendefinisikan adanya langkah/<i>move</i> secara legal untuk berpindah antara satu <i>state</i> dengan yang lain. Agar permainan tersebut dinyatakan wajar dan adil, setiap pemain berhak untuk menggunakan langkah-langkah tersebut dalam <i>state</i> apapun.</li><li>Para pemain bermain secara bergiliran</li><li>Permainan tersebut dilanjutkan hingga mencapai <i>state</i> di mana tidak ada <i>move</i> legal yang dapat digunakan untuk melanjutkan permainan.</li></ol>

Pada umumnya, kita tentu berharap bahwa <i>maximizing player</i> dapat memenangkan permainan tersebut. Dengan demikian, pemain tersebut harus melakukan <i>move</i> yang dapat membuatnya melangkah lebih jauh daripada lawannya. Namun, jika ia tidak berhati-hati, kekalahan justru dapat menimpa pemain tersebut.

Karena itu, algoritma minimax bekerja sebagai berikut.

Pertama, setiap <i>state</i> direpresentasikan sebagai <i>node</i> (dalam Heap), sedangkan setiap <i>move</i> direpresentasikan sebagai arah-arah panah yang menghubungkan suatu <i>node</i> (<i>state</i>) dengan <i>children</i> (<i>state</i> berikutnya). Di dalam heap ini, setiap <i>leaf</i> (<i>node</i> yang tidak memiliki <i>children</i>) merepresentasikan <i>state</i> dimana sudah tidak ada <i>move</i> legal lagi yang dapat dipakai.

Seluruh <i>node</i> dalam tingkat ganjil merupakan <i>state</i> di mana <i>maximizing player</i> dapat melakukan <i>move</i>. Sedangkan, seluruh <i>node</i> dalam tingkat genap merupakan <i>state</i> di mana <i>minimizing player</i> dapat melakukan <i>move</i>. Jika <i>parent</i> dari sebuah <i>leaf</i> merupakan <i>node</i> tingkat ganjil, maka <i>parent</i> tersebut akan mencari nilai terbesar di antara <i>children</i> tersebut. Sebaliknya, jika <i>parent</i> dari sebuah <i>leaf</i> merupakan <i>node</i> tingkat genap, maka <i>parent</i> tersebut akan mencari nilai terkecil di antara <i>children</i> tersebut.

Proses pencarian tersebut terus dilakukan pada <i>parent</i> berikutnya, sampai ke dalam <i>root</i> node. Setelah itu, proses traversal DFS digunakan untuk mencari kombinasi <i>moves</i> yang optimal untuk mengalahkan <i>minimizing player</i>.

Demikian penjelasan dari saya. Terima kasih.

## Referensi
<ul><li><a href="https://www.youtube.com/watch?v=JT8ZuJey3s0">https://www.youtube.com/watch?v=JT8ZuJey3s0</a></li><li><a href="https://www.youtube.com/watch?v=l-hh51ncgDI">https://www.youtube.com/watch?v=l-hh51ncgDI</a></li></ul>