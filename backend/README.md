# Doctor Appointment Backend

This is the backend for the Doctor Appointment Booking System. It is built with **Node.js**, **Express**, and **Prisma ORM** for PostgreSQL. The backend provides RESTful APIs for user authentication, doctor and patient management, and appointment scheduling, with support for file uploads and JWT-based authentication.

---

## Folder Structure

```
backend/
│   .env
│   .gitignore
│   package.json
│   README.md
│   server.js
│
├── Controller/
│   ├── Appointment.Controller.js   # Appointment-related business logic
│   ├── Doctor.Controller.js        # Doctor registration, login, profile, etc.
│   └── Patient.Controller.js       # Patient registration, login, profile, etc.
│
├── DATABASE/
│   ├── cloudinary.config.js        # Cloudinary setup for file uploads
│   └── db.config.js                # Prisma client and DB connection
│
├── generated/
│   └── prisma/                     # Prisma generated client code
│
├── middlewares/
│   ├── authMiddleware.js           # JWT authentication middleware
│   └── multer.js                   # Multer config for file uploads
│
├── prisma/
│   └── schema.prisma               # Prisma schema for DB models
│
└── Routes/
    ├── appointment.Route.js        # Appointment API routes
    ├── doctor.Route.js             # Doctor API routes
    ├── patient.Route.js            # Patient API routes
    └── index.js                    # Main router combining all routes
```

---

## Main Files and Their Purpose

### `server.js`
- Entry point of the backend server.
- Sets up Express, middleware, and mounts API routes.

### `.env`
- Stores environment variables (DB connection, JWT secret, Cloudinary keys, etc.).

### `package.json`
- Lists all dependencies and scripts:
  - **Dependencies:** `express`, `@prisma/client`, `bcrypt`, `jsonwebtoken`, `multer`, `cloudinary`, `dotenv`, `validator`, `cors`, `cuid`
  - **Dev Dependencies:** `prisma`, `nodemon`
  - **Scripts:**
    - `start`: Runs the server.
    - `dev`: Runs the server with `nodemon` for development.

---

## Controllers

- **Controller/Appointment.Controller.js:**
  - Handles appointment creation, file upload to Cloudinary, and linking appointments to doctors and patients.
- **Controller/Doctor.Controller.js:**
  - Handles doctor registration, login, profile retrieval, update, and fetching all/single doctors.
- **Controller/Patient.Controller.js:**
  - Handles patient registration, login, profile retrieval, update, and appointment cancellation.

---

## Database & ORM

- **DATABASE/db.config.js:**
  - Initializes and exports the Prisma client for DB operations.
- **DATABASE/cloudinary.config.js:**
  - Configures Cloudinary for file uploads (e.g., prescriptions).
- **prisma/schema.prisma:**
  - Defines the data models: `Patient`, `Doctor`, `Appointment`, and their relations.

---

## Middlewares

- **middlewares/authMiddleware.js:**
  - Protects routes using JWT authentication, attaches `userId` and `userRole` to requests.
- **middlewares/multer.js:**
  - Handles multipart/form-data for file uploads (e.g., prescription images).

---

## Routes

- **Routes/index.js:**
  - Combines all API routes and mounts them under `/api`.
- **Routes/patient.Route.js:**
  - `/api/patient/signup` - Patient registration
  - `/api/patient/login` - Patient login
  - `/api/patient/profile` - Get patient profile (auth required)
  - `/api/patient/profile/update` - Update patient profile (auth required)
  - `/api/patient/appointment/:id` - Cancel appointment (auth required)
- **Routes/doctor.Route.js:**
  - `/api/doctor/signup` - Doctor registration
  - `/api/doctor/login` - Doctor login
  - `/api/doctor/doctorprofile` - Get doctor profile (auth required)
  - `/api/doctor/update` - Update doctor profile (auth required)
  - `/api/doctor/alldoctors` - Get all doctors
  - `/api/doctor/singledoctor` - Get single doctor by ID
  - `/api/doctor/allappointments/:id` - Cancel appointment (auth required)
- **Routes/appointment.Route.js:**
  - `/api/new/appointment` - Book a new appointment (auth required, file upload supported)

---

## Authentication

- Uses JWT for both doctors and patients.
- Middleware checks token validity and user role for protected routes.

---

## File Uploads

- Prescriptions can be uploaded as files during appointment creation.
- Files are stored in Cloudinary, and URLs are saved in the database.

---

## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up your `.env` file with DB, JWT, and Cloudinary credentials.
3. Run database migrations with Prisma:
   ```sh
   npx prisma migrate dev
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

---

## License

MIT

---

**Author:**