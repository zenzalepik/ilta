# Component Tree & Implementation Order

## 1. Foundation (Build First)
- [ ] `src/components/ui/*` (shadcn: button, input, textarea, select, card, accordion, toast, dialog)
- [ ] `src/components/layout/Header.tsx` (Logo, Nav, CTA Button, Mobile Menu)
- [ ] `src/components/layout/Footer.tsx` (Links, Social, Copyright, ISO Badge)
- [ ] `src/components/layout/Container.tsx` (Max-width wrapper with padding)

## 2. Landing Page Sections (Marketing)
- [ ] `src/components/marketing/HeroSection.tsx` (Headline, Subhead, Dual CTAs, Trust Bar)
- [ ] `src/components/marketing/PainPointsSection.tsx` (4 Cards with Icons)
- [ ] `src/components/marketing/ServicesSection.tsx` (6 Cards Grid)
- [ ] `src/components/marketing/PortfolioSection.tsx` (Case Study Carousel/Grid)
- [ ] `src/components/marketing/StatsSection.tsx` (14+ Tahun, 100+ Klien, 350+ Proyek)
- [ ] `src/components/marketing/DifferentiatorSection.tsx` (Comparison Table: Others vs Us)
- [ ] `src/components/marketing/ProcessSection.tsx` (5 Steps Timeline)
- [ ] `src/components/marketing/FaqSection.tsx` (Accordion with 6 Questions)
- [ ] `src/components/marketing/ConsultationForm.tsx` (Reusable form component)

## 3. Forms & Validation
- [ ] `src/schemas/consultation.ts` (Zod schema)
- [ ] `src/components/forms/ConsultationFields.tsx` (Controlled inputs)
- [ ] `src/components/forms/SubmitButton.tsx` (Loading state, disabled handling)

## 4. Server Actions
- [ ] `src/services/consultation-action.ts` (Submit lead, validate, notify)
- [ ] `src/services/lead-actions.ts` (Assign, update status, get dashboard)

## 5. Client Portal (Post-MVP)
- [ ] `src/components/dashboard/ProjectCard.tsx`
- [ ] `src/components/dashboard/StatusBadge.tsx`
- [ ] `src/components/dashboard/DocumentList.tsx`
- [ ] `src/app/(portal)/dashboard/page.tsx`

## 6. Admin/SME Dashboard (Post-MVP)
- [ ] `src/components/admin/LeadTable.tsx`
- [ ] `src/components/admin/LeadDetailDrawer.tsx`
- [ ] `src/app/(admin)/leads/page.tsx`

## Implementation Strategy for AI
1. **Prompt 1:** "Initialize Next.js project, install dependencies, set up Tailwind and shadcn/ui."
2. **Prompt 2:** "Create the layout components (Header, Footer, Container) based on `docs/08_COMPONENT_TREE.md`."
3. **Prompt 3:** "Build the Landing Page sections one by one, starting with HeroSection, then PainPoints, Services, etc."
4. **Prompt 4:** "Implement the ConsultationForm with Zod validation and Server Action submission."
5. **Prompt 5:** "Add SEO meta tags, OG images, and structured data per `docs/07_CONTENT_SPEC.md`."
