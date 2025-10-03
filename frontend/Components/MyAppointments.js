"use client";
import React from "react";
import { Button } from "@/Components/ui/button";
import Image from "next/image";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const cancelAppointment = () => {
    toast.error("Appointment cancelled");
  };
  return (
    <div className="py-5 flex flex-col ">
      <div className="text-center py-2">
        <h1 className="text-5xl mb-4">Hiii, User.....</h1>
        <h3 className="text-3xl">My Appointments</h3>
      </div>
      <div className="sm:flex md:flex w-screen md:flex-row sm:flex-col px-5  bg-gray-100 py-3 items-center justify-evenly">
        <div className="md:w-[20%] sm:w-screen">
          <Image
            height={300}
            width={300}
            src="/doctors/aarav.png"
            className="h-60 w-full rounded-3xl object-fill"
            alt=""
          />
        </div>
        <div className="md:w-[55%] sm:w-screen  py-6 px-2">
          <h1 className="text-2xl">Doctor Name</h1>
          <h3>Speciality</h3>
          <h3 className="text-xl">Address</h3>
          <p  className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ut
            repudiandae quos? Labore fugiat quis enim laboriosam inventore?
            Beatae molestias incidunt fuga doloremque error. Perspiciatis et
            itaque iste officia temporibus!
          </p>
          <h1 className="text-xl">
            Appointment Date & time - <span>1950</span>
          </h1>
        </div>
        <div className="flex flex-col md:w-[15%] sm:w-screen py-6 gap-y-5 ">
          <Button className="text-lg">Proceed to payment</Button>
          <Button
            className="cursor-pointer text-lg"
            variant="destructive"
            onClick={cancelAppointment}
          >
            Cancel Appointment{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
