"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
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
        setMyAppointments(res.data);
      };
      appointmentData();
    } catch (error) {
      console.error("Fetch appointments error:", error);
      if (error.response) {
        toast.error(error.response.data?.message || "Failed to fetch appointments.");
      } else if (error.request) {
        toast.error("Cannot connect to server. Please check your internet connection.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
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
      console.error("Cancel appointment error:", error);
      if (error.response) {
        toast.error(error.response.data?.message || "Failed to cancel appointment.");
      } else if (error.request) {
        toast.error("Cannot connect to server. Please check your internet connection.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="py-5 flex flex-col">
      <div className="text-center py-2">
        <h1 className="text-5xl mb-4">Hiii, User</h1>
        <h3 className="text-3xl underline">My Appointments</h3>
      </div>

      {myappointments.length === 0 ? (
        <div className="flex items-center justify-center h-screen w-screen">
          <p className="text-center text-5xl text-gray-500">
            No appointments found...... 🥲🥲🥲
          </p>
        </div>
      ) : (
        <div className="border-2">
          {myappointments.map((appointment, index) => (
            <div
              key={index}
              className="sm:flex md:flex w-screen md:flex-row sm:flex-col px-5 bg-gray-100 py-3 items-center justify-evenly mb-5"
            >
              <div className="md:w-[20%] sm:w-screen">
                <Image
                  priority
                  height={300}
                  width={300}
                  src={`${appointment.lawyer?.image}` || "default.png"}
                  className="h-80 w-full rounded-3xl object-fill"
                  alt="Lawyer"
                />
              </div>
              <div className="md:w-[55%] sm:w-screen py-6 px-2">
                <h1 className="text-2xl font-semibold">
                  {appointment.lawyer?.name}
                </h1>
                <h3>{appointment.lawyer?.speciality}</h3>
                <h3 className="text-xl">{appointment.lawyer?.address.line1}</h3>
                <h3 className="text-xl">{appointment.lawyer?.address.line2}</h3>

                <h1 className="text-xl mt-2">
                  Appointment Date & Time -{" "}
                  <span>
                    {new Date(
                      appointment.appointment_date_time
                    ).toLocaleString()}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
