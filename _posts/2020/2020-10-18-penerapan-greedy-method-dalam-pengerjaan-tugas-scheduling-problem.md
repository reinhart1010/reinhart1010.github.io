---
layout: post
title: "Penerapan Greedy Method dalam pengerjaan tugas (Scheduling Problem)"
categories: [binus, binus-socs]
tags: [id-id, comp6049]
theme_color: "#7C3AED"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.D5000AF2-161E-4B35-9A9B-D7EB08A1580E?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6049 - Algorithm Design and Analysis](https://curriculum.binus.ac.id/course/comp6049/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Hari ini adalah hari Minggu, 18 Oktober 2020, dan hari ini juga adalah hari terakhir mengumpulkan berbagai tugas, termasuk tugas forum GSLC ini.

Dalam mengerjakan tugas-tugas, saya tentunya perlu untuk mengatur prioritas sebagai berikut:

```
5. Urusan Kekeluargaan dan Kerohanian (tertinggi)
4. Tugas Perkuliahan
3. Kepentingan Organisasi
2. Proyek Bisnis, Software Engineering, dan Research
1. Proyek lainnya (terendah, kecuali jika proyek tersebut merupakan bagian dari tugas kuliah)
```

Berikut adalah daftar-daftar tugas yang akan saya kerjakan.

1. Mengerjakan tugas forum GSLC tentang Scheduling Problem (Deadline: 0 Hari, Prioritas: 4, Waktu: 0,5 jam)
2. Mengikuti rapat pemilihan internal sebuah Organisasi Kemahasiswaan (Deadine: 0 Hari, Prioritas: 3, Waktu: 2,5 jam)
3. Mengerjakan mockup untuk tugas Artificial Intelligence (Deadline: 3 Hari, Prioritas: 4, Waktu: 3 jam)
4. Mengerjakan storyboard untuk tugas Artificial Intelligence (Deadline: 3 Hari, Prioritas: 4, Waktu: 2 jam)
5. Mengikuti ibadah Gereja (Deadline: 0 Hari, Prioritas: 5, Waktu: 2 jam)
6. Menyelesaikan tugas Product Design Methods tentang Data Flow Diagram (Deadline: 2 Hari, Prioritas: 4, Waktu: 3 jam)

Jika saya hanya memiliki waktu kerja selama 10 jam, tidak semua tugas-tugas tersebut dapat dikerjakan dengan sempurna. Namun, tidak semua tugas-tigas tersebut perlu diselesaikan untuk hari ini (Deadline: 0 hari). Pertanyaannya adalah, pekerjaan-pekerjaan apa saja yang harus saya lakukan terlebih dahulu?

Berdasarkan permalahan tersebut, saya dapat menggunakan algoritma Greedy Methods yang serupa dengan Knapsack Problem dalam manajemen waktu. Namun, mengingat bahwa ada beberapa tugas yang memiliki deadline yang masih panjang, saya tentunya masih dapat menyelesaikan tugas-tugas tersebut secara parsial/fractional. Untuk kasus ini saya asumsikan bahwa keseluruhan tugas tersebut dapat dikerjakan kapan saja, sehingga sudah dipastikan bahwa tidak akan ada konflik waktu antara satu tugas dengan yang lain.

Salah satu metode greedy yang bisa saya pakai adalah mencari tugas-tugas berdasarkan selisih antara deadline dengan deadline terlama, lalu dikali dengan durasi waktu yang diperlukan untuk mengerjakan tugas tersebut. Tugas dengan hasil kalkulasi tertinggi akan dikerjakan terlebih dahulu.

Berdasarkan ketentuan tersebut, saya dapat mengkalkulasikannya menjadi

1. (3 - 0) x 4 = 12
2. (3 - 0) x 3 = 9
3. (3 - 3) x 4 = 0
4. (3 - 3) x 4 = 0
5. (3 - 0) x 3 = 9
6. (3 - 2) x 4 = 4

Berdasarkan kalkulasi di atas, saya sebaiknya mengerjakan tugas nomor 5, 1, 2, 6, dan 4 terlebih dahulu, yang ternyata memakan waktu sebesar 2+0,5+2,5+3+2 = 10 jam. Meskipun alokasi waktu yang digunakan sudah cukup, saya hanya dapat menyelesaikan 4 tugas dalam sehari.

Oke, bagaimana jika saya menghitung nilai berdasarkan prioritas dibagi dengan waktu, lalu mengambil tugas dengan prioritas tertinggi? Hasil kalkulasinya akan terbentuk seperti ini.

1. 4 / 0,5 = 8
2. 3 / 2,5 = 1,2
3. 4 / 3 = 1,333...
4. 4 / 2 = 2
5. 5 / 2 = 2,5
6. 4 / 3 = 1,333...

Berdasarkan kalkulasi tersebut, saya harus mengerjakan tugas 1, 5, 4, 3 dan 6, di mana total waktu yang dikerjakan mencapai 0,5+2+2+3+3 = 10,5. Karena total waktu tersebut melebih batas, saya dapat memangkasnya dengan mengerjalan tugas terakhir selama 2,5 jam saja. Namun, hasil urutan yang diambil dari aturan ini kurang efektif karena saya tidak dapat menyelesaikan seluruh tugas tersebut secara sempurna.

Kalau misalnya kita hanya mengambil tugas-tugas dengan durasi terpendek, yakni 1+4+5+2 (dengan total 7 jam), di mana 3 jam tersebut dapat saya alokasikan untuk mengerjakan baik tugas 3, tugas 6, maupun keduanya (dengan durasi 1,5 jam masing-masing). Dengan demikian, saya dapat mengerjakan seluruh tugas meskipun tidak secara komplit.

Jika saya ingin mengerjakan tugas berdasarkan deadline terdekat, kemudian prioritas, lalu waktu di akhir, maka saya akan membandingkan tugas-tugas tersebut berdasarkan urutan tertinggi dari selisih deadline x prioritas / waktu.

1. (3 - 0) * 4 / 0,5 = 32
2. (3 - 0) * 3 / 2,5 = 3,6
3. (3 - 3) * 4 / 3 = 0
4. (3 - 3) * 4 / 2 = 0
5. (3 - 0) * 5 / 2 = 7,5
6. (3 - 2) * 4 / 3 = 1,333...

Berdasarkan kalkulasi tersebut, saya sebaiknya mengerjakan tugas nomor 1, 5, 2, dan 6, yang berjumlah 8 jam. Sisa dua jam tersebut dapat saya pakai untuk menyicil mengerjakan tugas 3 sebanyak 1,2 jam (72 menit) dan tugas 4 sebanyak 0,8 jam (48 menit). Meskipun melalui kalkulasi ini saya juga dapat memasukkan semua tugas, saya menganggapnya hasil ini adalah hasil yang optimal, karena tugas 6 memiliki deadline yang lebih dekat dibandingkan dengan tugas 4, sehingga 6 sebaiknya diselesaikan terlebih dahulu.

Berdasarkan berbagai contoh di atas, kita dapat melihat bagaimana setiap method dapat menimbulkan hasil yang berbeda. Hal ini juga berlaku bagi Knapsack dan Scheduling problem, di mana ada banyak cara untuk menyelesaikan masalah tersebut secara optimal, meski bukan merupakan solusi terbaik. Demikian penjelasan dari saya, terima kasih.