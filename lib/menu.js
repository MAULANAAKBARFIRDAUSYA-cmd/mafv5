const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program yang ditulis menggunakan Javascript, dilarang menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan tanpa mencantumkan nama pemilik dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server.
- Source code / bot tidak mengandung virus dan malware.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/MAULANAAKBARFIR**********(minta izin ke pemilik)

WhatsApp: tinggal cari di profil nomernya
Telegram: telegram.me/maulanaaf
Discord: ada, tapi lupa
Instagram: ada, tapi hanya untuk pajangan
Facebook: ada, tapi hanya untuk pajangan
Messengger: nggak punya
TikTok: Instagram aja ngga punya apalagi aplikasi alay kek TikTok :v

Salam, Maulana Akbar Firdausya.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

Informasi lengkap kegunaan tiap fitur:
-❥ *${prefix}info*

Creator:
-❥ *${prefix}sticker*
-❥ *${prefix}stickergif* - [Beta]
-❥ *${prefix}stickergiphy* - [Beta]
-❥ *${prefix}meme* - [Beta]
-❥ *${prefix}quotemaker*
-❥ *${prefix}nulis*

Islam:
-❥ *${prefix}infosurah*
-❥ *${prefix}surah*
-❥ *${prefix}tafsir*
-❥ *${prefix}ALaudio*
-❥ *${prefix}jsolat*

Fun Menu (Group):
-❥ *${prefix}simisimi* - [Belum Tersedia]
-❥ *${prefix}katakasar*
	┷-❥ *${prefix}klasmen*

Download:
-❥ *${prefix}instagram*
-❥ *${prefix}ytmp3*
-❥ *${prefix}ytmp4*

Primbon:
-❥ *${prefix}artinama*
-❥ *${prefix}cekjodoh*

Search Any:
-❥ *${prefix}images*
-❥ *${prefix}sreddit*
-❥ *${prefix}resep*
-❥ *${prefix}stalkig*
-❥ *${prefix}wiki*
-❥ *${prefix}cuaca*
-❥ *${prefix}chord*
-❥ *${prefix}lirik*
-❥ *${prefix}ss*
-❥ *${prefix}play*
-❥ *${prefix}whatanime*

Random Teks:
-❥ *${prefix}fakta*
-❥ *${prefix}pantun*
-❥ *${prefix}katabijak*
-❥ *${prefix}quote*

Random Images:
-❥ *${prefix}anime*
-❥ *${prefix}kpop*
-❥ *${prefix}memes*

Lain-lain:
-❥ *${prefix}tts*
-❥ *${prefix}translate*
-❥ *${prefix}resi*
-❥ *${prefix}covidindo*
-❥ *${prefix}ceklokasi*
-❥ *${prefix}shortlink*
-❥ *${prefix}bapakfont*

18+ (Beta - Gak Disarankan):
-❥ *${prefix}nekopoi*

Tentang Bot:
-❥ *${prefix}tnc*
-❥ *${prefix}donasi*
-❥ *${prefix}botstat*
-❥ *${prefix}ownerbot* - [Hanya bisa diakses oleh pemilik bot]
-❥ *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Perintah hanya untuk pemilik Bot:
-❥ *${prefix}ban* - banned
-❥ *${prefix}bc* - promosi
-❥ *${prefix}leaveall* - keluar semua grup
-❥ *${prefix}clearall* - hapus semua chat

Terimakasih! Semoga harimu-harimu bahagia✨
BOT by : Maulana Akbar Firdausya
Active Time : 24 jam, namun sewaktu-waktu dapat Maintenance tanpa pemberitahuan

NOTE :
Beberapa perintah yang kamu masukkan, mungkin sebagian tidak bisa saya proses karena akses jaringan, server offline atau servernya sedang saya pakai :v`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}tagall*
-❥ *${prefix}del*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-❥ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

PULSA : 089504990855
TRANSFER BRI : 0045 01 084206 50 3
PAYPAL : paypal.me/akbarfirdausya

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. Maulana Akbar Firdausya`
}

*/

exports.textInfo = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut saya jelaskan beberapa fitur yang ada pada bot ini!✨


Creator:
-❥ *${prefix}sticker*
Mengubah berbagai macam foto yang anda kirim menjadi sticker!

-❥ *${prefix}stickergif*
Mengubah berbagai macam video pendek berdurasi <10 detik menjadi sticker gif / sticker bergerak
Masih tahap Beta (belum sempurna)
Kemungkinan perintah yang anda kirim tidak bisa diproses

-❥ *${prefix}stickergiphy*
Mengubah berbagai macam link giphy yang anda kirim menjadi sticker!
Masih tahap Beta (belum sempurna)
Kemungkinan perintah yang anda kirim tidak bisa diproses

-❥ *${prefix}meme*
Mengubah berbagai macam foto yang anda kirim menjadi meme!
Masih tahap Beta (belum sempurna)
Kemungkinan perintah yang anda kirim tidak bisa diproses

-❥ *${prefix}quotemaker*
Membuatkan anda quote sesuai dengan kata-kata dan author quote disertai dengan gambar background random.

-❥ *${prefix}nulis*
Membuatkan anda font tulisan tangan yang ditulis di buku tulis sesuai dengan permintaan anda!


Islam:
-❥ *${prefix}infosurah*
Menampilkan informasi lengkap mengenai surah tertentu.

-❥ *${prefix}surah*
Menampilkan ayat Al-Quran tertentu beserta terjemahannya dalam bahasa Inggris / Indonesia.

