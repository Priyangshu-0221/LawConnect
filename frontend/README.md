# ⚖️ LawConnect Frontend

A modern, lawyer-focused frontend for the LawConnect Appointment Booking System. Built with **Next.js**, **React**, and **Tailwind CSS**, this app lets users browse, filter, and book appointments with lawyers by speciality, with a seamless and responsive UI.

[![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn%2Fui-111827?style=for-the-badge)](https://ui.shadcn.com/)
[![Material-UI](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)

---

## � Application Flowchart

![Application Flowchart](public/Untitled%20diagram%20_%20Mermaid%20Chart-2025-07-30-144135.png)

---

## �📁 Folder Structure

```
frontend/
│   .env.local
│   .gitignore
│   package.json
│   README.md
│   next.config.js
│   tailwind.config.js
│
├── app/                       # Next.js app directory (routing, layouts, pages, dynamic routes)
│   ├── lawyers/               # Dynamic lawyer speciality pages ([speciality]/page.js)
│   ├── appointment/           # Appointment booking pages
│   ├── myappointment/         # User's appointment dashboard
│   ├── login/                 # Login page
│   ├── register/              # Registration page
│   ├── about/                 # About page
│   ├── contact/               # Contact page
│   └── ...                    # Other Next.js routes
│
├── Components/                # Reusable React components
│   ├── Home/                  # Home page and speciality UI
│   ├── ui/                    # UI widgets (card-carousel, badge, etc.)
│   ├── AppointmentFrom.js     # Appointment booking form
│   ├── Navbar.js              # Navigation bar
│   └── ...                    # Other UI components
│
├── context/                   # React context for global state (AppContext.js)
├── lib/                       # Utility functions, API helpers
├── public/                    # Static assets (images, lawyer images, favicon, etc.)
│   ├── lawyer/                # Lawyer profile images
│   └── ...                    # Other static files
├── styles/                    # Global and component-specific styles
└── hooks/                     # Custom React hooks
```

---

## 🚀 Getting Started

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

## 🧩 Key Features & Components

- **Lawyer Directory & Speciality Filtering:**
  - Browse and filter lawyers by speciality (e.g., Criminal Law, Civil Litigation, Corporate Law, etc.) using dynamic routes and context.
  - `/lawyers` and `/lawyers/[speciality]` for listing and filtering.
- **Lawyer Profile Images:**
  - Each lawyer has a profile image, with robust fallback handling for missing images.
- **Book Appointments:**
  - Authenticated users can book appointments with lawyers directly from their profile cards or the appointment form.
  - `/appointment/[lawyerId]` for booking.
- **Authentication:**
  - Secure sign-up and login for users.
  - `/login` and `/register` routes.
- **User Dashboard:**
  - `/myappointment` for viewing and managing user appointments.
- **Modern UI/UX:**
  - Built with Tailwind CSS, Shadcn/ui, Material-UI Icons, and custom components.
  - Responsive design for all devices.
- **Reusable Components:**
  - Carousels, cards, forms, navigation, and more in `/Components`.
- **Context API:**
  - Global state management for lawyers, appointments, and authentication in `/context/AppContext.js`.
- **API Integration:**

  - Uses custom hooks and utilities in `/lib` and `/hooks` for API calls and authentication.

- **Review System:**
  - Users can submit reviews for lawyers after appointments using a dedicated review form component.
  - All reviews for a lawyer are displayed on their profile page, with ratings and feedback.
- **Dynamic Lawyer Carousel:**
  - The homepage features a modern, interactive carousel (`card-carousel.jsx`) to showcase lawyers with images, specialities, and availability.
- **User Dashboard:**
  - `/user/[userId]` route provides a personalized dashboard for users, displaying their profile and relevant data.

## 🌐 Main Frontend Routes

- `/` — Home page
- `/lawyers` — All lawyers
- `/lawyers/[speciality]` — Filtered lawyers by speciality
- `/appointment/[lawyerId]` — Book appointment with a lawyer
- `/myappointment` — User's appointment dashboard
- `/login` — Login
- `/register` — Register
- `/about` — About LawConnect
- `/contact` — Contact/support
- `/404` — Custom not found page

> **Note:**
> All protected routes use authentication guards (middleware or hooks) to ensure only authorized users can access dashboards and sensitive data.

---

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Material-UI Icons](https://mui.com/material-ui/material-icons/)

---

## 🔗 API Integration

- Connects to the [LawConnect Backend](../backend/README.md) via RESTful APIs.
- All sensitive data and endpoints are managed via environment variables.
- Uses custom React hooks and utility functions in `/lib` and `/hooks` for API calls and authentication.

---

## 📝 License

MIT

---

**Author:** Priyangshu
