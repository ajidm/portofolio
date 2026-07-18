# Puskodal Portal — TNI AD (pus_cms)

## Summary
Military command-and-control CMS for the **Indonesian Army (TNI AD)** — specifically for **Puskodal (Pusat Pengendalian / Operations Control Center)** at **Mabes TNI AD (Army Headquarters)**. A CodeIgniter 3 web portal aggregating daily situation reports from all 15 Indonesian Army regional commands (Kodam). 170+ database tables covering intelligence, operations, logistics, personnel activities, incident tracking, territorial data, border monitoring, and disaster response.

## Client
- **Organization:** TNI AD — Tentara Nasional Indonesia Angkatan Darat (Indonesian Army)
- **Department:** Puskodal — Pusat Pengendalian (Operations Control Center)
- **Headquarters:** Mabes TNI AD (Army HQ Jakarta)
- **Country:** Indonesia
- **Developer:** rendy.ariawindana@gmail.com (primary dev contact)
- **Industry:** Defense / Military / Government

## App Purpose
Real-time operational command-and-control portal for Army HQ:
- **Lapsit Harian** (Daily Situation Reports): Aggregated from all 15 Kodam units
- **Giat VVIP/VIP**: VIP/VVIP security activities and schedules
- **Giat Intel** (Intelligence activities): Per Puskodal and Puskodaldam
- **Giat Operasi** (Military operations): Per regional command
- **Giat Logistik** (Logistics activities): Supply chain and equipment
- **Giat Personel** (Personnel activities): Assignments, transfers
- **Kejadian Luar Biasa (KJL)**: Incidents — armed combat, criminal, accidents, brawls, weapons contact
- **Pam Dagri**: Domestic security operations
- **SPAMAD**: Terrorism/radical monitoring (napiter, raka, raki, rala)
- **Territorial Data**: Agricultural metrics (sawah, LTT, gabah absorption) per Kodam
- **Border Monitoring (Pamtas)**: WNI/WNA/WNTL border citizenship tracking per territory
- **BMKG Weather**: Forecast and daily/hourly weather data
- **BNPB Disaster**: Disaster incident tracking by province
- **Peacekeeping (PBB)**: UN peacekeeping operations data
- **Health**: Military hospitals, puskesmas, rujukan network
- **Siamebidibame**: Strategic integrated information system
- **CMS**: Blog, page builder, navigation management

## Tech Stack
- CodeIgniter 3, PHP 5.2.4+
- MySQL (db_puskodal_portal, MariaDB)
- DOMPDF (PDF generation)
- A-Auth (CodeIgniter RBAC)
- Debug Bar (dev profiling)
- Faker (test data seeding)
- Version: Puskodal 2.6.8

## RBAC Roles
Admin, Puskodal, Puskodaldam, Padis, Danpuskodal, Danpuskodaldam, Kasad & Wakasad, Assisten & Staff, Public

## Regional Commands (15 Kodam)
I Bukit Barisan (Sumatra Utara), II Sriwijaya (Sumatra Selatan), III Siliwangi (Jawa Barat), IV Diponegoro (Jawa Tengah), V Brawijaya (Jawa Timur), VI Mulawarman (Kalimantan), IX Udayana (Bali/NTT/NTB), XII Tanjungpura (Kalimantan Barat), XIII Merdeka (Sulawesi Utara), XIV Hasanuddin (Sulawesi Selatan), XVI Pattimura (Maluku), XVII Cendrawasih (Papua Barat), XVIII Kasuari (Papua), Jakarta Raya, Iskandar Muda (Aceh)

## Key Table Groups (170+ tables)
**Incident tables** (per Puskodal + Puskodaldam):
- puskodal_kejol_baku_tembak / puskodaldam_kejol_baku_tembak (armed combat incidents)
- puskodal_kejol_kriminal / puskodaldam_kejol_kriminal (criminal incidents)
- puskodal_kejol_lainnya / puskodaldam_kejol_lainnya (other incidents)
- puskodal_perkelahian / puskodaldam_perkelahian (brawl incidents)
- puskodal_kontak_senjata / puskodaldam_kontak_senjata (weapons contact)
- puskodal_kecelakaan / puskodaldam_kecelakaan (accident incidents)

**Activity tables:**
- puskodal_giat_vvip, puskodal_giat_intel, puskodal_giat_operasi, puskodal_giat_logistik, puskodal_giat_personel, puskodal_pam_dagri (and puskodaldam_ variants for all)

**Territorial data:** TER_CETAK_SAWAH, TER_LTT, TER_SERAP_GABAH (per Kodam)

**Intelligence:** spamad_napiter, spamad_raka, spamad_raki, spamad_rala

**Master data:** master_satuan (units/battalions), master_kotama (Kodam), batalyon, master_jenis_pejabat, master_provinsi, master_kabupaten, master_puskesmas, master_rumah_sakit

**CMS:** blog, blog_category, page, page_block_element, menu, menu_type

## API Endpoints
- `GET /api/api_portal/all` — aggregated data per Kodam (personnel, territorial, logistics)
- `GET /api/lapsit/all` — daily situation report data
- `GET /api/master_kotama` — Kodam/Kotama master data
- `GET /api/master_satuan` — unit master data

## Internal IPs
- Mabes TNI API: `192.168.200.210`
- Puskodal API: `10.32.2.200`

## Documents Found
- `db_puskodal_portal.sql` — main production DB dump (MySQL 5.7, 2018)
- `doc/db_puskodal_portal.sql` — earlier dump (Navicat, MariaDB, Oct 2018)
- `doc/db_puskodal_portal_2.sql` — alternate dump
- `import/181107_master_jenis_pejabat_update.sql` — VIP/official personnel types seed
- `import/181107_vw_satuan.sql` — unit/satuan view
- `import/181112_pemtas_warganegara.sql` — border citizenship types
- `import/181112_pemtas_wilayah.sql` — border territory table
- `import/181113_pamtas.sql` — border monitoring tables
- `application/views/backend/standart/administrator/laporan/List table yang harus dirubah dari kode_kotama ke Integer.txt` — dev schema change note
- `readme.md` — project name + developer email only

## Leadership hierarchy (from seed data)
Presiden, Wapres, Menkopulkuham, Menham, Menhub, Panglima TNI, Kasad, Wakasad, Irjenad, Asisten-asisten, Danpuskodal, etc.
