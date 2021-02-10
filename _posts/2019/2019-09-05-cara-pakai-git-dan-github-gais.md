---
layout: post
title: "Cara Pakai Git dan GitHub, gais!"
categories: [medium, kotakode, tutorials]
tags: [id-id, git, github]
cover_image: https://miro.medium.com/1*7bbZhQ022lT_L613oIoaag.png
theme_color: "#f6f8fa"
theme_color_foreground: "#24292e"
as_seen_on:
  - site_type: kotakode
    url: https://kotakode.com/blogs/5283
  - site_type: medium
    url: https://medium.com/@reinhartpreviano/cara-pakai-git-dan-github-gais-f50624caf7e6
---
**Halo! Kali ini aku mau menjelaskan cara pakai Git dan GitHub buat kalian semua 👍**

Secara umum ada 3 tahap untuk membuat *directory/repository* baru di Git dan GitHub:

1. Setup Git dan GitHub
2. Buat *repository*
3. Nongkrong di Terminal dan Unggah
4. (Bonus) Sinkronkan ke komputer lain

Git sendiri memiliki versi GUI (Graphical User Interface) dan CLI (Command Line Interface).

Dalam artikel ini aku ajarin yang versi CLI (pake Command Prompt atau Terminal) dulu karena versi ini dapat digunakan di semua OS (Windows, macOS, Linux) serta agar kalian juga mulai terbiasa dengan *environment* CLI yang sangat dibutuhkan untuk pengembangan server dan kompilasi *software* lainnya.

