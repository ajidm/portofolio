# RAM Asset Management / Rental Asset Management (ram-frontend)

## Summary
Enterprise frontend for **BCA (Bank Central Asia)**'s internal Rental Asset Management system. Vue.js 2 SPA for managing the full lifecycle of rented/leased banking equipment (ATM-adjacent devices, passbooks, etc.) — from PM scheduling, technician assignment, and execution to completion and rating. Deployed on OpenShift, connected to enterprise bank intranet.

## Client
- **Company:** PT Bank Central Asia Tbk (BCA) — Indonesia's largest private bank
- **Evidence:** Staging API URL `bca-modern-web-api.stagingapps.net` + OpenShift namespace `ram` + branch name "KCU Wisma Asia" (BCA branch in Jakarta Barat) in dummy data
- **Industry:** Banking
- **Country:** Indonesia
- **Internal deployment:** OpenShift (namespace: `ram`, app: `ram-fe`)
- **GitLab:** `git@10.20.213.82:ERP/RAM-FRONTEND.git`

## App Purpose
Rental Asset Management (RAM) — manages preventive maintenance (PM) and corrective maintenance for rented banking equipment:
- **PM Scheduling**: Create PM work orders per period/year per branch, assign vendor + technician
- **PM Execution**: Technician logs start/end time, documents issues and solutions, attaches photos
- **Branch Portal**: Branch PIC can view and confirm PM visits
- **Technician Portal**: Technician sees assigned PM tasks, updates status
- **Rating System**: Branch rates vendor/technician/helpdesk/equipment after PM completion
- **Master Data**: Branches, vendors, technicians, item types/brands/models
- **RBAC**: Per-menu bitmasked permissions (read=1, insert=2, update=4, delete=8)
- **Audit Trail**: Full activity log across all user actions
- **Excel Import/Export**: Bulk operations for asset data

## Tech Stack
- Vue.js 2.5, Vue Router 3, Vuex
- Vuetify 1.3 (Material Design)
- Webpack + Babel
- JWT authentication
- Excel import/export (xlsx library)
- CI/CD: Jenkins (Jenkinsfile present)
- OpenShift deployment

## Key Models
- **Barang** (asset): idBarang, serialNumber, nomorPks, nomorPo, kodeCabang, jenisBarang, tipeBarang, merkBarang, model, backupUnit
- **JadwalPM** (PM schedule): nomorPm, periodePm, tahunPm, kodeCabangRccInisial, jenisBarang, tipeBarang, kodeVendor, statusPmHdr, rencanaTanggalPm
- **PM Detail**: idPmDtl, serialNumber, statusBarang, statusPmDtl, keteranganMasalah, keteranganSolusi, backupUnit
- **PM Header**: nomorPm, periodePm, tahunPm, kodeCabang, namaCabang, alamat, namaPic, nomorHandphone, kodeVendor, namaVendor, kodeTeknisi, namaTeknisi, jenisBarang, tipeBarang, statusPm, tanggalRencanaPm, tanggaPmMulai, tanggaPmSelesai, jamMulai, jamSelesai, urlGambar, pinHash
- **Rating**: idRating, tipe, nomorTransaksi, kodeVendor, kodeCabangRccInisial, rating, ulasan, ulasanTeknisi, ulasanBarang, ulasanHelpdesk
- **Cabang** (branch), **Vendor**, **ServicePointVendor**, **Teknisi** (technician)
- **JenisBarang / TipeBarang / MerkBarang / ModelBarang** (item taxonomy)
- **Period**, **User** (internal/external), **Role**, **Menu**
- **RoleMenuAccess** (bitmasked: read=1, insert=2, update=4, delete=8)
- **Pairing** (serial number pairing records)

## API Endpoints
- Dev: `http://10.5.176.109:8080` (GYA environment)
- Auth/CRONOS dev: `http://10.58.140.24:80` (OpenShift)
- Production: `http://10.5.176.176:8080` (ALE environment)
- Auth prod: `http://10.5.176.176:9090`

## Documents Found
- `README.md` — standard Vue CLI boilerplate
- `Jenkinsfile` — CI/CD pipeline configuration
- `src/dummies/*.json` — 18 realistic dummy data files with real BCA branch data (KCU Wisma Asia, Jakarta Barat address)

## RAM API (from misc/[DEV] - RAM.postman_collection.json)
- `POST/GET/PUT/DELETE /security/user` — user management
- `/security/role` — role CRUD
- `/security/menu` — hierarchical menu management
- `/security/rolemenu/management` — role-menu permission mapping
- `/profile` — user profile, menu access, password change
- `/master/cabang` — branch master data
- Port: 8080
