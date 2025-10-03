<div align="center">

# ⚖️ LawConnect - Frontend

### Modern Legal Consultation Platform Interface

[![Next.js](https://img.shields.io/badge/Next.js-15.4.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.11-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Material-UI](https://img.shields.io/badge/MUI-7.2.0-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)

_A sleek, responsive, and feature-rich user interface connecting clients with legal professionals_

[Live Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Pages & Routes](#-pages--routes)
- [Components](#-components)
- [State Management](#-state-management)
- [Environment Variables](#-environment-variables)
- [UI/UX Design](#-uiux-design)
- [API Integration](#-api-integration)
- [Development](#-development)
- [Build & Deployment](#-build--deployment)

---

## 🎯 Overview

**LawConnect Frontend** is a modern, performance-optimized Next.js application that provides an intuitive interface for legal consultation services. Built with React 19 and Next.js 15, it leverages the latest web technologies to deliver a seamless user experience for both clients seeking legal advice and lawyers managing their practice.

### What Makes This Frontend Special?

- **🚀 Next.js 15 with Turbopack**: Lightning-fast development and production builds
- **⚛️ React 19**: Latest React features with improved performance
- **🎨 Modern UI Framework**: Combining shadcn/ui, Material-UI, and custom components
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🔐 Dual Authentication**: Separate flows for clients and lawyers
- **🎭 Smooth Animations**: Framer Motion for delightful interactions
- **♿ Accessibility**: ARIA-compliant components for inclusive design
- **🎨 Customizable Theming**: TailwindCSS with custom color schemes

---

## ✨ Features

### 🔐 Authentication & Authorization

- **Client Authentication**

  - Registration with email validation
  - Secure login with JWT token management
  - Profile management and updates
  - Session persistence with localStorage

- **Lawyer Authentication**
  - Professional registration with credentials
  - Separate login portal
  - Lawyer-specific dashboard
  - Profile customization with specialties

### 👥 User Management

- **Client Features**

  - Create and manage profile
  - View/edit personal information
  - Access appointment history
  - Submit reviews for lawyers

- **Lawyer Features**
  - Comprehensive profile with specializations
  - Professional credentials showcase
  - Achievements and certifications
  - Language proficiencies
  - Fee management

### 📅 Appointment System

- **Booking Interface**

  - Lawyer selection with detailed profiles
  - Interactive calendar/date picker
  - Document upload capability
  - Real-time availability checking
  - Appointment confirmation

- **Management Dashboard**
  - View all appointments (client/lawyer specific)
  - Cancel appointments with confirmations
  - Appointment status tracking
  - Document access and download

### ⭐ Review & Rating System

- **Submit Reviews**

  - Star rating system
  - Detailed feedback forms
  - Anonymous/Named reviews
  - Review submission confirmation

- **View Reviews**
  - Lawyer-specific review listings
  - Rating aggregation
  - Timestamp and client info
  - Filtered review display

### 🎨 UI/UX Features

- **Responsive Design**

  - Mobile-first approach
  - Tablet and desktop optimization
  - Adaptive layouts
  - Touch-friendly interfaces

- **Navigation**

  - Sticky navbar with dropdown menus
  - Breadcrumb navigation
  - Mobile hamburger menu
  - Quick access to key sections

- **Visual Elements**
  - Hero sections with animations
  - Image carousels
  - Interactive cards
  - Loading states and skeletons
  - Toast notifications

---

## 🛠️ Technology Stack

### Core Framework

| Technology    | Version | Purpose                      |
| ------------- | ------- | ---------------------------- |
| **Next.js**   | 15.4.2  | React framework with SSR/SSG |
| **React**     | 19.1.0  | UI library                   |
| **React DOM** | 19.1.0  | React rendering              |
| **Turbopack** | Latest  | Ultra-fast bundler           |

### Styling & UI

| Technology        | Version  | Purpose                     |
| ----------------- | -------- | --------------------------- |
| **TailwindCSS**   | 4.1.11   | Utility-first CSS framework |
| **Material-UI**   | 7.2.0    | Component library           |
| **Emotion**       | 11.14.0  | CSS-in-JS library           |
| **shadcn/ui**     | Latest   | Radix UI components         |
| **Framer Motion** | 12.23.12 | Animation library           |
| **Lucide React**  | 0.526.0  | Icon library                |

### Form & Data Management

| Technology          | Version | Purpose             |
| ------------------- | ------- | ------------------- |
| **React Hook Form** | 7.60.0  | Form validation     |
| **Axios**           | 1.11.0  | HTTP client         |
| **React Toastify**  | 11.0.5  | Toast notifications |

### UI Components

| Technology         | Version | Purpose               |
| ------------------ | ------- | --------------------- |
| **Radix UI**       | Latest  | Accessible primitives |
| **Embla Carousel** | 8.6.0   | Carousel component    |
| **Swiper**         | 11.2.10 | Touch slider          |
| **html2canvas**    | 1.4.1   | Screenshot capture    |

### Development Tools

```json
{
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "eslint": "^9",
    "eslint-config-next": "15.4.2",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1",
    "tw-animate-css": "^1.3.5"
  }
}
```

---

## 🏗️ Architecture

### Application Flow

```
┌─────────────────────────────────────────────────┐
│                   Browser                        │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│              Next.js App Router                  │
│  ┌──────────────────────────────────────────┐  │
│  │         Server Components                 │  │
│  │  • Initial HTML rendering                 │  │
│  │  • SEO optimization                       │  │
│  │  • Metadata generation                    │  │
│  └──────────────────────────────────────────┘  │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│           Client Components Layer                │
│  ┌──────────────┬──────────────┬────────────┐  │
│  │   Pages      │  Components  │  Context   │  │
│  │   (Routes)   │   (UI)       │  (State)   │  │
│  └──────────────┴──────────────┴────────────┘  │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│              Layout Components                   │
│  • Navbar (Navigation)                           │
│  • Footer (Site info)                            │
│  • ToastContainer (Notifications)                │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│           Context Providers                      │
│  • AppContext (Lawyer data)                      │
│  • Authentication state                          │
│  • User preferences                              │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│              API Integration                     │
│  • Axios HTTP Client                             │
│  • JWT Token Management                          │
│  • Error Handling                                │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│            Backend REST API                      │
│  (LawConnect Backend)                            │
└─────────────────────────────────────────────────┘
```

### Component Hierarchy

```
RootLayout
│
├── Navbar
│   ├── Logo & Branding
│   ├── Navigation Links
│   ├── User Dropdown (Client)
│   ├── Lawyer Menu
│   └── Mobile Menu
│
├── AppContextProvider
│   └── {children} (Page Content)
│       │
│       ├── HomePage
│       │   ├── Hero Section
│       │   ├── Speciality Section
│       │   ├── Lawyers Carousel
│       │   └── Bottom CTA
│       │
│       ├── Authentication Pages
│       │   ├── Login (Client)
│       │   ├── Signup (Client)
│       │   ├── LawyerLogin
│       │   └── LawyerSignup
│       │
│       ├── User Pages
│       │   ├── UserProfile
│       │   └── MyAppointments
│       │
│       ├── Lawyer Pages
│       │   ├── LawyerProfile
│       │   ├── AllLawyers
│       │   └── LawyerAppointments
│       │
│       └── Appointment Pages
│           ├── AppointmentForm
│           └── AppointmentDetails
│
├── Footer
│   ├── Company Info
│   ├── Quick Links
│   └── Social Media
│
└── ToastContainer
    └── Notification Messages
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.x or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** or **pnpm** - Package manager
- **Git** - Version control

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Priyangshu-0221/LawConnect.git
   cd LawConnect/frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set Up Environment Variables**

   Create a `.env.local` file in the frontend root:

   ```bash
   cp .env.example .env.local
   ```

   Add the following variables:

   ```env
   # Backend API URL
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8080

   # Optional: Analytics, monitoring, etc.
   # NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

4. **Start Development Server**

   ```bash
   npm run frontend
   # or
   yarn frontend
   # or
   pnpm frontend
   ```

   The application will start at `http://localhost:3000`

### Quick Start (Production Build)

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
frontend/
│
├── app/                                # Next.js App Router
│   ├── layout.js                      # Root layout with providers
│   ├── page.js                        # Homepage
│   ├── globals.css                    # Global styles
│   ├── favicon.ico                    # Site icon
│   │
│   ├── about/                         # About page
│   │   └── page.js
│   │
│   ├── all_lawyers/                   # Lawyers listing
│   │   └── page.js
│   │
│   ├── appointment/                   # Appointment booking
│   │   └── [lawyer]/
│   │       └── page.js
│   │
│   ├── contact/                       # Contact page
│   │   └── page.js
│   │
│   ├── login/                         # Client login
│   │   └── page.js
│   │
│   ├── signup/                        # Client signup
│   │   └── page.js
│   │
│   ├── lawyerlogin/                  # Lawyer login
│   │   └── page.js
│   │
│   ├── lawyersignup/                 # Lawyer signup
│   │   └── page.js
│   │
│   ├── user/                          # Client profile
│   │   └── [id]/
│   │       └── page.js
│   │
│   ├── lawyer/                        # Lawyer profile
│   │   └── [id]/
│   │       └── page.js
│   │
│   ├── myappointment/                # Client appointments
│   │   └── [appointment]/
│   │       └── page.js
│   │
│   └── lawyer_appointment/           # Lawyer appointments
│       └── [lawyerId]/
│           └── page.js
│
├── Components/                        # Reusable components
│   ├── Navbar.js                     # Navigation bar
│   ├── Footer.js                     # Footer component
│   ├── Login.js                      # Client login form
│   ├── Signup.js                     # Client signup form
│   ├── LawyerLogin.js                # Lawyer login form
│   ├── LawyerSignup.js               # Lawyer signup form
│   ├── UserComponent.js              # User profile component
│   ├── LawyerComponent.js            # Lawyer profile component
│   ├── AppointmentFrom.js            # Appointment form
│   ├── MyAppointments.js             # Appointment list
│   ├── ReviewFrom.js                 # Review submission form
│   ├── ReviewComponent.js            # Review display
│   │
│   ├── Home/                         # Homepage components
│   │   ├── HomePage.js
│   │   ├── Speciality.js
│   │   ├── Lawyers.js
│   │   └── Bottom.js
│   │
│   └── ui/                           # shadcn/ui components
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       ├── label.jsx
│       ├── avatar.jsx
│       ├── badge.jsx
│       ├── form.jsx
│       ├── slider.jsx
│       ├── textarea.jsx
│       ├── radio-group.jsx
│       ├── carousel.jsx
│       └── card-carousel.jsx
│
├── context/                          # React Context
│   └── AppContext.js                 # App-wide state management
│
├── data/                             # Static data
│   └── LawyersData.js                # Lawyer sample data
│
├── lib/                              # Utilities
│   └── utils.js                      # Helper functions
│
├── public/                           # Static assets
│   ├── logo.png                      # App logo
│   ├── login.png                     # Login page image
│   ├── signup.png                    # Signup page image
│   ├── about.mp4                     # About page video
│   ├── contact.mp4                   # Contact page video
│   └── lawyers/                      # Lawyer images
│
├── components.json                   # shadcn/ui config
├── next.config.mjs                   # Next.js configuration
├── package.json                      # Dependencies & scripts
├── postcss.config.mjs               # PostCSS config
├── eslint.config.mjs                # ESLint configuration
├── jsconfig.json                     # JavaScript config
└── README.md                         # This file
```

---

## 🗺️ Pages & Routes

### Public Routes

| Route          | Component             | Description                                           |
| -------------- | --------------------- | ----------------------------------------------------- |
| `/`            | `page.js`             | Homepage with hero, specialties, and featured lawyers |
| `/about`       | `about/page.js`       | About the platform and mission                        |
| `/contact`     | `contact/page.js`     | Contact form and information                          |
| `/all_lawyers` | `all_lawyers/page.js` | Complete lawyer directory                             |

### Authentication Routes

| Route           | Component              | Description         |
| --------------- | ---------------------- | ------------------- |
| `/login`        | `login/page.js`        | Client login portal |
| `/signup`       | `signup/page.js`       | Client registration |
| `/lawyerlogin`  | `lawyerlogin/page.js`  | Lawyer login portal |
| `/lawyersignup` | `lawyersignup/page.js` | Lawyer registration |

### Protected Client Routes 🔒

| Route                   | Component                             | Description         |
| ----------------------- | ------------------------------------- | ------------------- |
| `/user/[id]`            | `user/[id]/page.js`                   | Client profile page |
| `/myappointment/[id]`   | `myappointment/[appointment]/page.js` | Client appointments |
| `/appointment/[lawyer]` | `appointment/[lawyer]/page.js`        | Book appointment    |

### Protected Lawyer Routes 🔒

| Route                            | Component                               | Description         |
| -------------------------------- | --------------------------------------- | ------------------- |
| `/lawyer/[id]`                   | `lawyer/[id]/page.js`                   | Lawyer profile page |
| `/lawyer_appointment/[lawyerId]` | `lawyer_appointment/[lawyerId]/page.js` | Lawyer appointments |

---

## 🧩 Components

### Core Components

#### Navbar Component

```javascript
Features:
- Responsive navigation with mobile menu
- Client dropdown with profile/appointments/logout
- Lawyer menu with profile/appointments/logout
- Dynamic rendering based on authentication state
- Material-UI icons for visual appeal
```

#### Authentication Components

**Login.js**

- Email/password form with validation
- JWT token storage
- Redirect on successful login
- Error handling with toast notifications

**Signup.js**

- Registration form with validation
- Password strength requirements
- User creation with API integration
- Automatic login after signup

**LawyerLogin.js & LawyerSignup.js**

- Separate authentication for lawyers
- Professional credential fields
- Specialization and experience input
- Image upload capability

#### Profile Components

**UserComponent.js**

- View/edit client information
- Phone, gender, address fields
- Profile update functionality
- Secure API integration

**LawyerComponent.js**

- Comprehensive lawyer profile
- Multiple field management:
  - Specialization
  - Degree & qualifications
  - Experience
  - Fees
  - Address (JSON)
  - Achievements (array)
  - Languages (array)
  - Professional memberships (array)
- Avatar upload with Cloudinary
- Profile update with validation

#### Appointment Components

**AppointmentFrom.js**

- Multi-field booking form
- Document upload support
- Date/time picker integration
- Terms acceptance checkbox
- Lawyer information display
- API submission with FormData

**MyAppointments.js**

- List all user appointments
- Appointment details display
- Cancel appointment functionality
- Lawyer information included
- Document download access

#### Review Components

**ReviewFrom.js**

- Rating input (1-5 stars)
- Detailed description textarea
- Client authentication required
- Submit to specific lawyer

**ReviewComponent.js**

- Display all lawyer reviews
- Rating visualization
- Timestamp and client info
- Responsive card layout

### Home Page Components

**HomePage.js**

- Hero section with animations
- Call-to-action buttons
- Feature highlights
- Video/image backgrounds

**Speciality.js**

- Legal specialization cards
- Icon representations
- Click navigation to filtered lawyers
- Responsive grid layout

**Lawyers.js**

- Featured lawyers carousel
- Swiper/Embla integration
- Lawyer cards with info
- "View All" button

**Bottom.js**

- Final CTA section
- App download links
- Newsletter signup
- Partner logos

### UI Components (shadcn/ui)

All components from `Components/ui/`:

- **button.jsx**: Customizable button variants
- **card.jsx**: Card container with header/content
- **input.jsx**: Form input fields
- **label.jsx**: Form labels
- **avatar.jsx**: User avatar display
- **badge.jsx**: Status badges
- **form.jsx**: Form wrapper with validation
- **slider.jsx**: Range slider
- **textarea.jsx**: Multi-line text input
- **radio-group.jsx**: Radio button groups
- **carousel.jsx**: Image/content carousel

---

## 🎨 State Management

### Context API Implementation

#### AppContext (Global State)

**Location:** `context/AppContext.js`

```javascript
State Management:
- lawyers: Array of all lawyer data
- allLawyers(): Fetch lawyers from API

Features:
- Centralized lawyer data
- API integration with Axios
- Error handling with toast
- Accessible across all components
```

**Usage Example:**

```javascript
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";

function LawyersPage() {
  const { lawyers, allLawyers } = useContext(AppContext);

  useEffect(() => {
    allLawyers();
  }, []);

  return (
    <div>
      {lawyers.map((lawyer) => (
        <LawyerCard key={lawyer.id} {...lawyer} />
      ))}
    </div>
  );
}
```

### Local State Management

**localStorage Implementation:**

```javascript
Authentication Tokens:
- token: Client JWT token
- user_role: Client role identifier
- userId: Client unique ID
- username: Client name

- lawyer_token: Lawyer JWT token
- lawyer_role: Lawyer role identifier
- lawyerId: Lawyer unique ID
```

**Session Management:**

- Tokens stored on login
- Retrieved on component mount
- Cleared on logout
- Validated on protected routes

---

## 🌍 Environment Variables

### Required Environment Variables

Create a `.env.local` file:

```env
# ===================================
# API CONFIGURATION
# ===================================
# Backend API Base URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080

# ===================================
# OPTIONAL CONFIGURATIONS
# ===================================
# Google Analytics
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Sentry Error Tracking
# NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx

# Feature Flags
# NEXT_PUBLIC_ENABLE_REVIEWS=true
# NEXT_PUBLIC_ENABLE_CHAT=false
```

### Environment Variable Usage

```javascript
// In components
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

// API calls
axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lawyers`);
```

**Important Notes:**

- Prefix with `NEXT_PUBLIC_` for client-side access
- Never commit `.env.local` to version control
- Use different values for dev/staging/production
- Restart dev server after changes

---

## 🎨 UI/UX Design

### Design System

#### Color Palette

```css
Primary Colors:
- Gold: #d4af37 (Brand primary)
- Dark Gold: #b8860b (Hover states)
- Red: #dc2626 (Lawyer actions)
- Green: #16a34a (Client actions)
- Emerald: #059669 (Success states)

Neutral Colors:
- White: #ffffff
- Black: #000000
- Gray variants: TailwindCSS defaults

Semantic Colors:
- Success: Green shades
- Error: Red shades
- Warning: Yellow/Orange
- Info: Blue shades
```

#### Typography

```javascript
Font Families:
- Primary: Geist Sans (Google Fonts)
- Monospace: Geist Mono (Code/technical)

Font Sizes:
- Headings: text-2xl, text-3xl, text-4xl
- Body: text-base, text-lg
- Small: text-sm, text-xs

Font Weights:
- Regular: font-normal
- Medium: font-medium
- Semibold: font-semibold
- Bold: font-bold
```

#### Spacing & Layout

```css
Container Widths:
- Mobile: Full width with px-4 padding
- Tablet: px-6 to px-8
- Desktop: px-10 to max-w-7xl

Component Spacing:
- gap-2, gap-4, gap-6 for flex/grid
- my-4, my-8, my-12 for vertical rhythm
- Consistent padding in cards (p-6, p-8)
```

#### Responsive Breakpoints

```javascript
TailwindCSS Breakpoints:
- sm: 640px   (Small devices)
- md: 768px   (Medium devices)
- lg: 1024px  (Large devices)
- xl: 1280px  (Extra large)
- 2xl: 1536px (2X Extra large)

Mobile-First Approach:
- Default styles for mobile
- Use sm:, md:, lg: modifiers for larger screens
```

### Animations & Transitions

**Framer Motion Usage:**

```javascript
- Page transitions
- Component enter/exit animations
- Hover effects
- Scroll-triggered animations
```

**CSS Transitions:**

```css
- transition-colors duration-200
- hover:scale-105
- transform transitions
- opacity fades
```

### Accessibility Features

- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Semantic HTML structure
- ✅ Alt text on images
- ✅ Color contrast compliance
- ✅ Screen reader friendly

---

## 🔌 API Integration

### Axios Configuration

**Base Setup:**

```javascript
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Example GET request
const response = await axios.get(`${API_URL}/api/endpoint`);

// Example POST request
const response = await axios.post(`${API_URL}/api/endpoint`, data, {
  headers: { Authorization: `Bearer ${token}` },
});
```

### API Endpoints Used

#### Client Endpoints

```javascript
POST / api / client / signup;
POST / api / client / login;
GET / api / client / profile(Protected);
PATCH / api / client / profile / update(Protected);
```

#### Lawyer Endpoints

```javascript
POST /api/lawyer/signup
POST /api/lawyer/login
GET  /api/lawyer/lawyerprofile (Protected)
PATCH /api/lawyer/update (Protected)
POST /api/lawyer/avatar (Protected)
GET  /api/lawyer/alllawyers
GET  /api/lawyer/singlelawyer?id={id}
```

#### Appointment Endpoints

```javascript
POST /api/new/appointment (Protected)
GET  /api/new/myappointments (Protected)
GET  /api/new/lawyer/appointment/{lawyerId} (Protected)
DELETE /api/new/appointment/delete/{id} (Protected)
DELETE /api/new/lawyer/delete/{id} (Protected)
```

#### Review Endpoints

```javascript
POST /api/review/addreview (Protected)
GET  /api/review/getreviews?lawyerId={id}
```

### Error Handling

**Comprehensive Error Handling Pattern:**

```javascript
try {
  const response = await axios.get(endpoint);
  // Handle success
  toast.success("Operation successful");
} catch (error) {
  console.error("Error context:", error);
  if (error.response) {
    // Server responded with error status
    toast.error(error.response.data?.message || "Server error occurred");
  } else if (error.request) {
    // Request made but no response received
    toast.error(
      "Cannot connect to server. Please check your internet connection."
    );
  } else {
    // Error in request configuration
    toast.error("An error occurred. Please try again.");
  }
}
```

**Error Handling Features:**

- Safe optional chaining for error messages
- Network error detection
- User-friendly error messages
- Console errors for debugging (production-safe)
- Toast notifications for user feedback

### Authentication Headers

```javascript
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
};

const response = await axios.get(endpoint, config);
```

---

## 🔧 Development

### Available Scripts

```json
{
  "scripts": {
    "frontend": "next dev --turbopack", // Development with Turbopack
    "build": "next build", // Production build
    "start": "next start", // Start production server
    "lint": "next lint" // Run ESLint
  }
}
```

### Development Workflow

1. **Start Development Server**

   ```bash
   npm run frontend
   ```

   - Hot module replacement enabled
   - Fast refresh for React components
   - Turbopack for faster builds

2. **Code Linting**

   ```bash
   npm run lint
   ```

   - Checks for code quality issues
   - Enforces coding standards
   - Auto-fixable issues

3. **Build for Production**
   ```bash
   npm run build
   ```
   - Creates optimized production bundle
   - Generates static pages
   - Optimizes images and assets

### Development Best Practices

✅ **Component Structure**

- One component per file
- Use functional components with hooks
- Implement error boundaries
- Use React.memo() for optimization

✅ **State Management**

- Use Context API for global state
- useState for local component state
- useEffect for side effects
- Custom hooks for reusable logic

✅ **Styling**

- TailwindCSS utility classes
- Consistent spacing and sizing
- Responsive modifiers (sm:, md:, lg:)
- Custom components for reusability

✅ **Performance**

- Next.js Image optimization
- Lazy loading components
- Code splitting
- Memoization where needed

✅ **Code Quality**

- Meaningful variable names
- Comments for complex logic
- Error handling everywhere
- Consistent formatting

---

## 📦 Build & Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# Output directory: .next/
# Static files: .next/static/
```

### Deployment Options

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Vercel Features:**

- Automatic builds on push
- Preview deployments for PRs
- Environment variable management
- Edge network CDN
- Serverless functions

#### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

#### Custom Server (Node.js)

```bash
# Build
npm run build

# Start production server
npm start
```

**Server Requirements:**

- Node.js v18+
- PM2 or similar process manager
- Nginx for reverse proxy
- SSL certificate

### Environment Configuration

**Development:**

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
```

**Production:**

```env
NEXT_PUBLIC_BACKEND_URL=https://api.lawconnect.com
```

### Deployment Checklist

- [ ] Update environment variables for production
- [ ] Test build locally (`npm run build && npm start`)
- [ ] Optimize images and assets
- [ ] Enable error tracking (Sentry, etc.)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure CDN for static assets
- [ ] Set up SSL/HTTPS
- [ ] Test on multiple devices/browsers
- [ ] Set up monitoring and alerts
- [ ] Configure CORS on backend

---

## 🧪 Testing

### Manual Testing Checklist

**Authentication:**

- [ ] Client signup works correctly
- [ ] Client login with valid credentials
- [ ] Lawyer signup with all fields
- [ ] Lawyer login functionality
- [ ] Token persistence across sessions
- [ ] Logout clears all data

**Navigation:**

- [ ] All links work correctly
- [ ] Mobile menu functions properly
- [ ] Dropdown menus display correctly
- [ ] Back/forward browser buttons work

**Forms:**

- [ ] All forms validate input
- [ ] Error messages display properly
- [ ] Success notifications appear
- [ ] Form submission works

**Responsive Design:**

- [ ] Mobile view (< 640px)
- [ ] Tablet view (768px - 1024px)
- [ ] Desktop view (> 1024px)
- [ ] All features accessible on mobile

---

## 🔍 Troubleshooting

### Common Issues

**Issue:** "Module not found" errors

```bash
Solution:
1. Delete node_modules and package-lock.json
2. Run: npm install
3. Restart dev server
```

**Issue:** Images not loading

```bash
Solution:
- Check next.config.mjs for image domains
- Verify image paths in public/ folder
- Ensure Cloudinary domain is whitelisted
```

**Issue:** API calls failing

```bash
Solution:
- Verify NEXT_PUBLIC_BACKEND_URL in .env.local
- Check backend server is running
- Verify CORS configuration on backend
- Check browser console for errors
```

**Issue:** Styles not applying

```bash
Solution:
- Restart dev server
- Clear browser cache
- Check TailwindCSS configuration
- Verify class names are correct
```

**Issue:** Build fails

```bash
Solution:
- Run: npm run lint
- Fix all linting errors
- Check for unused imports
- Verify all components are exported correctly
```

---

## 📝 Best Practices Implemented

✅ **Performance**

- Next.js Image optimization
- Code splitting and lazy loading
- Efficient re-rendering with React.memo
- Optimized bundle size

✅ **Security**

- JWT token management
- Secure localStorage handling
- XSS protection
- HTTPS enforcement in production

✅ **Code Quality**

- ESLint configuration
- Consistent code formatting
- Component reusability
- Clear file structure
- Production-ready error handling
- Clean codebase (no debug console logs)

✅ **User Experience**

- Responsive design
- Loading states
- Error handling
- Toast notifications
- Smooth animations

✅ **Accessibility**

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

---

## 🚀 Future Enhancements

### Planned Features

- [ ] Real-time chat between clients and lawyers
- [ ] Video consultation integration
- [ ] Payment gateway integration
- [ ] Advanced search and filters
- [ ] Email notifications
- [ ] SMS reminders for appointments
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA)
- [ ] Advanced analytics dashboard

### Technical Improvements

- [ ] Unit testing with Jest
- [ ] E2E testing with Playwright
- [ ] Performance monitoring
- [ ] Error tracking with Sentry
- [ ] State management with Zustand/Redux
- [ ] GraphQL API integration
- [ ] WebSocket for real-time updates

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

## 📞 Support

For support, email support@lawconnect.com or open an issue in the repository.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Material-UI](https://mui.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">

### ⭐ Star this repository if you find it helpful!

**Made with ❤️ by Priyangshu**

---

**LawConnect** - Connecting Clients with Legal Excellence

</div>
