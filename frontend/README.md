# 🩺 BookMyDoc Frontend

A sleek, modern frontend for the BookMyDoc Doctor Appointment Booking System. Built with **Next.js**, **React**, and **Tailwind CSS**, this app offers a seamless experience for patients and doctors to manage appointments, profiles, and more.

---


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
  - Next.js
  - React
  - Tailwind CSS
  - Shadcn/ui
  - Material-UI Icons

---

## 🔗 API Integration

- Connects to the [BookMyDoc Backend](../backend/README.md) via RESTful APIs.
- All sensitive data and endpoints are managed via environment variables.

---

## 📝 License

MIT

---

**Author:** Priyangshu
