# SIPKD — West Java Government Financial System Consultancy (SIPKD)

## Summary
Design analysis and consultancy project for **SIPKD (Sistem Informasi Pengelolaan Keuangan Daerah)** for the **West Java (Jabar) provincial government**. Not a from-scratch build — this was an architecture/design analysis engagement on the existing **V@LID SIPKD** enterprise system (ASP.NET). Produced comprehensive design documentation and a working data set for the eBudgeting module.

## Client
- **Organization:** Pemprov Jabar / West Java Provincial Government
- **System:** SIPKD Jabar (Sistem Informasi Pengelolaan Keuangan Daerah — West Java)
- **Original vendor:** V@LID (V@LID49V6_2018 build)
- **Industry:** Government / Public Finance
- **Country:** Indonesia
- **Engagement type:** Design analysis, architecture consulting, eBudgeting module

## What Was Done
1. **Phase 2a — Analysis & Design**: Full architectural analysis:
   - Fit & Gap Analysis (vs. requirements)
   - Solution Architecture Overview
   - Technology Options Evaluation
   - Design Criteria definition
   - Class Design, Component Design
   - Deployment Design
   - Networking & Communication Design (incl. `Arsitektur Jaringan.jpg`)
   - User Interface Design
   - Data Dictionary
   - Logical & Physical Database Design (with .rar archives)
   - System Interfaces specification
   - Development Tools & Platform selection

2. **Phase 2b & 2c — Testing**: Test scenarios and test plan

3. **eBudgeting Module Data**: Actual working data deliverables:
   - `atributbansos.xlsx`, `atributhibah.xlsx` — Grant and social aid attributes
   - `giatbtlhibah.xlsx`, `gitbtlbansos.xlsx` — Activity mappings
   - `programbtlbansos.xlsx`, `programgiathibah.xlsx` — Program data
   - `user_hibah_dan_bansos.xlsx`, `data_user_dpm_for_system.xlsx` — User data
   - `Kamus Kegiatan Hibah, Bansos dan Bandes...xlsx` — Activity price catalog
   - `myebudgetjabar_lokal_3-14-2019` (94MB MySQL backup — full eBudgeting DB)

## Database Restore
```sql
RESTORE database sipkd from disk='D:\work\V@LID49V6_2018_GESER_20180319_1145.bak'
with move 'V@LID49V4_AKB_Data' to 'D:\sipkd_Data.mdf',
move 'V@LID49V4_AKB_Log' to 'D:\sipkd_Log.LDF'
```

## Financial Domain (eBudgeting modules)
- **Hibah** (Grants): Grant program management, attributes, activity mapping
- **Bansos** (Social Aid / Bantuan Sosial): Social assistance program management
- **Bandes** (Bantuan Desa / Village Aid): Village assistance programs

## Tech Stack
- SQL Server (original V@LID SIPKD system)
- ASP.NET (original platform)
- MySQL (eBudgeting module — 94MB backup)
- Excel (data deliverables)

## Documents Found
- Full Phase 2a design documentation folder (architecture, class design, DB design, UI design, deployment, networking)
- Phase 2b & 2c testing documentation
- `DATA KERJA TERAKHIR EBUDGETING/` — production-ready eBudgeting data files
- `V@LID49V6_2018_GESER_20180319_1145` — SQL Server .bak restore file
- `sqlredtore.txt` — SQL Server restore script
- `SIPKD63_JABAR/` — Application source code folder

## Note
The `sipkd-revamp` project in the Freelance folder is a **separate project** — it's the actual Laravel revamp/modernization of this same system, developed later.