## 1. Setup Git dan GitHub
Pastinya aku sudah beranggap kalian udah install Git dan GitHub. Kalau belum, kalian bisa *download* Git di [sini](https://git-scm.com/) dan registrasi akun GitHub di [sini](https://github.com/).

### Info Tambahan
Kalau kalian nanti mulai magang, aku cuman mau kasih tau kalau tidak semua perusahaan menggunakan GitHub (khususnya situs www.github.com) untuk menyimpan sumber kode mereka, salah satunya Google yang memiliki server Git sendiri di `https://*.googlesource.com` (misalnya <https://android.googlesource.com> untuk software Android). Dengan demikian, kalian mungkin perlu untuk buat akun baru di server tersebut sebelum menggunakannya.

Terlebih lagi, masih ada beberapa perusahaan yang memakai sistem Source Control Management (SCM) selain Git, misalnya **Mercurial** dan **Subversion**. Namun, GitHub sendiri memiliki fitur khusus yang memudahkan **impor repository kode sumber dari server Git, Mercurial, dan Subversion lainnya**. Salah satunya, sumber kode Gecko (*web engine* di Mozilla Firefox) di repository <https://github.com/mozilla/gecko-dev> (Git) yang berasal dari <https://hg.mozilla.org/mozilla-central/> (Mercurial).

## 2. Buat Repository
Sebelum kita pakai Git dan GitHub dalam proyek-proyek kalian,

+ Pastikan kalian buat **directory/folder** baru setiap kali ada proyek baru. Dalam Git, ini disebut dengan istilah repository.
+ Beberapa IDE seperti **Adobe DreamWeaver**, **Unity**, **Visual Studio** (bukan Visual Studio Code), **Android Studio** dan **Xcode**, bakal ngebuat directory itu secara otomatis pas kamu lagi jalanin setup (wizard) buat proyek/aplikasi baru. Soal IDE nanti aku jelaskan dalam artikel selanjutnya.
+ Kalau tidak, biasakan untuk menata isi *repository* tersebut agar rapi, misalnya dengan menambahkan folder **assets** untuk menaruh file gambar dan suara dalam pengembangan *game* atau *website*. Suatu repository yang struktur foldernya bagus pastinya akan mudah untuk dilihat dan dikembangkan.

Kalau *repository*-nya sudah siap, ikuti langkah di bawah ini.

## 3. Nongkrong di Terminal dan Upload

Setiap software CLI bisa dijalanin melalui sebuah aplikasi yang namanya **Command Prompt** (`cmd.exe` di Windows) atau **Terminal** (`Terminal.app` di macOS).

Apakah perlu dijalanin sebagai Administrator? **Tidak.**

Sebagai contoh, di sini saya menggunakan aplikasi Command Prompt di Windows 10 dan QTerminal (LXQt) di Ubuntu 18.04 LTS. Tutorial ini enggak terbatas sama aplikasi Terminal lainnya, seperti [Guake](http://guake-project.org/) dan [Yakuake](https://kde.org/applications/system/org.kde.yakuake) (Linux, BSD) dan bahkan [Hyper](https://hyper.is/). Namun, ada saja perbedaan command syntax saat kalian pakai Windows Command Prompt (`cmd.exe`) biasa dengan Windows PowerShell.

### Konfigurasi awal
Pertama, buka Command Prompt/Terminal kalian dan ketik `git --version` dan tekan ENTER. Di sini kalian bisa ngecek kalau Git berhasil dipasang serta versinya.

![Tampilan CMD/Terminal](https://miro.medium.com/max/700/1*bAg-npHxSb80B2BbGvKhhg.png)

Sebelum membuat sebuah *commit* melalui Git, sebaiknya kalian menyetel nama dan *email* di Git komputer kalian. Konfigurasi ini perlu disetel dari awal karena nama dan *email* ini akan dipasang pada setiap *commit*. Hal ini juga memudahkan GitHub (dan server Git lainnya) untuk mengetahui siapa yang berkontribusi terhadap proyek tersebut.

Gunakan kedua perintah CLI berikut (dan jangan lupa tekan ENTER setiap kali mau jalanin perintah CLI-nya).

```
git config --global user.name "Nama lengkap atau username GitHub kamu"
git config --global user.email "Email kamu yang terdaftar di GitHub"
```

![Tampilan CMD/Terminal](https://miro.medium.com/max/700/1*uHBdfi8RNvfWkQpHSUXPug.png)

Meskipun hasilnya engga muncul kayak tadi, konfigurasi ini bakal disimpan di komputer kalian sampai diubah menggunakan perintah CLI yang sama.

### Buat repository di GitHub
Sekarang, giliran buka <https://github.com/> dan klik “New Repository” pada panel sebelah kiri. Kalian juga bisa mengakses fitur ini melalui URL <https://github.com/new/>.

![Tampilan situs GitHub](https://miro.medium.com/max/700/1*7bbZhQ022lT_L613oIoaag.png)

Di dalam *dashboard* di atas ada beberapa fitur yang bakal kalian butuh. Ini pun bakal aku jelasin nanti.

![Tampilan situs GitHub](https://miro.medium.com/max/700/1*bm_nHz_1o5f_JM8CYE9G_Q.png)

Dalam form di atas, buatlah nama *repository*-nya. Ini nanti bakal bisa diakses melalui:
+ `https://github.com/<username kalian>/<nama repository>/`, untuk situs utama,
+ `https://github.com/<username kalian>/<nama repository>.git`, saat melakukan `git clone` melalui HTTPS, dan
+ `git@github.com:<username kalian>/<nama repository>`, saat melakukan `git clone` melalui SSH

Karena kalian bakal menguggah directory yang udah ada ke repository GitHub baru, **jangan centangi opsi “Initialize this repository with a README”**. (Kalau kalian mau menambahkan README, buat file plaintext/TXT baru bernama README.md di directory komputer kalian)

Soal file **.gitignore** dan **LICENSE** aku juga bakal bahas nanti

### Menuju Directory kalian
Sekarang di File Explorer kalian buka *directory* proyek kalian yang mau diunggah. Klik kanan dan cek jika opsi “Git Bash Here” atau “Open in Terminal…” ada di menu/submenu yang ada.

![Tampilan File Explorer Linux (Dolphin)](https://miro.medium.com/max/652/1*9uRQf0OzCnW9qjYMxQL9rQ.png)

![Tampilan Windows Explorer](https://miro.medium.com/max/700/1*sHdisS8VbXylwdkAlYRjPg.png)

Kalau ada, klik menu/submenu tersebut. Kalau tidak, coba cari lokasi *directory* tersebut (misalnya `C:\Users\Administrator\Documents\` atau `/home/user/Documents/`; untuk macOS klik kanan > “Get Info…”) dan ketik command berikut (termasuk tanda petik):

```
cd "<Directory lengkap kamu>"
```

**Catatan:** Khusus di Command Prompt Windows biasa (bukan PowerShell), kalau directory kalian berada di luar disk/partisi Windows kalian (misalnya `D:\` bukan `C:\`) gunakan parameter `/d` dalam command `cd`, misalnya:

```
cd /d "D:\<Directory lengkap kamu>"
```

### Operasi dasar Command Prompt/Terminal
Kalian bisa menggunakan command seperti `mkdir`, `ls` (atau `dir` di Windows), dan `rm` (atau `del` di Windows) untuk membuat folder, melihat isi folder, dan menghapus file/folder. Kalian bisa cari cara penggunaan ini di Internet.

### Setup Git di directory kalian
Sekarang, di dalam *directory* kalian gunakan perintah CLI berikut. **Pastikan Command Promt/Terminal kalian menunjukkan lokasi directory kalian yang sesuai sebelum menjalankan perintah CLI tersebut.**

```
git init
```

Misalnya, di Windows saya simpan ini di `D:\mobile-legends` sedangkan di Linux (Ubuntu) saya simpan di `/home/reinhart/mobile-legends` (disingkat menjadi `~/mobile-legends`).

![Tampilan Terminal Linux](https://miro.medium.com/max/700/1*a3omoI4t8IfAwEMoV0sDUg.png)

![Tampilan Command Prompt Windows](https://miro.medium.com/max/700/1*vgmZK7zSeE2zfnHR6hR1qw.png)

Setiap kali kamu setup Git ke *directory* kamu, folder bernama “.git” bakal dibuat di situ. Folder ini menyimpan data perubahan versi proyek kalian dan hanya dapat diakses kalau kamu menyetel File Explorer kamu untuk melihat “Hidden files and folders”.

Dalam konvensi penamaan file di UNIX, file yang diawali dengan tanda titik (.) akan dikategorikan sebagai “hidden file”, yaitu file tersimpan yang tidak muncul di File Browser/Explorer pada umumnya. Konvensi ini berlaku juga bagi macOS dan Linux tetapi tidak untuk Windows.

Sekarang, buka kembali *repository* GitHub kalian.

![Tampilan situs GitHub](https://miro.medium.com/max/700/1*oGFJiyD98rtseb3WGu4QjQ.png)

Ternyata, GitHub udah kasih tau cara unggah file kalian ke sana, lho! Tapi, enggak semua perintah CLI bakal kita pakai sekarang.

Oke, coba copy link yang berakhiran dengan .git di atas. Kalau punyaku `https://github.com/reinhart1010/mobile-legends.git`

Mari kembali nongkrong di Command Line/Terminal dan jalankan command berikut untuk langsung meng-upload file kalian ke GitHub:

```
git remote add origin <URL GitHub di atas>
git add *
git commit -m "First commit"
git push -u origin master
```

### Mau dijelasin? Baiklah.
Perintah CLI pertama di atas menambahkan sumber repository GitHub ke setup Git di directory kalian dengan nama sumber “origin”. Ini cuman perlu dijalanin sekali aja.

Perintah CLI kedua menambahkan semua file dan folder (kecuali file dan folder yang tertera di dalam file `.gitignore`) agar tercatat di Git dan dapat di-upload ke GitHub.

Perintah CLI ketiga menambahkan commit baru dengan pesan “First commit”. Setiap *commit* dalam Git menandakan adanya versi dan perubahan baru pada file dan folder yang ditandai dengan git add tadi. Pesan *commit* bersifat opsional tetapi juga berguna untuk ngasih tau apa saja yang diubah.

Terakhir, command `git push` ini akan mengunggah file dan folder tersebut ke luar, yaitu *repository* GitHub yang kita buat dan pasang melalui command `git remote add` tadi. Kalian bakal ditanya username dan password GitHub kalian di sini.

**Catatan:** Kalau kalian sudah menyetel Two Factor Authentication (2FA) ke akun GitHub kamu, kalian perlu membuat Personal Authentication Token sebagai password khusus untuk kalian bisa upload dari Git CLI.

---

Nah, ini hasilnya setelah ngejalanin command terakhir di Windows saya:

![Hasil di Command Line](https://miro.medium.com/max/700/1*qXxhpi78QVOSD0Rg5XN9vw.png)

![Hasil di situs GitHub](https://miro.medium.com/max/700/1*U6BYCBAKPHS9UxdxvJQrGw.png)

## 4. Sinkronkan di komputer lain

Salah satu keuntungannya pake Git itu, semua editan kalian bisa digabungkan di repository yang sama, dan dapat dimuat langsung ke *directory* komputer masing-masing.

Caranya, jalankan perintah CLI ini:

```
git pull origin master
```

**Catatan:** Kali ini “git pull” ya, bukan “git push”.

Kalau berhasil, hasilnya bakal kayak begini:

![Hasil di Terminal komputer sebelah](https://miro.medium.com/max/700/1*zhJ2TrztTO09NBupoVKX3w.png)

---

Perintah CLI `git pull` ini memiliki beberapa opsi untuk menghindari galat/*error* saat versi yang ada di *repository* GitHub kamu bentrok dengan directory kamu. Untuk melihatnya jalankan `git pull -h`.