# Yamaha Website Revamp (yamaha-revamp)

## Summary
Full-stack corporate website CMS and public-facing portal for **PT Yamaha Indonesia Motor Manufacturing (YIMM)** — the official Yamaha Indonesia subsidiary. Covers motorcycle products, power products (generators/industrial), spare parts, dealer finder, social media aggregation (Facebook/Instagram/Twitter), credit simulation, career portal, and multi-level admin panel.

## Client
- **Company:** PT Yamaha Indonesia Motor Manufacturing (YIMM)
- **Industry:** Automotive (Motorcycle Manufacturing)
- **Country:** Indonesia
- **Address:** Jl. DR. KRT. Rajiman Widyodiningrat (Jl. Raya Bekasi Km 23) Pulo Gadung, Jakarta 13920
- **Socials:** facebook.com/yamaholigan, instagram.com/yamahaindonesia, twitter.com/yamahaindonesia
- **Developer:** Smooets agency

## App Purpose
Multi-layer corporate website platform:
- **Public website**: Product catalog (motorcycles, power products, spare parts), dealer finder with geo search, news/articles CMS, video gallery, download brochures, credit simulation, careers, static pages
- **Backend admin**: Full CMS for all content types, user/role management, activity logging, media management, menu management
- **REST API** (JWT-auth): User profile, product data for mobile app consumption
- **Social aggregation**: Auto-pull Facebook, Instagram, Twitter feeds

## Tech Stack
- Laravel 5.2, PHP 5.5.9+
- Sentinel (authentication + RBAC)
- MySQL
- spatie/activitylog (activity logging)
- intervention/image (image processing)
- Doctrine DBAL (schema management)
- thujohn/twitter (Twitter API integration)
- Feed/RSS generation
- DataTables (admin panel)
- Redis (sessions/cache), Mailtrap (dev email)

## Key Models (70+)
Banner, BannerCategory, Broadcast, BroadcastDirectory, Brochure, BrochurePowerProduct, Career, CareerImage, Category, City, Color, Contact, Content, ContentCategory, ContentImage, Country, **CreditSimulation**, **Dealer**, DealerOperation, DealerPhone, DealerTag, Directory, Email, **FacebookFeed**, GeneralSetting, Hastag, HomeContent, **InstagramFeed**, Investor, LogActivity, Media, MediaCategory, Menu, **PowerProduct**, PowerProductCategory, PowerProductFeatured, PowerProductImage, PowerProductSpesification, **Product** (motorcycles), ProductCategory, ProductContent, ProductFeature, ProductImage, ProductOverviewIcon, ProductOverviewImage, ProductOverviewTag, ProductSpesification, Province, Role, RoleUser, ShortcutPowerProduct, ShortcutPowerProductImage, SocialMedia, **Sparepart**, SparepartCategory, SparepartFeatured, SparepartImage, SparepartSpesification, StaticPage, StaticPageImage, Tag, **TwitterFeed**, Upload, User, Video, **YamahaFilm**, YamahaFilmCategory

## API Routes
- `POST /API/v1/register` — user registration
- `POST /API/v1/login` — JWT login
- `GET /API/v1/reset/{email}` — password reset
- `GET /API/v1/user/{user_id}` — get user profile (JWT-authenticated)
- `POST /API/v1/user/{user_id}/update` — update profile

## Key Features
- **Social Aggregation**: Auto-pull and store Facebook, Instagram, Twitter feeds into DB
- **Dealer Finder**: Location-based dealer search by city/province
- **Credit Simulation**: Motorcycle purchase credit/installment calculator
- **Multi-product catalog**: Motorcycles + Power Products (generators/pumps) + Spare Parts
- **Brochure Download**: Downloadable PDF brochures per product
- **Yamaholigan Film**: Video content section
- **Career Portal**: Job listings and applications
- **Activity Log**: Every admin action logged via spatie/activitylog

## Documents Found
- `readme.md` — dev onboarding guide (clone → checkout development → composer install → .env → migrate → seed) + git merge workflow

## Environment
- Redis: localhost:6379
- Mail: mailtrap.io:2525 (dev)
- Cache/Session: file driver
- App name: `YIMM Website`
