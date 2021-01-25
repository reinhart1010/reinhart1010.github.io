---
layout: post
title: "Food Navigator"
categories: [binusian, openstreetmap]
tags: [init-import, indonesian]
---

**Kunjungi langsung di https://reinhart1010.github.io/foodnavigator**

Food Navigator adalah salah satu webapp sederhana yang menunjukkan lokasi restoran terdekat. Cukup pilih salah satu titik dan detail restoran tersebut akan muncul secara instan. 

![image](https://user-images.githubusercontent.com/17312341/70808403-319ec000-1df2-11ea-9016-da62adc756c4.png)

## Latar Belakang
Ide ini muncul dari suatu kesalahan dalam publikasi [Warta Jemaat Penerimaan Mahasiswa Baru 2019](https://drive.google.com/file/d/166TokJAsSh4MXmaX1VmHaL1Zvtosft8w/view) [PO BINUS](http://scdc.binus.ac.id/po), yang menyertakan gambar denah restoran sekitar kampus Kemanggisan (Anggrek, Kijang, Syahdan) dalam resolusi yang sangat rendah. Alhasil, sebagian besar teks dan legenda restoran tersebut tidak dapat terlihat dengan jelas.

![image](https://user-images.githubusercontent.com/17312341/70808436-43806300-1df2-11ea-9584-35a94998a13a.png)

Kemudian, sebagai salah satu [kontributor OpenStreetMap](https://www.openstreetmap.org/user/Reinhart%20Previano) saya mulai mencoba menerapkan tag baru di Indonesia, di antaranya yang menyangkut metode pembayaran (kartu debit, kartu kredit, dll.) serta pesan-antar (delivery). Saya sebelumnya juga mempublikasikan beberapa artikel di OpenStreetMap, di antaranya (dalam bahasa inggris):

+ Mapping Indonesian Payment Systems and Proposal for New Payment Tags
+ Testing Delivery Subkeys for Food-Ordering Apps

Terakhir, desain menu “buka melalui aplikasi” awalnya dirancang untuk situs acara [Hacktoberfest 2019 @BINUS](https://web.archive.org/web/20191030053755/https://hacktoberfest.mtcbin.us/) (diarsipkan melalui [Internet Archive](https://www.archive.org/)) yang diselenggarakan oleh Mobile Tech Community BINUS (serta DigitalOcean dan DEV). Kode sumber situs tersebut tersedia dalam [GitHub](https://web.archive.org/web/20191030053755/https://hacktoberfest.mtcbin.us/).

![image](https://user-images.githubusercontent.com/17312341/70808624-a96cea80-1df2-11ea-808c-8831ccc000ad.png)

## Fitur Dasar
Dalam versi pertama ini, ada beberapa fitur dasar yang dapat dinikmati secara langsung. Pertama, situs ini **juga bisa berfungsi di tempat-tempat di luar seluruh kampus BINUS yang ada**, seperti Australia, Jepang, bahkan Walt Disney World (Amerika Serikat)!

![image](https://user-images.githubusercontent.com/17312341/70808669-bf7aab00-1df2-11ea-85ca-9e5de20a28c6.png)
![image](https://user-images.githubusercontent.com/17312341/70808675-c86b7c80-1df2-11ea-9625-287232205397.png)
![image](https://user-images.githubusercontent.com/17312341/70808687-cbff0380-1df2-11ea-9f15-a5d812083f72.png)

Ini semua bisa terjadi karena database restoran yang ditampilkan berasal dari [OpenStreetMap](https://www.openstreetmap.org) melalui [OverPass API](http://overpass-api.de/), yang memungkinkan pencarian data tempat di OpenStreetMap secara cepat.

Kemudian, ada beberapa restoran yang sudah memiliki detail pembayaran yang lengkap, mulai dari tunai sampai non-tunai. **Fitur ini pasti akan membantu kalian untuk mencari restoran yang bisa dapat cashback. Benar, kan?**

![image](https://user-images.githubusercontent.com/17312341/70808781-fea8fc00-1df2-11ea-83c0-a615adeabb51.png)

Data seperti fasilitas, metode pembayaran tersebut juga dicatat melalui OpenStreetMap. Misalnya, untuk Bakmi Effata saya bisa menambahkan tag `payment:gopay_id=yes` dan `delivery:grabfood=yes` untuk menandakan bahwa restoran tersebut dapat menerima pembayaran melalui GoPay dan pesan antar melalui GrabFood. (selengkapnya di https://www.openstreetmap.org/node/6924753117)

![image](https://user-images.githubusercontent.com/17312341/70808806-0d8fae80-1df3-11ea-8a38-41b64e218fa8.png)

Jika kalian meng-klik tombol **Open With…**, ada menu khusus yang menunggu kalian. Selain melihat lokasi restoran tersebut di situs/aplikasi peta pilihan (misalnya Google Maps), kalian juga bisa meng-klik **tombol GoFood dan GrabFood untuk langsung pesan melalui aplikasi masing-masing**. Dan seperti yang kalian lihat pada gambar di atas, link tersebut tersimpan dalam *tag* `delivery:gofood:ref` dan `delivery:grabfood:ref` dalam data OpenStreetMap.

## Ketersediaan Data
Saat ini, ada beberapa data tempat yang belum lengkap. Misalnya, di sekitar Kemanggisan, baru ada beberapa tempat saja yang dicatat:

+ A&W (BINUS Anggrek)*
+ Ayam Geprek Pak Gembus^
+ Bakso Agung*
+ Baso Aci Juara^
+ Caldera Fried Chicken*
+ Crossroads Cafe (BINUS Anggrek)*
+ Chatime^
+ D’COST
+ Dhapu Kupi*
+ Gulu-Gulu^
+ Happy Bowl^
+ Janji Jiwa^
+ Food Court BINUS Kijang
+ Food Court Lt. 5 BINUS Anggrek
+ KFC
+ Mucca*
+ PomPom*
+ Pondok Maem*
+ Restoran Padang ACC*
+ Seblak Raos*
+ Starbucks (BINUS Anggrek)*
+ Warung Ibu Febri*
+ Yume Tei*

*Belum Lengkap, ^Hampir Lengkap

Kalian bisa juga menambahkan data baru melalui OpenStreetMap, dan setiap pembaruan pada [OpenStreetMap](https://www.openstreetmap.org) akan tersedia dalam Food Navigator secara instan. Ke depannya, saya akan membuat panduan singkat untuk menambahkan tag khusus yang kompatibel dengan Food Navigator. **Selamat (nyari) makan!**

**Kunjungi langsung di https://reinhart1010.github.io/foodnavigator**
