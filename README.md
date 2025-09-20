# ⚖️ LawConnect — Appointment Booking Platform

LawConnect is a comprehensive, production-ready web platform that connects users with qualified lawyers for legal consultations and case management. The system is designed to simplify the process of searching, filtering, and booking appointments with legal professionals, while providing a secure, user-friendly experience for both clients and lawyers.

## 📝 Project Purpose & Vision

LawConnect aims to:

- **Democratize access to legal services** by making it easy for anyone to find and consult with the right lawyer for their needs.
- **Digitize appointment management** for law firms and independent lawyers, reducing administrative overhead and missed opportunities.
- **Provide a seamless, modern user experience** for both clients and legal professionals, with robust authentication, document management, and real-time updates.

## 👥 User Roles & Flows

### 1. Clients (Users)

- Register and log in securely (JWT-based authentication)
- Search and filter lawyers by speciality, location, or name
- View detailed lawyer profiles, including experience, specializations, and ratings
- Book appointments with lawyers, selecting available time slots
- Upload legal documents or case files securely (Cloudinary integration)
- Manage and view upcoming or past appointments in a personal dashboard

### 2. Lawyers

- Register and log in securely
- Create and manage a public profile (bio, specializations, experience, profile image)
- Set available time slots for appointments
- View and manage all client appointments
- Download/view client-uploaded documents
- Update appointment status (confirmed, completed, cancelled)

### 3. Admin (optional, extensible)

- Monitor platform activity
- Approve or verify lawyer registrations
- Manage users and content

## 🏢 Business Logic & Real-World Use Cases

- **Legal Consultation Marketplace:** LawConnect can be used by law firms, legal startups, or independent lawyers to offer their services online, expanding their reach and improving client acquisition.
- **Case Management:** Lawyers can use the platform to keep track of client appointments, manage case files, and communicate securely with clients.
- **Document Handling:** Secure upload and storage of sensitive legal documents, with access controls for both parties.
- **Notifications & Reminders:** (Extensible) Email or SMS reminders for upcoming appointments, reducing no-shows.
- **Review & Rating System:** (Extensible) Clients can rate and review lawyers after appointments, helping others make informed choices.

## 🔒 Security & Privacy

- All sensitive data (passwords, JWT secrets, API keys) is stored in environment variables and never exposed in the codebase.
- Passwords are hashed using Bcrypt before storage.
- JWT tokens are used for stateless, secure authentication.
- File uploads are handled via Multer and stored in Cloudinary, with strict validation and access control.

## 🌐 Technology Highlights

- **Backend:** Node.js, Express, Prisma ORM, PostgreSQL, JWT, Multer, Cloudinary, Bcrypt
- **Frontend:** Next.js, React, Tailwind CSS, Shadcn/ui, Material-UI Icons
- **API:** RESTful, with clear separation of concerns and modular controllers/routes
- **DevOps Ready:** Easily deployable to cloud platforms (Vercel, Heroku, AWS, etc.)

