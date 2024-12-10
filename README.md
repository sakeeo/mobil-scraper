# Auto Data Scraper

Auto Data Scraper adalah aplikasi Node.js yang digunakan untuk mengambil data spesifikasi kendaraan dari situs web tertentu. 
Aplikasi ini mengumpulkan informasi tentang merek dan model kendaraan serta menyimpannya dalam format JSON.

## Fitur

- Mengambil daftar semua merek kendaraan.
- Mengambil model kendaraan untuk setiap merek.
- Mengeluarkan data dalam format JSON.

## Prerequisites

Sebelum menjalankan aplikasi ini, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (versi 12 atau lebih baru)
- NPM (biasanya sudah termasuk dalam instalasi Node.js)

## Instalasi

1. **Clone repositori ini**:
bash git clone https://github.com/username/repo-name.git cd repo-name
2. **Instal dependensi**:
bash npm install

## Penggunaan

1. **Jalankan skrip**:
  bash node autoDataScraper.js
2. **Output**: Data spesifikasi kendaraan akan dicetak dalam format JSON di konsol.

## Struktur Kode

- `autoDataScraper.js`: Skrip utama untuk melakukan crawling data spesifikasi kendaraan.
- `package.json`: File konfigurasi proyek yang berisi informasi tentang dependensi dan skrip.

## Contoh Output

Output dari skrip ini akan berupa JSON yang berisi daftar merek dan model kendaraan, seperti berikut:
json [ { "name": "Aston Martin", "link": "https://www.auto-data.net/en/aston-martin", "models": [ { "name": "Aston Martin DB11", "link": "https://www.auto-data.net/en/aston-martin/db11" }, { "name": "Aston Martin Vantage", "link": "https://www.auto-data.net/en/aston-martin/vantage" } ] }, { "name": "Audi", "link": "https://www.auto-data.net/en/audi", "models": [ { "name": "Audi A3", "link": "https://www.auto-data.net/en/audi/a3" }, { "name": "Audi A4", "link": "https://www.auto-data.net/en/audi/a4" } ] } ]

## Catatan

- Pastikan untuk mematuhi kebijakan scraping situs web yang Anda targetkan. Beberapa situs mungkin memiliki batasan atau larangan terhadap scraping.
- Jika Anda mengalami kesalahan atau masalah, periksa log di konsol untuk informasi lebih lanjut.

## Lisensi


## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request atau buka isu untuk diskusi.

