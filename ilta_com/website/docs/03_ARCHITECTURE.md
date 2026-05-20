# Architecture & System Design

## 1. High-Level Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                        Client Browser                       │
│  (Next.js SSR/CSR, Tailwind, React Hook Form, Zustand)      │
└───────────────┬───────────────────────────────┬─────────────┘
                │ HTTPS                         │ WebSocket/SSE
                ▼                               ▼
┌───────────────────────────────┐   ┌─────────────────────────┐
│        Vercel Edge/Node       │   │      Realtime Updates   │
│  (Next.js App Router, API)    │   │   (Optional: Pusher)    │
└───────────────┬───────────────┘   └─────────────────────────┘
                │ Prisma Client
                ▼
┌─────────────────────────────────────────────────────────────┐
│                   PostgreSQL Database                       │
│  (Users, Leads, Projects, Documents, AuditLogs)             │
└─────────────────────────────────────────────────────────────┘
```

## 2. Folder Structure
```
src/
├── app/                  # Next.js App Router
│   ├── (marketing)/      # Public routes (landing, portfolio, faq)
│   ├── (portal)/         # Authenticated client portal
│   ├── (admin)/          # Internal SME/Admin dashboard
│   └── api/              # API routes (if needed beyond server actions)
├── components/
│   ├── ui/               # shadcn/ui primitives
│   ├── marketing/        # Landing page sections
│   ├── forms/            # Consultation, Login forms
│   └── dashboard/        # Portal/Admin components
├── lib/
│   ├── db.ts             # Prisma client singleton
│   ├── utils.ts          # CN helper, formatters
│   └── constants.ts      # Config, enums
├── schemas/              # Zod validation schemas
├── services/             # Business logic (Server Actions)
├── types/                # TypeScript interfaces
└── middleware.ts         # Auth, rate limiting, redirects
```

## 3. Data Flow Patterns
- **Form Submission:** Client → Zod Validate → Server Action → Prisma Create → Email/WA Notification → DB.
- **Data Fetching:** Server Component → Prisma Query → Serialize → Render.
- **Auth:** NextAuth.js / Lucia Auth → Session Cookie → Protected Routes.

## 4. Security Layers
1. **Input Validation:** Zod on all boundaries.
2. **Rate Limiting:** Upstash Redis on `/api/consultation`.
3. **Auth:** JWT/Session-based, HTTPOnly cookies.
4. **CSP:** Strict Content-Security-Policy headers.
5. **Audit:** Log all lead status changes and admin actions.
