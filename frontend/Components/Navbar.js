"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  // Dropdown open state for desktop
  const [clientDropdownOpen, setClientDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  // Client states (original)
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null); // user_role
  const [userId, setUserId] = useState(null);

  // Lawyer states (original)
  const [lawyerToken, setLawyerToken] = useState(null);
  const [lawyerRole, setLawyerRole] = useState(null); // local stored lawyerId fallback
  const [lawyerId, setLawyerId] = useState(null); // API-provided lawyer id
  // Load localStorage and fetch profiles once on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUserRole = localStorage.getItem("user_role");

    const savedLawyerToken = localStorage.getItem("lawyer_token");
    const savedLawyerRole = localStorage.getItem("lawyer_role");

    const savedLawyerLocalId = localStorage.getItem("lawyerId");

    if (savedToken) setToken(savedToken);
    if (savedUserRole) setRole(savedUserRole);

    if (savedLawyerToken) setLawyerToken(savedLawyerToken);
    if (savedLawyerRole) setLawyerRole(savedLawyerRole);

    if (savedLawyerLocalId) setLawyerId(savedLawyerLocalId);

    // Fetch client profile if client logged in
    if (savedToken && savedUserRole === "client") {
      (async () => {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/profile`,
            { headers: { Authorization: `Bearer ${savedToken}` } }
          );
          if (res?.data?.id) setUserId(res.data.id);
        } catch (err) {
          console.error("Failed to fetch client profile:", err);
        }
      })();
    }

    // Fetch lawyer profile if lawyer logged in
    if (savedLawyerToken && savedLawyerRole === "lawyer") {
      (async () => {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lawyer/lawyerprofile`,
            { headers: { Authorization: `Bearer ${savedLawyerToken}` } }
          );
          if (res?.data?.id) setLawyerId(res.data.id);
        } catch (err) {
          console.error("Failed to fetch lawyer profile:", err);
        }
      })();
    }
  }, []); // run once
  // Debug logs (optional; preserves your earlier console behavior)
  useEffect(() => {
    if (userId !== null) console.log("User ID updated:", userId);
    if (lawyerId !== null) console.log("Lawyer ID updated:", lawyerId);
  }, [userId, lawyerId]);

  // Separate logouts
  const clientLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_role");
    localStorage.removeItem("userId");
    toast.error("User logged out");
    window.location.href="/";
    setToken(null);
    setRole(null);
    setUserId(null);
  };

  const lawyerLogout = () => {
    localStorage.removeItem("lawyer_token");
    localStorage.removeItem("lawyer_role");
    localStorage.removeItem("lawyerId");
    toast.error("Lawyer logged out");
    window.location.href="/";
    setLawyerToken(null);
    setLawyerRole(null);
    setLawyerId(null);
  };

  const handleMenu = () => setOpen((s) => !s);

  return (
    <nav className="bg-[#d4af37] w-full px-4 md:px-10 h-20 flex flex-row justify-between items-center text-black font-semibold shadow-md z-50 relative">
      <Link href="/" prefetch={true}>
        <div className="flex items-center gap-2">
          <Image
            height={48}
            width={48}
            src="/logo.png"
            alt="logo"
            className="rounded-full w-12 h-12 object-cover border-2 border-white shadow"
          />
          <span className="text-2xl font-bold tracking-tight">LawConnect</span>
        </div>
      </Link>

      {/* Desktop menu */}
      <ul className="hidden sm:flex gap-6 text-lg font-semibold items-center">
        <Link href="/" prefetch={true}>
          <li className="hover:text-[#b8860b] transition-colors duration-200 px-2 py-1 rounded">HOME</li>
        </Link>
        <Link href="/all_lawyers" prefetch={true}>
          <li className="hover:text-[#b8860b] transition-colors duration-200 px-2 py-1 rounded">ALL LAWYERS</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-[#b8860b] transition-colors duration-200 px-2 py-1 rounded">ABOUT</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-[#b8860b] transition-colors duration-200 px-2 py-1 rounded">CONTACT</li>
        </Link>

        {/* Show Lawyer Login button only when nobody is logged in as client or lawyer */}
        {!token && !lawyerToken && (
          <Link href="/lawyerlogin">
            <button className="bg-red-600 hover:bg-red-700 text-white h-9 px-4 text-center font-bold rounded-full shadow transition-colors duration-200 flex items-center gap-1">
              <GavelIcon fontSize="medium" /> Lawyer Login
            </button>
          </Link>
        )}

        {/* CLIENT dropdown: shown only when client is logged in (token + role === "client") */}
        {token && role === "client" && (
          <div
            className="flex items-center cursor-pointer relative"
            onClick={() => setClientDropdownOpen(!clientDropdownOpen)}
          >
            <AccountCircleIcon fontSize="large" />
            <ArrowDropDownIcon />
            {clientDropdownOpen && (
              <div className="text-center absolute top-12 right-0 w-56 text-base font-medium text-black z-50">
                <div className="w-full bg-white border border-gray-200 shadow-lg rounded-lg cursor-pointer text-black py-4 flex flex-col gap-y-2 px-4">
                  <Link href={`/user/${userId}`} className="hover:text-[#b8860b]">
                    <p>My Profile</p>
                  </Link>
                  <Link href={`/myappointment/${userId}`} className="hover:text-[#b8860b]">
                    <p>My Appointments</p>
                  </Link>
                  <button onClick={clientLogout} className="mt-2">
                    <p className="bg-red-500 hover:bg-red-600 w-full text-white rounded-full py-2 transition-colors">Client Logout</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        {lawyerRole === "lawyer" ? (
          <>          <button
          onClick={lawyerLogout}
            className="bg-red-600 hover:bg-red-700 text-white h-9 px-4 text-center font-bold rounded-full shadow transition-colors duration-200 flex items-center gap-1"
          >
            <GavelIcon fontSize="medium" /> Lawyer Logout
          </button>
<Link href={`/lawyer_appointment/${lawyerId}`}>            <button

className="bg-emerald-700 hover:bg-green-700 text-white h-9 px-4 text-center font-bold rounded-full shadow transition-colors duration-200 flex items-center gap-1"
>
<GavelIcon fontSize="medium" /> My Appointments
</button></Link>
            <Link href={`/lawyer/${lawyerId
            }`}>            <button

              className="bg-emerald-700 hover:bg-green-700 text-white h-9 px-4 text-center font-bold rounded-full shadow transition-colors duration-200 flex items-center gap-1"
            >
              <GavelIcon fontSize="medium" /> My Profile
            </button></Link>
          </>
        ) : <></>}

        {/* If nobody logged in but you still want a generic Login button for clients */}
        {!token && !lawyerToken && (
          <Link href="/login">
            <button className="bg-green-600 hover:bg-green-700 text-white h-9 px-4 text-center font-bold rounded-full shadow transition-colors duration-200 flex items-center gap-1">
              <AssignmentIndIcon fontSize="medium" /> Login
            </button>
          </Link>
        )}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="sm:hidden absolute cursor-pointer right-4 top-5 p-2 z-50"
        onClick={handleMenu}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul
          className="flex flex-col gap-4 items-center text-lg font-semibold bg-white/95 text-black absolute top-20 right-0 w-full py-8 z-40 sm:hidden shadow-lg border-t border-gray-200 transition-all"
          onClick={() => setOpen(false)}
        >
          <Link href="/">
            <li className="hover:text-[#b8860b]">Home</li>
          </Link>
          <Link href="/all_lawyers" prefetch={true}>
            <li className="hover:text-[#b8860b]">All Lawyers</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-[#b8860b]">About</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-[#b8860b]">Contact</li>
          </Link>

          {/* CLIENT mobile menu */}
          {token && role === "client" && (
            <div className="w-full flex flex-col items-center justify-center text-center gap-y-2">
              <Link href={`/user/${userId}`} className="hover:text-[#b8860b]">
                <p>My Profile</p>
              </Link>
              <Link href={`/myappointment/${userId}`} className="hover:text-[#b8860b]">
                <p>My Appointments</p>
              </Link>
              <p
                className="bg-red-500 hover:bg-red-600 w-full text-white rounded-full py-2 cursor-pointer transition-colors"
                onClick={clientLogout}
              >
                Client Logout
              </p>
            </div>
          )}

          {/* LAWYER mobile menu */}
{lawyerRole === "lawyer" ? (
  <>          <button
  onClick={lawyerLogout}
    className="bg-red-600 hover:bg-red-700 text-white h-9 px-4 text-center font-bold rounded-full shadow transition-colors duration-200 flex items-center gap-1"
  >
    <GavelIcon fontSize="medium" /> Lawyer Logout
  </button>
<Link href={`/lawyer_appointment/${lawyerId}`}>            <button

className="bg-emerald-700 hover:bg-green-700 text-white h-9 px-4 text-center font-bold rounded-full shadow transition-colors duration-200 flex items-center gap-1"
>
<GavelIcon fontSize="medium" /> My Appointments
</button></Link>
    <Link href={`/lawyer/${lawyerId
    }`}>            <button

      className="bg-emerald-700 hover:bg-green-700 text-white h-9 px-4 text-center font-bold rounded-full shadow transition-colors duration-200 flex items-center gap-1"
    >
      <GavelIcon fontSize="medium" /> My Profile
    </button></Link>
  </>
) : <></>}

          {/* Not logged in: show login buttons */}
          {!token && !lawyerToken && (
            <>
              <Link href="/login">
                <button className="bg-green-600 hover:bg-green-700 text-white h-9 px-4 text-center font-bold rounded-full shadow flex items-center gap-1">
                  <AssignmentIndIcon fontSize="medium" /> Login
                </button>
              </Link>

              <Link href="/lawyerlogin">
                <button className="bg-red-600 hover:bg-red-700 text-white h-9 px-4 text-center font-bold rounded-full shadow flex items-center gap-1">
                  <GavelIcon fontSize="medium" /> Lawyer Login
                </button>
              </Link>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
