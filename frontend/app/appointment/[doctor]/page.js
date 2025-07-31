"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import AppointmentFrom from "@/Components/AppointmentFrom";
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const params = useParams();
  const doctorId = params.doctor;
  const [userId, setUserId] = useState(null);
  const [docInfo, setDocInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (!doctorId) {
      setIsLoading(false);
      return;
    }

    const fetchDoctor = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/doctor/singledoctor?id=${doctorId}`
        );
        // Axios wraps the response data in a `data` property
        setDocInfo(response.data);
      } catch (err) {
        console.error("Failed to fetch doctor info:", err);
        setError("Could not load doctor details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctor();
  }, [doctorId]);
  if (isLoading) {
    return <p className="text-center p-10">Loading doctor information...</p>;
  }
  if (error) {
    return <p className="text-center text-red-500 p-10">{error}</p>;
  }
  if (!docInfo) {
    return <p className="text-center p-10">Doctor not found.</p>;
  }

  return (
    <>
      <div>
        <div className="md:flex md:flex-row sm:flex sm:flex-col px-4 py-3 items-center justify-center gap-x-5 md:w-screen sm:w-screen">
          <div className="md:w-[30%] sm:w-full">
            <Image
              height={300}
              width={300}
              src={`/doctors/${docInfo.image}`}
              priority
              className="h-fit w-full py-2 object-cover rounded-4xl"
              alt={docInfo.name} // And so will this
            />
          </div>
          <div className="bg-[#020887] text-white text-center h-auto md:w-[70%] sm:w-screen py-5 px-5 rounded-4xl">
            <h1 className="text-6xl mb-4 ">
              {docInfo.name}
              {"   "}
              <span className="text-green-500">
                <VerifiedIcon fontSize="large" />
              </span>
            </h1>
            <h2 className="text-3xl ">{docInfo.speciality}</h2>
            <h3 className="text-2xl ">{docInfo.degree}</h3>
            <h3 className="text-2xl ">{docInfo.experience}</h3>
            <span className="text-xl bg-green-500 px-10 text-white">
              Available
            </span>
            <h4 className="text-xl text-start ">About:--</h4>
            <p className="text-lg text-start">{docInfo.about}</p>
            <h4 className="text-xl text-start ">Address:--</h4>
            <p className="text-lg text-start">{docInfo.address}</p>
            <p className="text-3xl bg-green-500 px-10 text-center text-white">
              Appointment Fees - Rs {docInfo.fees}
            </p>
          </div>
        </div>
      </div>

      <div>
        <AppointmentFrom
          userId={userId}
          doctorId={doctorId}
          name={docInfo?.name}
          speciality={docInfo?.speciality}
        />
      </div>
    </>
  );
};

export default Page;
