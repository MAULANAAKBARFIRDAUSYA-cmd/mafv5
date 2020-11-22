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
- Source code / bot anda bisa lihat di https://github.com/MAULANAAKBARFIR********** (minta izin ke pemilik)

WhatsApp: tinggal cari di profil nomernya
Telegram: telegram.me/maulanaakbarf
Discord: ada, tapi itu dulu ... sekarang mah udah ilang
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

                  ⚠ BACA INI!!! ⚠
JANGAN SERING MENGIRIM PERINTAH YANG SALAH ATAU PERINTAH VERSI BETA!
KARENA ANDA AKAN DIANGGAP SEBAGAI SPAMMER DAN DIBLOKIR!
UNTUK MEMBUKA BLOKIR, HARUS MENGAKTIFKAN ULANG SERVER

Penjelasan lengkap fitur bot ini:
-❥ https://anotepad.com/notes/3gbr8w4g

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

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Terimakasih! Semoga harimu-harimu bahagia✨
BOT by : Maulana Akbar Firdausya
Active Time :
24 jam, namun sewaktu-waktu dapat Maintenance tanpa pemberitahuan

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
