"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AccessibleIcon from "@mui/icons-material/Accessible";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("user_role");
    setRole(userRole);
    setToken(token);

    if (token && userRole === "patient") {
      const fetchProfile = async () => {
        try {
          const user = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/patient/profile`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserId(user.data.id);
        } catch (err) {
          console.error("Failed to fetch user profile:", err);
        }
      };

      fetchProfile();
    }
  }, [userId, setUserId]);
  useEffect(() => {
    if (userId !== null) {
      console.log("User ID updated:", userId);
    }
  }, [userId]);

  const logout = () => {
    if (role === "patient") {
      localStorage.removeItem("token");
      localStorage.removeItem("user_role");
    }
    window.location.href = "/";
  };

  const docLogout = () => {
    if (role === "doctor") {
      localStorage.removeItem("token");
      localStorage.removeItem("user_role");
    }
    window.location.href = "/";
  };

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-[#0A2342] w-full px-8 h-20 flex flex-row justify-between items-center text-white">
      <Link href="/" prefetch={true}>
        <div className="flex items-center justify-start ">
          <Image
            height={300}
            width={300}
            src="/weblogo.png"
            alt="logo"
            className="h-15 rounded-full w-15 mx-2 my-auto"
          />
          <span className="text-xl font-semibold">BookMyDoc</span>
        </div>
      </Link>
      <ul className="hidden sm:flex gap-4 text-lg font-semibold">
        <Link href="/" prefetch={true}>
          <li>Home</li>
        </Link>
        <Link href="/doctors" prefetch={true}>
          <li>All Doctors</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        {role === "patient" ? (
          <></>
        ) : (
          <Link href="/doctorlogin">
            <button className="w-full bg-red-600 text-white h-9 text-center font-bold px-3 rounded-full">
              <span className="mr-1">
                <MedicalServicesIcon fontSize="large" />
              </span>
              Doctor Login
            </button>
          </Link>
        )}

        {token ? (
          <div>
            <div className="flex items-center cursor-pointer group relative">
              <AccountCircleIcon fontSize="large" />
              <ArrowDropDownIcon />
              <div className="text-center absolute top-0 right-0 py-14 h-[25%] w-[400px] text-base font-medium text-black z-0 hidden group-hover:block">
                <div className="w-full  bg-gray-500 back cursor-pointer text-white py-10 h-30 items-center justify-center font-medium flex flex-col gap-y-4 px-4">
                  <Link href={`/user/${userId}`}>
                    <p>My Profile</p>
                  </Link>
                  <Link href={`/myappointment/${userId}`}>
                    <p>My Appointments</p>
                  </Link>
                  {role === "patient" ? (
                    <p
                      className="bg-red-500 w-[50%] text-white rounded-4xl"
                      onClick={logout}
                    >
                      Patient Logout
                    </p>
                  ) : (
                    <p
                      className="bg-red-500 w-[50%] text-white rounded-4xl"
                      onClick={docLogout}
                    >
                      Doctor Logout
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <button className="w-full bg-green-600 h-9 text-center font-bold  hover:cursor-pointer px-3 rounded-full">
              <span className="mr-1">
                <AccessibleIcon />
              </span>
              Patient Login
            </button>
          </Link>
        )}
      </ul>
      <button
        className="sm:hidden absolute cursor-pointer right-0 top-4.5 p-2"
        onClick={handleMenu}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {open && (
        <ul
          className="flex flex-col gap-4 items-center text-lg font-semibold backdrop-blur-3xl text-black absolute top-20 right-0 w-full py-8 z-50 sm:hidden transition-all"
          onClick={() => setOpen(false)}
        >
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/doctors" prefetch={true}>
            <li>All Doctors</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          {token ? (
            <div className="w-full flex flex-col items-center justify-center text-center gap-y-2">
              <Link href={`/user/${userId}`}>
                <p>My Profile</p>
              </Link>
              <Link href={`/myappointment/${userId}`}>
                <p>My Appointments</p>
              </Link>
              {role === "patient" ? (
                <p
                  className="bg-red-500 w-[50%] text-white rounded-4xl"
                  onClick={logout}
                >
                  Patient Logout
                </p>
              ) : (
                <p
                  className="bg-red-500 w-[50%] text-white rounded-4xl"
                  onClick={docLogout}
                >
                  Doctor Logout
                </p>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="w-full bg-green-600 text-white hover:cursor-pointer h-9 text-center font-bold px-3 rounded-full">
                <span className="mr-1">
                  <AccessibleIcon fontSize="large" />
                </span>
                Patient Login
              </button>
            </Link>
          )}
          {role === "patient" ? (
            <></>
          ) : (
            <Link href="/doctorlogin">
              <button className="w-full bg-red-600 text-white h-9 text-center font-bold px-3 rounded-full">
                <span className="mr-1">
                  <MedicalServicesIcon fontSize="large" />
                </span>
                Doctor Login
              </button>
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
