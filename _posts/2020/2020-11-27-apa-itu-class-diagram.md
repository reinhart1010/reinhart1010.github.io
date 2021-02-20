---
layout: post
title: Apa itu Class Diagram?
categories: [binus, binus-socs]
tags: [id-id, reinhartmenjawab, comp6056]
theme_color: "#de3e80"
as_seen_on:
  - site_type: binusmaya
    url: https://binusmaya.binus.ac.id/newStudent/#/forum/reader.5FA2DE9E-64F6-49CE-A6B6-B23E6ECF3D1B?id=1
---
> **Berikut ini adalah jawaban terhadap salah satu tugas kuliah [COMP6056 - Program Design Methods](https://curriculum.binus.ac.id/course/comp6056/) di [BINUS University](https://binus.ac.id) (Universitas Bina Nusantara).**

Class Diagram merupakan sebuah jenis diagram UML (Unified Modelling Language) yang bertujuan untuk menjelaskan relasi antar sebuah Class dengan Class lain dalam konsep Object Oriented Programming (OOP). Karena itu, karakteristik-karakteristik OOP seperti Abstraction dan Inheritance dapat dibaca dan diterjemahkan ke dalam diagram ini.

Struktur sebuah Class dalam Class Diagram ini mirip dengan sebuah Entity/Table dalam Entity Relationship Diagram (ERD). Namun, sesuai dengan prinsip OOP, sebuah Class dalam Class Diagram memiliki daftar Method yang tentunya tidak dapat ditemukan dalam Entity dalam ERD. Relation atau hubungan antar Class dalam Class Diagram pun juga mirip dengan hubungan antar Entity dalam ERD, khususnya dalam konsep Multiplicity (`1..1`, `1..*`, `1..n`, `m..n`, `*..*`) bagi para Class yang memiliki hubungan selain Inheritance. Namun, dalam Class Diagram, hubungan-hubungan antar Class tersebut diperjelas menjadi setidaknya empat kategori, yakni:

1. **Inheritance,** yang menandakan bahwa sebuah Class berhak untuk memiliki atribut dan method yang dimiliki oleh Class lain (selanjutnya disebut sebagai parent Class). Salah satu contoh dari relasi ini dapat dilihat di dalam sebuah aplikasi <i>streaming</i> musik yang memiliki dua jenis user (misal: Regular dan Premium), di mana Class yang merepresentasikan user Premium melakukan <i>inheritance</i> dari Class yang merepresentasikan user Regular.
2. **Association,** yang menandakan adanya hubungan tertentu antar satu Class dengan yang lain. Misalnya, jika terdapat sebuah Class bernama Account (rekening debit) dalam sebuah sistem perbankan dapat memiliki hubungan dengan Class bernama Debit Card, di mana Debit Card tersebut dapat dimiliki oleh setiap Account untuk melakukan transaksi berdasarkan ketentuan bank tersebut.
3. **Aggregation,** yang menandakan relasi Association khusus di mana sebuah Class dapat bersifat independen atau bergantung kepada Class lain yang mengelompokannya. Salah satu contoh dari hubungan ini adalah Class "User" dan Class "Team" di dalam sistem serupa aplikasi Microsoft Teams, di mana setiap User dapat bergabung dalam sebuah atau beberapa Team, namun User tersebut dapat memilik untuk tidak terlibat dalam Team apapun dan dapat menggunakan fitur-fitur Microsoft Teams yang ada.
4. **Composition,** yang menandakan relasi Association khusus di mana sebuah Class hanya dapat bergantung kepada Class lain yang mengelompokannya. Saya akan menggunakan contoh sebelumnya namun dalam sistem aplikasi Google Classroom, di mana seorang User dapat bergabung dalam sebuah Team*, namun tanpa bergabung dalam salah satu Team*, User tersebut tidak akan dapat mengakses keseluruhan fitur yang ada di dalam Google Classroom.

Attributes dan Methods yang terkandung di dalam Class tersebut dapat diatur <i>visibility</i>-nya untuk menerapkan konsep enkapsulasi yang ada di dalam OOP. Simbol "+" di sebelah kiri nama atribut atau method menandakan bahwa atribut/method tersebut bersifat publik dan dapat diakses oleh Class manapun, sedangkan "-" menandakan private (hanya dapat diakses di dalam method di dalam Class tersebut), "#" menandakan Protected (hanya dapat diakses di dalam method di dalam Class ini dengan para Subclass yang berkaitan dengan Class ini. Adapun juga "~" yang menandakan "package/default" (yang dapat diakses hanya didalan sebuah Package yang sama.

Demikian penjelasan dari saya. Terima kasih.

<b>Catatan:</b> Saya sengaja untuk tetap menggunakan istilah "Team" di Google Classroom (seharusnya Class/Classroom) untuk membedakan istilah "Class" sebagai kelompok-kelompok yang ada di dalam Google Classroom serta "Class" dalam konsep Object-Oriented Programming.