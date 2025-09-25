"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import AppointmentFrom from "@/Components/AppointmentFrom";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import ReviewComponent from "@/Components/ReviewComponent";
import ReviewFrom from "@/Components/ReviewFrom";

const Page = () => {
  const params = useParams();
  const lawyerId = params.lawyer;
  console.log(lawyerId);
  const [userId, setUserId] = useState(null);
  const [lawInfo, setlawInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);
  const [bookAppointment, setbookAppointment] = useState(false);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");
    setUsername(username);
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (!lawyerId) {
      setIsLoading(false);
      return;
    }
    const fetchlawyer = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lawyer/singlelawyer?id=${lawyerId}`
        );
        // Axios wraps the response data in a `data` property
        console.log(response);
        setlawInfo(response.data);
      } catch (err) {
        console.error("Failed to fetch lawyer info:", err);
        setError("Could not load lawyer details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchlawyer();
  }, [lawyerId]);

  if (isLoading) {
    return <p className="text-center p-10">Loading lawyer information...</p>;
  }
  if (error) {
    return <p className="text-center text-red-500 p-10">{error}</p>;
  }
  if (!lawInfo) {
    return <p className="text-center p-10">lawyer not found.</p>;
  }

  return (
    <>
      <div>
        <div className="md:flex md:flex-row sm:flex sm:flex-col px-4 py-3 items-center justify-center gap-x-5 md:w-screen sm:w-screen">
          <div className="md:w-[30%] sm:w-full">
            <Image
              height={300}
              width={300}
              src={`${lawInfo.image}`}
              priority
              className="h-200 py-2 w-full object-cover rounded-4xl"
              alt={lawInfo.name} // And so will this
            />
          </div>
          <div className="bg-[#3e342e] text-white text-center h-auto md:w-[70%] sm:w-screen py-5 px-5 rounded-xl">
            <h1 className="text-6xl mb-4">
              {lawInfo.name}
              <span className="text-yellow-400 ml-2">
                <VerifiedIcon fontSize="large" />
              </span>
            </h1>

            <h2 className="text-3xl">{lawInfo.speciality}</h2>
            <h3 className="text-2xl">{lawInfo.degree}</h3>
            <h3 className="text-2xl">{lawInfo.experience}</h3>

            <span className="text-xl bg-green-500 px-10 py-1 rounded-md inline-block mt-2">
              Available
            </span>

            <h4 className="text-xl text-start mt-6">About:--</h4>
            <p className="text-lg text-start">{lawInfo.about}</p>
            <h4 className="text-xl text-start mt-4">Achievements:--</h4>
            <p className="text-lg text-start">
              {lawInfo.achievements.map((achievement, index) => (
                <span key={index}>
                  • {achievement}
                  <br />
                </span>
              ))}
            </p>

            <h4 className="text-xl text-start mt-4">Address:--</h4>
            <p className="text-lg text-start">{lawInfo.address.line1}</p>
            <p className="text-lg text-start">{lawInfo.address.line2}</p>

            <h4 className="text-xl text-start mt-4">Languages:--</h4>
            <p className="text-lg text-start">{lawInfo.languages + " "}</p>

            <h4 className="text-xl text-start mt-4">Memberships:--</h4>
            <p className="text-lg text-start">
              {lawInfo.professional_memberships.map((achievement, index) => (
                <span key={index}>
                  • {achievement}
                  <br />
                </span>
              ))}
            </p>

            <p className="text-3xl bg-green-500 px-10 py-2 text-center text-white mt-6 rounded-md">
              Appointment Fees - Rs {lawInfo.fees}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          {!bookAppointment ? (
            <button
              onClick={() => {
                setbookAppointment(!bookAppointment);
              }}
              className="w-[50%] h-10 rounded-full cursor-pointer active:bg-blue-300 text-white x-6 bg-blue-600"
            >
              Book Appointment
            </button>
          ) : (
            <></>
          )}
        </div>
        {!bookAppointment ? (
          <></>
        ) : (
          <AppointmentFrom
            userId={userId}
            lawyerId={lawyerId}
            name={lawInfo?.name}
            speciality={lawInfo?.speciality}
          />
        )}
      </div>
      <ReviewComponent />
      <ReviewFrom username={username} lawyerId={lawyerId} userId={userId} />
    </>
  );
};

export default Page;
