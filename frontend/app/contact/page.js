import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const page = () => {
  return (
    <>
      <div className="text-center text-3xl font-semibold mt-3">
        <h1>Contact Us</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 my-14 px-5 justify-between items-center">
        <div className="w-full md:w-1/2">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/contact.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="w-full h-auto object-cover aspect-video"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <div className="mb-8">
            <h1 className="text-xl font-semibold">Our Office</h1>
            <br />
            <p className="text-lg">
              11111 Kalna Junction Suite 111, Serampore-Uttarpara, West Bengal,
              India{"  "}
            </p>
            <p className="mb-4">
              Tel: (+91) 11111-11111 <br /> Email: workpriyangshu@gmail.com
              {"   "}
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Carrers at LawConnect</h1>
            <br />
            <p className="mb-4 text-lg">
              Learn more about our teams and job openings.
            </p>
            <button className="bg-blue-600 h-20 text-xl text-white font-semibold rounded-lg px-8">
              Explore Jobs..
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-5 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="text-blue-600" fontSize="large" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-gray-600">Mon-Fri 9am-6pm</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <EmailIcon className="text-green-600" fontSize="large" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-gray-600">24/7 Support</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <LocationOnIcon className="text-purple-600" fontSize="large" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
            <p className="text-gray-600">By Appointment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
