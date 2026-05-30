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
