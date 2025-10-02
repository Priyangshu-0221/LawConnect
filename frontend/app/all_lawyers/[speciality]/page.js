"use client";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import Image from "next/image";

export default function LawyerList() {
  const params = useParams();
  const speciality = params.speciality;
  console.log(speciality);

  const [filterDoc, setfilterDoc] = useState([]);
  const { lawyers, allLawyers } = useContext(AppContext);
  useEffect(() => {
    allLawyers();
  }, []);

  useEffect(() => {
    console.log("Running filter for speciality:", speciality);
    if (speciality) {
      const filtered = lawyers.filter(
        (lawyer) =>
          lawyer.speciality.toLowerCase().replace(/\s+/g, "") ===
          speciality.toLowerCase()
      );
      setfilterDoc(filtered);
    } else {
      setfilterDoc(lawyers);
    }
  }, [speciality, lawyers]);

  useEffect(() => {
    console.log("Updated filterDoc:", filterDoc);
  }, [filterDoc]);

  const [token, settoken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    settoken(token);
  }, []);

  return (
    <>
      <div className="text-center underline md:w-screen md:h-auto my-8">
        <h1 className="text-4xl">Connect with the Best lawyers</h1>
      </div>
      <div className="md:flex md:flex-row sm:flex sm:flex-col sm:w-screen gap-5 md:w-screen px-2">
        <div className="md:w-[35%] md:flex md:flex-col sm:w-full gap-y-3 cursor-pointer h-fit">
          <h1 className="text-2xl  text-center bg-black text-white">
            Browse by speciality
          </h1>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  mt-2 rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/all_lawyers" prefetch={true}>
              <p>
                All Lawyers <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  mt-2 rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/all_lawyers/CriminalLaw" prefetch={true}>
              <p>
                Criminal Law <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/all_lawyers/ConstitutionalLaw" prefetch={true}>
              <p>
                Constitutional Law <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/all_lawyers/CorporateLaw" prefetch={true}>
              <p>
                Corporate Law <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/all_lawyers/CivilLitigation" prefetch={true}>
              <p>
                Civil Litigation <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
          <div className="w-full bg-gray-200 mb-2 hover:bg-black hover:text-white  rounded-full text-lg h-10 text-center flex justify-center items-center">
            <Link href="/all_lawyers/CorporateLaw" prefetch={true}>
              <p>
                Corporate Law <ArrowForwardIosIcon />
              </p>
            </Link>
          </div>
        </div>
        <div className="md:grid md:w-[65%] sm:w-screen md:grid-cols-4  justify-evenly items-center md:gap-3 sm:flex sm:flex-col my-4">
          {filterDoc.map((lawyer) => {
            return (
              <div
                key={lawyer.id}
                className="w-full bg-blue-900 rounded-4xl py-3 my-3 cursor-pointer hover:scale-105"
              >
                <Image
                  height={300}
                  width={300}
                  src={`${lawyer.image}`}
                  priority
                  alt={lawyer.name}
                  onContextMenu={(e) => {
                    e.preventDefault();
                  }}
                  className="h-70 object-fit w-full rounded-2xl"
                />
                <div className="text-center mt-2 rounded-2xl text-white font-medium text-lg">
                  <p className="bg-green-500">
                    <AccessTimeFilledIcon /> Available
                  </p>

                  <h1>{lawyer.name}</h1>
                  <p>{lawyer.experience} </p>
                  <p>{lawyer.speciality}</p>

                    <Link href={`/appointment/${lawyer.id}`}>
                      <button className="bg-[#FF0054] text-white w-fit px-2 rounded-full cursor-pointer active:bg-amber-50 ">
                        View Profile
                      </button>
                    </Link>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
