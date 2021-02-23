---
layout: post
title: Apa yang akan terjadi saat Anda mengeklik salah satu link spam giveaway Bitcoin/Ethereum/Tether di grup Telegram Kotakode?
cover_image: https://storage.googleapis.com/kotakode-prod-public/images/27332052-afd0-41f5-b36d-0f5f466628fa-Screenshot_20210223_152859.png
categories: [kotakode, investigasi]
tags: [id-id, kotakode-telegram, javascript]
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/blogs/6416
---
Anda mungkin pernah mendapatkan pesan dari seseorang di grup Telegram Kotakode seperti ini.

> woow Guys. Who want free bitcoin and ethereum or tether?
> 
> Maybe you got too
> 
> (URL phishing)

Saya telah mengumpulkan dua sampel URL yang dibagikan oleh orang yang tak dikenal tersebut, sebelum akhirnya dihapus oleh tim admin grup Kotakode. Kedua URL tersebut berasal dari situs *URL shortener* yang berbeda (dalam kasus ini <https://cutt.ly> dan <https://goo.su>, dan ternyata sama-sama mengarah ke sebuah situs *phishing* bernama `bintweets.com`.

## Twitter, eh?
![Screenshot_2021-02-23 Binance on Twitter Elon Musk biggest crypto giveaway Twitter.png](https://storage.googleapis.com/kotakode-prod-public/images/f5c9d15e-d92c-4cca-b8f7-75f3d2fd0129-Screenshot_2021-02-23-Binance-on-Twitter-Elon-Musk-biggest-crypto-giveaway-Twitter.png)

Ya, gambar di atas merupakan tampilan dari situs `bintweets.com`. Hal yang membuat saya menarik di sini adalah meskipun situs tersebut merupakan *impostor* dari Twitter, fitur "Like" dan "Retweet" dalam situs tersebut dapat bekerja dengan baik. Webpage tersebut ternyata mengirimkan sebuah request POST kepada situs tersebut untuk menambahkan jumlah Like dan Retweet yang terkandung di dalam post atau komentar tersebut. Saya mendemonstrasikan hasil tersebut menggunakan perintah `curl`.

![Screenshot_20210223_152336.png](https://storage.googleapis.com/kotakode-prod-public/images/d80a216f-da34-4cdf-a234-533200aa56d3-Screenshot_20210223_152336.png)

Hal yang menarik berikutnya tentang situs ini adalah situs tersebut **mencatut nama, username, dan bahkan gambar profil Twitter yang ASLI**. Tampilan situs tersebut memang seolah-olah merupakan sebuah Tweet resmi dari Binance, namun hampir semua nama profil yang dicatut sebagai komentar terhadap situs tersebut merupakan profil Twitter asli (ada beberapa yang usernamenya dirubah, dan ada juga beberapa profil yang di-suspend oleh Twitter). Saya mencoba melihat beberapa profil yang dicatut tersebut, dan mereka memang sering membahas tentang *cryptocurrency* (mata uang kripto) dan investasinya.

Situs tersebut mengandung URL berikutnya bernama `czbnb.org`. Berbeda dengan `bintweets.com`, situs ini merupakan *impostor* dari Medium dengan tampilan lama (berdasarkan jenis *font* yang digunakan di dalam situs tersebut). Pengembang situs tersebut ini cukup pintar, mereka mengunduh semua aset font dari Medium untuk di-encode dan ditaruh di dalam atribut CSS `@font-face`.

![Screenshot_20210223_152859.png](https://storage.googleapis.com/kotakode-prod-public/images/27332052-afd0-41f5-b36d-0f5f466628fa-Screenshot_20210223_152859.png)

Namun sayangnya tampilan Medium ini baru saja berubah menggunakan logo dan font baru. Berikut ini adalah tampilan [salah satu post saya](https://medium.com/@reinhartpreviano/cara-pakai-git-dan-github-gais-f50624caf7e6) di Medium bernama "Cara Pakai Git dan GitHub, gais!" (yang juga tersedia di [situs ini](/posts/2019/09/05/cara-pakai-git-dan-github-gais.html)).

![Screenshot_2021-02-23 Cara Pakai Git dan GitHub, gais .png](https://storage.googleapis.com/kotakode-prod-public/images/3e06b10f-f370-4163-bf8e-5b46c70fe6fc-Screenshot_2021-02-23-Cara-Pakai-Git-dan-GitHub,-gais-.png)

Jika di dalam situs `bintweets.com` ini memiliki fitur Like dan Retweet sendiri, saya tidak dapat menambahkan jumlah [Claps (menurut istilah Medium)](https://medium.com/blogging-guide/how-do-claps-work-on-medium-b2897784ce6b) di dalam situs `czbnb.org`. Meskipun demikian, situs tersebut **masih mencatut nama profil Medium ASLI** yang sama-sama membahas soal *cryptocurrency*, dan ekonomi investasi.

Situs tersebut memiliki 3 link yang berhubungan dengan jenis *giveaway* yang diberikan, yakni:

```
+ https://czbnb.org/btc/ untuk Bitcoin (BTC)
+ https://czbnb.org/eth/ untuk Ethereum (ETH)
+ https://czbnb.org/tether/ untuk Tether (USDT)
```

Ketiga webpage ini memiliki tampilan yang serupa dengan ini.

![Screenshot_2021-02-23 Get 2x ETH Bonus Now.png](https://storage.googleapis.com/kotakode-prod-public/images/1fb7c1de-fc3a-4d03-8409-22e8c7b6169d-Screenshot_2021-02-23-Get-2x-ETH-Bonus-Now.png)

dan ketiga webpage tersebut memiliki sebuah tabel dinamis (terlihat sering di-update) yang (seharusnya) merupakan hasil giveaway yang seolah-olah diberikan oleh pihak Binance. **Namun tahukah kamu bagaimana situs tersebut meng-update data transaksi tersebut?**

Melalui function JavaScript ini. (Sumber: <https://czbnb.org/eth/js/tfdjglkjdfkjgnsdfgnjkdgndkjfx.js> untuk laman Ethereum)

```js
function new_transaction() {
  var table,
    row = document.getElementById("myTable").insertRow(1),
    address = get_random(),
    amount = (49.5 * Math.random()).toFixed(2),
    decimal = String(Math.random(1, 999));
  (row.innerHTML =
    '<tr> <td><a class="hash-tag text-truncate" href="">0x' +
    generateId(63) +
    '</a> </td> <td class="d-none d-sm-table-cell"><a href="">4' +
    tx(99999999) +
    '</a></td> <td><span class="timer" >now</span> </td> <td><a class="hash-tag text-truncate" href="">' +
    address +
    '</a> </td> <td><span class="u-label u-label--xs u-label--success color-strong text-uppercase text-center w-100 rounded text-nowrap">&nbsp;IN&nbsp;</span> </td> <td><span class="hash-tag text-truncate">0x762fa4Da994EEf58DC894C225008Aba279101168</span> </td> <td>' +
    amount +
    ' ETH</td> <td><span class="small text-secondary">0<b>.</b>000' +
    tx(999) +
    "</span></td> </tr>"),
    document
      .getElementById("myTable")
      .deleteRow(document.getElementById("myTable").rows.length - 1),
    document.getElementsByTagName("tr")[1].classList.add("toolbar"),
    setTimeout(() => {
      var table,
        row = document.getElementById("myTable").insertRow(1),
        send_amount = amount * parcent;
      (row.innerHTML =
        '<tr> <td><a class="hash-tag text-truncate" href="">0x' +
        generateId(63) +
        '</a> </td> <td class="d-none d-sm-table-cell"><a href="">4' +
        tx(99999999) +
        '</a></td> <td><span class="timer" >now</span></td> <td><span class="hash-tag text-truncate">0x762fa4Da994EEf58DC894C225008Aba279101168</span> </td> <td><span class="u-label u-label--xs u-label--warning color-strong text-uppercase text-center w-100 rounded text-nowrap">OUT</span> </td> <td><a class="hash-tag text-truncate" href="">' +
        address +
        "</a> </td> <td>" +
        send_amount +
        ' ETH</td> <td><span class="small text-secondary">0<b>.</b>000' +
        tx(999) +
        "</span></td> </tr>"),
        document
          .getElementById("myTable")
          .deleteRow(document.getElementById("myTable").rows.length - 1),
        document.getElementsByTagName("tr")[1].classList.add("toolbar");
    }, 8500);
}
```

Ya, fungsi tersebut sama sekali tidak menggunakan metode seperti WebSockets untuk mengupdate data transaksi secara berkala. Fungsi tersebut hanya membuat sebuah transaksi dengan ID (hash) transaksi, nama alamat, dan nominal transaksi secara random dan sebenarnya tidak sesuai dengan data yang ada di dalam *blockchain* Bitcoin, Ethereum, dan Tether. Fungsi tersebut juga menambahkan hasil transkasi random tersebut ke dalam sebuah tabel dengan ID `mytable`, yang memuat daftar transaksi palsu tersebut.

## Oke, seandainya jika saya memasukkan nominal dan *address* Bitcoin/Ethereum/Tether yang tepat, apakah yang akan terjadi?

Situs tersebut mengandung informasi bahwa *payment address* yang harus digunakan saat membayar akan di-generate oleh sistem/situs tersebut. Namun, yang sebenarnya terjadi adalah situs tersebut **meng-hardcode *payment address* tersebut**. Saya sudah mencoba me-refresh situs ini dan menghapus *cookies* beberapa kali, namun *payment address* tersebut masih sama dan terletak pada sebuah popup pada gambar berikut.

![Screenshot_20210223_161423.png](https://storage.googleapis.com/kotakode-prod-public/images/a0770d5f-6dc9-4d8f-b52a-5ec548a10407-Screenshot_20210223_161423.png)

```html
<div class="inner-address">
  <span class="wallet-ad">Generated address:</span>
  <div class="address">
    <div class="qwef-hy" style="width: 80%;overflow: hidden;"><span class="real-address">0x792D14dC6052147394acEbDeA2Fe556a29644C34</span></div>
    <div class="copy-body">
      <div class="copy-inner">
        <img class="cp" id="copy_address" src="images/copy.svg" data-clipboard-text="0x792D14dC6052147394acEbDeA2Fe556a29644C34">
        <div id="done-copy" class="sec-card">
          <img class="in-card" src="images/done.svg">
        </div>
      </div>
    </div>
  </div>
</div>
```

Berikut adalah ketiga address Bitcoin, Ethereum, dan Tether yang di-hardcode di dalam situs tersebut, yakni:

+ `1D1rH5UcANwxJQU6sJuNDVbZ72jztohurR` untuk Bitcoin, serta
+ `0x792D14dC6052147394acEbDeA2Fe556a29644C34` untuk Ethereum dan Tether.

**Mohon untuk TIDAK mengirimkan dana apapun ke dalam address tersebut, karena sudah dipastikan bahwa ini merupakan address scam layaknya scam SMS undian pemenang Indosat/M Tronik/Shopee/Pertamina di Indonesia.**

## Berapa banyak korban yang jatuh ke dalam scam tersebut?
Per saat ini (23 Februari 2021, 16:24 WIB) alamat Bitcoin tersebut sama sekali tidak memiliki transaksi apapun. Saya sudah mengeceknya di dalam situs:

+ <https://bitcoinwhoswho.com/address/1D1rH5UcANwxJQU6sJuNDVbZ72jztohurR>
+ <https://bitref.com/1D1rH5UcANwxJQU6sJuNDVbZ72jztohurR>
+ <https://www.blockchain.com/btc/address/1D1rH5UcANwxJQU6sJuNDVbZ72jztohurR>

Begitupun juga untuk Ethereum dan Tether, yang sudah saya cek di:

+ <https://etherscan.io/address/0x792D14dC6052147394acEbDeA2Fe556a29644C34>
+ <https://www.etherchain.org/account/792D14dC6052147394acEbDeA2Fe556a29644C34>
+ <https://www.cointracker.io/wallet/ethereum?address=0x792D14dC6052147394acEbDeA2Fe556a29644C34>

Hal ini sebenarnya merupakan pertanda baik, karena sampai saat ini masih belum ada korban yang terkena scam untuk ketiga mata uang tersebut. Namun, Anda juga harus waspada terhadap scam *cryptocurrency* seperti ini yang menggunakan teknik yang sangat serupa dengan phishing.