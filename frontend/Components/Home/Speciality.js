import Image from "next/image";
import Link from "next/link";
import React from "react";
const doctorSpeciality = [
  {
    label: "Dermatologist",
    route: "dermatologist",
    image: "/skin.png",
  },
  {
    label: "Neurologist",
    route: "neurologist",
    image: "/brain.png",
  },
  {
    label: "Gastroenterologist",
    route: "gastroenterologist",
    image: "/gas.png",
  },
  {
    label: "Pediatrician",
    route: "pediatrician",
    image: "/baby.png",
  },
  {
    label: "Cardiologist",
    route: "cardiologist",
    image: "/heart.png",
  },
];

const Speciality = () => {
  return (
    <div>
      <div className="text-center md:w-screen md:h-auto sm:w-screen sm:h-auto p-5">
        <h1 className="text-3xl">Find by Speciality</h1>
        <p className="text-sm mt-1.5">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <div className="flex md:w-screen sm:w-screen items-center md:justify-center sm:justify-center sm:flex-wrap gap-3 text-center mb-2 sm:px-8 overflow-scroll">
        {doctorSpeciality.map(({ label, route, image }) => (
          <div
            key={route}
            className="md:h-auto md:w-[7%] items-center cursor-pointer hover:scale-105 justify-center sm:w-auto sm:h-auto"
          >
            <Link href={`/doctors/${route}`}>
              <Image
                height={300}
                width={300}
                className="h-25 object-cover rounded-full sm:w-full md:w-full"
                src={image}
                alt={label}
              />
              <span className="text-xs">{label}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
