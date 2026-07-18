# Papermark (papermark-backend)

## Summary
Laravel 5.2 backend for **Papermark** — an Indonesian custom stationery and invitation printing e-commerce platform. Provides both a web admin panel (AdminLTE) and a REST API (`api/v1`) for a companion mobile app. Customers configure custom print products (invitations, envelopes, cards) by selecting paper type, layout, color, font, and lining. Developed by Smooets.

## Client
- **Brand:** Papermark
- **Admin email (dev):** admin@papermark.com
- **Developer:** Smooets (yoga@smooets.com, adi.r.k@smooets.com, roni.y@smooets.com)
- **Internal framework/brand:** AHLOO (used in helpers, SMS messages, config naming)
- **Industry:** Custom Print / Stationery E-Commerce
- **Country:** Indonesia

## App Purpose
Custom stationery/invitation ordering platform:
- **Product Catalog**: Browse customizable print products (invitations, cards, envelopes)
- **Multi-layer Customization**: Paper type → Layout → Back layout → Color → Font → Lining combinations
- **Mobile Companion API**: `api/v1` REST endpoints for mobile app
- **Order Management**: Full order lifecycle with customer management
- **City/location management**: Delivery area management
- **Hashtag system**: Product tagging and discovery
- **Package management**: Bundle pricing configurations

## Tech Stack
- Laravel 5.2, PHP 5.5.9+
- Sentinel (authentication)
- AdminLTE (admin dashboard UI)
- REST API: `api/v1` for mobile app
- **Nexmo SMS** (phone verification, app name: "AHLOO")
- **Mailgun** (transactional email)
- **AWS S3** (file storage via Laravel Flysystem)
- dompdf (PDF generation)
- intervention/image (image processing)
- DataTables (admin pagination)

## Key Models
User, Role, Menu, Category, Product, ProductLayout, ProductBackLayout, ProductImage, ProductColor, ProductFont, [envelope customization models], Order, Customer, City, Package, Hashtag

## Notes
- `config/setting_apps.php` has: `name = 'Telko Apps'` (possible config copy-paste from Telko Wallet — same Smooets developer)
- No .env file present (only .env.example in readme)
- Mobile app is the primary consumer of the `api/v1` endpoints

## Documents Found
- `readme.md` — "Papermark Web Admin" installation guide (Composer + Bower, default admin: admin@papermark.com / 12345678)
