# Manajemen Konten

Semua konten utama dikelola dari file Markdown di folder `content/`.
Setelah file diedit, Hugo akan membaca ulang data tersebut saat development
server berjalan atau saat build.

## Produk

Folder produk:

```text
content/produk/
```

Setiap produk disimpan sebagai satu file Markdown, misalnya:

```text
content/produk/stiker-label.md
content/produk/banner-spanduk.md
content/produk/kaos-dtf.md
```

Data penting pada produk:

```yaml
title: "Stiker Label Produk"
description: "Deskripsi untuk SEO dan ringkasan halaman."
summary: "Ringkasan pendek untuk card."
image: "/ilta_assets/card_produk.png"
category: "Produk Jualan"
price: 25000
unit: "paket"
variants:
  - name: "A4"
    price: 25000
features:
  - "Warna tajam"
  - "Bisa custom ukuran"
```

Catatan:

- `price` dipakai sebagai harga mulai dari.
- `variants` dipakai untuk pilihan produk dan cart.
- `image` dipakai untuk thumbnail list, detail produk, Open Graph, dan SEO.
- Isi Markdown setelah front matter menjadi deskripsi detail produk.

## Artikel

Folder artikel:

```text
content/artikel/
```

Data penting:

```yaml
title: "Judul Artikel"
description: "Deskripsi SEO."
summary: "Ringkasan card."
image: "/ilta_assets/hero_products.png"
tags:
  - Digital Printing
  - Branding UMKM
takeaways:
  - "Poin penting untuk pembaca."
```

Artikel detail sudah mendukung:

- Article schema.
- Breadcrumb.
- Open Graph.
- Twitter Card.
- Share button WhatsApp, X, Telegram, dan Facebook.

## Portfolio

Folder portfolio:

```text
content/portfolio/
```

Data penting:

```yaml
title: "Nama Portfolio"
description: "Deskripsi portfolio."
summary: "Ringkasan card."
image: "/poster/PNG/contoh.png"
category: "Packaging"
client: "UMKM Produk Lokal"
service: "Desain Packaging dan Cetak"
highlights:
  - "Visual lebih profesional"
```

Portfolio detail sudah mendukung CreativeWork schema dan thumbnail SEO.

## Layanan dan Solusi

Folder:

```text
content/layanan/
content/solusi/
```

Gunakan file baru untuk menambah detail layanan atau solusi. Template default
akan otomatis membuat halaman list dan detail.

## Halaman Umum

Halaman umum disimpan di:

```text
content/cara-order/
content/faq/
content/kontak/
content/tentang/
content/syarat-ketentuan/
content/kebijakan-privasi/
```

Jika perlu mengubah informasi kontak, cek juga `hugo.toml` agar header, footer,
SEO schema, dan halaman lain tetap konsisten.
