"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";

const MyAppointments = () => {
  const [myappointments, setMyAppointments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      const appointmentData = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/new/myappointments`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data);
        setMyAppointments(res.data);
      };
      appointmentData();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, []);

  const cancelAppointment = async (appointmentId) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/new/appointment/delete/${appointmentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Appointment Cancelled Successfully");
        setMyAppointments((prev) =>
          prev.filter((appointment) => appointment.id !== appointmentId)
        );
      } else {
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="py-5 flex flex-col">
      <div className="text-center py-2">
        <h1 className="text-5xl mb-4">Hiii, User</h1>
        <h3 className="text-3xl">My Appointments</h3>
      </div>

      {myappointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found.</p>
      ) : (
        myappointments.map((appointment, index) => (
          <div
            key={index}
            className="sm:flex md:flex w-screen md:flex-row sm:flex-col px-5 bg-gray-100 py-3 items-center justify-evenly mb-5"
          >
            <div className="md:w-[20%] sm:w-screen">
              <Image
                priority
                height={300}
                width={300}
                src={`/doctors/${appointment.doctor?.image || "default.png"}`}
                className="h-60 w-full rounded-3xl object-fill"
                alt="Doctor"
              />
            </div>
            <div className="md:w-[55%] sm:w-screen py-6 px-2">
              <h1 className="text-2xl font-semibold">
                {appointment.doctor?.name}
              </h1>
              <h3>{appointment.doctor?.speciality}</h3>
              <h3 className="text-xl">{appointment.doctor?.address}</h3>
              <p className="text-lg">{appointment.doctor?.about}</p>
              <h1 className="text-xl mt-2">
                Appointment Date & Time -{" "}
                <span>
                  {new Date(appointment.appointment_date_time).toLocaleString()}
                </span>
              </h1>
            </div>
            <div className="flex flex-col md:w-[15%] sm:w-screen py-6 gap-y-5">
              <Button className="text-lg">Proceed to Payment</Button>
              <Button
                className="cursor-pointer text-lg"
                variant="destructive"
                onClick={() => {
                  cancelAppointment(appointment.id);
                }}
              >
                Cancel Appointment
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyAppointments;
