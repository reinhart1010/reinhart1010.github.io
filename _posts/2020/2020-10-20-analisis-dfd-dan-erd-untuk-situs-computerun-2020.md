---
layout: post
title: Analisis DFD dan ERD untuk situs COMPUTERUN 2020
description: <b>DFD = Data Flow Diagram,<br>ERD = Entity Relationship Diagram</b>
categories: [binus, binus-socs]
tags: [id-id, comp6056, computerun2020]
theme_color: "#de3e80"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.FA2A2E95-F925-4F37-B30E-6CC00EE70253?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6056 - Program Design Methods](https://curriculum.binus.ac.id/course/comp6056/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Selamat malam ibu, dalam kesempatan kali ini, saya akan menggunakan contoh website <a href="https://computerun.id/" target="_blank">COMPUTERUN 2020</a>, yang telah saya buat dan kembangkan bersama rekan-rekan lain di HIMSISFO dan HIMTI. Website ini memiliki dua fungsi, yakni sebagai (1) salah satu media informasi resmi untuk kegiatan acara COMPUTERUN 2020, serta (2) sebagai sarana untuk mengatur pendaftaran para peserta lomba dan webinar. Namun, saya hanya akan membahas bagian website yang berhubungan dengan administrasi peserta (Fungsi 2).

Biasanya, dalam proses pendaftaran suatu acara, setiap (calon) peserta akan mendaftarkan dirinya kepada panitia acara. Sehingga, <b>External Entity</b> dalam sistem ini pun cukup jelas, yakni <b>Peserta</b> dan <b>Panitia</b>.

Website ini memiliki beberapa <b>data yang dibutuhkan bagi para Peserta</b>, yang meliputi identitas diri (Nama, Universitas Asal, NIM), informasi kontak (alamat email, nomor telepon, nomor atau ID LINE, serta nomor WhatsApp), dan bukti pembayaran. Untuk mendaftarkan diri dalam salah satu kompetisi Mini E-Sport (Mobile Legends, PUBG Mobile, dan Valorant), maka para Peserta akan juga diminta untuk mengisi ID akun game tersebut. Sedangkan, untuk kompetisi Business-IT Case dan Mobile Application Development, Peserta tersebut juga diwajibkan untuk membuat kelompok/tim, menyertakan foto Kartu Tanda Mahasiswa (KTM) dan bukti foto Twibbon (persyaratan lengkap tersedia <a href="https://computerun.id/moapps" target="_blank">di sini</a>).

Sedangkan, <b>data yang diterima oleh para Peserta</b> meliputi status pendaftaran (disetujui, ditolak, dibatalkan), nama kelompok/tim yang didaftarkan, dan riwayat kehadiran (<i>attendance</i>) peserta. Ke depannya, kemungkinan besar dokumen <i>e-certificate</i> yang telah dilegalisir juga akan dapat diunduh peserta melalui website tersebut.

Adapun juga <b>data yang akan diterima bagi Panitia</b>, yakni identitas dan kontak Peserta, daftar acara/kompetisi yang diselenggarakan, serta dokumen dan informasi lain yang dikirim oleh Peserta untuk kepentingan registrasi, pengajuan <i>e-certificate</i>, dan SAT. Dan tentunya, agar proses registrasi Peserta tersebut dapat diterima, para Panitia akan memberikan tanda persetujuan terhadap sistem.

<b>Data Store (DFD)</b>, <b>Entity (ERD)</b>, dan <b>Attribute (ERD)</b> yang terdapat dalam sistem ini adalah:

1. Daftar Event/Acara (berisi EventId, EventName, EventDate, EventLocation)
2. Daftar Peserta/User (berisi UserId, UserName, UniversityId, UserNIM, UserEmail, UserPhone, UserLINE, UserWhatsApp, UserIdMobileLegends, UserIdPubgMobile, UserIdValorant)
3. Daftar Panitia (berisi CommitteeId, CommitteeName, dan CommitteeId)
4. Daftar Universitas (berisi UniversityId dan UniversityName)
5. Daftar Registrasi (berisi RegistrationId, UserId, EventId, RegistrationStatus, dan FileId)
6. Daftar Attendance (berisi AttendanceId, RegistrationId, AttendanceType, serta AttendanceTimestamp)
7. Daftar File (untuk menampung File, berisi FileId dan FileName)

Para Entity tersebut memiliki berbagai jenis relation, yakni:
+ Many-to-One dari File menuju Registration, karena sebuah File dapat dipakai untuk lebih dari satu Registrasi
+ One-to-Many dari Peserta menuju Registrasi, karena setiap Peserta berhak untuk mendaftar lebih dari satu kali
+ Many-to-One dari Peserta menuju Universitas, karena setiap Peserta hanya boleh dikategorikan dalam satu Universitas saja
+ Many-to-One dari Registrasi menuju Event, karena setiap Registrasi hanya boleh mengacu kepada satu Event saja
+ One-to-Many dari Registrasi menuju Attendance, karena setiap Registrasi dapat memiliki lebih dari satu data riwayat Attendance (misal: data absen awal dan absen akhir)

Terakhir, sistem ini memiliki beberapa <b>proses</b>, di antaranya <b>Pendaftaran Peserta</b> (menaruh entri baru ke dalam daftar Peserta), <b>Penambahan Universitas Baru</b> (jika Universitas tersebut tidak ditemukan dalam database) <b>Pendaftaran Panitia</b> (menaruh entri baru ke dalam daftar Panitia), <b>Pendaftaran Kegiatan</b> (menaruh entri baru ke dalam daftar Registration), <b>Pengubahan Data Peserta</b>, <b>Pengubahan Status Pendaftaran</b> (mengubah RegistrationStatus), serta <b>Upload</b> (memasukkan File baru dan mencatatnya dalam database).

Demikian jawaban dari saya, terima kasih.

Catatan:
Dalam implementasi sebenarnya, daftar Peserta dan Panitia sama-sama digabungkan dalam table "User" karena memiliki data serupa seperti email dan password yang akan digunakan untuk mengakses sistem. Para User yang merupakan Panitia memiliki UniversityId yang berbeda dari umumnya, termasuk BINUS.

## Referensi:
+ <a href="https://computerun.id/" target="_blank">https://computerun.id/</a>
+ <a href="https://computerun.id/moapps" target="_blank">https://computerun.id/moapps</a>
+ <a href="https://github.com/reinhart1010/computerun-2020/" target="_blank">https://github.com/reinhart1010/computerun-2020/</a>