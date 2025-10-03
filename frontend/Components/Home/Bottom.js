import Link from "next/link";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Bottom = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/bottom.mp4"
            className="w-full h-auto object-cover aspect-video"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 mb-8">
        <Link href="/signup">
          <button className="bg-indigo-700 hover:bg-indigo-800 active:scale-95 transition-all duration-200 text-xl cursor-pointer text-white h-12 w-full px-5 rounded-full shadow-lg flex items-center justify-center gap-2">
            Create Account
            <ArrowOutwardIcon />
          </button>
        </Link>
      </div>
    </>
  );
};

export default Bottom;
