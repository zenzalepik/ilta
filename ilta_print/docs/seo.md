# Sistem SEO

SEO global dikelola dari:

```text
layouts/partials/seo.html
```

Partial ini dipakai oleh semua halaman Hugo.

## SEO yang Didukung

- Title dan meta description.
- Canonical URL.
- Robots, Googlebot, dan Bingbot directives.
- Open Graph.
- Twitter Card.
- Thumbnail meta.
- Hreflang `id-ID` dan `x-default`.
- Sitemap discovery.
- `llms.txt` discovery untuk crawler AI.
- Organization dan LocalBusiness schema.
- WebSite schema.
- HomePage, WebPage, dan CollectionPage schema.
- BreadcrumbList schema.
- Article schema untuk artikel.
- Product schema untuk produk.
- CreativeWork schema untuk portfolio.
- ItemList schema untuk list produk dan portfolio.

## File SEO Pendukung

- `static/robots.txt`
- `static/llms.txt`
- `hugo.toml`

Hugo juga menghasilkan sitemap otomatis saat build.

## Thumbnail

Gunakan field `image` pada front matter untuk menentukan thumbnail halaman.
Jika tidak diisi, sistem memakai fallback dari `hugo.toml`.

Contoh:

```yaml
image: "/ilta_assets/card_produk.png"
```

## Catatan Ranking

Website sudah disiapkan secara teknis untuk SEO, tetapi posisi pencarian Google
tetap dipengaruhi kualitas konten, kompetisi keyword, backlink, performa,
reputasi domain, dan konsistensi update.
