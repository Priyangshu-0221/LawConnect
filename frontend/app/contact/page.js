import React from "react";

const page = () => {
  return (
    <>
      <div className="text-center text-3xl font-semibold mt-3">
        <h1>Contact Us</h1>
      </div>
      <div className="w-full sm:flex sm:flex-col gap-4 my-14 px-5 md:flex md:flex-row  sm:w-screen justify-between items-center">
        <div className="w-full sm:w-[100%] flex items-center justify-center h-[50%] my-2 ">
          <video
            src="contact.mp4"
            loop
            muted
            autoPlay
            className="w-[90%] rounded-3xl sm:h-fit md:h-100 relative"
            alt=""
          />
        </div>
        <div className="w-[100%] h-[50%] text-center ">
          <div>
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
            <button className="bg-blue-600 h-20 text-xl text-white font-semibold items rounded-lg w-50">
              Explore Jobs..
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
