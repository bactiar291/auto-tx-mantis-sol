# auto-tx-mantis-sol
auto send ke random wallet mantis rollup 
# Solana Transaction Sender

# jika kalian mendapati seperti gambar dibawah itu berarti sudah berhasil biarkan berjalan sambil pantau wallet backpack / night
![1](https://raw.githubusercontent.com/bactiar291/auto-tx-mantis-sol/main/ss1.png)
![2](https://raw.githubusercontent.com/bactiar291/auto-tx-mantis-sol/main/ss2.png)


Proyek ini bertujuan untuk mengirim transaksi di jaringan Solana menggunakan kunci rahasia yang disimpan dalam file JSON. Skrip ini menggunakan pustaka `@solana/web3.js` untuk berinteraksi dengan blockchain Solana.

## Fitur
- Mengirim SOL dari satu alamat ke alamat lain.
- Menghasilkan dompet acak untuk menerima SOL.
- Menyimpan detail transaksi dalam file JSON.

## Persyaratan

Pastikan Anda memiliki yang berikut ini terinstal:
- [Node.js](https://nodejs.org/) (versi 14 atau lebih baru)
- `npm` (yang biasanya terinstal bersama Node.js)

## Instalasi

1. **Kloning Repositori**

   Klon repositori ini ke mesin lokal Anda:

   ```bash
   git clone https://github.com/bactiar291/auto-tx-mantis-sol.git
   cd auto-tx-mantis-sol
   ```
2. **Menginstal Dependensi**

Instal dependensi yang diperlukan menggunakan npm:
   ```bash
   npm install
   ```
Membuat File Kunci Rahasia

Buat file secretKey.json di direktori root dengan konten berikut :

        {
              "secretKeyArray": [isi pprivate key dalam bentuk array]
          }
3. **Menjalankan Proyek**
Untuk menjalankan skrip dan mulai mengirim transaksi, gunakan perintah berikut:

 ```bash
node index.js          
 ```

          thank to bactiar291

          LICENSI "MIT"





   
