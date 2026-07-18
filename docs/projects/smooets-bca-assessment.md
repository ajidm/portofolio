# BCA Assessment Platform (bca-fe)

## Summary
Technical assessment / demo CRUD app built for **Bank Central Asia (BCA)** as part of a project evaluation by Smooets agency. Two entity CRUD (JenisBarang + TipeBarang), not a production deployment.

## Client
- **Company:** PT Bank Central Asia Tbk (BCA) — Indonesia's largest private bank
- **Industry:** Banking & Financial Services
- **Country:** Indonesia
- **Context:** Smooets agency technical evaluation project for BCA

## App Purpose
SPA for managing two inventory/catalog entities:
- **JenisBarang** (Item Category): kodeJenis, namaJenis, harga, mataUang (IDR/US), satuan, ukuran
- **TipeBarang** (Item Type): composite key (kodeJenis + kodeTipe), keterangan, status (AKTIF/NON-AKTIF)

## Tech Stack
- Vue.js 2.5, Vue Router 3, Vuex
- Vuetify 1.4 (Material Design)
- Vuelidate (form validation)
- vue-xlsx-table + xlsx (Excel export)
- js-cookie (JWT session)
- Google reCAPTCHA v2
- PWA service worker
- Webpack + Babel

## API
- Base URL: `http://bca-modern-web-api.stagingapps.net/api/v1`
- REST endpoints: GET/POST/PUT/DELETE `/api/v1/jenis-barang`, `/api/v1/tipe-barang`

## Author
- **Developer:** Maulana Mohammad Luthfy (maulana.mohammad.luthfy@gmail.com)
- **Author org:** Smooets

## Documents Found
- `README.md` — standard Vue CLI boilerplate only
- No business documentation

## Notes
- App title in toolbar: "Application" (no branding)
- This was a technical demo/assessment scope, not a full production feature set
- The RAM Frontend project (also for BCA) is the production system; this appears to be a pre-project evaluation
