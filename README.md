<div align="center">

# 🏛️⚖️ LawConnect

### Professional Legal Consultation Platform

[![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.11-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

_A full-stack legal consultation platform connecting clients with qualified legal professionals_

[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [System Architecture](#-system-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Environment Configuration](#-environment-configuration)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**LawConnect** is a modern, full-stack web application designed to bridge the gap between clients seeking legal advice and qualified legal professionals. Built with cutting-edge technologies, the platform offers a seamless experience for booking legal consultations, managing appointments, and building professional relationships through a transparent review system.

### Why LawConnect?

- **🚀 Modern Tech Stack**: Built with Next.js 15, React 19, Node.js, and PostgreSQL
- **🔐 Dual Authentication**: Separate, secure flows for clients and lawyers
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **⚡ High Performance**: Lightning-fast with Turbopack and optimized API responses
- **🎨 Beautiful UI**: Modern interface with TailwindCSS, Material-UI, and shadcn/ui
- **🛡️ Enterprise Security**: JWT authentication, bcrypt hashing, and role-based access control
- **📊 Scalable Architecture**: Prisma ORM with PostgreSQL for robust data management
- **☁️ Cloud-Ready**: Document management with Cloudinary integration

---

## ✨ Features

### 🔐 Authentication & User Management

#### For Clients

- **Secure Registration & Login**
  - Email validation and strong password enforcement
  - JWT token-based authentication with 6-hour expiration
  - Session persistence across browser sessions
- **Profile Management**
  - Complete profile with personal information
  - Phone number, gender, and address fields
  - View and update profile information
- **Appointment History**
  - View all past and upcoming appointments
  - Access appointment details and documents
  - Cancel appointments when needed

#### For Lawyers

- **Professional Registration**
  - Comprehensive profile creation with credentials
  - Specialization and practice areas
  - Degrees, experience, and certifications
- **Profile Showcase**
  - Professional achievements display
  - Language proficiencies
  - Professional memberships
  - Fee structure management
  - Profile image upload with Cloudinary
- **Appointment Management**
  - View client appointments
  - Access case documents
  - Manage appointment schedule

### 📅 Appointment System

- **Smart Booking Interface**
  - Browse qualified lawyers by specialization
  - View detailed lawyer profiles
  - Select appointment date and time
  - Upload relevant documents securely
  - Receive booking confirmation
- **Document Management**
  - Secure document upload via Multer
  - Cloud storage with Cloudinary
  - Easy document access for both parties
- **Appointment Tracking**
  - Real-time appointment status
  - Email notifications (planned)
  - Cancel or reschedule options

### ⭐ Review & Rating System

- **Transparent Reviews**
  - Client-submitted reviews for lawyers
  - 5-star rating system
  - Detailed feedback descriptions
  - Review history with timestamps
- **Lawyer Reputation**
  - Aggregate ratings display
  - Review count and statistics
  - Build trust through transparency

### 🎨 User Interface

- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts for all screen sizes
  - Touch-friendly interfaces
- **Modern Components**
  - Material-UI components
  - shadcn/ui accessible primitives
  - Custom-designed elements
  - Smooth animations with Framer Motion
- **Intuitive Navigation**
  - Sticky navigation bar
  - Dropdown menus for user actions
  - Breadcrumb navigation
  - Mobile hamburger menu

---

## 🛠️ Technology Stack

### Frontend

| Technology          | Version  | Purpose                      |
| ------------------- | -------- | ---------------------------- |
| **Next.js**         | 15.4.2   | React framework with SSR/SSG |
| **React**           | 19.1.0   | UI library                   |
| **TailwindCSS**     | 4.1.11   | Utility-first CSS framework  |
| **Material-UI**     | 7.2.0    | Component library            |
| **shadcn/ui**       | Latest   | Radix UI components          |
| **Framer Motion**   | 12.23.12 | Animation library            |
| **React Hook Form** | 7.60.0   | Form validation              |
| **Axios**           | 1.11.0   | HTTP client                  |
| **React Toastify**  | 11.0.5   | Notifications                |

### Backend

| Technology       | Version  | Purpose                  |
| ---------------- | -------- | ------------------------ |
| **Node.js**      | Latest   | JavaScript runtime       |
| **Express.js**   | 5.1.0    | Web framework            |
| **Prisma**       | 6.13.0   | ORM and database toolkit |
| **PostgreSQL**   | Latest   | Primary database         |
| **JWT**          | 9.0.2    | Authentication tokens    |
| **Bcrypt**       | 6.0.0    | Password hashing         |
| **Multer**       | 2.0.2    | File upload handling     |
| **Cloudinary**   | 2.7.0    | Cloud storage            |
| **Validator.js** | 13.15.15 | Input validation         |

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Browser                        │
│                    (React 19 + Next.js 15)                   │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            │ HTTPS/HTTP
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                     Frontend (Port 3000)                     │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Next.js App Router                                    │ │
│  │  • Server Components (SSR)                             │ │
│  │  • Client Components (CSR)                             │ │
│  │  • API Route Handlers                                  │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  UI Layer                                              │ │
│  │  • TailwindCSS + Material-UI                          │ │
│  │  • shadcn/ui Components                               │ │
│  │  • Framer Motion Animations                           │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  State Management                                      │ │
│  │  • React Context API                                   │ │
│  │  • localStorage (Auth tokens)                         │ │
│  └────────────────────────────────────────────────────────┘ │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            │ REST API Calls
                            │ (JWT Authentication)
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                     Backend API (Port 8080)                  │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Express.js Middleware Stack                          │ │
│  │  • CORS                                               │ │
│  │  • Body Parser                                        │ │
│  │  • JWT Authentication                                 │ │
│  │  • Multer (File Upload)                               │ │
│  │  • Error Handling                                     │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Route Handlers                                        │ │
│  │  • Client Routes (/api/client)                        │ │
│  │  • Lawyer Routes (/api/lawyer)                        │ │
│  │  • Appointment Routes (/api/new)                      │ │
│  │  • Review Routes (/api/review)                        │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Business Logic (Controllers)                          │ │
│  │  • Input Validation                                    │ │
│  │  • Business Rules                                      │ │
│  │  • Error Handling                                      │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Prisma ORM                                            │ │
│  │  • Type-safe queries                                   │ │
│  │  • Migration management                                │ │
│  │  • Database connection pooling                         │ │
│  └────────────────────────────────────────────────────────┘ │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            │ SQL Queries
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                    PostgreSQL Database                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Tables                                                │ │
│  │  • Client (Users seeking legal help)                  │ │
│  │  • Lawyer (Legal professionals)                       │ │
│  │  • Appointment (Booking records)                      │ │
│  │  • Review (Feedback & ratings)                        │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    Cloudinary (Cloud Storage)                │
│  • Document uploads                                          │
│  • Lawyer profile images                                     │
│  • Secure file URLs                                          │
└─────────────────────────────────────────────────────────────┘
```

### Database Schema

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
         │                    │ memberships[]   │
         │                    │ createdAt       │
         │                    └────────┬────────┘
         │                             │
         │        ┌────────────────────┴─────┐
         │        │                          │
         └────────▼────────┐    ┌────────────▼─────────┐
              Appointment   │    │      Review         │
         ├──────────────────┤    ├─────────────────────┤
         │ id (PK)          │    │ id (PK)             │
         │ client_first_name│    │ username            │
         │ client_last_name │    │ rating              │
         │ contact_number   │    │ descriptions        │
         │ age              │    │ lawyer_id (FK)      │
         │ gender           │    │ client_id (FK)      │
         │ lawyer_name      │    │ created_at          │
         │ lawyer_speciality│    └─────────────────────┘
         │ documents_url    │
         │ appointment_date │
         │ term             │
         │ message          │
         │ created_at       │
         │ lawyer_id (FK)   │
         │ client_id (FK)   │
         └──────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** or **pnpm** - Package manager
- **PostgreSQL** (v14.x or higher) - [Download](https://www.postgresql.org/download/)
- **Git** - [Download](https://git-scm.com/downloads)

### Clone the Repository

```bash
git clone https://github.com/Priyangshu-0221/LawConnect.git
cd LawConnect
```

### Backend Setup

1. **Navigate to backend directory**

   ```bash
   cd backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the backend directory:

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

4. **Set up database**

   ```bash
   # Run migrations
   npx prisma migrate dev --name init

   # Generate Prisma Client
   npx prisma generate
   ```

5. **Start the backend server**

   ```bash
   npm run dev
   ```

   The backend will start at `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory** (from project root)

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the frontend directory:

   ```env
   # Backend API URL
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
   ```

4. **Start the frontend server**

   ```bash
   npm run frontend
   ```

   The frontend will start at `http://localhost:3000`

### Access the Application

Open your browser and navigate to:

- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:8080`
- **Prisma Studio** (Database GUI): Run `npx prisma studio` in backend directory

---

## 📁 Project Structure

```
LawConnect/
│
├── backend/                          # Backend API (Node.js + Express)
│   ├── Controller/                   # Business logic layer
│   │   ├── Client.Controller.js
│   │   ├── Lawyer.Controller.js
│   │   ├── Appointment.Controller.js
│   │   └── Review.Controller.js
│   │
│   ├── DATABASE/                     # Database configuration
│   │   ├── db.config.js
│   │   └── cloudinary.config.js
│   │
│   ├── middlewares/                  # Custom middleware
│   │   ├── authMiddleware.js
│   │   ├── lawyerAuth.js
│   │   └── multer.js
│   │
│   ├── prisma/                       # Prisma ORM
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── Routes/                       # API routes
│   │   ├── index.js
│   │   ├── client.Route.js
│   │   ├── lawyer.Route.js
│   │   ├── appointment.Route.js
│   │   └── review.Route.js
│   │
│   ├── .env                          # Environment variables
│   ├── package.json
│   ├── server.js                     # Application entry point
│   └── README.md                     # Backend documentation
│
├── frontend/                         # Frontend (Next.js + React)
│   ├── app/                          # Next.js App Router
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   ├── about/
│   │   ├── all_lawyers/
│   │   ├── appointment/
│   │   ├── contact/
│   │   ├── login/
│   │   ├── signup/
│   │   ├── lawyerlogin/
│   │   ├── lawyersignup/
│   │   ├── user/
│   │   ├── lawyer/
│   │   ├── myappointment/
│   │   └── lawyer_appointment/
│   │
│   ├── Components/                   # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── LawyerLogin.js
│   │   ├── LawyerSignup.js
│   │   ├── UserComponent.js
│   │   ├── LawyerComponent.js
│   │   ├── AppointmentFrom.js
│   │   ├── MyAppointments.js
│   │   ├── ReviewFrom.js
│   │   ├── ReviewComponent.js
│   │   ├── Home/
│   │   └── ui/                       # shadcn/ui components
│   │
│   ├── context/                      # React Context
│   │   └── AppContext.js
│   │
│   ├── public/                       # Static assets
│   │   ├── logo.png
│   │   ├── lawyers/
│   │   └── ...
│   │
│   ├── .env.local                    # Environment variables
│   ├── package.json
│   ├── next.config.mjs
│   └── README.md                     # Frontend documentation
│
└── README.md                         # This file (Project overview)
```

---

## 📚 API Documentation

### Base URL

```
http://localhost:8080
```

### Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Main Endpoints

#### Client Endpoints

- `POST /api/client/signup` - Register a new client
- `POST /api/client/login` - Client login
- `GET /api/client/profile` 🔒 - Get client profile
- `PATCH /api/client/profile/update` 🔒 - Update client profile

#### Lawyer Endpoints

- `POST /api/lawyer/signup` - Register a new lawyer
- `POST /api/lawyer/login` - Lawyer login
- `GET /api/lawyer/lawyerprofile` 🔒 - Get lawyer profile
- `PATCH /api/lawyer/update` 🔒 - Update lawyer profile
- `POST /api/lawyer/avatar` 🔒 - Upload lawyer avatar
- `GET /api/lawyer/alllawyers` - Get all lawyers
- `GET /api/lawyer/singlelawyer?id={id}` - Get single lawyer

#### Appointment Endpoints

- `POST /api/new/form` 🔒 - Book new appointment
- `GET /api/new/clientappointment` 🔒 - Get client appointments
- `GET /api/new/lawyersappointment/:id` - Get lawyer appointments
- `DELETE /api/new/cancelappointment/:id` 🔒 - Cancel appointment

#### Review Endpoints

- `POST /api/review/addreview` 🔒 - Submit a review
- `GET /api/review/allreviews?lawyerId={id}` - Get lawyer reviews

**🔒 = Protected Route (Requires Authentication)**

For detailed API documentation, see:

- [Backend README](./backend/README.md)

---

## 🌍 Environment Configuration

### Backend Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/lawconnect?schema=public"

# Server
PORT=8080
NODE_ENV=development

# Authentication
JWT_SECRET_KEY="your-super-secret-jwt-key-min-32-characters"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### Frontend Environment Variables

Create a `.env.local` file in the `frontend/` directory:

```env
# API Configuration
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080

# Optional: Analytics
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Sentry Error Tracking
# NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

### Generating Secure Secrets

**For JWT_SECRET_KEY:**

```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Using OpenSSL
openssl rand -base64 32

# Using PowerShell (Windows)
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

---

## 🔧 Development

### Running in Development Mode

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend:**

```bash
cd frontend
npm run frontend
```

### Database Management

**View Database (Prisma Studio):**

```bash
cd backend
npx prisma studio
```

Access at `http://localhost:5555`

**Create Migration:**

```bash
cd backend
npx prisma migrate dev --name your_migration_name
```

**Generate Prisma Client:**

```bash
cd backend
npx prisma generate
```

**Reset Database (⚠️ Deletes all data):**

```bash
cd backend
npx prisma migrate reset
```

### Code Quality

**Linting:**

```bash
# Frontend
cd frontend
npm run lint

# Backend (if configured)
cd backend
npm run lint
```

---

## 📦 Deployment

### Production Build

**Frontend:**

```bash
cd frontend
npm run build
npm start
```

**Backend:**

```bash
cd backend
npm start
```

### Deployment Platforms

#### Recommended Setup

- **Frontend**: Deploy to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- **Backend**: Deploy to [Railway](https://railway.app/), [Render](https://render.com/), or [Heroku](https://www.heroku.com/)
- **Database**: [Supabase](https://supabase.com/), [Railway PostgreSQL](https://railway.app/), or [ElephantSQL](https://www.elephantsql.com/)

#### Deployment Checklist

**Backend:**

- [ ] Set `NODE_ENV=production`
- [ ] Use strong, unique `JWT_SECRET_KEY`
- [ ] Configure production database URL
- [ ] Set up HTTPS/SSL certificates
- [ ] Configure CORS for frontend domain
- [ ] Set up logging and monitoring
- [ ] Configure rate limiting
- [ ] Set up automatic backups
- [ ] Run `prisma migrate deploy`

**Frontend:**

- [ ] Update `NEXT_PUBLIC_BACKEND_URL` to production API
- [ ] Test production build locally
- [ ] Optimize images and assets
- [ ] Enable error tracking (Sentry)
- [ ] Set up analytics (Google Analytics)
- [ ] Configure CDN for static assets
- [ ] Test on multiple devices/browsers
- [ ] Set up monitoring

---

## 🧪 Testing

### Manual Testing

**Authentication Flow:**

1. Register as a client
2. Login with credentials
3. Register as a lawyer
4. Login with lawyer credentials
5. Verify token persistence
6. Test logout functionality

**Appointment Flow:**

1. Browse lawyers
2. View lawyer profile
3. Book an appointment
4. Upload documents
5. View appointment in dashboard
6. Cancel appointment

**Review Flow:**

1. Submit a review for a lawyer
2. View reviews on lawyer profile
3. Verify review displays correctly

---

## 🔍 Troubleshooting

### Common Issues

**Database Connection Error:**

```
Error: Can't reach database server
```

**Solution:**

- Ensure PostgreSQL is running
- Verify `DATABASE_URL` in `.env`
- Check firewall settings
- Verify database credentials

**JWT Token Invalid:**

```
Unauthorized: Invalid token
```

**Solution:**

- Check token expiration (6-hour validity)
- Verify `JWT_SECRET_KEY` matches on frontend/backend
- Check Authorization header format: `Bearer <token>`
- Clear localStorage and re-login

**CORS Error:**

```
Access-Control-Allow-Origin error
```

**Solution:**

- Verify CORS configuration in backend
- Check frontend URL is allowed
- Ensure credentials are included in requests

**Cloudinary Upload Fails:**

```
Error: Invalid credentials
```

**Solution:**

- Verify Cloudinary credentials in `.env`
- Check API key permissions
- Ensure internet connectivity

---

## 📝 Best Practices Implemented

### Security

✅ Password hashing with bcrypt  
✅ JWT-based stateless authentication  
✅ Input validation using validator.js  
✅ Role-based access control  
✅ Environment variable management  
✅ HTTPS enforcement in production  
✅ XSS protection

### Code Quality

✅ Modular architecture (MVC pattern)  
✅ Separation of concerns  
✅ DRY principle  
✅ Consistent error handling  
✅ ESLint configuration  
✅ Meaningful variable names

### Database

✅ Type-safe queries with Prisma  
✅ Proper indexing (unique constraints)  
✅ Migration version control  
✅ Foreign key relationships  
✅ Connection pooling

### Performance

✅ Next.js Image optimization  
✅ Code splitting and lazy loading  
✅ Efficient re-rendering  
✅ Optimized bundle size  
✅ CDN integration

### User Experience

✅ Responsive design  
✅ Loading states  
✅ Error handling  
✅ Toast notifications  
✅ Smooth animations  
✅ Accessibility features

---

## 🚀 Future Enhancements

### Planned Features

- [ ] Real-time chat between clients and lawyers
- [ ] Video consultation integration (Zoom/Google Meet)
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Advanced search and filters
- [ ] Email/SMS notifications
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA)
- [ ] Mobile apps (React Native)
- [ ] Advanced analytics dashboard
- [ ] AI-powered lawyer recommendations
- [ ] Calendar integration (Google Calendar)
- [ ] Document e-signature
- [ ] Legal case tracking system

### Technical Improvements

- [ ] Unit testing with Jest
- [ ] E2E testing with Playwright
- [ ] Performance monitoring
- [ ] Error tracking with Sentry
- [ ] GraphQL API implementation
- [ ] WebSocket for real-time updates
- [ ] Redis caching layer
- [ ] Microservices architecture
- [ ] Docker containerization
- [ ] Kubernetes orchestration

---

## 📄 License

This project is licensed under the **ISC License**.

```
ISC License

Copyright (c) 2025 Priyangshu

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

---

## 👨‍💻 Author

**Priyangshu**

- GitHub: [@Priyangshu-0221](https://github.com/Priyangshu-0221)
- Repository: [LawConnect](https://github.com/Priyangshu-0221/LawConnect)
- LinkedIn: [Add your LinkedIn]
- Email: [Add your email]

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute

1. **Fork the Project**

   ```bash
   git clone https://github.com/Priyangshu-0221/LawConnect.git
   ```

2. **Create your Feature Branch**

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit your Changes**

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add comments for complex logic
- Update documentation as needed
- Test your changes thoroughly
- Ensure no linting errors

---

## 📞 Support

For support and questions:

- **Email**: support@lawconnect.com
- **Issues**: [GitHub Issues](https://github.com/Priyangshu-0221/LawConnect/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Priyangshu-0221/LawConnect/discussions)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Express.js](https://expressjs.com/) - Fast web framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Material-UI](https://mui.com/) - Component library
- [Cloudinary](https://cloudinary.com/) - Media management
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/Priyangshu-0221/LawConnect)
![GitHub stars](https://img.shields.io/github/stars/Priyangshu-0221/LawConnect?style=social)
![GitHub forks](https://img.shields.io/github/forks/Priyangshu-0221/LawConnect?style=social)
![GitHub issues](https://img.shields.io/github/issues/Priyangshu-0221/LawConnect)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Priyangshu-0221/LawConnect)
![GitHub last commit](https://img.shields.io/github/last-commit/Priyangshu-0221/LawConnect)

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by Priyangshu**

---

**LawConnect** - Connecting Clients with Legal Excellence

[⬆ Back to Top](#️-lawconnect)

</div>
