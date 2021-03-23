---
layout: post
title: "Bikin 700+ e-certificate HTTP 2020 dalam 5 menit? Bisa!"
cover_image: https://user-images.githubusercontent.com/17312341/112179512-560c5d80-8c2d-11eb-8664-a720165d1262.png
categories: [projects, himti]
tags: [id-id, himti-articles]
as_seen_on:
  - site_type: himti
    url: https://student-activity.binus.ac.id/himti/2021/03/23/bikin-700-e-certificate-http-2020-dalam-5-menit-bisa/
options:
  force_redirect: https://student-activity.binus.ac.id/himti/2021/03/23/bikin-700-e-certificate-http-2020-dalam-5-menit-bisa/?utm_source=reinhart1010
---

> Artikel ini dibuat oleh divisi **Publication and Marketing (PM) HIMTI BINUS University** saat Reinhart menjabat sebagai salah satu pengurus di organisasi tersebut.
> 
> Artikel tersebut dapat diubah atau dihapus sewaktu-waktu oleh pengurus HIMTI berikutnya. Karena itu saya mengarsipkannya dari tautan asli <https://student-activity.binus.ac.id/himti/2021/03/23/bikin-700-e-certificate-http-2020-dalam-5-menit-bisa/>.
> 
> One Family, One Goal!

**HTTP (HIMTI Togetherness and Top Performance) 2020** merupakan acara terbesar yang pernah kami selenggarakan secara virtual, khususnya melalui Microsoft Teams dan Zoom. Jumlah peserta HTTP kali ini lebih besar daripada ajang-ajang HTTP sebelumnya, dengan jumlah peserta aktif (yang berhak menerima e-certificate) sebanyak 736 orang. Kami sendiri telah membangun sebuah situs web portal untuk mengurus pendaftaran dan absensi peserta, yang kemudian dapat diintegrasikan oleh situs HIMTI KIT sebagai salah satu manfaat atau benefit dari acara HTTP itu sendiri. Salah satu tantangan terberat dalam mengurus HTTP 2020 ini datang saat kami harus membuat e-certificate untuk **736 peserta aktif** beserta **2 bintang tamu** alias *guest star* yang berpartisipasi di dalam acara tersebut. Kami tentunya merasa bahwa penggunaan sistem Mail Merge menjadi solusi yang tepat untuk kasus ini, namun mail merge tersebut harus dilakukan dengan cara dan efisien, sehingga kami dapat mengirim para e-certificate kepada pihak School of Computer Science secepat mungkin untuk ditandatangani secara langsung oleh bapak Freddy Purnomo, S.Kom, M.Kom (selaku dekan SOCS) dan dikirimkan kepada para peserta HTTP 2020.

### Apa itu Mail Merge?
Mail Merge atau Data Merge merupakan sebuah fitur yang tersedia pada aplikasi pengolah dokumen seperti Microsoft Word, Microsoft Outlook, dan Adobe Photoshop yang memungkinkan kami untuk membuat sekumpulan dokumen berdasarkan template dan data dari sebuah spreadsheet. Dalam kasus ini, kami dapat menggunakan Mail Merge untuk membuat sekumpulan e-certificate dari sebuah template e-certificate yang sudah ditandatangani oleh kami terlebih dahulu, beserta sebuah spreadsheet (misal: file CSV dan file XLSX) yang berisi seluruh data peserta aktif HTTP 2020.

