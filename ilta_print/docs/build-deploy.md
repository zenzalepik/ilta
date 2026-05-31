# Build dan Deploy

## Menjalankan Website Lokal

Jika Hugo sudah tersedia di PATH:

```powershell
hugo server
```

Lalu buka:

```text
http://127.0.0.1:1313/
```

Jika Hugo tidak ada di PATH, gunakan path executable Hugo yang terpasang di
laptop.

## Build Produksi

```powershell
hugo --gc --minify
```

Output build akan dibuat di folder:

```text
public/
```

Folder `public/` adalah hasil generate. Jangan edit manual isi `public/` untuk
perubahan permanen. Edit sumbernya di `content/`, `layouts/`, atau `static/`.

## Checklist Sebelum Deploy

- Jalankan build produksi.
- Pastikan tidak ada error Hugo.
- Cek halaman utama, produk, artikel, portfolio, kontak, dan cart.
- Pastikan link internal tidak 404.
- Pastikan nomor WhatsApp, email, dan alamat benar.
- Pastikan gambar penting tidak broken.
- Pastikan `robots.txt`, `sitemap.xml`, dan `llms.txt` tersedia.

## Kontak dan Alamat Aktif

- WhatsApp: 0851-8336-9972
- Email: hello@iltaprint.com
- Alamat: Jl. Masjid, RT.01/RW.08, Dusun Sumberwinong, Banjar Dowo, Kec. Jombang, Kabupaten Jombang, Jawa Timur 61419
- Google Profile: https://share.google/XzID4Zifqdv41XWaC
