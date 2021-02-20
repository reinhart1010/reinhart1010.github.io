---
layout: post
title: "Implementasi Stack dan Queue dalam pencarian BFS dan DFS terhadap Tree dan Graph"
categories: [binus, binus-socs]
tags: [id-id, comp6049]
theme_color: "#7C3AED"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.CB427B34-5159-4FFC-91C3-BCB98FD79904?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6049 - Algorithm Design and Analysis](https://curriculum.binus.ac.id/course/comp6049/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Prinsip Stack dan Queue dapat diterapkan dalam proses pencarian suatu <i>tree</i> atau <i>graph</i> melalui dua jenis algoritma yang berbeda. Di sini, Stack dapat digunakan dalam algoritma traversal <b>Depth-First Search (DFS)</b>. Sedangkan, Queue dapat digunakan dalam algoritma traversal <b>Breadth-First Search (BFS)</b>.

Salah satu perbedaan utama antara DFS dengan BFS adalah, algoritma DFS akan berusaha untuk mencari dari sebuah subtree/subgraph/<i>child</i> sampai ke tingkat terdalam sebelum sebelum mencari di <i>children</i> lainnya, sedangkan BFS akan berusaha untuk mencari semua <i>node</i> dalam tingkat yang sama, sebelum mencari para <i>node</i> dalam tingkat berikutnya.

Proses DFS menggunakan Stack untuk menentukan prioritas urutan node yang dicari, di mana <i>children</i> dari sebuah <i>node</i> akan diprioritaskan untuk dicari daripada sepupu dari <i>node</i> itu sendiri. Di sini saya akan menyertakan contoh penerapan DFS dalam pencarian <i>node</i> H pada Gambar 3.1 dalam makalah <a href="https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2008-2009/Makalah2008/lineMakalah0809-054.pdf" target="_blank">https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2008-2009/Makalah2008/Makalah0809-054.pdf</a>, yang dapat direpresentasikan dalam tabel berikut.

<table><tr><th style="background: none">Posisi Node</th><th style="background: none">Stack</th><th style="background: none">Sudah dikunjungi</th></tr><tr><td>A</td><td>A</td><td>-</td></tr><tr><td>A</td><td>B-C</td><td>A</td></tr><tr><td>B</td><td>D-E-C</td><td>A, B</td></tr><tr><td>D</td><td>E-C</td><td>A, B, D</td></tr><tr><td>E</td><td>F-G-C</td><td>A, B, D, E</td></tr><tr><td>F</td><td>G-C</td><td>A, B, D, E, F</td></tr><tr><td>F</td><td>H-I-C</td><td>A, B, D, E, F, G</td></tr><tr><td>H</td><td>I-C</td><td>A, B, D, E, F, G, <b>H</b></td></tr></table>

Sedangkan, proses BFS menggunakan Queue untuk menentukan prioritas urutan node yang dicari, di mana seluruh <i>node</i> dalam satu tingkat <i>tree</i> yang sama akan diprioritaskan sebelum para <i>node</i> yang akan ada di dalam tingkat berikutnya (yakni seluruh <i>children</i> dari para <i>node</i> yang diproses terlebih dahulu). Saya juga akan menggunakan contoh tree yang sama untuk mendemonstrasikan proses BFS dalam tabel berikut.

<table><tr><th style="background: none">Posisi Node</th><th style="background: none">Queue</th><th style="background: none">Sudah dikunjungi</th></tr><tr><td>A</td><td>A</td><td>-</td></tr><tr><td>A</td><td>C-B</td><td>A</td></tr><tr><td>B</td><td>E-D-C</td><td>A, B</td></tr><tr><td>C</td><td>E-D</td><td>A, B, C</td></tr><tr><td>D</td><td>E</td><td>A, B, C, D</td></tr><tr><td>E</td><td>G-F</td><td>A, B, C, D, E</td></tr><tr><td>F</td><td>G</td><td>A, B, C, D, E, F</td></tr><tr><td>G</td><td>I-H</td><td>A, B, C, D, E, F, G</td></tr><tr><td>H</td><td>I</td><td>A, B, D, E, F, G, <b>H</b></td></tr></table>

Proses pencarian BFS dan DFS untuk graph tidak jauh berbeda dengan tree. Untuk menggunakan BFS dan DFS ke dalam pencarian Graph, Graph tersebut akan dikonversi dalam bentuk tabel <b>Adjacency List</b> yang juga digunakan dalam pembentukan Minimum Spanning Tree (MST).
Demikian jawaban dari saya, Terima kasih.

## Referensi
<ul><li><a href="https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2008-2009/Makalah2008/lineMakalah0809-054.pdf" target="_blank">https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2008-2009/Makalah2008/Makalah0809-054.pdf</a></li><li><a href="https://www.youtube.com/watch?v=zaBhtODEL0w">https://www.youtube.com/watch?v=zaBhtODEL0w</a></li></ul>