"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GavelIcon from '@mui/icons-material/Gavel';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
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

    if (token && userRole === "client") {
      const fetchProfile = async () => {
        try {
          const user = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/client/profile`,
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
    if (role === "client") {
      localStorage.removeItem("token");
      localStorage.removeItem("user_role");
    }
    window.location.href = "/";
  };

  const docLogout = () => {
    if (role === "lawyer") {
      localStorage.removeItem("token");
      localStorage.removeItem("user_role");
    }
    window.location.href = "/";
  };

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-[#d4af37] w-full px-8 h-20 flex flex-row sm:justify-between md:justify-evenly items-center text-black font-semibold">
      <Link href="/" prefetch={true}>
        <div className="flex items-center justify-start ">
          <Image
            height={300}
            width={300}
            src="/logo.png"
            alt="logo"
            className="h-15 rounded-full w-15 mx-2 my-auto"
          />
          <span className="text-xl font-semibold">LawConnect</span>
        </div>
      </Link>
      <ul className="hidden sm:flex gap-4 text-lg font-semibold">
        <Link href="/" prefetch={true}>
          <li className="hover:border-b-2 hover:border-black">HOME</li>
        </Link>
        <Link href="/lawyers" prefetch={true}>
          <li className="hover:border-b-2 hover:border-black">ALL LAWYERS</li>
        </Link>
        <Link href="/about">
          <li className="hover:border-b-2 hover:border-black">ABOUT</li>
        </Link>
        <Link href="/contact">
          <li className="hover:border-b-2 hover:border-black">CONTACT</li>
        </Link>
        {role === "client" ? (
          <></>
        ) : (
          <Link href="/lawyerlogin">
            <button className="w-full bg-red-600 text-white h-9 text-center font-bold px-3 rounded-full">
              <span className="mr-1">
                <GavelIcon fontSize="large" />
              </span>
              LAWYER LOGIN
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
                    <p>MY PROFILE</p>
                  </Link>
                  <Link href={`/myappointment/${userId}`}>
                    <p>MY APPOINTMENTS</p>
                  </Link>
                  {role === "client" ? (
                    <p
                      className="bg-red-500 w-[50%] text-white rounded-4xl"
                      onClick={logout}
                    >
                      CLIENT LOGOUT
                    </p>
                  ) : (
                    <p
                      className="bg-red-500 w-[50%] text-white rounded-4xl"
                      onClick={docLogout}
                    >
                      LAWYER LOGOUT
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <button className="w-full text-white bg-green-700 h-9 text-center font-bold  hover:cursor-pointer px-3 rounded-full">
              <span className="mr-1">
                <AssignmentIndIcon fontSize="large" />
              </span>
              LOGIN
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
          <Link href="/lawyers" prefetch={true}>
            <li>All Lawyers</li>
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
                  <AssignmentIndIcon fontSize="large" />
                </span>
                Patient Login
              </button>
            </Link>
          )}
          {role === "client" ? (
            <></>
          ) : (
            <Link href="/lawyerlogin">
              <button className="w-full bg-red-600 text-white h-9 text-center font-bold px-3 rounded-full">
                <span className="mr-1">
                  <GavelIcon fontSize="large" />
                </span>
                Lawyer Login
              </button>
            </Link>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
