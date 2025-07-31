import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="text-center text-3xl font-semibold mt-3">
        <h1>About Us</h1>
        <hr />
      </div>
      <div className="w-full sm:flex sm:flex-col md:flex md:flex-row  sm:w-screen justify-between items-center gap-5 px-10 my-10">
        <div className="text-justify md:w-[100%] mt-3 flex justify-center sm:w-[100%] ">
          <Image
            height={300}
            width={300}
            src="/about.png"
            alt="about"
            className="h-100 w-[100%]"
          />
        </div>
        <div className="text-justify text-gray-700 text-lg w-[100%] mt-3">
          <p>
            Welcome to BookMyDoc, your premier destination for booking doctor
            appointments with ease and confidence. At BookMyDoc, we recognize
            the importance of timely medical care and the difficulties that can
            come with scheduling appointments and accessing your healthcare
            information.
          </p>
          <br />
          <p>
            BookMyDoc is dedicated to simplifying your healthcare journey. We
            are constantly working to improve our platform with the latest
            technology to ensure a secure, intuitive, and top-tier user
            experience. Whether you&apos;re scheduling a routine check-up or
            seeking a specialist, BookMyDoc is your reliable partner for all
            your appointment needs.
          </p>
          <br />
          <h4 className="text-black text-center">Our Vision</h4>
          <p>
            Our vision at BookMyDoc is to build a world where booking a
            doctor&apos;s appointment is simple and instantaneous for everyone.
            We strive to eliminate the barriers between patients and doctors,
            ensuring you can find and schedule the care you need, right when you
            need it.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold">WHY CHOOSE US</h1>
        </div>
        <div className="md:flex md:flex-row items-center justify-center gap-2 px-5 sm:flex sm:flex-col sm: ">
          <div className="h-50 w-full bg-gray-300 rounded px-4 text-center cursor-pointer text-lg  hover:text-white border-1 hover:border-0 border-black hover:bg-blue-500 ">
            <h1 className="mb-5 py-5">EFFICIENCY:</h1>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="h-50 w-full bg-gray-300 rounded px-4 text-center cursor-pointer text-lg  hover:text-white border-1 hover:border-0 border-black hover:bg-blue-500 ">
            <h1 className="mb-5 py-5">CONVENIENCE:</h1>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="h-50 w-full bg-gray-300 rounded px-4 text-center cursor-pointer text-lg  hover:text-white border-1 hover:border-0 border-black hover:bg-blue-500 ">
            <h1 className="mb-5 py-5">PERSONALIZATION:</h1>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
