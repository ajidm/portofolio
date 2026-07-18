# Paskomnas (paskomnas)

## Summary
Laravel 5.1 e-commerce marketplace platform for **Paskomnas** — an Indonesian multi-vendor marketplace connecting vendors and buyers. Full-stack with admin panel, REST API, and client-facing storefront. Includes shopping cart, multi-language support, Excel bulk operations, PDF invoicing, and an internal Smooets CRUD generator package.

## Client
- **Brand:** Paskomnas
- **Industry:** E-Commerce / Marketplace
- **Country:** Indonesia
- **Developer:** Freelance (with Smooets CRUD generator package)

## App Purpose
Multi-vendor e-commerce marketplace:
- **Product catalog**: Products with images, regions, retail pricing variants
- **Shopping cart**: Session-based cart with gloudemans/shoppingcart
- **Transactions**: Full order flow, payment confirmation, shipping management
- **Multi-language**: EN/ID language switcher
- **User management**: Roles, attachments, authentication
- **News/FAQ/Feedback**: CMS content management
- **Promotions**: Banners, advertisements, redeem codes
- **Static content**: Disclaimer, Privacy Policy, Terms, HowToOrder, AboutMe
- **Partner network**: TemanPaskomnas (Paskomnas Partners)
- **Doku**: DOKU payment gateway integration

## Tech Stack
- Laravel 5.1, PHP 5.5.9+
- Sentinel (authentication)
- gloudemans/shoppingcart (shopping cart)
- maatwebsite/excel (Excel import/export)
- dompdf (PDF invoices)
- JWT authentication
- intervention/image
- **Smooets\CrudGenerator** (internal package in /packages/smooets/crud-generator/src)

## Key Models
Product, ProductImage, ProductRegion, ProductRetail, ProductRetailDetail, Transaction, TransactionDetail, PaymentConfirm, PaymentMethod, User, UserAttachment, Role, Shipping, ShippingAddress, InfoPengiriman, Redeem, Category, RegionCategory, Unit, Location, City, Province, News, FAQ, GeneralQuestion, ContactUs, Feedback, Banner, Advertisement, Disclaimer, PrivacyPolicy, TermOfCondition, HowToOrder, AboutMe, AboutMePasar, TemanPaskomnas, Doku, Settings

## Notable
- Includes an internal Smooets CRUD generator package (`packages/smooets/crud-generator/`) — Smooets' own internal development tool
- Controller separation: Admin/*, API/*, Auth/*, Client/*
