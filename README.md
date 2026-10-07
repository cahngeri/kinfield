# heartful-mom-growth

Website company profile **KINFIELD** — creative marketing agency untuk brand baby & kids.

## Teknologi

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS 3.4** + **shadcn/ui** (Radix UI)
- **React Router v6**, **TanStack React Query**, **Framer Motion**
- Testing: **Vitest** + Testing Library

## Menjalankan secara lokal

```sh
npm install
npm run dev        # dev server di http://localhost:8080
```

## Perintah lain

```sh
npm run build      # build produksi ke dist/
npm run preview    # preview hasil build
npm run lint       # eslint
npm test           # vitest
```

## Deploy

Dikonfigurasi untuk **Cloudflare Pages**:

- Build command: `npm run build`
- Output directory: `dist`
- `public/_redirects` menyediakan SPA fallback agar deep link (mis. `/about`) tidak 404.

## Struktur

```
src/
  pages/        # halaman route (Index, AboutUs, Insight, ContactUs, Portfolio, dll)
  components/   # section landing page + komponen ui/ (shadcn)
  assets/       # gambar
  hooks/        # hooks bersama
```
