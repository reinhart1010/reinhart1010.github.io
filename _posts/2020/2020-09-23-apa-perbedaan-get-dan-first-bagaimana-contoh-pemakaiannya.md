---
layout: post
title: Apa perbedaan get() dan first()? Bagaimana contoh pemakaiannya?
categories: [qna, kotakode]
tags: [id-id, laravel]
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/pertanyaan/1243/
---
> **Berikut ini adalah jawaban dari sebuah pertanyaan yang ditanyakan melalui situs Kotakode.** Klik link di atas untuk melihat pertanyaan aslinya.

Di dalam Laravel, perintah `get()` ditujukan untuk mengambil hasil dari sebuah pencarian database, sedangkan `first()` ditujukan untuk mengambil **hasil pertama** dari sebuah pencarian database. Berikut adalah contoh perbedaan antara kedua fungsi tersebut.

Contoh table **pelanggan** (di MySQL/MariaDB)

| id | nama | email | kota |
| --- | --- | --- | --- |
| 1 | Agus | agus@example.com | Jakarta |
| 2 | Aldi | aldi@example.com | Surabaya |
| 3 | Dita | dita@example.com | Semarang |
| 4 | Budi | budi@example.com | Jakarta |

Jika kita menggunakan perintah `$result = DB::table('pelanggan')->where('kota','Jakarta')->get();` maka sekarang nilai dari variabel `$result` adalah:

```
[
  [
    'id' => 1,
    'nama' => 'Agus',
    'email' => 'agus@example.com',
    'kota' => 'Jakarta'
  ],
  [
    'id' => 4,
    'nama' => 'Budi',
    'email' => 'budi@example.com',
    'kota' => 'Jakarta'
  ]
]
```

Sedangkan, jika kita menggunakan perintah `$result = DB::table('pelanggan')->where('kota','Jakarta')->first();` maka sekarang nilai dari variabel `$result` adalah hasil pertama pada array `$result` pada contoh sebelumnya, yaitu:

```
[
  'id' => 1,
  'nama' => 'Agus',
  'email' => 'agus@example.com',
  'kota' => 'Jakarta'
]
```

Di sini, perintah `first()` dapat memudahkan Anda untuk melakukan *query* database berdasarkan column atau property yang unik seperti ID pelanggan. Karena itu, perintah:

```
DB::table('pelanggan')->where('kota','Jakarta')->first();
```

akan menghasilkan hasil yang sama dengan

```
DB::table('pelanggan')->where('kota','Jakarta')->get()[0];
```

Demikian penjelasan dari saya, terima kasih.