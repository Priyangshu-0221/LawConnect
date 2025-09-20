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
          <video
            src="/about.mp4"
            loop
            muted
            autoPlay
            className="h-100 w-[100%]"
            alt="about"
          />
        </div>
        <div className="text-justify text-gray-700 text-lg w-[100%] mt-3">
          <p>
            Welcome to LawConnect, your premier destination for connecting with
            trusted legal professionals. At LawConnect, we recognize the
            importance of timely legal guidance and the challenges that can come
            with finding the right lawyer.
          </p>
          <br />
          <p>
            LawConnect is dedicated to simplifying your legal journey. We are
            constantly working to improve our platform with the latest
            technology to ensure a secure, intuitive, and top-tier user
            experience. Whether you&apos;re seeking advice on a specific legal
            issue or need representation, LawConnect is your reliable partner
            for all your legal needs.
          </p>
          <br />
          <h4 className="text-black text-center">Our Vision</h4>
          <p>
            Our vision at LawConnect is to build a world where accessing legal
            representation is simple and instantaneous for everyone. We strive
            to eliminate the barriers between individuals and legal
            professionals, ensuring you can find and connect with the right
            lawyer, right when you need them.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold">WHY CHOOSE US</h1>
        </div>
        <div className="md:flex md:flex-row items-center justify-center gap-2 px-5 sm:flex sm:flex-col sm: ">
          <div className="h-50 w-full md:bg-gray-300 rounded px-4 text-center cursor-pointer text-lg  hover:text-black border-1 hover:border-0 border-black hover:bg-yellow-500 ">
            <h1 className="mb-5 py-5">EFFICIENCY:</h1>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="h-50 w-full md:bg-gray-300 rounded px-4 text-center cursor-pointer text-lg  hover:text-black border-1 hover:border-0 border-black hover:bg-yellow-500 ">
            <h1 className="mb-5 py-5">CONVENIENCE:</h1>
            <p>
              Connect with a local network of experienced lawyers who can
              provide personalized support and advocacy
            </p>
          </div>
          <div className="h-50 w-full md:bg-gray-300 rounded px-4 text-center cursor-pointer text-lg  hover:text-black border-1 hover:border-0 border-black hover:bg-yellow-500 ">
            <h1 className="mb-5 py-5">PERSONALIZATION:</h1>
            <p>
              Personalized legal guidance and reminders to help you stay on top
              of your case, ensuring you receive the best possible support and
              representation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
