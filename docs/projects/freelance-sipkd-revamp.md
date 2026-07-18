# SIPKD Revamp (sipkd-revamp)

## Summary
Laravel 5.8 revamp/modernization of **SIPKD (Sistem Informasi Pengelolaan Keuangan Daerah)** — the Indonesian Regional Government Financial Management Information System. The original system was built in ASP.NET (branded **V@LID SIPKD R6**); this revamp migrates it to a modern Laravel + Vue.js stack while preserving all financial domain models and the SQL Server database.

## Client
- **System:** SIPKD — Sistem Informasi Pengelolaan Keuangan Daerah (Regional Financial Management Information System)
- **Government entity:** Regional government financial units (SKPD — Satuan Kerja Perangkat Daerah, PPKD — Pejabat Pengelola Keuangan Daerah)
- **Original system:** V@LID SIPKD R6 (ASP.NET)
- **Developer email:** mail.ajid13@gmail.com (Ajid's own project)
- **Industry:** Government / Public Finance
- **Country:** Indonesia

## App Purpose
Government budget management system covering:
- **Budget Planning (Anggaran)**: DPA (Dokumen Pelaksanaan Anggaran), SPD (Surat Penyediaan Dana), SKPD budget documents
- **Cash Management (Kas)**: SPP (Surat Permintaan Pembayaran), SP2D (Surat Perintah Pencairan Dana), BKU (Buku Kas Umum)
- **Accounting (Pembukuan)**: Jurnal (journal entries), BPK (Bukti Pengeluaran Kas), DASKR/DASKD
- **Master Data**: Banks, units, districts, contractors (DAFTBANK, DAFTDOK, DAFTUNIT, DAFTKABKOT, DAFTPHK3)
- **Integration**: Asset, payroll, receivables integration tables

## Tech Stack
- Laravel 5.8, PHP 7.1.3+
- Vue.js 2.6, Bootstrap 4, CoreUI Admin Dashboard
- Laravel Mix
- **SQL Server** (DB_CONNECTION=sqlsrv, DB_PORT=1433) — same DB as original V@LID system
- spatie/laravel-permission (RBAC)
- Laravel Socialite (Google OAuth)
- owen-it/laravel-auditing (audit log)
- QR Code generation
- GeoIP tracking
- Gravatar (user avatars)
- Rappasoft Laravel Boilerplate base

## Key Financial Domain Models
- **BEND** (Bendahara/Treasurer): NIP, KDBANK, UNITKEY, JAB_BEND, REKBEND, SALDOBEND
- **BERITA** (Berita Acara/Work Completion): NOBA, TGLBA, KDKEGUNIT, NOKON
- **KONTRAK** (Contract): NOKON, KDP3, KDKEGUNIT, TGLKON, NILAI
- **Jurnal/JurnalLalu** (Journal entries): nobukti, tglbukti, kdperd, nilaid, nilaik
- **DASKR/DASKD/DASKB** (DAS Kas — budget realization data)
- **KASB/KASD** (Kas Belanja/Definitif)
- **BPK/BPKBU/BPKDET*** (Bukti Pengeluaran Kas)
- **INTEGRASI/INTEGRASIASET/INTEGRASIGAJI/INTEGRASIPIUTANG** (integration tables)
- **BIDANG/BIDUNIT** (Field/Work Unit)
- **DAFTBANK/DAFTDOK/DAFTUNIT/DAFTKABKOT/DAFTPHK3** (master data)

## Roles
MDSKPKD, MASKPD, MPSKPD (standard Indonesian government finance system roles)

## Environment
- DB: SQL Server (`DB_DATABASE=TBIG` active, `DB_DATABASE=SIPKD` commented out)
- DB credentials: sa / LUP4L461
- OAuth: Google (Socialite)

## Documents Found
- `readme.md` — Laravel 5.8 Boilerplate readme (not customized)
- `database/factories/menu/*.json` — Full menu/sitemap JSON for original ASP.NET SIPKD:
  - **Anggaran** (Budget): DPA, SPD, SKPD budget forms
  - **Kas** (Cash): SPP, SP2D, BKU
  - **Pembukuan** (Accounting): journals, BPK
  - **Data Master**: banks, units, geography
  - **Utility**: user management, settings
- `V@LID49V6_2018_GESER_20180319_1145.bak` — SQL Server backup of original V@LID SIPKD database
