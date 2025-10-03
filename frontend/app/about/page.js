import React from "react";

const page = () => {
  return (
    <div>
      <div className="text-center text-3xl font-semibold mt-3">
        <h1>About Us</h1>
        <hr />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 px-4 sm:px-6 lg:px-10 py-10 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/about.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-justify text-gray-700 text-lg space-y-4">
          <p>
            Welcome to LawConnect, your premier destination for connecting with
            trusted legal professionals. At LawConnect, we recognize the
            importance of timely legal guidance and the challenges that can come
            with finding the right lawyer.
          </p>
          <p>
            LawConnect is dedicated to simplifying your legal journey. We are
            constantly working to improve our platform with the latest
            technology to ensure a secure, intuitive, and top-tier user
            experience. Whether you&apos;re seeking advice on a specific legal
            issue or need representation, LawConnect is your reliable partner
            for all your legal needs.
          </p>
          <div>
            <h4 className="text-black text-xl font-semibold mb-2">Our Vision</h4>
            <p>
              Our vision at LawConnect is to build a world where accessing legal
              representation is simple and instantaneous for everyone. We strive
              to eliminate the barriers between individuals and legal
              professionals, ensuring you can find and connect with the right
              lawyer, right when you need them.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold">WHY CHOOSE US</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-xl px-6 py-8 text-center cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-yellow-600">
            <h1 className="mb-4 text-xl font-semibold">EFFICIENCY</h1>
            <p className="text-gray-700">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl px-6 py-8 text-center cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-yellow-600">
            <h1 className="mb-4 text-xl font-semibold">CONVENIENCE</h1>
            <p className="text-gray-700">
              Connect with a local network of experienced lawyers who can
              provide personalized support and advocacy
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl px-6 py-8 text-center cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-yellow-600">
            <h1 className="mb-4 text-xl font-semibold">PERSONALIZATION</h1>
            <p className="text-gray-700">
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
