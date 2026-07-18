# Telko Wallet / Pulsaku (telko-wallet)

## Summary
Mobile wallet and **pulsa (mobile phone credit) top-up** platform for the Indonesian market, internally branded as **Pulsaku** and also referenced as "Telko Wallet". Users register via phone number, receive a wallet balance, top-up via DOKU payment gateway, and purchase mobile credit (pulsa) via Datacell wholesaler API. Also includes a lucky draw gamification system and referral program.

## Client
- **Brand:** Pulsaku / Telko Apps (APP_NAME=Pulsaku, APP_WEB_ADMIN_NAME=Pulsaku)
- **Developer:** Smooets (roni.y@smooets.com as author)
- **Industry:** Fintech / Telco / Digital Wallet
- **Country:** Indonesia
- Admin email (dev): `admin@telko.apps` / `12345678`
- Error mail: wallettelko@gmail.com

## App Purpose
- Digital wallet: top-up balance, peer-to-peer transfer
- **Pulsa top-up**: buy mobile credit for Telkomsel, XL, Indosat, etc. via Datacell wholesale API
- Phone prefix → provider mapping (PrefixCode model)
- DOKU payment gateway for wallet deposits
- OTP verification via **Zenziva SMS** (`ZENZIVA_USERKEY=tf816w`)
- Lucky draw system (LuckyDraw, TransactionLuckyDraw, DetailLuckyDraw)
- Referral/reward program (Referral, UserReward)
- Broadcast/notifications (Blast, BroadcastDirectory)
- Admin ACL with menus and roles

## Tech Stack
- Laravel 5.2, PHP 5.5.9+
- Sentinel (authentication + RBAC)
- PostgreSQL (`telko_wallet` database)
- DOKU payment gateway
- **Datacell pulsa wholesale API**: `DATACELL_USER_ID=62ITI803`, server: `202.152.62.2:7713`
- **Zenziva SMS OTP**: `ZENZIVA_USERKEY=tf816w`
- API SID: `TELKOWALLET`
- dompdf (PDF statement generation)
- intervention/image
- DataTables

## Key Models (37+)
User, PaymentAccount (wallet balance), Transaction, DetailTransaction (operator SN/callbacks), TopupCode (pulsa denominations per provider), Provider (Telkomsel/XL/etc), Card (SIM types), PrefixCode (phone prefix → provider mapping), Doku (DOKU gateway records), AccountBalance, AccountHistory, Referral, UserReward, LuckyDraw, TransactionLuckyDraw, DetailLuckyDraw, Promo, Notification, Blast, BroadcastDirectory, Broadcast, Directory, Hashtag, Logs, LogUserActivity, LogFollowerUser, LogUserBlock, UssdCode, UssdFunction, UssdResponse, VerificationCode, AppVersion, DashboardSetting, About, Menu (ACL), Role, DestinationReminder, IntervalValidation, UserHistory

## API Routes
- `POST api/v1/auth` — phone number login/register
- `POST api/v1/topup` — top up own number
- `POST api/v1/topup/other` — top up other number
- `GET api/v1/balance` — get wallet balance
- `POST api/v1/balance/add` — initiate DOKU deposit

## Documents Found
- `readme.md` — "Telko Wallet Web Admin", Composer + Bower install guide

## Environment
- DB: PostgreSQL (`telko_wallet` on localhost)
- Datacell pulsa API: `202.152.62.2:7713`
- Zenziva SMS for OTP

## Notes
- Also see `Smooets/misc/Pulsaku Technical Documentation.doc` — 10-page product documentation
- Also see `Smooets/misc/MyBal Technical Documentation.doc` — possibly a related/companion product
