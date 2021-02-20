---
layout: post
title: Penerapan Modularisasi dalam program youtube-dl
categories: [binus, binus-socs]
tags: [id-id, comp6056]
theme_color: "#de3e80"
cover_image: https://user-images.githubusercontent.com/17312341/108220529-667e7380-7169-11eb-9970-2d990bf56439.png
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.3E89B33C-D4C5-4DDE-A51F-DE91858692AA?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6056 - Program Design Methods](https://curriculum.binus.ac.id/course/comp6056/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Untuk menjawab pertanyaan ini, saya akan memberikan dua contoh penerapan modularisasi dalam sebuah program. Contoh modularisasi pertama saya ambil dari salah satu software <i>Open Source</i> bernama youtube-dl (<a href="https://github.com/ytdl-org/youtube-dl" target="_blank">https://github.com/ytdl-org/youtube-dl</a>), yang bertujuan untuk mengekstrak informasi serta mengunduh (video dan audio) dari beberapa situs streaming yang ada. Contoh kedua merupakan bagian dari salah satu proyek <i>Open Source</i> yang sedang saya rancangkan, yang akan saya jelaskan pada postingan berikutnya.

Untuk dapat mengunduh sebuah video, progam youtube-dl melakukan proses-proses sebagai berikut (proses disederhanakan):

<ol><li>Menerima input (URL dan parameter) baik secara <i>command-line</i>/stdin dari pengguna, ataupun melalui panggilan API dari program lain</li><li>Mendeteksi nama dan jenis aplikasi streaming berdasarkan URL yang diterima</li><li>Meng-<i>download</i> dan mengekstrak tampilan situs web dari URL yang diambil</li><li>Mencari alamat asli video yang ditayangkan</li><li>Mengunduh video asli dari hasil ekstraksi tersebut, serta</li><li>Mengubah format audio dan video yang diterima (salah satunya melalui program atau library <a href="https://ffmpeg.org/" target="_blank">FFmpeg</a>)</li></ol>

Saat ini, program youtube-dl dapat mengekstrak video dari lebih dari 1000 website (daftar lengkap tersedia di dalam situs <a href="https://ytdl-org.github.io/youtube-dl/supportedsites.html" target="_blank">https://ytdl-org.github.io/youtube-dl/supportedsites.html</a>), termasuk situs streaming video (seperti YouTube dan Vimeo) serta situs berita internasional (seperti New York Times, ABC, dan BBC). Karena itu, agar kode sumber youtube-dl dapat dikelola dengan baik, maka keseluruhan proses pengunduhan oleh youtube-dl telah dijalankan oleh beberapa modul berikut.

Pertama, program youtube-dl dibuat menggunakan bahasa pemrograman Python dengan menerapkan konsep Object-Oriented Programming (OOP), yang memiliki beberapa class dan interface utama di antaranya:

<ul><li><b>YoutubeDL (Main class):</b> digunakan di awal saat program dijalankan, dan untuk melakukan Proses #1</li><li><b>InfoExtractor (Interface):</b> digunakan untuk mengekstrak data dari situs (Proses #3) dan mencari URL asli video tersebut (Proses #4)</li><li><b>GenericIE (implements InfoExtractor):</b> digunakan untuk mendeteksi jenis video dan/atau situs streaming yang ada (Proses #2), kemudian memanggil class InfoExtractor lainnya untuk mengekstrak sesuai dengan jenis yang ada</li><li><b>FileDownloader (Interface):</b> Melakukan pengunduhan dari hasil pengolahan InfoExtractor (Proses #5)</li><li><b>PostProcessor (Interface):</b> digunakan untuk memroses hasil download menjadi file audio/video yang diinginkan oleh pengguna (Proses #6)</li></ul>

Program youtube-dl sangat bergantung terhadap prinsip <i>polymorphism</i> untuk menjalankan proses-proses tersebut. Class <b>InfoExtractor</b>, misalnya, telah <a href="https://github.com/ytdl-org/youtube-dl/tree/master/youtube_dl/extractor" target="_blank">memiliki berbagai subclass</a> untuk menangani proses ekstraksi data dari setiap situs yang didukung. Di sini, data dari situs YouTube akan diekstrak melalui Class <b>YoutubeIE</b>, situs Vimeo dari <b>VimeoIE</b>, situs Vidio.com dari <b>VidioIE</b> dan seterusnya. Jika salah seorang kontributor ingin menambahkan dukungan terhadap situs baru, misalnya <a href="https://github.com/ytdl-org/youtube-dl/pull/24482">dari URL link share aplikasi BINUS TV</a>, maka ia hanya perlu untuk membuat sebuah class baru yang menggunakan interface <b>InfoExtractor</b> serta menghubungkan class tersebut terhadap class <b>GenericIE</b>. Sedangkan, jika salah seorang user melaporkan masalah pada program tersebut, para pengembang hanya perlu untuk mengubah sebagian (bukan keseluruhan) kode sumber program untuk memperbaikinya Karena itu, penggunaan modularisasi serta manajemen class/interface OOP yang baik pun dapat membantu proses pengembangan program dengan mudah dan cepat.

Berikut ini adalah Hierarchy Chart yang saya gambarkan berdasarkan informasi di atas.

![Hierarchy Chart](https://user-images.githubusercontent.com/17312341/108220529-667e7380-7169-11eb-9970-2d990bf56439.png)

## Referensi Utama
<ul><li><a href="https://github.com/ytdl-org/youtube-dl" target="_blank">https://github.com/ytdl-org/youtube-dl</a></li><li><a href="https://ytdl-org.github.io/youtube-dl/supportedsites.html" target="_blank">https://ytdl-org.github.io/youtube-dl/supportedsites.html</a></li></ul>

## Referensi Tambahan
<ul><li><a href="https://ffmpeg.org/" target="_blank">https://ffmpeg.org/</a></li><li><a href="https://github.com/ytdl-org/youtube-dl/pull/24482" target="_blank">https://github.com/ytdl-org/youtube-dl/pull/24482</a></li></ul>