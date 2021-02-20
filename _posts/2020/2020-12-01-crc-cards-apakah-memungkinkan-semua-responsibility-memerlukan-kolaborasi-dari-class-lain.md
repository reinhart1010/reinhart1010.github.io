---
layout: post
title: "CRC* Cards: Apakah memungkinkan semua Responsibility memerlukan kolaborasi dari Class lain?"
categories: [binus, binus-socs]
description: "*Class, Responsibility, Collaborators"
tags: [id-id, reinhartmenjawab, comp6056, crc-cards]
theme_color: "#de3e80"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.7DDACAA6-41C7-4DDE-9C76-942DA6E627E9?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6056 - Program Design Methods](https://curriculum.binus.ac.id/course/comp6056/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**
> 
> Apakah memungkinkan sebuah class sebagai contoh memiliki 6 responsibility namun
semua responsibility memerlukan kolaborasi dari class lain? Coba berikan 1 contoh CRC ( minimal melibatkan 2 class ) yang mendukung jawaban Anda.

Selamat malam bu,

Menurut saya, kasus yang Anda jelaskan di dalam pertanyaan tersebut dapat terjadi, di mana sebuah Class memiliki enam Responsibility yang sama-sama bergantung kepada sekumpulan Collaborators. Namun, saya masih merasa kesulitan untuk mencari referensi yang cocok, karena contoh-contoh yang diberikan dalam (calon) referensi tersebut belum memenuhi syarat yang Ibu berikan.

Saya akan menggunakan sebuah contoh Class "Ticket" dalam sistem <i>booking</i> tiket pesawat, layaknya aplikasi Traveloka, Tiket.com, dan sebagainya. Class ini dapat memiliki Responsibility sebagai berikut:

<ol><li><b>Mengakses informasi penerbangan yang disematkan pada tiket tersebut.</b> Dalam kasus ini, sebuah class "Flight" dapat menjadi Collaborator untuk Responsibility ini.</li><li><b>Mendapatkan informasi pemegang (penumpang) sah yang tertulis dalam tiket tersebut.</b> Hal ini membutuhkan informasi dari class "Passenger" sebagai Collaborator dalam Responsibility ini.</li><li><b>Mendapatkan informasi pembelian tiket yang dilakukan secara sah.</b> Karena itu, class ini juga membutuhkan class "Invoice" untuk memuat data riwayat pembayaran tiket tersebut.</li><li><b>Melakukan pembatalan terhadap tiket tersebut.</b> Hal ini akan membuat sebuah object "Returns" yang bertujuan untuk memuat dan memproses pengembalian tiket tersebut berdasarkan "Invoice" yang ada.</li><li><b>Memproses pembatalan tiket secara otomatis bila penerbangan tersebut dibatalkan.</b> Hal ini akan memanggil data dari "Flight" untuk mengecek status penerbangan, kemudian meneruskannya dengan membuat "ReturnInvoice" sebagaimana dijelaskan sebelumnya.</li><li><b>Melakukan validasi dan memproses tiket untuk penerbangan (<i>Boarding</i>).</b> Hal ini akan mengambil data dan status penerbangan dari "Flights", kemudian melakukan validasi terhadap data tiket dengan "Invoice" dan "Passenger" sebelum "Ticket" tersebut ditandai untuk <i>Check-in</i> dan <i>Boarding</i></li></ol>

Adapun beberapa CRC Card untuk class-class lainnya yang telah saya sebutkan.

<b>Flight</b>

<i>Responsibilities</i>
<ol><li>Memuat informasi tentang jadwal dan status penerbangan yang dilakukan oleh sebuah maskapai penerbangan</li><li>Memuat informasi tentang harga kursi atau tiket dalam penerbangan tersebut</li></ol>
<i>Collaborators</i>
<ol><li>Ticket</li></ol>

<b>Passenger</b>

<i>Responsibilities</i>
<ol><li>Memuat informasi tentang penumpang yang memegang sebuah tiket</li></ol>
<i>Collaborators</i>
<ol><li>Ticket</li></ol>

<b>Invoice</b>

<i>Responsibilities</i>
<ol><li>Memuat informasi tentang pembayaran yang dilakukan untuk membeli sebuah atau beberapa tiket</li><li>Memuat data pemesan tiket dan pembayar Invoice</li></ol><i>Collaborators</i>
<ol><li>Flight</li><li>Ticket</li><li>User</li></ol>

<b>ReturnInvoice</b>

<i>Responsibilities</i>
<ol><li>Memuat informasi tentang pengajuan pengembalian terhadap tiket dan Invoice</li><li>Melakukan <i>approval</i>/<i>decline</i> terhadap pengembalian tersebut</li><li>Melakukan transaksi pengembalian dana terhadap pengguna, jika pengajuan tersebut telah diterima</li></ol><i>Collaborators</i>
<ol><li>Invoice</li><li>Ticket</li><li>User</li></ol>

<b>User</b>

<i>Responsibilities</i>
<ol><li>Memuat informasi tentang pengguna sebuah aplikasi</li></ol><i>Collaborators</i>
<ol><li>Invoice</li></ol>

Demikian jawaban dari saya. Terima kasih.