# Free Car Sales (freecarsales)

## Summary
WordPress-based used car listing marketplace targeting the **Australian market**. Custom Motors-based theme, with a PHP web scraper that crawls Australian car dealership sites (Castle Hill FCA Dealer) to auto-populate vehicle listings into WordPress via a listing-sync module.

## Client
- **Brand:** Free Car Sales
- **Database:** `adminfcs_freecarsales`
- **Industry:** Automotive / Used Car Marketplace
- **Country:** Australia (based on scraper targets)
- **Developer:** Freelance

## App Purpose
Used car listing platform with automated inventory sync:
- **WordPress site**: Vehicle listings, search, dealer profiles (Motors 2.4 theme base)
- **PHP Scraper**: Crawls `stock.castlehillfcadealer.com.au` (Castle Hill FCA — Chrysler/Fiat/Alfa/Jeep dealer NSW) and `heartland.com.au` (commented-out config)
- **listing-sync module**: Syncs scraped vehicle data from MongoDB → WordPress database via API endpoints (`api.php`, `api-mongo.php`)

## Tech Stack
- WordPress (PHP)
- Custom `fcs` theme (child of Motors 2.4)
- PHP scraper (Goutte + Symfony DomCrawler — same as Smooets/scrapper)
- MongoDB (staging vehicle data storage)
- MySQL (WordPress database: `adminfcs_freecarsales`)

## Scraper Details
- Extracts: title, VIN, price, type, color, transmission, fuel, body type, odometer, stock number, year, engine, registration, description, features[], images[], dealer name/location/phone/email
- Configuration-driven (XPath/CSS selectors per dealer site)
- Pagination handling + rate limiting (random sleep 0-20s)
- Shell script runner: `run.sh`

## Listing Sync
- `listing-sync/api.php` — sync API endpoint
- `listing-sync/api-mongo.php` — MongoDB-specific sync
- `listing-sync/config/` — per-site mapping configurations

## Files
- `wp-config.php` — WordPress config (DB: `adminfcs_freecarsales`)
- `scrapper/config.php` — scraper field selectors per dealership
- `listing-sync/run.sh` — sync runner script
