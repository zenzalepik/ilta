# Design System

## Arah Visual

Website mengikuti referensi visual `D:\Github\03_ilta\ilta_com\index.html`: minimal putih-hitam, heading Anton besar, ruang putih lega, kartu border sederhana, image overlap, dan aksen gradient pink-purple.

## Prinsip UI

- Mobile-first.
- CTA jelas dan berulang secara wajar.
- Kartu dipakai untuk paket, layanan, FAQ, dan portofolio.
- Section dibuat bersih dengan ruang putih cukup.
- Tidak memakai elemen dekoratif yang terlalu ramai.
- Tipografi harus mudah dipindai.

## Palet Warna

- Background utama: `#FFFFFF`
- Surface: `#FFFFFF`
- Text utama: `#111827`
- Text sekunder: `#4B5563`
- Primary: black `#000000`
- Accent gradient: pink `#EC4899` ke purple `#9333EA`
- Supporting accent: cyan/amber/rose hanya untuk label kecil jika dibutuhkan
- Border: `#E5E7EB`

Palet utama harus tetap bersih: putih, hitam, abu-abu, lalu gradient pink-purple sebagai aksen visual.

## Tipografi

- Font judul: Anton dari Google Fonts.
- Font selain judul: Montserrat dari Google Fonts.
- Heading: Anton, uppercase, font weight 500, dan letter spacing tetap 0.
- Body: 16px sampai 18px untuk kenyamanan baca.
- Label kecil: uppercase secukupnya untuk kategori.

## Komponen

- Header fixed translucent dengan backdrop blur.
- Tombol primary hitam, secondary putih border.
- Kartu layanan border rounded-xl dengan hover shadow.
- Pricing card.
- Step timeline.
- Portfolio card.
- FAQ accordion.
- Floating WhatsApp button.

## Responsive Behavior

- Mobile: navigasi menjadi menu toggle, hero satu kolom, pricing satu kolom.
- Tablet: grid dua kolom untuk layanan dan portofolio.
- Desktop: hero dua kolom, pricing empat kolom, layout lebih padat.

## Interaksi

- Smooth scroll anchor.
- Mobile menu toggle.
- FAQ accordion native memakai `details` dan `summary`.
- Tombol WhatsApp membuka chat baru.

## Catatan Implementasi

Prototype memakai Tailwind CDN agar cepat dijalankan sebagai HTML statis. Untuk production final, Tailwind sebaiknya dibuild lokal agar ukuran CSS lebih efisien dan tidak bergantung CDN.
