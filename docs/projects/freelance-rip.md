# Rest In Peace — Digital Memorial (rip)

## Summary
Full-stack Laravel 5.2 platform for **restinpeace.id** — an Indonesian digital memorial and obituary service. Allows families to create online memorials for deceased loved ones with photo/video/audio galleries, tribute messages, family trees, subscription plans, and Midtrans payment integration.

## Client
- **Brand:** Rest In Peace
- **Domain:** restinpeace.id
- **Support email:** support@restinpeace.id
- **Industry:** Digital Memorial Services / SaaS
- **Country:** Indonesia
- **Developer:** Freelance

## App Purpose
Digital memorial creation and management platform:
- **Memorials**: Family creates a memorial page for the deceased — name, dates, biography, profile photo
- **Gallery**: Photo, video, audio, and story uploads per memorial
- **Tributes**: Visitors leave tribute messages
- **Obituary**: Formal obituary with family members, gallery, pricing options
- **Directory**: Funeral home / cemetery business listings with gallery
- **Subscription**: Memorial subscription plans (monthly/annual)
- **Q&A**: Community questions and replies
- **Partners**: Funeral home and service partner listings
- **Reports**: Memorial report/flag system
- **Background**: Customizable memorial page backgrounds
- **Admin panel**: Full management of memorials, subscriptions, payments, users

## Tech Stack
- Laravel 5.2, PHP 5.5.9+
- Sentinel (authentication + RBAC)
- **PostgreSQL** (db_rip on localhost:5432) — password: `Today1234!`
- **AWS S3** (`restinpeace` bucket, ap-southeast-1) — all media storage
- **AWS SES** (email delivery)
- **Midtrans** payment gateway (Indonesian payment processor)
- **Facebook OAuth** (social login)
- league/flysystem-aws-s3-v3 (S3 integration)
- DOMPDF (PDF generation)
- Laravel Snappy / wkhtmltopdf (complex PDF)
- maatwebsite/excel (Excel export)
- cviebrock/eloquent-sluggable (URL slugs)
- intervention/image (image processing)
- DataTables (admin panels)

## Key Models
**Memorial domain:** Memorial, MemorialAdmin, MemorialGallery, MemorialGalleryAudio, MemorialGalleryVideo, MemorialGalleryStory, MemorialGalleryStoryFile, MemorialSubscribe, MemorialReport, MemorialTributes

**Obituary domain:** Obituary, ObituaryFamily, ObituaryGalery, ObituaryPrice

**Directory:** Directory, DirectoryGallery, CategoryDirectory

**Platform:** City, Province, Relationship, RelationshipView, Background, Category, Confirmation, Partner, Subscription, Question, QuestionReply, Menu, LogActivity, Role, RoleUser, Faq, GeneralSetting, ContentConfig, Privacy, AboutUs

## Environment
- DB: PostgreSQL (`db_rip`, localhost:5432)
- Storage: AWS S3 (`restinpeace` bucket, ap-southeast-1)
- Email: AWS SES via Gmail (`support@restinpeace.id`)
- Payment: Midtrans (Indonesian payment gateway)
- OAuth: Facebook

## Documents Found
- `readme.md` — installation guide
- `.env` / `.env.example` / `.env.production` — environment config variants

## Notes
- Two PDF drivers: DOMPDF for simple reports, Laravel Snappy (wkhtmltopdf) for complex pixel-perfect layouts
- PostgreSQL instead of MySQL (unusual for Laravel 5.2 projects in this era)
- AWS SES + Midtrans combination positions this as a production-ready platform
