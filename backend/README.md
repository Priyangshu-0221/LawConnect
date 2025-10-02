<div align="center">

# 🏛️ LawConnect - Backend API

### Professional Legal Consultation Platform

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

_A robust REST API powering seamless connections between clients and legal professionals_

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Authentication & Authorization](#-authentication--authorization)
- [Environment Configuration](#-environment-configuration)
- [Project Structure](#-project-structure)
- [Development](#-development)

---

## 🎯 Overview

**LawConnect Backend** is a comprehensive Node.js-based REST API designed to facilitate professional legal consultations. The platform connects clients seeking legal advice with qualified lawyers, managing appointments, reviews, and user profiles with robust security and scalability.

### What Makes This Backend Special?

- **Dual Authentication System**: Separate authentication flows for clients and lawyers
- **Role-Based Access Control**: Fine-grained permissions based on user roles
- **Document Management**: Secure document upload and storage via Cloudinary
- **Comprehensive Review System**: Transparent feedback mechanism for legal professionals
- **Type-Safe Database**: Leveraging Prisma ORM for type-safe database operations
- **Modern Security**: JWT-based authentication with bcrypt password hashing

---

## ✨ Key Features

### 🔐 Authentication & Security

- **JWT Token-Based Authentication** with 6-hour expiration
- **Password Hashing** using bcrypt with salt rounds
- **Email Validation** using validator.js
- **Strong Password Enforcement** (uppercase, lowercase, numbers, special characters)
- **Role-Based Access Control** (Client/Lawyer specific routes)
- **Protected Routes** with custom middleware

### 👥 User Management

- **Client Registration & Login** with secure credential handling
- **Lawyer Registration & Login** with professional profile creation
- **Profile Updates** with role-specific fields
- **User Profile Retrieval** with privacy controls

### 📅 Appointment System

- **Book Appointments** with lawyer selection
- **Document Upload** support for case files
- **Appointment Tracking** for both clients and lawyers
- **Cancel Appointments** with role-based permissions
- **Real-time Appointment Status** updates

### ⭐ Review System

- **Submit Reviews** for lawyers (client-only)
- **Rating System** with detailed descriptions
- **Review Retrieval** per lawyer profile
- **Authenticated Review Submission**

### 📁 File Handling

- **Document Upload** via Multer middleware
- **Cloud Storage** integration with Cloudinary
- **Secure File URLs** for document access

---

## 🛠️ Technology Stack

### Core Technologies

| Technology     | Version | Purpose                        |
| -------------- | ------- | ------------------------------ |
| **Node.js**    | Latest  | JavaScript runtime environment |
| **Express.js** | ^5.1.0  | Web application framework      |
| **Prisma**     | ^6.13.0 | Next-generation ORM            |
| **PostgreSQL** | -       | Primary database               |

### Dependencies

```json
{
  "dependencies": {
    "@prisma/client": "^6.16.2",
    "bcrypt": "^6.0.0",
    "cloudinary": "^2.7.0",
    "cors": "^2.8.5",
    "cuid": "^3.0.0",
    "dotenv": "^17.2.1",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "multer": "^2.0.2",
    "validator": "^13.15.15"
  }
}
```

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│                   Client Layer                   │
│          (Frontend / API Consumers)              │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│              Express.js Server                   │
│  ┌──────────────────────────────────────────┐  │
│  │         Middleware Layer                  │  │
│  │  • CORS                                   │  │
│  │  • Body Parser                            │  │
│  │  • Auth Middleware                        │  │
│  │  • Multer (File Upload)                   │  │
│  └──────────────────────────────────────────┘  │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│              Route Handlers                      │
│  ┌─────────────┬─────────────┬──────────────┐  │
│  │   Client    │   Lawyer    │  Appointment │  │
│  │   Routes    │   Routes    │    Routes    │  │
│  └─────────────┴─────────────┴──────────────┘  │
│  ┌─────────────┐                                │
│  │   Review    │                                │
│  │   Routes    │                                │
│  └─────────────┘                                │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│            Controller Layer                      │
│   • Business Logic                               │
│   • Validation                                   │
│   • Error Handling                               │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│              Prisma ORM                          │
│         (Database Abstraction)                   │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│           PostgreSQL Database                    │
│  • Clients  • Lawyers  • Appointments • Reviews │
└─────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **PostgreSQL** (v14.x or higher) - [Download](https://www.postgresql.org/download/)
- **Git** - Version control

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Priyangshu-0221/LawConnect.git
   cd LawConnect/backend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the backend root directory:

   ```bash
   cp .env.example .env
   ```

   Configure the following variables:

   ```env
   # Database Configuration
   DATABASE_URL="postgresql://username:password@localhost:5432/lawconnect?schema=public"

   # Server Configuration
   PORT=8080
   NODE_ENV=development

   # JWT Secret (Generate a strong secret)
   JWT_SECRET_KEY="your-super-secret-jwt-key-change-this-in-production"

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Set Up Database**

   Run Prisma migrations:

   ```bash
   npx prisma migrate dev --name init
   ```

   Generate Prisma Client:

   ```bash
   npx prisma generate
   ```

5. **Start the Development Server**

   ```bash
   npm run dev
   ```

   The server will start at `http://localhost:8080`

### Quick Start (Production)

```bash
npm start
```

---

## 📚 API Documentation

### Base URL

```
http://localhost:8080
```

### Authentication Headers

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

---

### 🔵 Client Endpoints

#### 1. **Client Registration**

```http
POST /api/client/signup
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass@123"
}
```

**Response (200):**

```json
{
  "message": "New user created successfully",
  "userId": "clx1234567890",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "name": "John Doe",
  "role": "client"
}
```

**Validation Rules:**

- Valid email format required
- Password must contain:
  - At least 8 characters
  - 1 uppercase letter
  - 1 lowercase letter
  - 1 number
  - 1 special character (!, @, #, $, %, ^)

---

#### 2. **Client Login**

```http
POST /api/client/login
```

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "SecurePass@123"
}
```

**Response (200):**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userId": "clx1234567890",
  "name": "John Doe",
  "role": "client"
}
```

---

#### 3. **Get Client Profile** 🔒

```http
GET /api/client/profile
```

**Headers:**

```
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "id": "clx1234567890",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "gender": "Male",
  "address": "123 Main St, City",
  "createdAt": "2025-01-15T10:30:00.000Z"
}
```

---

#### 4. **Update Client Profile** 🔒

```http
PATCH /api/client/profile/update
```

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "phone": "+1234567890",
  "gender": "Male",
  "address": "123 Main St, City, Country"
}
```

**Response (200):**

```json
{
  "id": "clx1234567890",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "gender": "Male",
  "address": "123 Main St, City, Country",
  "createdAt": "2025-01-15T10:30:00.000Z"
}
```

---

### 🔵 Lawyer Endpoints

#### 5. **Lawyer Registration**

```http
POST /api/lawyer/signup
```

**Request Body:**

```json
{
  "name": "Dr. Jane Smith",
  "email": "jane@lawfirm.com",
  "password": "SecurePass@123",
  "speciality": "Criminal Law",
  "degree": "LLB, LLM",
  "about": "Experienced criminal defense attorney",
  "experience": "10 Years",
  "address": {
    "line1": "456 Law Street",
    "line2": "Legal District, City"
  },
  "fees": 1500
}
```

**Response (200):**

```json
{
  "message": "New user created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "lawyer_role": "lawyer",
  "lawyerId": "clx0987654321"
}
```

---

#### 6. **Lawyer Login**

```http
POST /api/lawyer/login
```

**Request Body:**

```json
{
  "email": "jane@lawfirm.com",
  "password": "SecurePass@123"
}
```

**Response (200):**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "lawyer_role": "lawyer",
  "lawyerId": "clx0987654321"
}
```

---

#### 7. **Get Lawyer Profile** 🔒

```http
GET /api/lawyer/lawyerprofile
```

**Headers:**

```
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "id": "clx0987654321",
  "name": "Dr. Jane Smith",
  "email": "jane@lawfirm.com",
  "speciality": "Criminal Law",
  "degree": "LLB, LLM",
  "about": "Experienced criminal defense attorney",
  "experience": "10 Years",
  "image": "user.jpg",
  "fees": 1500,
  "address": {
    "line1": "456 Law Street",
    "line2": "Legal District, City"
  },
  "achievements": [],
  "languages": [],
  "professional_memberships": [],
  "createdAt": "2025-01-10T09:00:00.000Z"
}
```

---

#### 8. **Update Lawyer Profile** 🔒

```http
PATCH /api/lawyer/update
```

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "name": "Dr. Jane Smith",
  "speciality": "Corporate Law",
  "fees": 2000,
  "experience": "12 Years",
  "degree": "LLB, LLM, PhD",
  "about": "Specialized in corporate and business law",
  "address": {
    "line1": "789 Business Ave",
    "line2": "Corporate District, City"
  },
  "achievements": ["Best Lawyer Award 2023", "Published author in Law Review"],
  "languages": ["English", "Spanish", "French"],
  "professional_memberships": [
    "State Bar Association",
    "International Bar Association"
  ]
}
```

---

#### 9. **Get All Lawyers**

```http
GET /api/lawyer/alllawyers
```

**Response (200):**

```json
[
  {
    "id": "clx0987654321",
    "name": "Dr. Jane Smith",
    "email": "jane@lawfirm.com",
    "speciality": "Criminal Law",
    "degree": "LLB, LLM",
    "experience": "10 Years",
    "fees": 1500,
    "image": "user.jpg"
  },
  ...
]
```

---

#### 10. **Get Single Lawyer**

```http
GET /api/lawyer/singlelawyer?id=clx0987654321
```

**Query Parameters:**

- `id` (required): Lawyer's unique identifier

**Response (200):**

```json
{
  "id": "clx0987654321",
  "name": "Dr. Jane Smith",
  "speciality": "Criminal Law",
  "degree": "LLB, LLM",
  "about": "Experienced criminal defense attorney",
  "experience": "10 Years",
  "fees": 1500,
  "achievements": [...],
  "languages": [...],
  "professional_memberships": [...]
}
```

---

### 🔵 Appointment Endpoints

#### 11. **Book Appointment** 🔒

```http
POST /api/new/form
```

**Headers:**

```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Form Data:**

```
firstName: "John"
lastName: "Doe"
age: "35"
gender: "Male"
contactNumber: "+1234567890"
message: "Need legal consultation regarding property dispute"
appointment: "2025-10-15T14:00:00Z"
lawyerId: "clx0987654321"
userId: "clx1234567890"
name: "Dr. Jane Smith"
speciality: "Civil Law"
terms: "true"
documents: [file upload]
```

**Response (200):**

```json
{
  "id": 1,
  "client_first_name": "John",
  "client_last_name": "Doe",
  "client_contact_number": "+1234567890",
  "client_age": 35,
  "client_gender": "Male",
  "lawyer_name": "Dr. Jane Smith",
  "lawyer_speciality": "Civil Law",
  "documents_url": "https://res.cloudinary.com/...",
  "appointment_date_time": "2025-10-15T14:00:00.000Z",
  "term": true,
  "message": "Need legal consultation",
  "created_at": "2025-10-02T10:30:00.000Z",
  "lawyer_id": "clx0987654321",
  "client_id": "clx1234567890"
}
```

---

#### 12. **Get Client Appointments** 🔒

```http
GET /api/new/clientappointment
```

**Headers:**

```
Authorization: Bearer <token>
```

**Response (200):**

```json
[
  {
    "id": 1,
    "client_first_name": "John",
    "client_last_name": "Doe",
    "appointment_date_time": "2025-10-15T14:00:00.000Z",
    "lawyer": {
      "id": "clx0987654321",
      "name": "Dr. Jane Smith",
      "speciality": "Civil Law"
    },
    "client": {
      "id": "clx1234567890",
      "name": "John Doe"
    }
  }
]
```

---

#### 13. **Get Lawyer Appointments**

```http
GET /api/new/lawyersappointment/:id
```

**Path Parameters:**

- `id`: Lawyer's unique identifier

**Response (200):**

```json
[
  {
    "id": 1,
    "client_first_name": "John",
    "client_last_name": "Doe",
    "appointment_date_time": "2025-10-15T14:00:00.000Z",
    "documents_url": "https://res.cloudinary.com/...",
    "lawyer": {...},
    "client": {...}
  }
]
```

---

#### 14. **Cancel Appointment (Client)** 🔒

```http
DELETE /api/new/cancelappointment/:id
```

**Headers:**

```
Authorization: Bearer <token>
```

**Path Parameters:**

- `id`: Appointment ID

**Response (200):**

```json
{
  "message": "Appointment cancelled successfully"
}
```

---

### 🔵 Review Endpoints

#### 15. **Add Review** 🔒

```http
POST /api/review/addreview
```

**Headers:**

```
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "lawyerId": "clx0987654321",
  "rating": "5",
  "username": "John Doe",
  "descriptions": "Excellent service! Very professional and knowledgeable."
}
```

**Response (200):**

```json
{
  "message": "Review added successfully"
}
```

---

#### 16. **Get Lawyer Reviews**

```http
GET /api/review/allreviews?lawyerId=clx0987654321
```

**Query Parameters:**

- `lawyerId` (required): Lawyer's unique identifier

**Response (200):**

```json
[
  {
    "id": 1,
    "username": "John Doe",
    "rating": "5",
    "descriptions": "Excellent service! Very professional.",
    "lawyer_id": "clx0987654321",
    "client_id": "clx1234567890",
    "created_at": "2025-10-02T11:00:00.000Z"
  }
]
```

---

### Error Responses

All endpoints may return the following error responses:

**400 Bad Request:**

```json
{
  "message": "ERRORR!! Enter a valid email"
}
```

**401 Unauthorized:**

```json
{
  "message": "Unauthorized: Invalid token"
}
```

**403 Forbidden:**

```json
{
  "message": "Access denied. client account required"
}
```

**404 Not Found:**

```json
{
  "message": "Resource not found"
}
```

**500 Internal Server Error:**

```json
{
  "message": "Internal server error. Please try again later."
}
```

---

## 🗄️ Database Schema

### Entity Relationship Diagram

```
┌─────────────────┐           ┌─────────────────┐
│     Client      │           │     Lawyer      │
├─────────────────┤           ├─────────────────┤
│ id (PK)         │           │ id (PK)         │
│ name            │           │ name            │
│ email (unique)  │           │ email (unique)  │
│ password        │           │ password        │
│ phone           │           │ speciality      │
│ gender          │           │ degree          │
│ address         │           │ about           │
│ createdAt       │           │ experience      │
└────────┬────────┘           │ image           │
         │                    │ fees            │
         │                    │ address (JSON)  │
         │                    │ achievements[]  │
         │                    │ languages[]     │
         │                    │ professional_   │
         │                    │  memberships[]  │
         │                    │ createdAt       │
         │                    └────────┬────────┘
         │                             │
         │        ┌────────────────────┴─────┐
         │        │                          │
         └────────▼────────┐    ┌────────────▼─────────┐
         ┌────────────────┐│    │┌─────────────────────┐
         │  Appointment   ││    ││      Review         │
         ├────────────────┤│    │├─────────────────────┤
         │ id (PK)        ││    ││ id (PK)             │
         │ client_first_  ││    ││ username            │
         │  name          ││    ││ rating              │
         │ client_last_   ││    ││ descriptions        │
         │  name          ││    ││ lawyer_id (FK)      │
         │ client_contact_││    ││ client_id (FK)      │
         │  number        ││    ││ created_at          │
         │ client_age     ││    │└─────────────────────┘
         │ client_gender  ││    │
         │ lawyer_name    ││    │
         │ lawyer_        ││    │
         │  speciality    ││    │
         │ documents_url  ││    │
         │ appointment_   ││    │
         │  date_time     ││    │
         │ term           ││    │
         │ message        ││    │
         │ created_at     ││    │
         │ lawyer_id (FK) ││    │
         │ client_id (FK) ││    │
         └────────────────┘│    │
          └────────────────┘    │
```

### Prisma Schema

```prisma
model Client {
  id           String        @id @default(cuid())
  name         String
  email        String        @unique
  password     String
  phone        String?
  gender       String?
  address      String?
  createdAt    DateTime      @default(now())
  appointments Appointment[]
  reviews      Review[]
}

model Lawyer {
  id                       String        @id @default(cuid())
  name                     String
  email                    String        @unique
  password                 String?
  speciality               String?
  degree                   String?
  about                    String?
  experience               String?
  image                    String        @default("user.jpg")
  fees                     Int           @default(500)
  address                  Json?
  createdAt                DateTime      @default(now())
  achievements             String[]
  languages                String[]
  professional_memberships String[]
  appointments             Appointment[]
  reviews                  Review[]
}

model Appointment {
  id                    Int      @id @default(autoincrement())
  client_first_name     String
  client_last_name      String
  client_contact_number String
  client_age            Int
  client_gender         String
  lawyer_name           String
  lawyer_speciality     String
  documents_url         String
  appointment_date_time DateTime
  term                  Boolean
  message               String
  created_at            DateTime @default(now())
  lawyer_id             String
  lawyer                Lawyer   @relation(fields: [lawyer_id], references: [id])
  client_id             String
  client                Client   @relation(fields: [client_id], references: [id])
}

model Review {
  id           Int      @id @default(autoincrement())
  username     String
  rating       String
  descriptions String
  lawyer_id    String
  lawyer       Lawyer   @relation(fields: [lawyer_id], references: [id])
  client_id    String
  created_at   DateTime @default(now())
  client       Client   @relation(fields: [client_id], references: [id])
}
```

---

## 🔐 Authentication & Authorization

### JWT Token Structure

```javascript
{
  "id": "clx1234567890",      // User's unique ID
  "role": "client",            // User role (client/lawyer)
  "iat": 1696234567,           // Issued at (timestamp)
  "exp": 1696256167            // Expires at (6 hours later)
}
```

### Middleware Flow

```
Request
   │
   ▼
Extract Token from Authorization Header
   │
   ▼
Verify JWT Token
   │
   ├─── Valid ────► Decode payload
   │                    │
   │                    ▼
   │              Set req.userId & req.userRole
   │                    │
   │                    ▼
   │              Pass to Controller
   │
   └─── Invalid ──► Return 401 Unauthorized
```

### Protected Routes

**Client-Only Routes:**

- `GET /api/client/profile`
- `PATCH /api/client/profile/update`
- `POST /api/review/addreview`
- `DELETE /api/new/cancelappointment/:id`

**Lawyer-Only Routes:**

- `GET /api/lawyer/lawyerprofile`
- `PATCH /api/lawyer/update`

**General Protected Routes:**

- `POST /api/new/form` (Appointment booking)
- `GET /api/new/clientappointment`

---

## 🌍 Environment Configuration

### Required Environment Variables

```env
# ===================================
# DATABASE CONFIGURATION
# ===================================
DATABASE_URL="postgresql://username:password@localhost:5432/lawconnect?schema=public"

# ===================================
# SERVER CONFIGURATION
# ===================================
PORT=8080
NODE_ENV=development  # Options: development, production, test

# ===================================
# JWT CONFIGURATION
# ===================================
# Generate a strong secret: openssl rand -base64 32
JWT_SECRET_KEY="your-super-secret-jwt-key-min-32-characters"

# ===================================
# CLOUDINARY CONFIGURATION
# ===================================
# Get these from: https://cloudinary.com/console
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### Generating Secure JWT Secret

```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Using OpenSSL
openssl rand -base64 32

# Using PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

---

## 📁 Project Structure

```
backend/
│
├── Controller/                      # Business logic layer
│   ├── Client.Controller.js        # Client operations
│   ├── Lawyer.Controller.js        # Lawyer operations
│   ├── Appointment.Controller.js   # Appointment management
│   └── Review.Controller.js        # Review system
│
├── DATABASE/                        # Database configuration
│   ├── db.config.js                # Prisma client instance
│   └── cloudinary.config.js        # Cloudinary setup
│
├── middlewares/                     # Custom middleware
│   ├── authMiddleware.js           # JWT authentication (general)
│   ├── lawyerAuth.js               # JWT authentication (lawyer-specific)
│   └── multer.js                   # File upload configuration
│
├── prisma/                          # Prisma ORM files
│   ├── schema.prisma               # Database schema definition
│   └── migrations/                 # Database migration history
│       ├── migration_lock.toml
│       └── [timestamp]_[name]/     # Individual migrations
│
├── Routes/                          # API route definitions
│   ├── index.js                    # Main router
│   ├── client.Route.js             # Client routes
│   ├── lawyer.Route.js             # Lawyer routes
│   ├── appointment.Route.js        # Appointment routes
│   └── review.Route.js             # Review routes
│
├── generated/                       # Auto-generated Prisma files
│   └── prisma/                     # Prisma Client
│
├── .env                            # Environment variables (not in repo)
├── .gitignore                      # Git ignore rules
├── package.json                    # Project dependencies
├── package-lock.json               # Locked dependencies
├── server.js                       # Application entry point
└── README.md                       # This file
```

### File Descriptions

| File                            | Purpose                                                         |
| ------------------------------- | --------------------------------------------------------------- |
| `server.js`                     | Express server initialization, middleware setup, route mounting |
| `Controller/*.js`               | Request handling, business logic, database operations           |
| `Routes/*.js`                   | API endpoint definitions, route-controller mapping              |
| `middlewares/authMiddleware.js` | JWT verification, user authentication                           |
| `middlewares/multer.js`         | File upload handling configuration                              |
| `DATABASE/db.config.js`         | Prisma Client singleton instance                                |
| `DATABASE/cloudinary.config.js` | Cloudinary initialization                                       |
| `prisma/schema.prisma`          | Database models and relations                                   |

---

## 🔧 Development

### Available Scripts

```json
{
  "scripts": {
    "start": "node server.js", // Production server
    "dev": "nodemon server.js", // Development with auto-reload
    "prisma:generate": "prisma generate", // Generate Prisma Client
    "prisma:migrate": "prisma migrate dev", // Run migrations
    "prisma:studio": "prisma studio", // Open Prisma Studio GUI
    "prisma:seed": "node prisma/seed.js" // Seed database (if configured)
  }
}
```

### Running Prisma Studio

Prisma Studio provides a visual interface to view and edit your database:

```bash
npx prisma studio
```

Access at: `http://localhost:5555`

### Database Migrations

**Create a new migration:**

```bash
npx prisma migrate dev --name your_migration_name
```

**Apply pending migrations:**

```bash
npx prisma migrate deploy
```

**Reset database (⚠️ Deletes all data):**

```bash
npx prisma migrate reset
```

### Code Quality

**Linting (if configured):**

```bash
npm run lint
```

**Format code:**

```bash
npm run format
```

---

## 🧪 Testing the API

### Using cURL

**Client Signup:**

```bash
curl -X POST http://localhost:8080/api/client/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass@123"
  }'
```

**Get All Lawyers:**

```bash
curl -X GET http://localhost:8080/api/lawyer/alllawyers
```

**Get Profile (with authentication):**

```bash
curl -X GET http://localhost:8080/api/client/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Using Postman

1. Import the collection from the `/docs` folder (if available)
2. Set up environment variables:
   - `BASE_URL`: `http://localhost:8080`
   - `TOKEN`: (obtained after login)

---

## 🔍 Troubleshooting

### Common Issues

**Issue:** Database connection error

```
Error: Can't reach database server at localhost:5432
```

**Solution:**

- Ensure PostgreSQL is running
- Verify `DATABASE_URL` in `.env`
- Check firewall settings

---

**Issue:** JWT token invalid

```
Unauthorized: Invalid token
```

**Solution:**

- Ensure token is not expired (6-hour validity)
- Verify `JWT_SECRET_KEY` matches between registration and verification
- Check Authorization header format: `Bearer <token>`

---

**Issue:** Cloudinary upload fails

```
Error: Invalid credentials
```

**Solution:**

- Verify Cloudinary credentials in `.env`
- Check API key permissions in Cloudinary dashboard
- Ensure internet connectivity

---

**Issue:** Prisma Client not generated

```
Error: Cannot find module '@prisma/client'
```

**Solution:**

```bash
npx prisma generate
```

---

## 📝 Best Practices Implemented

✅ **Security**

- Password hashing with bcrypt
- JWT-based stateless authentication
- Input validation using validator.js
- Role-based access control
- Environment variable management

✅ **Code Quality**

- Modular architecture (MVC pattern)
- Separation of concerns
- DRY (Don't Repeat Yourself) principle
- Consistent error handling

✅ **Database**

- Type-safe queries with Prisma
- Proper indexing (unique constraints)
- Migration version control
- Foreign key relationships

✅ **API Design**

- RESTful conventions
- Consistent response formats
- Meaningful HTTP status codes
- Comprehensive error messages

---

## 🚀 Deployment

### Production Checklist

- [ ] Set `NODE_ENV=production` in environment
- [ ] Use strong, unique `JWT_SECRET_KEY`
- [ ] Configure production database URL
- [ ] Set up HTTPS/SSL certificates
- [ ] Enable CORS for specific domains only
- [ ] Set up logging and monitoring
- [ ] Configure rate limiting
- [ ] Set up automatic backups
- [ ] Use environment-specific `.env` files
- [ ] Run `prisma migrate deploy` (not `dev`)

### Deployment Platforms

- **Heroku**: Easy deployment with Postgres add-on
- **AWS EC2**: Full control, requires manual setup
- **DigitalOcean**: App Platform or Droplets
- **Railway**: Modern, developer-friendly
- **Render**: Free tier available, auto-deploys from Git

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Priyangshu**

- GitHub: [@Priyangshu-0221](https://github.com/Priyangshu-0221)
- Repository: [LawConnect](https://github.com/Priyangshu-0221/LawConnect)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by Priyangshu**

</div>
