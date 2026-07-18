# CleanGo (CleanGo)

## Summary
Serverless backend for **CleanGo** — an on-demand home cleaning services marketplace connecting **clients** (homeowners/tenants) with **domestic workers/cleaners**. Three separate GraphQL APIs: one for the worker mobile app, one for the client app, and one for the admin web panel. Deployed on AWS Lambda in ap-southeast-1.

## Client
- **Brand:** CleanGo / CleanAndGo
- **Firebase project:** cleanandgo-ce0b9
- **Firebase service account:** firebase-adminsdk-r530a@cleanandgo-ce0b9.iam.gserviceaccount.com
- **AWS profile:** clean-go-production
- **Industry:** On-demand Home Services / Marketplace
- **Region:** Southeast Asia (AWS ap-southeast-1)
- **Developer:** Smooets

## App Purpose
Two-sided marketplace:
- **Clients**: Browse cleaner profiles, book by space type (rooms, floor area), select time slots, pay via PayPal, view before/after photos, leave feedback
- **Workers**: Manage availability, accept bookings, track reservations, receive push notifications
- **Admin**: Full control panel via admin GraphQL endpoint

## Tech Stack
- Node.js, Serverless Framework
- Apollo Server Lambda (GraphQL)
- apollo-upload-server (file uploads in GraphQL)
- AWS Lambda (ap-southeast-1 production, us-east-2 dev)
- AWS API Gateway
- AWS RDS (PostgreSQL): `cng-production.caayjoz47dbe.ap-southeast-1.rds.amazonaws.com`
- **AWS Cognito** (`amazon-cognito-identity-js`) — user authentication
- Firebase Admin SDK (data sync)
- Firebase Cloud Messaging (FCM) — push notifications
- **PayPal SDK** (payment processing)
- JWT authentication
- Database migrations via `migration.js`

## Three API Surfaces
| Endpoint | Consumer |
|---|---|
| `POST /graphql` | Worker mobile app (Android) |
| `GET /graphiql` | Worker GraphQL playground |
| `POST /client/graphql` | Client mobile app |
| `GET /client/graphiql` | Client GraphQL playground |
| `POST /admin/graphql` | Admin web panel |
| `GET /admin/graphiql` | Admin playground |

## Key Models / Tables (40+)
users, **workers** (id, cognito_id, price, hourly_rate, birth_date, gender, hk_id, hk_status, work_area, main_language, nationality, religion, experience_country, special_skill, other_skill, about, notif_me, firebase_id, status, is_active), **clients** (id, cognito_id, first_name, last_name, email, phone, address_1, address_2, firebase_id), **reservations** (id, invoice_number, worker_id, client_id, payment_status, payment_total, payment_date, start_job, end_job, status, image_before, image_after, is_remind), **detail_reservations** (address, area_id, type_id, district_id, children, pets, start_at, special_request, other_services, rooms, number_of_rooms, locations, insurance, estimation, cleaning_hours), **time_slots**, detail_time_slots, feedback_jobs, comment_jobs, countries, regions, districts, areas, **type_of_spaces**, space_area, cleaning_hours, cleaning_hour_estimations, experience_years, function_rooms, genders, languages, nationalities, other_services, religions, special_skills, static_pages, detail_static_pages, static_faq, static_career, static_term_of_condition, static_contact, static_toc, static_privacy, static_about, **payment_details**, address, room_orders, **insurance_reservations**

## Environment
- Production DB: `cleanGoService_production` on AWS RDS (ap-southeast-1)
- Staging DB: AWS RDS (ap-southeast-1)
- Dev DB: AWS RDS (us-east-2)
- S3 bucket: `clean-go-service-production-2`

## Documents Found
None. Schema and data structure embedded in migration files and GraphQL schema files only.
