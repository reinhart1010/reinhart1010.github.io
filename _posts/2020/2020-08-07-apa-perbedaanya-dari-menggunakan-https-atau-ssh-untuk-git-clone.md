---
layout: post
title: Apa perbedaanya dari menggunakan https atau ssh untuk git clone?
description: Seringkali ketika mencoba untuk git clone sebuah repository, bisa milih antara menggunakan ssh atau https. Ada yang tahu apa perbedaanya dan kapan untuk menggunakannya?
categories: [kotakode]
tags: [id-id, git]
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/pertanyaan/691/
---
> **Berikut ini adalah jawaban dari sebuah pertanyaan yang ditanyakan melalui situs Kotakode. Klik link di atas untuk melihat pertanyaan aslinya.**
> 
> Seringkali ketika mencoba untuk `git clone` sebuah repository, bisa milih antara menggunakan `ssh` atau `https`. Ada yang tahu apa perbedaanya dan kapan untuk menggunakannya?

Ya, Git sendiri memang dapat menggunakan  baik protokol SSH maupun HTTPS. Di sini, saya merekomendasikan untuk menggunakan HTTPS dengan berbagai pertimbangan.

## 1. Produktivitas
Proses otentikasi Git melalui HTTPS saat ini bergantung pada username dan password (atau Access Token). Sedangkan, otentikasi Git melalui SSH bergantung kepada *public key* SSH yang disimpan oleh perangkat komputer yang mengaksesnya. Di sini, proses `git remote` menggunakan SSH dapat memangkas banyak waktu yang sering terpakai untuk mengetik username dan password tersebut setiap kali saat melakukan push dan/atau pull. Karena itu, jika Anda sering bekerja dalam satu komputer, *workstation*, atau *laptop*, Git melalui SSH tentunya akan membuat pekerjaan menjadi produktif.

## 2. Keamanan
Proses mengetik username dan password tersebut tentunya tidak selalu aman, mengingat adanya program *spyware* seperti *keylogger* yang sering dipakai untuk mendapatkan akses akun serta data pribadi.

> GitHub sendiri sedang berencana untuk mewajibkan Personal Access Token serta menolak *password* dalam proses otentikasi Git melalui HTTPS. Dengan demikian, keamanan proses otentikasi HTTPS di GitHub akan sama dengan SSH

SSH juga tidak direkomendasikan untuk Anda yang sedang menggunakan komputer yang sering dipakai oleh orang lain (misalnya dalam warnet dan laboratorium komputer), karena pasangan private-public key tersebut dapat sewaktu-waktu ditemukan oleh pengguna lain. Namun, jika hal tersebut memang terjadi, Anda dapat langsung menonaktifkan akses Git terhadap perangkat tersebut, membuat pasangan key yang baru, serta memberi akses masuk menggunakan public key yang baru.

## Jika SSH memang lebih aman, kenapa GitHub masih merekomendasikan untuk menggunakan HTTPS?

Jika Anda menggunakan SSH, Anda harus:

1. Menginstall program SSH Client berbasis CLI, seperti OpenSSH bukan PuTTY
2. Membuat pasangan kunci melalui `ssh-keygen`
3. Menambahkan public key ke server Git (GitHub/GitLab/BitBucket/dll.)

Jika Anda seorang pemula di dalam dunia Open Source (dan bahkan dunia Command Line Interface / CLI), ketiga hal tersebut dapat terlihat susah untuk dilakukan, dibandingkan dengan hanya memasukkan username dan password saat ingin melakukan push dan/atau pull. Hal ini juga dapat menjadi salah satu masalah utama dalam menggunakan GitLab, karena GitLab sendiri merekomendasikan SSH (meskipun masih dapat menerima HTTPS) sedangkan para penggunanya belum menyetel public key untuk melakukan push kepada server remote di GitLab.

Selain itu, setiap akun GitHub/GitLab/BitBucket/dll. hanya dapat menerima satu public key SSH saya. Jika Anda memiliki lebih dari satu akun, Anda harus membuat pasangan key SSH baru, serta mengkonfigurasi client SSH untuk menggunakan pasangan key yang berbeda untuk `Host` yang berbeda.