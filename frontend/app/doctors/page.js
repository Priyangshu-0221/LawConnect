"use client";
import React, { useContext, useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [token, settoken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    settoken(token);
  }, []);

  const { doctors, allDoctors } = useContext(AppContext);
  useEffect(() => {
    allDoctors();
  }, []);
  console.log(doctors);
  return (
    <>
      <div className="text-center underline md:w-screen md:h-auto my-8">
        <h1 className="text-4xl">Connect with the Best Doctors</h1>
      </div>
      <div className="md:flex md:flex-row sm:flex sm:flex-col sm:w-screen gap-5 md:w-screen px-2">
        <div className="md:w-[35%] md:flex md:flex-col sm:w-full gap-y-3 cursor-pointer h-fit">
          <h1 className="text-2xl  text-center bg-black text-white">
            Browse by speciality
          </h1>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  mt-2 rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/doctors/dermatologist" prefetch={true}>
              <p>
                Dermatologist <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/doctors/neurologist" prefetch={true}>
              <p>
                Neurologist <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/doctors/cardiologist" prefetch={true}>
              <p>
                Gastroenterologist <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/doctors/pediatrician" prefetch={true}>
              <p>
                Pediatrician <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/doctors/cardiologist" prefetch={true}>
              <p>
                Cardiologist <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
        </div>
        <div className="md:grid md:w-[65%] sm:w-screen md:grid-cols-4  justify-evenly items-center md:gap-3 sm:flex sm:flex-col my-4">
          {doctors.map((doctor) => {
            return (
              <div
                key={doctor.id}
                className="w-full bg-blue-900 rounded-4xl py-3 my-3 cursor-pointer hover:scale-105"
              >
                <Image
                  height={300}
                  width={300}
                  src={`/doctors/${doctor.image}`}
                  priority
                  alt={doctor.name}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                  className="h-70 object-cover w-full rounded-2xl"
                />
                <div className="text-center mt-2 rounded-2xl text-white font-medium text-lg">
                  <p className="bg-green-500">
                    <AccessTimeFilledIcon /> Available
                  </p>
                  <h1>{doctor.name}</h1>
                  <p>{doctor.experience} </p>
                  <p>{doctor.speciality}</p>
                  {token ? (
                    <Link href={`/appointment/${doctor.id}`}>
                      <button className="bg-[#ff0054] text-white w-fit px-2 rounded-full cursor-pointer active:bg-amber-50">
                        Book Appointment
                      </button>
                    </Link>
                  ) : (
                    <Link href="/login" prefetch={true}>
                      <button className="bg-[#FF0054] text-white w-fit px-2 rounded-full cursor-pointer active:bg-amber-50 ">
                        Book Appointment
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
