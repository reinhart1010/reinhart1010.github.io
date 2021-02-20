---
layout: post
title: Penerapan Modularisasi dalam framework chatbot Ika
categories: [ika, binus, binus-socs]
tags: [id-id, comp6056]
theme_color: "#de3e80"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.3E89B33C-D4C5-4DDE-A51F-DE91858692AA?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6056 - Program Design Methods](https://curriculum.binus.ac.id/course/comp6056/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Pada kesempatan kali ini, saya akan menjelaskan contoh penerapan modularisasi dalam salah satu proyek program yang sedang saya kembangkan. Program ini akan ditulis menggunakan bahasa pemrograman <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, yakni salah satu varian dari JavaScript dengan validasi tipe data input dan output secara ketat.

Untuk sementara ini, nama program tersebut adalah Ika (<a href="https://github.com/reinhart1010/ika" target="_blank">https://github.com/reinhart1010/ika</a>). Program ini dikembangkan secara <i>procedure-driven</i> dengan fungsi menerima dan mengirim pesan sebagai <i>chatbot</i> dalam beragam aplikasi pesan instan. Adapun tujuan dari pengembangan program ini, yakni memudahkan para pengembang (<i>developer</i>) lainnya untuk mengintegrasikan layanan <i>chatbot</i> mereka ke dalam berbagai aplikasi pesan instan (seperti LINE, Telegram, Discord, WhatsApp, serta Facebook Messenger) secara mudah.

<b>Perumusan Masalah</b>

Pertama-tama, perlu diketahui bahwa setiap aplikasi pesan instan memiliki berbagai perbedaan dalam:

<ol><li><b>proses autentikasi:</b> Menggunakan username dan password? Chatbot ID dan secret token? Atau menggunakan JWT dan OAuth2?</li><li><b>cara menerima pesan baru:</b> Apakah menggunakan sistem polling (seperti IRC dan Telegram) atau webhook?</li><li><b>tipe pesan yang dikirim:</b> Apakah saya bisa mengirim pesan video dan stiker? Apakah saya dapat menggunakan <i>button</i> dalam pesan yang dikirim?</li><li><b>tipe pesan yang diterima:</b> Apakah saya dapat menerima pesan berupa file CSV?</li></ol>

Masalah seperti yang dijelaskan dalam poin 3 dan 4 merupakan masalah yang serius dalam pengembangan <i>chatbot</i> pada umumnya. Aplikasi LINE, misalnya, dapat menerima <a href="https://developers.line.biz/en/docs/messaging-api/message-types" target="_blank">berbagai format pesan</a> dari teks sederhana hingga tipe pesan kompleks seperti Carousel dan Flex Message (isi dan layout pesan diatur menggunakan CSS flexbox). Sedangkan, aplikasi lainnya seperti WhatsApp hanya dapat menerima format pesan yang terbatas, yakni teks, gambar, audio, video, stiker, lokasi, serta file/document. Karena itu, setiap pesan yang akan dikirim dapat terdiri atas beberapa format, yang akan nanti dipilih untuk setiap aplikasi pesan instan yang ada.

```js
{
  type: "text",
  content: {
    ascii: "I'm smiling :)",
    utf8: "I'm smiling 😊",
    markdown: "**I'm smiling 😊**",
    markdown_whatsapp: "*I'm smiling 😊*"
    vendor: {
      "jp.naver.line": {
        text: "I'm smiling $",
        emojis: [
          {
            index: 12,
            productId: "5ac1bfd5040ab15980c9b435",
            emojiId: "002"
          }
        ]
      }
    }
  }
}
```

<i>Salah satu prototipe Object/record pesan teks yang sedang dikembangkan</i>

<b>Tahap Modularisasi (Modul Pengiriman Pesan)</b>

Karena itu, untuk mengirim sebuah pesan, program ini akan melakukan proses seperti berikut. Dalam table di bawah, <i>message_data</i> merupakan record (setara dengan struct dalam C/C++ dan Object di JavaScript) pesan yang akan dikirim, seperti contoh di atas. <i>user_data</i> juga merupakan sebuah record yang berisi identitas user seperti group/chatroom ID, user ID, nomor telepon, email, dan sebagainya.

<table style="text-align:left"><tr><th style="background:inherit;">Input</th><th style="background:inherit;">Process</th><th style="background:inherit;">Output</th></tr><tr><td><i>message_data</i></td><td>Validate inputs</td><td><i>final_message</i></td></tr><tr><td><i>application_name</i></td><td>Select the preferred message format according to <i>application_name</i></td><td><i>error_response</i></td></tr><tr><td><i>user_data</i></td><td>Send the message to <i>user_data</i> via <i>application_name</i></td></tr></table>

Berdasarkan data di atas, program ini kemudian akan dibagi menjadi setidaknya 4 modul, yang akan diterapkan menggunakan konsep OOP dan <i>polymorphism</i> yang serupa dengan program youtube-dl.

<ul><li>Sebuah modul untuk menghubungkan program terhadap API masing-masing aplikasi pesan instan (interface <b>Provider</b>)</li><li>Sebuah modul untuk mendefinisikan <i>record</i> jenis dan isi pesan yang ditujukan terhadap user tertentu (interface <b>MessageObject</b> dan <b>MessageContent</b>)</li><li>Sebuah modul untuk melakukan validasi terhadap format input program tersebut (class <b>Main</b> serta interface <b>Provider</b>)</li><li>Sebuah modul untuk mengolah isi pesan menjadi format yang diinginkan oleh masing-masing aplikasi (interface <b>Parser</b>, yang akan nanti diimplementasikan di dalam para class yang menganut interface <b>Provider</b>)</li></ul>

Di sini, proses parsing dan komunikasi untuk setiap aplikasi diatur dalam satu interface yang sama: <b>Provider</b>. Hal ini memang berbeda dengan mekanisme yang dianut oleh program youtube-dl (yakni memisahkan kedua hal tersebut menjadi <b>InfoExtractor</b> serta <b>FileDownloader</b>) karena format <i>payload</i> API yang dikembangkan oleh setiap aplikasi pesan instan tersebut berbeda-beda.

Dengan adanya modularisasi, program ini dapat dikembangkan lebih lanjut melalui mekanisme <i>extension</i>, baik untuk menambahkan <b>Provider</b> baru serta menyediakan <i>polyfill</i> <b>Parser</b> terhadap format pesan yang belum didukung oleh sebagian aplikasi pesan instan. Misalnya, jika user hendak mengirim sebuah dokumen PDF, sedangkan aplikasi yang dituju belum dapat menerima format file tersebut, sebuah modul <i>polyfill</i> dapat dijalankan untuk meng-<i>upload</i> file kepada web server untuk sementara, kemudian membagikan URL download dalam bentuk pesan teks kepada penerima dalam aplikasi tersebut.

## Referensi Utama
<ul><li><a href="https://github.com/reinhart1010/ika" target="_blank">https://github.com/reinhart1010/ika</a></li><li><a href="https://developers.line.biz/en/docs/messaging-api/message-types" target="_blank">https://developers.line.biz/en/docs/messaging-api/message-types</a></li><li><a href="https://core.telegram.org/bots/api" target="_blank">https://core.telegram.org/bots/api</a></li></ul>

## Referensi Tambahan
<ul><li><a href="https://github.com/ytdl-org/youtube-dl" target="_blank">https://github.com/ytdl-org/youtube-dl</a></li><li><a href="https://www.typescriptlang.org/" target="_blank">https://www.typescriptlang.org/</a></li></ul>