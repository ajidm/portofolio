# RoomMe Frontend (roomme-frontend)

## Summary
Frontend for **RoomMe** — an Indonesian room/apartment rental booking platform (daily & monthly stays). Built with Angular 7 + Firebase, supports social login (Google/Facebook), NICEPAY payment gateway with BCA Virtual Account, and full booking lifecycle.

## Client
- **Company:** RoomMe / PT DUIT ORANG TUA (DOT) — payment recipient from booking.service.ts
- **Industry:** PropTech / Property Rental
- **Country:** Indonesia
- **Mock API author:** muhamadajid (Apiary mock: `http://private-e4c72-muhamadajid.apiary-mock.com/`)

## App Purpose
Two-sided property rental marketplace:
- **Guests/Renters:** Search buildings/hotels by location, view room availability, book daily or monthly, pay via BCA VA/ATM/credit card
- **Property Owners:** Implied from the platform structure

## Tech Stack
- Angular 7, TypeScript
- Angular Material + Bootstrap 4
- Firebase SDK (authentication + real-time data)
- Firebase project: `roomme-84cd2`
- ngx-gallery (image carousel)
- ngx-daterangepicker-material (booking date range)
- ngx-infinite-scroll (property listings)
- @ngx-translate (EN/ID bilingual)
- ngx-toastr (notifications)
- Facebook App ID: 547212039011517

## Key Models
- **User**: id, accountNumber, name, email, accountType, phoneNumber, address, placeOfBirth, birthDate, gender, facebookId, googleId, profileUrl, idCard
- **Hotel/Building**: id, name, phone, email, longitude, latitude, cityId, buildingNo, noOfFloor, noOfRooms, description, mainImage, rating, cancelPolicy, buildingFacilities, daily, monthly
- **Room**: id, roomMeId, name, description, price, tax, discount, roomNo, roomType, roomStatus, bedSize, monthlyPrice, rating, facilities, review
- **Roomtype**: id, name, description, price, priceId, payment, discount, tax, images, noOfPeople
- **Booking**: id, code, bookType, startBookDate, endBookDate, roomId, priceId, price, discount, tax, promoCode, promoPercent, promoValue, status, paymentType, **vaBca**, qty, totalPrice
- **Promo**: id, code, name, description, percent_promo, value_promo, start_promo, end_promo
- **Availability**: price, discount, allotment, tax
- **City**, **Feature**, **Setting**, **Testimoni**

## Payment
- **NICEPAY** payment gateway
- Channels: BCA Virtual Account (vaBca), ATM transfer, credit card

## API Endpoints (staging)
- Base: `http://roomme-api.stagingapps.net/api/`
- `POST api/buildings/search` — search/filter listings
- `GET api/buildings/:id` — building detail
- `GET api/buildings/:id/rooms/:type` — rooms list
- `GET api/buildings/:id/roomtype` — room types
- `GET api/building-attraction` — nearby attractions

## Environment Clues
- Staging web: `http://roomme.stagingapps.net/`
- Staging API: `http://roomme-api.stagingapps.net/api/`
- Firebase: `apiKey=AIzaSyCNaiVg8ndaT2S0...`, project: roomme-84cd2

## Documents Found
- `README.md` — default Angular CLI readme
- `src/assets/i18n/en.json` — full English UI string file (booking, payment, profile, promo, login, room detail, footer, reviews)
- `src/assets/i18n/id.json` — full Indonesian UI string file

## Languages Supported
English + Bahasa Indonesia (bilingual via @ngx-translate)
