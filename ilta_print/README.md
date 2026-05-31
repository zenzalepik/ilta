# ILTA PRINT

Website ILTA PRINT versi Hugo.

## Menjalankan Lokal

Pastikan Hugo sudah terpasang, lalu jalankan:

```powershell
hugo server
```

Halaman utama tersedia di:

```text
http://localhost:1313/
```

Halaman design system tersedia di:

```text
http://localhost:1313/design-system/
```

## Struktur Penting

- `hugo.toml`: konfigurasi utama Hugo.
- `layouts/index.html`: template homepage.
- `layouts/_default/design-system.html`: template halaman design system.
- `content/_index.md`: entry homepage.
- `content/design-system/_index.md`: entry halaman design system.
- `static/`: aset publik yang disajikan Hugo dari root URL.

## Dokumentasi

Dokumentasi internal tersedia di folder:

```text
docs/
```

Mulai dari [docs/README.md](./docs/README.md).

## Lisensi

Website ini bersifat proprietary / all rights reserved. Kode, desain, konten,
dan aset tidak boleh digunakan pihak lain tanpa izin tertulis dari ILTA PRINT.
Lihat [LICENSE](./LICENSE).
