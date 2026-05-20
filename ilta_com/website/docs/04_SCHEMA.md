# Database Schema & API Contracts

## 1. Core Schema (Prisma-style)

### User
```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String
  name          String
  role          Role      @default(CLIENT)
  organization  String?
  phone         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  leads         Lead[]    @relation("LeadOwner") // If user is SME
  projects      Project[] @relation("ProjectClient")
  auditLogs     AuditLog[]
}

enum Role {
  ADMIN
  SME
  CLIENT
}
```

### Lead (Consultation Request)
```prisma
model Lead {
  id            String    @id @default(cuid())
  name          String
  email         String
  phone         String
  orgType       OrgType
  orgName       String?
  needType      NeedType
  message       String
  status        LeadStatus @default(NEW)
  assignedSmeId String?
  assignedSme   User?     @relation("LeadOwner", fields: [assignedSmeId], references: [id])
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  @@index([status])
  @@index([assignedSmeId])
}

enum OrgType {
  INDIVIDUAL
  STARTUP
  NGO
  GOVERNMENT
  ENTERPRISE
}

enum NeedType {
  CUSTOM_SOFTWARE
  CRM
  HRIS
  WEB_APP
  API_INTEGRATION
  QA_TESTING
  OTHER
}

enum LeadStatus {
  NEW
  CONTACTED
  SME_ASSIGNED
  PROTOTYPE_DELIVERED
  CONVERTED
  REJECTED
}
```

### Project
```prisma
model Project {
  id            String    @id @default(cuid())
  clientId      String
  client        User      @relation("ProjectClient", fields: [clientId], references: [id])
  title         String
  description   String
  status        ProjectStatus @default(PLANNING)
  startDate     DateTime?
  endDate       DateTime?
  documents     Document[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum ProjectStatus {
  PLANNING
  DISCOVERY
  DEVELOPMENT
  QA_TESTING
  LAUNCHED
  MAINTENANCE
}
```

### Document (Prototype/Requirements)
```prisma
model Document {
  id            String    @id @default(cuid())
  projectId     String
  project       Project   @relation(fields: [projectId], references: [id])
  title         String
  fileUrl       String
  type          DocType
  uploadedAt    DateTime  @default(now())
}

enum DocType {
  REQUIREMENT
  PROTOTYPE
  DESIGN
  REPORT
}
```

### AuditLog
```prisma
model AuditLog {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  action    String
  entity    String
  entityId  String
  details   String?  @db.Text
  createdAt DateTime @default(now())
}
```

## 2. API Contracts (Server Actions)

### `submitConsultation(data: ConsultationSchema)`
- **Input:** `{ name, email, phone, orgType, orgName?, needType, message }`
- **Output:** `{ success: boolean, leadId: string }`
- **Validation:** Zod schema matching Lead model.
- **Side Effects:** Send WA/Email notification to SME queue.

### `assignLead(leadId: string, smeId: string)`
- **Auth:** SME or ADMIN only.
- **Output:** `{ success: boolean }`
- **Side Effects:** Update Lead status to `SME_ASSIGNED`, create AuditLog.

### `getLeadDashboard(filters?: LeadFilters)`
- **Auth:** SME or ADMIN only.
- **Output:** `{ leads: Lead[], total: number, stats: LeadStats }`

### `uploadDocument(projectId: string, file: File, type: DocType)`
- **Auth:** SME or ADMIN.
- **Output:** `{ success: boolean, documentId: string }`
- **Storage:** Upload to S3/R2, save URL in DB.
