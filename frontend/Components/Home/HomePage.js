import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="text-center md:w-screen md:h-auto sm:w-screen sm:h-auto my-auto p-5">
        <h1 className="text-6xl">
          &quot;Your Appointment, <br />
          Your Way&quot;
        </h1>
        <p className="text-2xl mt-3">
          &quot;Your Gateway to Trusted Legal Counsel&quot;
        </p>
        <Link href="/all_lawyers">
          <button className="bg-indigo-700 cursor-pointer text-lg h-10 my-4 rounded-full md:w-[25%] px-5 text-white">
            Book Appointment{"  "}
            <DoubleArrowIcon />
          </button>
        </Link>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <video
            src="/add.mp4"
            className="w-full h-auto object-cover aspect-video"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
