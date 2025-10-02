import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import LawyerContextProvider from "@/context/AppContext";
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
  title: "LawConnect",
  description:
    "At LawConnect, our first priority is delivering outstanding service. We're dedicated to making legal appointments effortless and efficient.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ToastContainer position="top-center"/>
        <Navbar />
        <LawyerContextProvider> {children}</LawyerContextProvider>
        <Footer />
      </body>
    </html>
  );
}
