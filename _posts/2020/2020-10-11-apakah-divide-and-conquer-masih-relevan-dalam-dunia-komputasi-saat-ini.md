---
layout: post
title: "Apakah Divide dan Conquer masih relevan dalam dunia komputasi saat ini?"
categories: [binus, binus-socs]
tags: [id-id, reinhartmenjawab, comp6049]
theme_color: "#7C3AED"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.C003E895-2354-4286-B951-981773563FF5?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6049 - Algorithm Design and Analysis](https://curriculum.binus.ac.id/course/comp6049/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Menurut saya, penggunaan algorima yang telah dioptimalkan seperti <i>divide and conquer</i> saat ini masih dibutuhkan dalam dunia komputasi saat ini. Meskipun "komputer" secara general (PC, Laptop, dll.) sudah memiliki kapasitas yang cukup besar, perkembangan teknologi dan komputasi saat ini juga melahirkan berbagai perangkat komputer baru, seperti <i>single board computer</i> (SBC, misal: Raspberry Pi) dan <i>microcontroller</i> (misal: Arduino, <i>smart card</i>, dan perangkat robotik lainnya) yang memiliki kapasitas yang serupa dengan "komputer" pada jaman dahulu. Di sini, jika saya ingin menjalankan program-program kompleks pada perangkat-perangkat tersebut, kompleksitas waktu dan ruang/memori tentunya akan memengaruhi kinerja program tersebut. Karena itu, algoritma yang dijalankan pada program tersebut haruslah dibuat secara optimal.

Pemanfaatan algoritma-algoritma yang telah teroptimisasi juga dapat berkontribusi terhadap <i>sustainable computing</i>, di mana dengan adanya optimisasi sebuah proses, sumber daya memori dan waktu yang dibutuhkan sebuah komputer dapat berkurang untuk setiap kombinasi input dan output, yang dapat berkontribusi terhadap pengurangan konsumsi listrik dan emisi gas buang (seperti CO<sub>2</sub>) untuk keberlangsungan lingkungan hidup.

Tidak hanya itu, algoritma <i>divide and conquer</i> seperti Quick Sort dapat dimanfaatkan dalam sistem <i>parallel computing</i> (multithreading) dan <i>distributed computing</i> yang sedang berkembang saat ini. Jika <i>list</i> yang sedang disortir sangatlah besar, proses sorting tersebut dapat dipercepat dengan memecah-mecahkan <i>list</i> tersebut menjadi 2 bagian, kemudian memroses sorting terhadap salah satu bagian <i>list</i> tersebut dan sekaligus memulai <i>thread</i> baru untuk melakukan proses sorting terhadap bagian <i>list</i> lainnya. Proses multithreading ini tentunya dapat mengurangi durasi waktu yang dibutuhkan dalam <i>thread</i> utama, karena sebagian dari proses rekursif algoritma Quick Sort tersebut telah diselesaikan oleh <i>thread</i> lain pada waktu yang sama.

Demikian jawaban dari saya. Terima kasih.