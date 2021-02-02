---
layout: post
title:  "Mari Petakan Pembayaran Nontunai Indonesia di OpenStreetMap! (Revisi)"
categories: [openstreetmap]
tags: [id-id]
as_seen_on:
  - site_type: openstreetmap
    url: https://www.openstreetmap.org/user/Reinhart Previano/diary/391780
---
**Pertama-tama, saya mengucapkan Selamat Tahun Baru yang ke 2020!!!**

[![Screenshot Description](https://webcompat.com/uploads/2020/1/f485f04c-80bd-42b6-a791-b465dd58e4da-thumb.jpeg)](https://webcompat.com/uploads/2020/1/f485f04c-80bd-42b6-a791-b465dd58e4da.jpeg)

Dengan maraknya program Gerakan Nasional Non Tunai (GNNT) yang diselenggarakan pemerintah sejak 2014, saya mengajak para penyunting peta (editor/mapper) untuk bersama-sama memetakan metode pembayaran yang diterima di Indonesia, misalnya dalam restoran, kafe, tempat parkir, halte, jalan tol, tetokoan, dan lain-lain.

## Untuk Apa Dipetakan?
Dengan memetakan pembayaran nontunai di OpenStreetMap, para pengguna dapat langsung mengetahui pembayaran yang diterima dalam tempat tersebut (setidaknya di dalam situs www.openstreetmap.org). Hal ini akan memudahkan mereka untuk mencari tempat-tempat yang menawarkan penawaran diskon/cashback dengan lebih cepat dibandingkan dengan peta daring (online) lainnya.

[![Screenshot Description](https://webcompat.com/uploads/2020/1/68edbac2-cfce-4d55-a778-cf076b406e15-thumb.jpeg)](https://webcompat.com/uploads/2020/1/68edbac2-cfce-4d55-a778-cf076b406e15.jpeg)
*Nah, kalau gini kan saya sudah tahu restoran ini bisa bayar pakai apa...*

[![Screenshot Description](https://webcompat.com/uploads/2020/1/148c1222-2b18-4db9-bf50-cb728d927213-thumb.jpeg)](https://webcompat.com/uploads/2020/1/148c1222-2b18-4db9-bf50-cb728d927213.jpeg)
*Oh, ternyata mesin vending minuman ini cuman bisa bayar pakai Flazz...*

[![Screenshot Description](https://webcompat.com/uploads/2020/1/2a31cd5b-797e-42f9-9221-88e77dab0a86-thumb.jpeg)](https://webcompat.com/uploads/2020/1/2a31cd5b-797e-42f9-9221-88e77dab0a86.jpeg)
*Bayar parkir lewat aplikasi bisa dapat cashback? Di sini ya?*

Secara tidak langsung kita juga dapat melihat pergerakan pembayaran digital di Indonesia (misal. dengan melihat frekuensi jumlah *merchant* pembayaran digital yang ada dalam perkotaan hingga pedesaan), serta memperbaiki kualitas data peta Indonesia dalam OpenStreetMap. Ini semua karena database OpenStreetMap sangat terbuka bagi siapa saja untuk mengunduh dan mengolahnya.

![image](https://user-images.githubusercontent.com/17312341/71670285-10524380-2da2-11ea-8bae-e1c9a5729f73.png)
*Contoh hasil pencarian Overpass Turbo terhadap tetokoan yang menerima pembayaran menggunakan GoPay*

## Panduan Tagging (Penandaan)
Kalau bisa bayar pakai **uang tunai**, tandai dengan `payment:cash=yes`. Kalau tidak bisa, tandai dengan `payment:cash=no`.

Kalau bisa bayar pakai **kartu uang elektronik**, tandai dengan:

+ `payment:ep_flazz=yes` untuk Flazz (BCA, Danamon, dll.)
+ `payment:ep_mandiri_emoney=yes` untuk Mandiri e-money (Bank Mandiri)
+ `payment:ep_brizzi=yes` untuk BRIZZI (BRI)
+ `payment:ep_tapcash=yes` untuk TapCash (BNI)
+ `payment:ep_bsbcash=yes` untuk BSB Cash (Bank Sumsel Babel)
+ `payment:ep_jak_lingko=yes` untuk kartu Jak Lingko (Transjakarta/MRT Jakarta/Pemprov DKI Jakarta)
+ `payment:ep_jakcard=yes` untuk kartu JakCard (Bank DKI)
+ `payment:ep_megacash=yes` untuk kartu MEGACASH (Bank MEGA)
+ `payment:ep_nobu_emoney=yes` untuk kartu NOBU E-Money (Bank NOBU)

Kalau bisa bayar pakai **aplikasi dompet digital** (ya, yang ada banyak promo *cashback*-nya), tandai dengan:

+ `payment:gopay_id=yes` untuk GoPay (untuk membedakan dari [GOPAY (Malaysia)])(https://gopay.com.my)
+ `payment:ovo=yes` untuk OVO, dan juga `payment:grabpay=yes` untuk stiker QR Code milik OVO (karena bisa bayar lewat aplikasi Grab)
+ `payment:linkaja=yes` untuk LinkAja
+ `payment:dana=yes` dan `payment:samsung_pay=yes` untuk DANA
+ `payment:yukk=yes` untuk YUKK
+ `payment:shopeepay=yes` untuk ShopeePay
+ `payment:isaku=yes` untuk i.saku
+ `payment:cashbac=yes` untuk Cashbac
+ `payment:bluepay=yes` untuk BLUEPay (diterima di semua *vending machine* BlueMart)
+ `payment:akulaku=yes` untuk Akulaku Pay
+ `payment:dimo_pay=yes` untuk Dimo Pay by QR (Untuk aplikasi seperti PayTren)
+ `payment:otto_pay=yes` untuk stiker QR Code OttoPay (misal. di Indomaret dan KFC; untuk aplikasi seperti OttoCash dan Bank DKI JakMobile)

Kalau tempat tersebut dapat menerima pembayaran melalui **QRIS (QR Code Indonesian Standard)** tandai dengan `payment:gpn_qris=yes` dan `payment:<nama bank atau dompet digital yang mengeluarkan kode QRIS>:gpn_qris=yes`, misalnya:

![image](https://user-images.githubusercontent.com/17312341/71670136-915d0b00-2da1-11ea-9385-b5d1df5cb7c9.png)

> Untuk QR Code GoPay, hanya tandai `payment:gpn_qris=yes` dan `payment:gopay_id:gpn_qris=yes` jika mempunyai QR Code yang berlogo QRIS.

Khusus untuk **kartu debit** dan **kartu kredit**, Anda harus menandai masing-masing tag berikut:

+ `payment:gpn_debit=yes` untuk GPN
+ `payment:bca_card=yes` untuk BCA Card (biasanya diterima di seluruh EDC BCA)
+ `payment:mastercard=yes` dan `payment:visa=yes` untuk kartu kredit Mastercard dan Visa (umumnya diterima dalam semua EDC bank di Indonesia)
+ `payment:maestro=yes`, `payment:mastercard_debit=yes`, `payment:visa_debit=yes`, dan `payment:visa_electron=yes` untuk kartu debit Mastercard dan Visa (umumnya diterima di semua EDC bank di Indonesia)
+ `payment:american_express=yes` untuk kartu debit American Express (AMEX)
+ `payment:jcb=yes` untuk kartu kredit JCB
+ `payment:unionpay` untuk kartu kredit UnionPay

## Ada Pertanyaan?
Jika ada berbagai pertanyaan, silakan bertanya di kolom komentar bawah ini. Saat ini saya juga aktif dalam memetakan restoran di sekitar Slipi, Tanjung Duren, dan Kemanggisan (bisa dibuktikan di situs [HDYC](https://hdyc.neis-one.org/?Reinhart%20Previano)). Terima kasih.