# 🩺 Doctor Appointment Backend

A modern, scalable backend for the Doctor Appointment Booking System. Built with **Node.js**, **Express**, and **Prisma ORM** (PostgreSQL), this backend provides secure RESTful APIs for user authentication, doctor and patient management, appointment scheduling, and file uploads (Cloudinary), all protected by JWT-based authentication.

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
├── Controller/
│   ├── Appointment.Controller.js   # Appointment business logic
│   ├── Doctor.Controller.js        # Doctor registration, login, profile, etc.
│   └── Patient.Controller.js       # Patient registration, login, profile, etc.
│
├── DATABASE/
│   ├── cloudinary.config.js        # Cloudinary file upload config
│   └── db.config.js                # Prisma client & DB connection
│
├── generated/
│   └── prisma/                     # Prisma generated client code
│
├── middlewares/
│   ├── authMiddleware.js           # JWT authentication middleware
│   └── multer.js                   # Multer config for file uploads
│
├── prisma/
│   └── schema.prisma               # Prisma DB schema
│
└── Routes/
    ├── appointment.Route.js        # Appointment API routes
    ├── doctor.Route.js             # Doctor API routes
    ├── patient.Route.js            # Patient API routes
    └── index.js                    # Main router
```

---

## 🚀 Quick Start

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Configure environment**
   - Create a `.env` file and set your PostgreSQL, JWT, and Cloudinary credentials.
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

### `server.js`
- Entry point. Sets up Express, middleware, and mounts all routes.

### `.env`
- Environment variables for DB, JWT, Cloudinary, etc.

### `package.json`
- **Dependencies:**  
  `express`, `@prisma/client`, `bcrypt`, `jsonwebtoken`, `multer`, `cloudinary`, `dotenv`, `validator`, `cors`, `cuid`
- **Dev Dependencies:**  
  `prisma`, `nodemon`
- **Scripts:**  
  - `start`: Run server  
  - `dev`: Run server with hot reload

---

## 🗂️ Controllers

- **Appointment.Controller.js:**  
  Handles appointment creation, file upload to Cloudinary, and linking appointments to doctors and patients.
- **Doctor.Controller.js:**  
  Handles doctor registration, login, profile management, update, and fetching all/single doctors.
- **Patient.Controller.js:**  
  Handles patient registration, login, profile management, update, and appointment cancellation.

---

## 🛢️ Database & ORM

- **db.config.js:**  
  Prisma client initialization.
- **cloudinary.config.js:**  
  Cloudinary setup for file uploads.
- **schema.prisma:**  
  Models for `Patient`, `Doctor`, `Appointment` and their relations.

---

## 🛡️ Middlewares

- **authMiddleware.js:**  
  JWT authentication, attaches `userId` and `userRole` to requests.
- **multer.js:**  
  Handles file uploads (e.g., prescription images).

---

## 🌐 API Routes

All routes are prefixed with `/api`.

### Patient Routes (`/api/patient`)
- `POST /signup` — Register a new patient
- `POST /login` — Patient login
- `GET /profile` — Get patient profile (JWT required)
- `PUT /profile/update` — Update patient profile (JWT required)
- `DELETE /appointment/:id` — Cancel an appointment (JWT required)

### Doctor Routes (`/api/doctor`)
- `POST /signup` — Register a new doctor
- `POST /login` — Doctor login
- `GET /doctorprofile` — Get doctor profile (JWT required)
- `PUT /update` — Update doctor profile (JWT required)
- `GET /alldoctors` — Get all doctors
- `GET /singledoctor` — Get a single doctor by ID
- `DELETE /allappointments/:id` — Cancel an appointment (JWT required)

### Appointment Routes (`/api/new`)
- `POST /appointment` — Book a new appointment (JWT required, supports file upload)

---

## 🔒 Authentication

- Uses JWT for both doctors and patients.
- Middleware validates tokens and user roles for all protected endpoints.

---

## 🖼️ File Uploads

- Prescriptions can be uploaded as files during appointment creation.
- Files are stored in Cloudinary, and URLs are saved in the database.

---

## 📝 License

MIT