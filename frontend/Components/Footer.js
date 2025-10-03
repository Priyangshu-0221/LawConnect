import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#d4af37] mt-2 relative text-black rounded w-full shadow-sm dark:bg-gray-900 p-2">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              height={300}
              width={300}
              src="/logo.png"
              className="h-20 rounded-full w-20"
              alt="LawConnectlogo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              LawConnect
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                href="/about"
                className="hover:underline hover:scale-110 text-lg me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/all_lawyers"
                className="hover:underline hover:scale-110 text-lg me-4 md:me-6"
              >
                All Lawyers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:scale-110 text-lg me-4 md:me-6"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:underline hover:scale-110 text-lg"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
        <span className="block text-md text-black sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link href="/" className="hover:underline">
            LawConnect™.{" "}
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
