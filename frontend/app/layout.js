import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import DoctorContextProvider from "@/context/AppContext";
import { ToastContainer, toast } from "react-toastify";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookMyDoc",
  description:
    "At BookMyDoc, our first priority is delivering outstanding service. We're dedicated to making healthcare appointments effortless and efficient.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ToastContainer />
        <Navbar />
        <DoctorContextProvider> {children}</DoctorContextProvider>
        <Footer />
      </body>
    </html>
  );
}
