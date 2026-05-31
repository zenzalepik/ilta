# Overview Website

Website ILTA PRINT dibangun menggunakan Hugo sebagai static site generator.
Konten disimpan dalam file Markdown di folder `content/`, sedangkan template
halaman berada di folder `layouts/`.

## Teknologi

- Hugo untuk build website statis.
- Tailwind CDN untuk styling.
- Vanilla JavaScript untuk sistem cart di `static/js/cart.js`.
- Markdown front matter untuk data produk, artikel, portfolio, layanan, solusi, dan halaman umum.

## Halaman Utama

- `/`: beranda.
- `/produk/`: list semua produk.
- `/produk/<slug>/`: detail produk.
- `/cart/`: keranjang order.
- `/artikel/`: list artikel.
- `/artikel/<slug>/`: detail artikel.
- `/portfolio/`: list portfolio.
- `/portfolio/<slug>/`: detail portfolio.
- `/layanan/`: list layanan.
- `/solusi/`: list solusi.
- `/cara-order/`: panduan order.
- `/faq/`: pertanyaan umum.
- `/kontak/`: kontak resmi.
- `/tentang/`: profil ILTA PRINT.
- `/syarat-ketentuan/`: syarat dan ketentuan.
- `/kebijakan-privasi/`: kebijakan privasi.
- `/design-system/`: katalog warna, font, ukuran teks, dan komponen visual.

## Komponen Reusable

- `layouts/partials/header.html`: header utama.
- `layouts/partials/footer.html`: footer utama.
- `layouts/partials/main-cta.html`: CTA utama.
- `layouts/partials/faq-section.html`: section FAQ beranda.
- `layouts/partials/seo.html`: SEO global dan structured data.
- `layouts/partials/floating-actions.html`: floating WhatsApp button.
- `layouts/partials/site-assets.html`: aset CSS/JS umum.

## Informasi Brand

Konfigurasi utama brand tersimpan di `hugo.toml`, termasuk nomor WhatsApp,
email, alamat, logo, default image, dan keyword SEO.
