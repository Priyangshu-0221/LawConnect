# ⚖️ LawConnect Backend

A robust, scalable backend for the LawConnect Appointment Booking System. Built with **Node.js**, **Express**, and **Prisma ORM** (PostgreSQL), this backend provides secure RESTful APIs for user authentication, lawyer and client management, appointment scheduling, and file uploads (Cloudinary), all protected by JWT-based authentication.

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/) [![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/) [![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/) [![Multer](https://img.shields.io/badge/Multer-FFCA28?style=for-the-badge)](https://github.com/expressjs/multer) [![Bcrypt](https://img.shields.io/badge/Bcrypt-003A70?style=for-the-badge)](https://github.com/kelektiv/node.bcrypt.js/)

---

## 📁 Folder Structure

```
backend/
│   .env
│   .gitignore
│   package.json
│   README.md
│   server.js
│
├── Controller/               # Business logic for appointments, lawyers, clients
│   ├── Appointment.Controller.js
│   ├── Lawyer.Controller.js
│   └── Client.Controller.js
│
├── DATABASE/                 # Database and Cloudinary config
│   ├── cloudinary.config.js
│   └── db.config.js
│
├── generated/
│   └── prisma/               # Prisma generated client code
│
├── middlewares/              # JWT auth, file upload
│   ├── authMiddleware.js
│   └── multer.js
│
├── prisma/
│   ├── schema.prisma         # Prisma schema for DB models
│   └── migrations/           # Prisma migrations
│
└── Routes/                   # API endpoints
    ├── appointment.Route.js
    ├── lawyer.Route.js
    ├── client.Route.js
    └── index.js
```

---

## 🚀 Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Configure environment**
   - Copy `.env.example` to `.env` and set your DB, JWT, and Cloudinary credentials.
3. **Run database migrations**
   ```sh
   npx prisma migrate dev
   ```
4. **Start the server**
   ```sh
   npm run dev
   ```

---

## 🧩 Main Components

- **server.js**
  - Entry point. Sets up Express, middleware, and mounts all routes.
- **.env**
  - Environment variables for DB, JWT, Cloudinary, etc.
- **package.json**
  - Lists all dependencies and scripts.

---

## 🗂️ Controllers

- **Appointment.Controller.js:**
  - Handles appointment creation, file upload to Cloudinary, and linking appointments to lawyers and clients.
- **Lawyer.Controller.js:**
  - Handles lawyer registration, login, profile retrieval, update, and fetching all/single lawyers.
- **Client.Controller.js:**
  - Handles client registration, login, profile retrieval, update, and appointment cancellation.

---

## 🛢️ Database & ORM

- **db.config.js:**
  - Initializes and exports the Prisma client for DB operations.
- **cloudinary.config.js:**
  - Configures Cloudinary for file uploads (e.g., legal documents).
- **schema.prisma:**
  - Defines the data models: `Client`, `Lawyer`, `Appointment`, and their relations.

---

## 🛡️ Middlewares

- **authMiddleware.js:**
  - JWT authentication, attaches `userId` and `userRole` to requests.
- **multer.js:**
  - Handles multipart/form-data for file uploads.

---

## 🌐 API Routes

- **index.js:**
  - Combines all API routes and mounts them under `/api`.
- **client.Route.js:**
  - `/api/client/signup` — Client registration
  - `/api/client/login` — Client login
  - `/api/client/profile` — Get client profile (auth required)
  - `/api/client/profile/update` — Update client profile (auth required)
  - `/api/client/appointment/:id` — Cancel appointment (auth required)
- **lawyer.Route.js:**
  - `/api/lawyer/signup` — Lawyer registration
  - `/api/lawyer/login` — Lawyer login
  - `/api/lawyer/lawyerprofile` — Get lawyer profile (auth required)
  - `/api/lawyer/update` — Update lawyer profile (auth required)
  - `/api/lawyer/alllawyers` — Get all lawyers
  - `/api/lawyer/singlelawyer` — Get single lawyer by ID
  - `/api/lawyer/allappointments/:id` — Cancel appointment (auth required)
- **appointment.Route.js:**
  - `/api/new/appointment` — Book a new appointment (auth required, file upload supported)

---

## 🔒 Authentication

- Uses JWT for both lawyers and clients.
- Middleware checks token validity and user role for protected routes.

---

## 🖼️ File Uploads

- Legal documents or files can be uploaded during appointment creation.
- Files are stored in Cloudinary, and URLs are saved in the database.

---

## 📝 License

MIT

---

**Author:** Priyangshu
