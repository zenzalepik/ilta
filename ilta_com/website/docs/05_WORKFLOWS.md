# Workflows & User Flows

## 1. Consultation Request Flow (Public User)
```
[Landing Page]
    │
    ├─ User scrolls to "Konsultasi Gratis" form
    │   OR clicks WhatsApp CTA
    │
    ▼
[Form Interaction]
    │
    ├─ User fills: Name, Email, WA, OrgType, NeedType, Message
    ├─ Client-side Zod validation (instant feedback)
    │
    ▼
[Submission]
    │
    ├─ Server Action receives data
    ├─ Server-side Zod validation
    ├─ Rate limit check (Redis)
    ├─ Create Lead in DB (status: NEW)
    ├─ Trigger notification (Email/WA to SME queue)
    │
    ▼
[Success State]
    │
    ├─ Show "Terima kasih! Tim menghubungi dalam 1 jam."
    ├─ Redirect to /thank-you (optional)
    └─ Track conversion event (Analytics)
```

## 2. SME Lead Management Flow (Internal)
```
[SME Dashboard]
    │
    ├─ SME logs in → sees list of NEW/CONTACTED leads
    │
    ▼
[Lead Assignment]
    │
    ├─ SME clicks "Ambil Lead" or Admin assigns
    ├─ Status → SME_ASSIGNED
    ├─ SME contacts client via WA/Email
    │
    ▼
[Requirement Gathering]
    │
    ├─ SME conducts session (Zoom/Meet)
    ├─ SME uploads Prototype/ReqDoc via Portal
    ├─ Status → PROTOTYPE_DELIVERED
    │
    ▼
[Decision]
    ├─ Client accepts → Status → CONVERTED → Create Project
    └─ Client declines → Status → REJECTED → Nurture sequence
```

## 3. Client Portal Flow (Post-Conversion)
```
[Client Login]
    │
    ├─ Client receives invite link → sets password
    │
    ▼
[Dashboard]
    │
    ├─ View Project Status (PLANNING → DISCOVERY → DEV → QA → LAUNCHED)
    ├─ View Timeline & Milestones
    ├─ Download Documents (Prototypes, Specs, Reports)
    ├─ Submit Feedback/Change Requests
    │
    ▼
[Support]
    └─ Access SLA info, submit maintenance ticket
```

## 4. Key UI States to Implement
| Page | State | Description |
|------|-------|-------------|
| Form | `idle` | Default, empty fields |
| Form | `validating` | Client-side Zod running |
| Form | `submitting` | Server action pending (disable button, spinner) |
| Form | `success` | Green toast, redirect |
| Form | `error` | Red toast, show field errors |
| Dashboard | `loading` | Skeleton loaders |
| Dashboard | `empty` | "Belum ada proyek" illustration |
| Dashboard | `data` | Table/Cards with project info |

## 5. Error Handling Flow
- **Validation Error:** Return `{ error: "FIELD_INVALID", field: "email", message: "..." }` → Show inline.
- **Rate Limit:** Return `{ error: "RATE_LIMITED", message: "Terlalu banyak request, coba lagi nanti." }` → Show toast.
- **Server Error:** Log to Sentry → Return generic `{ error: "SERVER_ERROR" }` → Show "Terjadi kesalahan, hubungi admin."
- **Auth Error:** Redirect to `/login` with `?callbackUrl`.
