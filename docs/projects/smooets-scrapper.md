# Web Data Scraper (scrapper)

## Summary
PHP CLI web scraper built by Smooets for **Australian car dealerships**. Crawls vehicle listing pages (list + detail), extracts structured car data, and stores in MongoDB. Targets: Castle Hill FCA Dealer (Chrysler/Fiat/Alfa/Jeep dealer NSW) and Heartland Australia (commented out, second target).

## Client
- **Brand:** Smooets (smt / info@smooets.com) — internal or for Australian car dealer clients
- **Target sites:** stock.castlehillfcadealer.com.au (Castle Hill FCA Dealer, NSW Australia), heartland.com.au (Heartland Australia — commented out config)
- **Industry:** Automotive / Web Scraping

## App Purpose
Config-driven scraper that:
1. Crawls paginated listing pages (list mode)
2. Follows each listing URL to detail page (detail mode)
3. Extracts fields: title, price, type, color, transmission, VIN, fuel, body type, odometer (km), stock number, year, engine, registration, description, features[], images[], dealer name/location/phone/email
4. Stores each car as a document in MongoDB `car_items` collection
5. Uses `check_point` collection for resume/checkpoint (instantiated but not actively written in visible code)

## Tech Stack
- PHP 7+
- Goutte 3.2 (HTTP client)
- Symfony DomCrawler (CSS selector + XPath extraction)
- MongoDB 1.3 (document storage)
- Monolog 1.x (logging — imported but unused in visible code)

## Package Info
- Name: `smt/scrapper`
- Description: "Scrapper for car information"
- Author: smt <info@smooets.com>

## MongoDB Connection
- Host: `mongodb://localhost:27017`
- Database: `coba` (likely placeholder/test name)
- Collections: `car_items`, `check_point`

## Config DSL
`config.php` defines scraping rules using pipe-delimited format:
`type|selector_type|attribute|fallback|css_or_xpath_selector`
Supports: `list` (listing page) and detail page modes, CSS and XPath selector types.

## Files
- `run.php` — main entry script (load config, iterate URLs, extract, store)
- `config.php` — scraping configuration per site
- `composer.json` — dependencies
