---
layout: post
title: Manakah yang harus dibuat terlebih dahulu? DFD* atau Pseudocode?
description: "*Data Flow Diagram"
categories: [binus, binus-socs]
tags: [id-id, reinhartmenjawab, comp6056]
theme_color: "#de3e80"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.E99246A2-8A9D-4B94-943B-5AE1A4504247?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6056 - Program Design Methods](https://curriculum.binus.ac.id/course/comp6056/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Dalam merancang suatu program, kita tentunya harus memperhatikan ketiga komponen utama yang melengkapi sebuah program yakni Input, Process, dan Output. Menurut saya, pembentukan Data Flow Diagram sebaiknya diprioritaskan sebelum pembuatan algoritma dan Pseudocode, karena DFD tersebut dapat dipakai untuk menjelaskan alur pertukaran data yang dapat terjadi antara sebuah pihak dengan pihak yang lain.

Meskipun data yang dijelaskan dalam DFD tidak terlalu spesifik (seperti "mengirim data koordinat geolokasi dalam bentuk <i>array of double-precision floating point numbers</i>"), pertukaran data yang divisualisasikan dalam sebuah DFD akan bermanfaat bagi para programmer untuk mendapat gambaran jenis dan isi data yang akan dimasukkan, diproses, dan dikeluarkan oleh seluruh atau sebagian program yang sedang dikerjakan.

Selain itu, DFD juga dapat memudahkan para programmer untuk mengidentifikasi siapa saja yang berperan dalam memroses dan menukarkan data (melalui penjelasan <b>Logical Flow</b> dan <b>Physical Flow</b>). Karena, pihak-pihak yang sebelumnya dijelaskan dapat berupa baik sebuah perintah/process dalam algoritma, sebuah modul, seseorang (misal: Administrator), sebuah kelompok/departemen/divisi/institusi/organisasi (misal: Departemen Keuangan), sebuah mesin (misal: mesin pembuat kopi), maupun pihak eksternal (<b>External Entity</b>, seperti API dari situs tertentu, para pemirsa sebuah website, aparat kepolisian, dan sebagainya). Hal ini sangatlah penting bagi programmer untuk membedakan fitur, tugas, serta format input dan output apa saja yang akan dijalankan oleh sebuah atau sekelompok program. Jika sebuah pertukaran data dibuat oleh pengguna kepada program, maka program tersebut harus dirancang dengan input yang sesuai. Namun, jika pertukaran data tersebut terjadi antara pengguna dengan manusia lainnya, maka proses tersebut tidak usah dimasukkan ke dalam program yang dibuat.

Demikian penjelasan dari saya. Terima kasih.

## Referensi
<a href="https://blog.hubspot.com/marketing/data-flow-diagram" target="_blank">https://blog.hubspot.com/marketing/data-flow-diagram</a>