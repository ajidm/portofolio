# TFI Binus Web App (TFIBinus)

## Summary
Angular 9 student and admin portal for **Binus University (Bina Nusantara University)** — one of Indonesia's top private universities. Role-based SPA with separate admin and student modules, analytics dashboards via Chart.js, ng-zorro Ant Design components, and PWA offline capabilities.

## Client
- **Organization:** Universitas Bina Nusantara (Binus University)
- **Brand:** TFI Binus (likely TFI = Tugas Field Internship or similar Binus program)
- **Industry:** Higher Education
- **Country:** Indonesia
- **Website:** binus.ac.id

## App Purpose
Education management portal with two distinct user interfaces:
- **Student module** (`/`): Student-facing portal — assignments, schedules, progress tracking
- **Admin module** (`/admin`): Administrative interface — reporting, data management, analytics dashboards

## Tech Stack
- Angular 9, TypeScript
- Angular Material 8
- ng-zorro (Ant Design for Angular) — primary component library
- Bootstrap 4
- Chart.js + ng2-charts (analytics dashboards)
- date-fns + moment.js (date handling)
- Select2 (dropdowns)
- SweetAlert2 (confirmation dialogs)
- Perfect Scrollbar (UI)
- Service Worker (@angular/pwa — offline capabilities)
- IndexedDB (client-side caching)
- jQuery support

## App Structure
```
src/app/
├── module/
│   ├── admin/     — Admin module (lazy-loaded, requires isAdmin flag)
│   ├── student/   — Student module (lazy-loaded, requires auth)
│   ├── main/      — Shared layout/shell
│   └── shared/    — Shared components
```

## Routes
- `/login` — Login page
- `/` → student module (AuthGuard)
- `/admin` → admin module (AuthGuard + isAdmin)
- `/not-found`, `/failed` — error pages

## Security
- `AuthGuardService` protects all routes
- Role-based: `isAdmin` flag determines admin module access

## Environment
- All environment files (environment.ts, environment.development.ts, environment.prod.ts, environment.staging.ts) are **empty/0KB** — API URLs were not committed to repo

## Documents Found
- `README.md` — standard Angular CLI boilerplate
- No business documentation
