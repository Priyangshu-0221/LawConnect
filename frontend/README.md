# 🩺 BookMyDoc Frontend

A sleek, modern frontend for the BookMyDoc Doctor Appointment Booking System. Built with **Next.js**, **React**, and **Tailwind CSS**, this app delivers a seamless experience for patients and doctors to manage appointments, profiles, and more.

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/) [![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![Shadcn/ui](https://img.shields.io/badge/Shadcn%2Fui-111827?style=for-the-badge)](https://ui.shadcn.com/) [![Material-UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)

## 📁 Folder Structure

```
frontend/
│   .env.local
│   .gitignore
│   package.json
│   README.md
│   next.config.js
│   tailwind.config.js
│
├── app/                       # Next.js app directory (pages, layouts, routing)
│
├── components/                # Reusable React components (forms, cards, navbars, etc.)
│
├── lib/                       # Utility functions, API helpers
│
├── public/                    # Static assets (images, favicon, etc.)
│
├── styles/                    # Global and component-specific styles
│
└── hooks/                     # Custom React hooks
```

---

## 🚀 Quick Start

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Configure environment**
   - Copy `.env.example` to `.env.local` and set your API endpoints and secrets.
3. **Run the development server**
   ```sh
   npm run dev
   ```
4. **Open your browser**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## 🧩 Main Components

- **app/**  
  Next.js routing, layouts, and pages.
- **components/**  
  UI elements: forms, doctor cards, dashboards, navigation, etc.
- **lib/**  
  API utilities, fetchers, and helpers.
- **hooks/**  
  Custom React hooks for authentication, data fetching, etc.
- **styles/**  
  Tailwind CSS and custom styles.
- **public/**  
  Images, icons, and static files.

---

## 🌟 Features

- **User Authentication:**  
  Secure sign-up and login for patients and doctors.
- **Doctor Portal:**  
  Dedicated login and dashboard for doctors.
- **Find Doctors:**  
  Browse and filter doctors by specialty.
- **Book Appointments:**  
  Intuitive form for booking, including prescription upload.
- **Patient Dashboard:**  
  View and manage your appointments.
- **Responsive Design:**  
  Fully optimized for desktop and mobile.
- **Modern UI:**  
  Built with Tailwind CSS, Shadcn/ui, and Material-UI Icons.

---

## 🛠️ Tech Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/)
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Shadcn/ui](https://ui.shadcn.com/)
  - [Material-UI Icons](https://mui.com/material-ui/material-icons/)

---

## 🌐 Frontend Routes

Below are the main routes and their purposes. All routes are managed via the Next.js `app/` directory.

### **Public Routes**
- `/`  
  Home page with landing info and navigation.
- `/login`  
  Unified login page for patients and doctors.
- `/register`  
  Unified registration page for new users.
- `/doctors`  
  Browse and filter doctors by specialty, location, etc.
- `/about`  
  Information about BookMyDoc and its features.
- `/contact`  
  Contact form and support info.

### **Patient Routes**
- `/patient/dashboard`  
  Patient dashboard with upcoming and past appointments.
- `/patient/profile`  
  View and update patient profile.
- `/patient/appointments`  
  List, view, and manage patient appointments.
- `/patient/appointments/book`  
  Book a new appointment (with prescription upload).

### **Doctor Routes**
- `/doctor/dashboard`  
  Doctor dashboard with appointment management.
- `/doctor/profile`  
  View and update doctor profile.
- `/doctor/appointments`  
  List and manage all appointments for the doctor.
- `/doctor/patients`  
  View patient details and appointment history.

### **Other/Utility Routes**
- `/logout`  
  Ends the user session and redirects to home/login.
- `/404`  
  Custom not found page.

> **Note:**  
> All protected routes use authentication guards (middleware or hooks) to ensure only authorized users can access dashboards and sensitive data.

---

## 🔗 API Integration

- Connects to the [BookMyDoc Backend](../backend/README.md) via RESTful APIs.
- All sensitive data and endpoints are managed via environment variables.
- Uses custom React hooks and utility functions in `/lib` and `/hooks` for API calls and authentication.

---

## 📝 License

MIT

