# Coding Conventions & Rules

## 1. General Rules
- **Language:** TypeScript (Strict mode enabled). No `any`.
- **Naming:**
  - Files: `kebab-case.tsx` (components), `camelCase.ts` (utils/services).
  - Variables/Functions: `camelCase`.
  - Types/Interfaces: `PascalCase` (prefix interfaces with `I` only if necessary, prefer type aliases).
  - Constants: `UPPER_SNAKE_CASE`.
- **Imports:** Absolute paths from `@/` (e.g., `@/components/ui/button`). Group: External → Internal → Relative.
- **Error Handling:** Always use `try/catch` in Server Actions. Return typed result objects: `{ success: boolean; data?: T; error?: string }`.

## 2. React & Next.js
- **Components:** Functional components only. Use `export default`.
- **Server vs Client:** Default to Server Components. Add `'use client'` only when using hooks (`useState`, `useEffect`, etc.).
- **Forms:** Use `react-hook-form` + `zod` + `@hookform/resolvers`. Never use uncontrolled inputs for forms that submit data.
- **Styling:** Tailwind CSS exclusively. Use `clsx` and `tailwind-merge` for conditional classes. No CSS modules or styled-components.

## 3. Data & API
- **Validation:** Zod schemas in `src/schemas/`. Reuse schemas for both frontend forms and backend validation.
- **Database:** Prisma only. No raw SQL unless absolutely necessary and documented.
- **Server Actions:** All mutations go through Server Actions in `src/services/`. No direct DB calls in components.

## 4. Security
- **Input Sanitization:** Assume all input is malicious. Zod handles type validation, but sanitize strings if storing HTML.
- **Auth:** Use NextAuth/Lucia. Protect routes via `middleware.ts`.
- **Env Variables:** Never hardcode secrets. Use `process.env` with runtime validation (e.g., `@t3-oss/env-nextjs`).

## 5. Testing & Quality
- **Linting:** ESLint + Prettier. Fix on save.
- **Type Checking:** `tsc --noEmit` must pass before commit.
- **Accessibility:** All interactive elements must be keyboard accessible. Use semantic HTML.
