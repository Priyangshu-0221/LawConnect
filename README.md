# 🩺 BookMyDoc — Doctor Appointment Booking System

**BookMyDoc** is a full-stack, modern web application designed to streamline the process of finding and booking appointments with trusted doctors. The project features a robust backend built with [**Node.js**](https://nodejs.org/), [**Express**](https://expressjs.com/), and [**Prisma ORM**](https://www.prisma.io/) ([**PostgreSQL**](https://www.postgresql.org/)), and a responsive frontend powered by [**Next.js**](https://nextjs.org/), [**React**](https://react.dev/), and [**Tailwind CSS**](https://tailwindcss.com/).
[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![Shadcn/ui](https://img.shields.io/badge/Shadcn%2Fui-111827?style=for-the-badge)](https://ui.shadcn.com/) [![Material-UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/) [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/) [![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/) [![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/) [![Multer](https://img.shields.io/badge/Multer-FFCA28?style=for-the-badge)](https://github.com/expressjs/multer) [![Bcrypt](https://img.shields.io/badge/Bcrypt-003A70?style=for-the-badge)](https://github.com/kelektiv/node.bcrypt.js/)

---

## 📊 Application Flowchart

![Application Flowchart](/frontend/public/Untitled%20diagram%20_%20Mermaid%20Chart-2025-07-30-144135.png)

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture & Folder Structure](#architecture--folder-structure)
- [Backend Overview](#backend-overview)
- [Frontend Overview](#frontend-overview)
- [Getting Started](#getting-started)
- [License](#license)
- [Author](#author)

---

## ✨ Features

- **User Authentication:** Secure sign-up and login for patients and doctors (JWT-based).
- **Doctor Portal:** Dedicated dashboard and management for doctors.
- **Find Doctors:** Browse and filter doctors by specialty.
- **Book Appointments:** Patients can book appointments and upload prescriptions.
- **Patient Dashboard:** View and manage appointments.
- **Doctor Dashboard:** Manage appointments and view patient details.
- **File Uploads:** Prescription images stored securely via Cloudinary.
- **Responsive UI:** Fully optimized for desktop and mobile.
- **Modern UI/UX:** Built with Tailwind CSS, Shadcn/ui, and Material-UI Icons.

---

## 🚀 Tech Stack

### **Frontend**

- [Next.js](https://nextjs.org/) — React framework for SSR and routing
- [React](https://react.dev/) — Component-based UI library
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) — Modern UI components
- [Material-UI Icons](https://mui.com/material-ui/material-icons/) — Iconography

### **Backend**

- [Node.js](https://nodejs.org/) — JavaScript runtime
- [Express](https://expressjs.com/) — Web framework for Node.js
- [Prisma ORM](https://www.prisma.io/) — Type-safe database ORM
- [PostgreSQL](https://www.postgresql.org/) — Relational database
- [Cloudinary](https://cloudinary.com/) — File and image storage
- [JWT](https://jwt.io/) — Secure authentication
- [Multer](https://github.com/expressjs/multer) — File upload middleware
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/) — Password hashing

---

## 🗂️ Architecture & Folder Structure

```
Doctor/
│
├── backend/
│   ├── Controller/           # Business logic for appointments, doctors, patients
│   ├── DATABASE/             # Prisma & Cloudinary config
│   ├── generated/            # Prisma generated client
│   ├── middlewares/          # JWT auth, file upload
│   ├── prisma/               # Prisma schema
│   ├── Routes/               # API endpoints
│   ├── server.js             # Express server entry
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── app/                  # Next.js app directory (routing, layouts)
│   ├── components/           # Reusable React components
│   ├── lib/                  # API utilities, helpers
│   ├── hooks/                # Custom React hooks
│   ├── public/               # Static assets
│   ├── styles/               # Tailwind and custom styles
│   ├── package.json
│   └── .env.local
│
└── README.md                 # Project overview (this file)
```

---

## 🛠️ Backend Overview

- **API:** RESTful endpoints for authentication, doctor/patient management, and appointments.
- **Authentication:** JWT-based for both doctors and patients.
- **Database:** PostgreSQL managed via Prisma ORM.
- **File Uploads:** Prescription images uploaded to Cloudinary.
- **Security:** Passwords hashed with Bcrypt, environment variables for secrets.
- **Key Routes:**
  - `/api/patient/signup`, `/api/patient/login`, `/api/patient/profile`
  - `/api/doctor/signup`, `/api/doctor/login`, `/api/doctor/doctorprofile`
  - `/api/new/appointment` (with file upload)

---

## 🎨 Frontend Overview

- **Framework:** Next.js for SSR, routing, and performance.
- **UI:** Built with React, styled using Tailwind CSS and Shadcn/ui.
- **Features:**
  - Authentication flows for patients and doctors
  - Doctor search and filtering by specialty
  - Appointment booking with prescription upload
  - Dashboards for patients and doctors
  - Responsive layouts for all devices
- **API Integration:** Communicates with backend via RESTful APIs.

---

## ⚡ Getting Started

### 1. **Clone the Repository**

```sh
git clone https://your-repo-url/BookMyDoc.git
cd BookMyDoc
```

### 2. **Backend Setup**

```sh
cd backend
npm install
# Configure .env with your DB, JWT, and Cloudinary credentials
npx prisma migrate dev
npm run dev
```

### 3. **Frontend Setup**

```sh
cd ../frontend
npm install
# Configure .env.local with your API endpoints
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📝 License

MIT

---

## 👤Author

PRIYANGSHU MONDAL

---