---

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/) [![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/) [![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

---

# 📸 Screenshots

Below are some screenshots of the LawConnect platform in action:

<table>
  <tr>
    <td align="center">
      <img src="/frontend/public/ss/localhost_3000-LawConnect-fpscreenshot.png" alt="Home Page" width="300"/>
      <br/><b>Home Page</b>
    </td>
    <td align="center">
      <img src="/frontend/public/ss/localhost_3000-LawConnect-fpscreenshot (1).png" alt="Screenshot 1" width="300"/>
      <br/><b>Lawyer List</b>
    </td>
    <td align="center">
      <img src="/frontend/public/ss/localhost_3000-LawConnect-fpscreenshot (2).png" alt="Screenshot 2" width="300"/>
      <br/><b>Appointment Booking</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="/frontend/public/ss/localhost_3000-LawConnect-fpscreenshot (3).png" alt="Screenshot 3" width="300"/>
      <br/><b>About Us</b>
    </td>
    <td align="center">
      <img src="/frontend/public/ss/localhost_3000-LawConnect-fpscreenshot (4).png" alt="Screenshot 4" width="300"/>
      <br/><b>Contact</b>
    </td>
    <td></td>
  </tr>
</table>

---

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

- **Lawyer Directory & Speciality Filtering:**
  - Browse and filter lawyers by speciality (e.g., Criminal Law, Civil Litigation, Corporate Law, etc.) using dynamic routes and context.
- **Lawyer Profile Images:**
  - Each lawyer has a profile image, with robust fallback handling for missing images.
- **Book Appointments:**
  - Authenticated users can book appointments with lawyers directly from their profile cards or the appointment form.
- **Authentication:**
  - Secure sign-up and login for users (JWT-based).
- **User Dashboard:**
  - View and manage your appointments.
- **Modern UI/UX:**
  - Built with Tailwind CSS, Shadcn/ui, Material-UI Icons, and custom components.
  - Responsive design for all devices.
- **File Uploads:**
  - Legal documents or files can be uploaded during appointment creation and are stored in Cloudinary.

---

## 🚀 Tech Stack

### **Frontend**

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Material-UI Icons](https://mui.com/material-ui/material-icons/)

### **Backend**

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Cloudinary](https://cloudinary.com/)
- [JWT](https://jwt.io/)
- [Multer](https://github.com/expressjs/multer)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js/)

---

## 🗂️ Architecture & Folder Structure

```
LawConnect/
│
├── backend/
│   ├── Controller/           # Business logic for appointments, lawyers, clients
│   ├── DATABASE/             # Prisma & Cloudinary config
│   ├── generated/            # Prisma generated client
│   ├── middlewares/          # JWT auth, file upload
│   ├── prisma/               # Prisma schema & migrations
│   ├── Routes/               # API endpoints
│   ├── server.js             # Express server entry
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── app/                  # Next.js app directory (routing, layouts, pages, dynamic routes)
│   ├── Components/           # Reusable React components
│   ├── context/              # React context for global state
│   ├── lib/                  # API utilities, helpers
│   ├── public/               # Static assets (images, lawyer images, favicon, etc.)
│   ├── styles/               # Tailwind and custom styles
│   ├── hooks/                # Custom React hooks
│   ├── package.json
│   └── .env.local
│
└── README.md                 # Project overview (this file)
```

---

## 🛠️ Backend Overview

- **API:** RESTful endpoints for authentication, lawyer/client management, and appointments.
- **Authentication:** JWT-based for both lawyers and clients.
- **Database:** PostgreSQL managed via Prisma ORM.
- **File Uploads:** Legal documents uploaded to Cloudinary.
- **Security:** Passwords hashed with Bcrypt, environment variables for secrets.
- **Key Routes:**
  - `/api/client/signup`, `/api/client/login`, `/api/client/profile`
  - `/api/lawyer/signup`, `/api/lawyer/login`, `/api/lawyer/lawyerprofile`
  - `/api/new/appointment` (with file upload)

---

## 🎨 Frontend Overview

- **Framework:** Next.js for SSR, routing, and performance.
- **UI:** Built with React, styled using Tailwind CSS and Shadcn/ui.
- **Features:**
  - Authentication flows for users
  - Lawyer search and filtering by speciality
  - Appointment booking with document upload
  - Dashboards for users
  - Responsive layouts for all devices
- **API Integration:** Communicates with backend via RESTful APIs.

---

## ⚡ Getting Started

### 1. **Clone the Repository**

```sh
git clone https://your-repo-url/LawConnect.git
cd LawConnect
```

---

### 2. **Backend Setup & Details**

The backend is located in the `backend/` directory and is built with Node.js, Express, Prisma ORM, and PostgreSQL. It provides all RESTful APIs for authentication, lawyer/client management, and appointment handling.

- **Install dependencies:**
  ```sh
  cd backend
  npm install
  ```
- **Configure environment:**
  - Create a `.env` file in `backend/` with your PostgreSQL connection string, JWT secret, and Cloudinary credentials. Example:
    ```env
    DATABASE_URL=postgresql://user:password@localhost:5432/lawconnect
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```
- **Database setup:**
  - Run Prisma migrations to set up the database schema:
    ```sh
    npx prisma migrate dev
    ```
- **Start the backend server:**
  ```sh
  npm run dev
  ```
- **Key Features:**
  - Modular controllers for lawyers, clients, and appointments
  - JWT authentication middleware
  - Multer for file uploads, Cloudinary for storage
  - Prisma ORM for type-safe database access
  - Organized route structure under `Routes/`

---

### 3. **Frontend Setup & Details**

The frontend is located in the `frontend/` directory and is built with Next.js, React, Tailwind CSS, and Shadcn/ui. It provides all user interfaces, authentication flows, dashboards, and appointment booking features.

- **Install dependencies:**
  ```sh
  cd ../frontend
  npm install
  ```
- **Configure environment:**
  - Create a `.env.local` file in `frontend/` with your backend API endpoint. Example:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000
    ```
- **Start the frontend server:**
  ```sh
  npm run dev
  ```
- **Key Features:**
  - Next.js app directory structure for routing and layouts
  - Context-based state management for authentication and user data
  - Dynamic lawyer search and filtering by speciality
  - Responsive UI with Tailwind CSS and Shadcn/ui components
  - File/document upload integration for appointments
  - User and lawyer dashboards for managing appointments

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📝 License

MIT

---

## 👤 Author

Priyangshu