Salah satu keuntungan dari Mail Merge ini adalah setiap dokumen yang dihasilkan dapat mengandung data atau informasi yang unik bagi setiap penerima. Karena itu, prinsip atau fitur ini juga sering dimanfaatkan dalam pembuatan kartu identitas (ID Card, termasuk KTP dan [BINUSIAN Card Flazz](https://www.binus.edu/binusiancommunity/)), pengiriman surel/e-mail, sertifikat (termasuk e-certificate HTTP 2020 ini), dan sebagainya. Data peserta HTTP 2020 ini kami dapatkan secara mudah dengan menyalin tabel yang ada di dalam web portal absensi acara HTTP 2020 ke dalam program Microsoft Excel, yang kemudian akan disimpan dalam format CSV. Namun, karena suatu bug pada CSS framework yang dipakai di dalam situs tersebut, hasil data peserta yang diterima oleh kami sangat berantakan, kurang lebih seperti ini.

![image](https://user-images.githubusercontent.com/17312341/112179936-af748c80-8c2d-11eb-846f-aade8c0f964c.png)

Nah, lo! Secara struktur, file CSV (salah satu format file spreadsheet) ini sebenarnya sudah berurutan (dari “ID”, “Name”, “NIM”, dan “Status”). Namun, file tersebut memiliki banyak karakter koma di tengah-tengah record “ID” dan “Name” dan akhir dari setiap baris record. Karena itu, data spreadsheet seperti ini **tidak bisa diproses** di dalam program Mail Merge umum seperti Adobe Photoshop tanpa diolah terlebih dahulu. Hal ini tentunya dapat memakan waktu yang lama serta beresiko jika kita harus mengolah data input terlebih dahulu untuk setiap peserta dan guest star.

Karena itu, kami memutuskan untuk membuat sebuah program C seperti yang telah kami lakukan dalam menghadapi awal-awal perkuliahan kami di School of Computer Science, BINUS UNIVERSITY. Kembali ke cara membuka file dengan perintah `fopen()`. Kembali ke cara menerima input menggunakan perintah `scanf()`. Kembali ke mata kuliah [COMP6047 – Algorithm and Programming](https://curriculum.binus.ac.id/course/comp6047/).

### Kembali ke materi COMP6047 – Algorithm and Programming
Jika Anda pernah mengikuti mata kuliah tersebut, Anda pastinya akan tahu tentang File Processing (cara memproses file) dan fungsi `scanf()`. Program ini menggunakan beberapa perintah serupa untuk:

1. Membuka file CSV (misalnya disimpan di dalam nama “data.csv”) menggunakan perintah `fopen()`,
2. Menggunakan perintah `fscanf()` untuk mengambil data “ID”, “Name”, dan “NIM” saja,
3. Menggunakan perintah `fprintf()` untuk mencetak data CSV yang diperbaiki ke dalam file output yang terpisah, yang nantinya dapat diolah oleh fitur/wizard Mail Merge yang ada di dalam Adobe Photoshop atau GIMP.

Namun, setelah pertimbangan lebih lanjut, kami ternyata dapat menggunakan library atau program command line lain seperti ImageMagick untuk membubuhkan teks nama peserta ke dalam template e-certificate (dalam format PNG). Karena itu, kami memutuskan untuk memanggil program ImageMagick melalui perintah `system()` dalam program C karena terlihat lebih mudah daripada [memanggil library ImageMagick secara langsung di dalam program tersebut](https://imagemagick.org/script/magick-wand.php).

Alhasil, kami tidak usah bekerja dua kali untuk membereskan spreadsheet tersebut kemudian membuat Mail Merge dari data yang sudah dibereskan tersebut. Atau, dalam istilah yang sering dipakai di dalam mata kuliah [COMP6049 – Algorithm Design and Analysis](https://curriculum.binus.ac.id/course/comp6049/), kami berhasil memangkas time complexity proses pembuatan e-certificate ini dari **O(2n)** menjadi **O(n)** saja.

### Sedikit tentang ImageMagick
ImageMagick merupakan sebuah program dan library komputer yang berfungsi untuk mengolah gambar. Program dan library ini biasanya sudah terpasang secara default di beberapa distro sistem operasi Linux seperti Ubuntu dan biasanya juga digunakan di dalam program tertentu. Namun, program dan library ImageMagick ini [juga tersedia bagi pengguna Microsoft Windows dan macOS (melalui Homebrew)](https://imagemagick.org/script/download.php). Bahkan, Anda juga dapat menggunakan library ini di dalam proyek aplikasi native iOS Anda.

Dalam kasus ini kami menggunakan perintah `convert` yang tersedia di dalam program ImageMagick dengan memanggil `convert cert.png -font Comfortaa-Regular -gravity North -pointsize 48 -annotate +0+435 '<NAMA PESERTA>' 'final/<NIM>-<NAMA PESERTA>.png'`. Perintah ImageMagick tersebut akan membuka file template e-certificate yang disimpan sebagai `cert.png`, kemudian membubuhkan nama peserta di dalam template tersebut dan kemudian disimpan di dalam direktori `final/` dengan nama file `<NIM>-<NAMA PESERTA>.png` (seperti aturan format Display Name dalam aplikasi Zoom untuk mahasiswa BINUS UNIVERSITY). Perintah tersebut juga akan menggunakan sebuah font bernama [Comfortaa](https://fonts.google.com/specimen/Comfortaa) (salah satu font yang digunakan dalam tema HTTP 2020) untuk menulis teks nama peserta tersebut.

### Keajaiban dari fscanf()
Oke, bagaimana kami dapat membereskan input yang bermasalah tersebut? Setiap baris CSV ini (kecuali baris awal) kami saring melalui perintah `fscanf(input, "%d%[,]%[^,],%lld,%[^\n]\n%[^\n]\n%[^\n]\n", &id, temp, name, &nim, temp, temp, temp)`. Variabel `temp` ini akan menampung bagian string (yakni substring) yang dibuang begitu saja, sedangkan variabel `id`, `name`, dan `nim` ini akan dipakai di dalam perintah ImageMagick yang telah dijelaskan sebelumnya. Sintaks `%[,]` akan mengumpulkan sebuah substring yang hanya berisi 1 atau lebih karakter koma, misalnya “,”, “,,”, dan “,,,,,,,,,,,,,”. Sintaks `%[^,]` akan mengumpulkan sebuah substring yang **tidak** diakhiri oleh karakter koma, sedangkan sintaks `%[^\n]\n%[^\n]\n` akan “membuang” kedua baris berikutnya (yang hanya berisi karakter koma dan teks “View”, lihat contoh pada gambar di atas).

### Hasil Kodingannya
Nah, berikut ini adalah keseluruhan kode sumber program C yang telah kami buat untuk menyelesaikan kasus tersebut. Anda juga dapat melihat bahwa kami menggunakan 3 variasi perintah ImageMagick yang berbeda untuk mengatur ukuran dan posisi teks nama lengkap peserta sesuai dengan panjang karakter nama tersebut (agar tetap muat di dalam e-certificate ini)

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
  // In order to run this program, make sure that you have ImageMagick installed and have your "convert" command available in $PATH.
  char temp[1024], command[1024], name[128];
  int id;
  long long int nim;
  FILE *input = fopen("data.csv", "r");

  // Scan first line
  fscanf(input, "%[^\n]\n", temp);

  // For each line scan for repeating commas
  do {
    fscanf(input, "%d%[,]%[^,],%lld,%[^\n]\n%[^\n]\n%[^\n]\n", &id, temp, name, &nim, temp, temp, temp);
    printf("Generating certificate for %lld-%s\n", nim, name);
    if (strlen(name) >= 40) sprintf(command, "convert cert.png -font Comfortaa-Regular -gravity North -pointsize 48 -annotate +0+435 '%s' 'final/%lld-%s.png'", name, nim, name);
    else if (strlen(name) >= 25) sprintf(command, "convert cert.png -font Comfortaa-Regular -gravity North -pointsize 64 -annotate +0+435 '%s' 'final/%lld-%s.png'", name, nim, name);
    else sprintf(command, "convert cert.png -font Comfortaa-Regular -gravity North -pointsize 72 -annotate +0+420 '%s' 'final/%lld-%s.png'", name, nim, name);

    //puts(command); // Untuk kepentingan debugging
    system(command);

    //sleep(1); // Untuk kepentingan debugging
  } while (!feof(input));
  fclose(input);
}
```
Kodingan di atas hanya dapat membuat e-certificate HTTP 2020 untuk para peserta saja. Untuk membuat e-certificate bagi para guest star, kami menjalankan perintah ImageMagick serupa dengan menggunakan template e-certificate khusus guest star dan mengetik nama secara manual melalui Command Prompt / Terminal.

Proses ini memakan waktu sekitar 5 menit untuk membuat 738 e-certificate di dalam sebuah laptop dengan kapasitas RAM 8GB dan prosesor Intel Core i7 generasi ketujuh, sedangkan perintah `convert` dalam program ImageMagick [tidak diproses menggunakan resource GPU apapun](https://imagemagick.org/script/opencl.php). Program C tersebut akan dijalankan secara single-thread, sehingga proses pembuatan e-certificate ini sebenarnya dapat dipercepat melalui proses multithreading menggunakan library `<pthread.h>`.

### Hal-hal yang dapat dipelajari dari kasus ini, khususnya bagi mahasiswa School of Computer Science
Pertama-tama, jangan sepelekan materi pembelajaran bahasa C (PBC) meskipun Anda sudah menyelesaikan dan lulus dari mata kuliah [COMP6047 – Algorithm and Programming](https://curriculum.binus.ac.id/course/comp6047/). Bahasa C setidaknya masih dapat dipakai untuk membuat program-program tertentu yang dapat dijalankan secara cepat dan efisien dibandingkan dengan bahasa pemrograman lain seperti Python. Perintah-perintah seperti `scanf()` ini dapat menyelesaikan kasus ini dengan lebih cepat dibandingkan dengan metode lainnya, seperti menggunakan regular expression (regex).

Kedua, jangan sepelekan soal-soal tugas dan latihan mata kuliah tersebut, karena dengan mengerjakannya Anda akan lebih terbiasa dan siap untuk menghadapi perkuliahan saat ini sampai akhir.

Terakhir, semua **#PastiAdaJalan dengan algoritma**. Ya, hashtag ini sering digaungkan oleh [salah satu perusahaan super app di Indonesia](https://www.gojek.com/id-id/), tapi perusahaan dan aplikasi tersebut tidak dapat berjalan tanpa… ya, algoritma!