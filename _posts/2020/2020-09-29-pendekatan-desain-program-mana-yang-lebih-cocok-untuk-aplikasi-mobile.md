---
layout: post
title: Pendekatan desain program mana yang lebih cocok untuk aplikasi mobile?
description: Apakah procedure-driven, event-driver, atau data-driven?
categories: [binus, binus-socs]
tags: [id-id, reinhartmenjawab, comp6056]
theme_color: "#de3e80"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.B1EB8A7E-82D0-43D1-8CB3-AB8960EE49ED?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6056 - Program Design Methods](https://curriculum.binus.ac.id/course/comp6056/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Selamat pagi, berikut saya sampaikan pendapat tentang masalah tersebut. Menurut saya, desain program yang tepat untuk pengembangan aplikasi mobile dan web harus ditentukan berdasarkan fungsi dan tujuan program tersebut. Bahkan, sebuah aplikasi mobile atau web dapat menerapkan ketiga pendekatan (<i>procedure-driven</i>, <i>event-driven</i>, dan <i>data-driven</i>) secara sekaligus melalui modul-modul yang didesain untuk mendukung operasional dan kinerja aplikasi tersebut.

Pertama-tama, saya meminta maaf bila jawaban tersebut belum memuaskan atau bahkan mengecewakan Anda, karena berdasarkan para reply di dalam thread forum ini sebagian besar mahasiswa bersepakat bahwa <i>event-driven</i> merupakan pendekatan yang terbaik. Saya pun sebenarnya sudah menduga adanya jawaban tersebut karena konsep aplikasi yang dianut merupakan aplikasi dalam konteks sempit, yakni sebuah program yang dapat menampilkan antarmuka GUI (<i>Graphical User Interface</i>) kepada para pengguna <i>smartphone</i> dan internet (lebih spesifiknya <i>web browser</i>). Karena itu, pendekatan <i>event-driven</i> dalam sebuah aplikasi dapat mendorong para pengembang (<i>developer</i>) untuk berfokus terhadap kebutuhan dan pengalaman pengguna, sehingga program tersebut dapat memberikan manfaat lebih yang dapat berdampak terhadap reputasi yang diberikan oleh pengguna tersebut.

Namun, saya juga perlu untuk mengatakan bahwa pengembangan suatu aplikasi tidak selalu berfokus terhadap <i>GUI</i> dan interaksi pengguna. Bahkan, jumlah aplikasi mobile dan web yang minim bahkan sama sekali tidak memiliki modul <i>GUI</i> pun tidaklah sedikit. Salah satu contoh dari aplikasi tersebut adalah <i>Samsung Push Service</i>, sebuah aplikasi tanpa <i>frontend</i> untuk sistem operasi Android yang bertujuan untuk menerima notifikasi untuk aplikasi-aplikasi yang dikelola oleh Samsung. Berdasarkan tujuan dan fungsinya, aplikasi ini menganut kedua prinsip <i>procedure-driven</i> untuk mengecek adanya pesan baru dari server Samsung, serta <i>event-driven</i> untuk menampilkan notifikasi saat pesan baru tersebut ditemukan. Adapun juga <i>Google Play Services</i>, yakni sebuah aplikasi sistem Android yang bertujuan untuk melakukan berbagai macam integrasi layanan dan API Google di dalam Android, di antaranya proses autentikasi ("Sign in with Google"), integrasi Google Maps, integrasi Google/Firebase Cloud Messaging, integrasi G Suite (Google Drive dkk.), integrasi Google Play (Ratings, In-App Purchases, Parental Controls, dll.), dan sebagainya. Aplikasi ini justru menggunakan ketiga prinsip, yakni <i>procedure-driven</i> untuk melakukan koneksi menuju para server Google dan menyimpan preferensi setiap pengguna, <i>event-driven</i> untuk menerima input dari pengguna dan permintaan (<i>request</i>) API dari aplikasi lain, serta <i>data-driven</i> untuk memroses setiap <i>request</i> API dengan melakukan validasi, verifikasi, serta pengolahan <i>request</i> untuk menghasilkan output yang sesuai.

Berdasarkan kedua kasus aplikasi tersebut, kita juga dapat melihat bahwa pendekatan <i>event-driven</i> ini juga dapat diaplikasikan dalam penerimaan <i>request</i> API (<i>Application Programming Interface</i>) dari aplikasi-aplikasi lainnya. Sedangkan, pendekatan <i>data-driven</i> dan <i>procedure-driven</i> ini sering diimplementasikan dalam modul-modul internal, seperti modul untuk mengambil data dari internet dan modul untuk menyimpan sebuah file di dalam folder/directory yang ditentukan.

Secara kesimpulan, setiap aplikasi web dan mobile sebaiknya menggunakan pendekatan <i>event-driven</i> untuk menerima input dari pengguna (dan aplikasi lainnya melalui API). Namun, hal tersebut tidak berarti bahwa seluruh modul di dalam aplikasi harus menganut <i>event-driven</i>. Setiap aplikasi berhak untuk menggunakan pendekatan apa saja (termasuk campuran) untuk fungsi, fitur, dan tujuan yang sesuai dengan kehendak masing-masing aplikasi.

Demikian tanggapan dari saya. Terima kasih.

<b>Referensi untuk Samsung Push Services:</b>
<ul><li><a href="https://www.lifewire.com/samsung-push-service-4165507" target="_blank">https://www.lifewire.com/samsung-push-service-4165507</a></li><li><a href="https://play.google.com/store/apps/details?id=com.sec.spp.push&hl=en_US">https://play.google.com/store/apps/details?id=com.sec.spp.push&hl=en_US</a></li></ul>

<b>Referensi untuk Google Play Services:</b>
<ul><li><a href="https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en_US" target="_blank">https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en_US</a></li><li><a href="https://developer.android.com/distribute/play-services" target="_blank">https://developer.android.com/distribute/play-services</a></li></ul>