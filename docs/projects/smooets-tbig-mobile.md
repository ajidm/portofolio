# TBIG Mobile (TBIGMobile)

## Summary
Full-stack Laravel 5.6 backend + Vue.js frontend for **Tower Bersama Infrastructure Group (TBIG)** — Indonesia's largest independent tower company. An enterprise mobile web admin system for field operations: assignments, events, meetings, complaints, news, attendance, and push notifications.

## Client
- **Company:** PT Tower Bersama Infrastructure Tbk (TBIG)
- **Industry:** Telecommunications Infrastructure (Cell Tower Management)
- **Country:** Indonesia
- **Website:** towerbersama.com
- **Context:** Internal mobile/web platform for field staff management
- Admin credentials (dev): `admin@tmobile.apps` / `12345678`

## App Purpose
Enterprise mobile-first field operations platform:
- Manage **Assignments** (field tasks with approval flow, participants, status tracking)
- Manage **Events** (corporate events with categories, speakers, participants, rules)
- Manage **Meetings** (internal meetings with participants and rules)
- **Complaint** management with sequences and options
- **News** (internal corporate news + images + viewer tracking)
- **Attendance** tracking (check-in/check-out)
- **Push Notifications** (per-role and per-user targeting)
- **Traveling** approvals (travel requests with participants and status)
- **Tutorial** and **TermCondition** content management
- **Points** & **Redemption** system for gamification
- **Schema/Survey** builder (sequences + options)
- Mobile app distribution (iOS plist + APK via web routes)

## Tech Stack
- Laravel 5.6, PHP 7.1+
- Vue.js 2.5, Laravel Mix, Bootstrap 4
- **Caffeinated Modules** (modular architecture: Backend + Api modules)
- Laravel Passport (JWT authentication)
- FCM (Firebase Cloud Messaging): `FCM_SERVER_KEY`, `FCM_SENDER_ID`
- **Google Maps Geocoding API**: `GOOGLE_MAPS_GEOCODING_API_KEY`
- **Zimbra Mail** integration: `ZIMBRA_USERNAME`, `ZIMBRA_PASSWORD`
- **Infobip SMS**: `INFOBIP_API_KEY`, `TBIG_SMS_MASKING=TBiG`
- intervention/image (image processing)
- DataTables (server-side pagination)

## Key Models (100+)
Assignment, AssignmentApproval, AssignmentParticipant, AssignmentStatus, AutoAssignment, DetailAssignment, ListAssignment, Event, EventManager, EventCategory, EventParticipant, EventSpeaker, EventRule, EventStatus, Meeting, MeetingEvent, MeetingParticipant, MeetingManager, MeetingRule, MeetingStatus, Complaint, ComplaintSequences, ComplaintSequenceOptions, News, NewsEvent, NewsImage, NewsViewer, AttendanceType, Attendance, CheckIn, CheckOut, PushNotification, PushNotificationRole, PushNotificationUser, TravelingEvent, TravelingParticipant, TravellingStatus, Signal, Point, PointRedeem, Redeem, Schema, ListSchema, SchemaSequences, SequenceOptions, Speaking, Tutorial, TermCondition, PrivacyPolicy, Disclaimer, Office, DetailOffice, MobileDeviceInformation, MobileVersion, Feature, DropdownList, DropdownListOption, Category, UpdateStatusLog, User, PasswordHistory, UserAttachment, SupervisorUser, Vendor

## Database
- MySQL (`tbig` database)
- SQL Server also referenced (103.81.134.178) — commented out
- Local URL: `http://tbig-local.com:8001`

## Documents Found
- `readme.md` — installation and git workflow guide (clone, checkout development, composer install, .env setup, migrate, seed)

## API Routes
- `/api/v1/Core/*` — REST endpoints for mobile app
- `/backend/auth/login` — admin login
- `iOS/{app_version}/install` — app distribution route for iOS plist/Android APK

## Architecture
Caffeinated Modules splits the app into `app/Modules/Backend/` (admin panel) and `app/Modules/Api/` (REST API for mobile). Laravel Passport issues JWT for mobile auth. FCM SDK for push notifications. Google Maps for location geocoding. Zimbra for corporate mail integration. Infobip for SMS (masked as "TBiG").
