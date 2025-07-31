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
          &quot;Effortless Appointments, Better Health&quot;
        </p>
        <Link href="/doctors">
          <button className="bg-blue-950 cursor-pointer text-lg h-10 my-4 rounded-full md:w-[25%] px-5 text-white">
            Book Appointment{"  "}
            <DoubleArrowIcon />
          </button>
        </Link>
      </div>
      <div className="md:w-screen md:h-180 sm:w-screen sm:h-[500px] overflow-hidden  flex justify-center items-center">
        <video
          src="veed.mp4"
          className="px-5 overflow-hidden rounded-4xl h-fit"
          autoPlay
          loop
          muted
        />
      </div>
    </>
  );
};

export default HomePage;