-❥ *${prefix}tafsir*
Menampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya dalam bahasa Indonesia.

-❥ *${prefix}ALaudio*
Menampilkan tautan atau Mengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia atau bahasa Inggris.

-❥ *${prefix}jsolat*
Untuk melihat jadwal solat dari setiap daerah yang ada


Fun Menu (Group):
-❥ *${prefix}simisimi*
Membuat anda bisa berbicara dengan bot simi-simi melalui WhatsApp
Fitur ini belum tersedia, karena saya belum mengintegrasikan simi-simi ke dalam bot ini.

-❥ *${prefix}katakasar*
	┷-❥ *${prefix}klasmen*
Memberikan balasan kata-kata kasar (13+)


Download:
-❥ *${prefix}instagram*
Untuk mendownload gambar atau video dari instagram

-❥ *${prefix}ytmp3*
Untuk mendownload lagu dari youtube

-❥ *${prefix}ytmp4*
Untuk mendownload video dari youtube


Primbon:
-❥ *${prefix}artinama*
Untuk mengetahui arti nama seseorang

-❥ *${prefix}cekjodoh*
Untuk mengecek jodoh melalui nama panggilan kamu dan nama panggilan pasangan kamu


Search Any:
-❥ *${prefix}images*
Untuk mencari gambar di pinterest

-❥ *${prefix}sreddit*
Untuk mencari gambar di sub reddit

-❥ *${prefix}resep*
Untuk mencari resep makanan

-❥ *${prefix}stalkig*
Untuk men-stalk akun instagram seseorang

-❥ *${prefix}wiki*
Untuk mencari suatu kata dari wikipedia

-❥ *${prefix}cuaca*
Untuk melihat cuaca pada suatu daerah

-❥ *${prefix}chord*
Untuk mencari lirik dan chord dari sebuah lagu

-❥ *${prefix}lirik*
Untuk mencari lirik dari sebuah lagu

-❥ *${prefix}ss*
Membuat bot men-screenshot sebuah web

-❥ *${prefix}play*
Untuk mencari lagu dari youtube

-❥ *${prefix}whatanime*
Membuat bot mencari tahu judul anime sesuai gambar yang kamu kirim!
Perlu diketahui bahwa tingkat keakuratan bot ini hanya berkisar 20%, karena bot hanya membandingkan gambar sesuai dengan warna gambar.
Kemungkinan juga bot akan mengirim bukti video pendek berdurasi 2 hingga 10 detik.


Random Teks:
-❥ *${prefix}fakta*
Bot akan mengirim teks fakta pendek

-❥ *${prefix}pantun*
Bot akan mengirim pantun 4 baris

-❥ *${prefix}katabijak*
Bot akan mengirim kata-kata bijak

-❥ *${prefix}quote*
Bot akan mengirim quote pendek beserta author / pembuatnya


Random Images:
-❥ *${prefix}anime*
Bot akan mengirim gambar anime random sesuai dengan query yang kamu minta

-❥ *${prefix}kpop*
Bot akan mengirim gambar kpop random sesuai dengan query yang kamu minta

-❥ *${prefix}memes*
Bot akan mengirim gambar meme berbahasa inggris atau tanpa kata-kata


Lain-lain:
-❥ *${prefix}tts*
Bot akan mengirim suara voice google sesuai dengan permintaan anda

-❥ *${prefix}translate*
Bot akan menterjemahkan bahasa sesuai dengan balasan chat dan kode bahasa yang anda minta

-❥ *${prefix}resi*
Bot akan mengirim pesan ke nomor kurir sesuai dengan jenis kurir yang anda minta

-❥ *${prefix}covidindo*
Bot akan menampilkan informasi perkembangan Virus Corona / Covid-19 / SARS-nCov-2 sesuai informasi pada hari ini

-❥ *${prefix}ceklokasi*
Bot akan menampilkan lokasi dimana anda berada sekarang

-❥ *${prefix}shortlink*
Bot akan merubah link panjang yang anda kirim menjadi link pendek yang bisa diakses tanpa iklan

-❥ *${prefix}bapakfont*
Bot akan merubah kalimat yang anda kirim menjadi kalimat alay


18+ (Beta - Gak Disarankan):
-❥ *${prefix}nekopoi*
Bot akan mengirimkan link video nekopoi (anime hentai/mesum) random beresolusi 240p, 360p, 480p dan 720p
Masih tahap Beta (belum sempurna)
Kemungkinan perintah yang anda kirim tidak bisa diproses


Tentang Bot:
-❥ *${prefix}tnc*
Menampilkan Syaray dan Kondisi dalam menggunakan bot ini

-❥ *${prefix}donasi*
Menampilkan berbagai macam cara berdonasi yang bisa anda lakukan (tidak memaksa)

-❥ *${prefix}botstat*
Menampilkan status bot selama bot ini dibuat

-❥ *${prefix}ownerbot*
Menampilkan informasi rinci developer bot ini
Perintah ini disembunyikan untuk menjaga informasi pribadi pembuat bot

-❥ *${prefix}join*
Jika anda ingin mengundang bot ini ke dalam grup

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Terimakasih! Gunakan Bot Assitant ini dengan bijak yaa✨
BOT by : Maulana Akbar Firdausya
Active Time : 24 jam, namun sewaktu-waktu dapat Maintenance tanpa pemberitahuan

NOTE :
Beberapa perintah yang kamu masukkan, mungkin sebagian tidak bisa saya proses karena akses jaringan, server offline atau servernya sedang saya pakai :v`
}
