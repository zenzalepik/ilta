# Product Requirements Document (PRD)
## Project: Enterprise Software House Portal (Badr-Style)

### 1. Overview
A high-performance, conversion-focused web platform for an enterprise software house.
The system manages the end-to-end client journey: from landing page consultation request → SME assignment → prototype delivery → project tracking.

### 2. Problem Statement
- Manual consultation processes lead to lost leads.
- Lack of transparency in project status for enterprise clients.
- Difficulty in showcasing portfolio and social proof effectively.
- Disconnected systems between marketing (leads) and delivery (projects).

### 3. Goals
- **Conversion:** Increase consultation form submissions by 40% via optimized UX.
- **Efficiency:** Automate lead routing to SMEs within 1 hour SLA.
- **Transparency:** Provide clients with real-time project dashboards.
- **Trust:** Showcase ISO 27001 compliance and enterprise portfolio prominently.

### 4. Target Users
- **Prospective Clients:** CTOs, IT Managers, Business Owners (Enterprise/Gov/Startup).
- **Internal SMEs:** Subject Matter Experts, Developers, Project Managers.
- **Admin/Sales:** Lead managers, content managers.

### 5. Key Features (MVP)
| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| F1 | Landing Page | P0 | Hero, Pain Points, Services, Portfolio, FAQ, Dual CTA Forms. |
| F2 | Consultation Form | P0 | Multi-step form with validation (Name, Email, WA, Org Type, Needs). |
| F3 | Lead Dashboard | P1 | Internal view for SMEs to see incoming requests and status. |
| F4 | Client Portal | P1 | Login area for clients to view project status and docs. |
| F5 | WhatsApp Integration | P0 | Direct WA link with pre-filled message for instant contact. |
| F6 | Portfolio CMS | P2 | Manage case studies (Astra, Kemenkeu, UNDP style). |
| F7 | FAQ Accordion | P1 | Dynamic FAQ section with common questions. |

### 6. Success Metrics
- Form submission rate > 5% of visitors.
- Lead response time < 1 hour (tracked in system).
- Page load speed < 1.5s (Lighthouse score > 90).
- Zero critical security vulnerabilities (ISO 27001 alignment).

### 7. Out of Scope (for now)
- Full ERP/CRM functionality (this is a portal for the software house, not the product itself).
- Payment gateway integration.
- Mobile native apps (responsive web only).
