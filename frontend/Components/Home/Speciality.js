import Image from "next/image";
import Link from "next/link";
import React from "react";
const lawyerSpeciality = [
  {
    label: "Criminal Law",
    route: "Criminal Law",
    image: "/skin.png",
  },
  {
    label: "Civil Litigation",
    route: "Civil Litigation",
    image: "/brain.png",
  },
  {
    label: "Corporate Law",
    route: "Corporate Law",
    image: "/gas.png",
  },
  {
    label: "Constitutional Law",
    route: "Constitutional Law",
    image: "/baby.png",
  },
  {
    label: "Contract Law",
    route: "Contract Law",
    image: "/heart.png",
  },
];

const Speciality = () => {
  return (
    <section className="w-full py-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-2 tracking-tight drop-shadow-sm">
          Find by Speciality
        </h1>
        <p className="text-base text-gray-600">
          Browse our curated list of trusted lawyers by speciality and book your
          appointment hassle-free.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-12 lg:px-24">
        {lawyerSpeciality.map(({ label, route, image }) => (
          <Link
            key={route}
            href={`/lawyers/${route.toLowerCase().replace(/\s+/g, "")}`}
            className="group"
          >
            <div className="bg-white shadow-lg rounded-2xl flex flex-col items-center p-4 w-32 h-40 transition-transform duration-200 hover:scale-105 hover:shadow-xl border border-blue-100">
              <div className="w-20 h-20 mb-3 rounded-full overflow-hidden border-2 border-blue-200 group-hover:border-blue-500 transition-all duration-200 bg-blue-50 flex items-center justify-center">
                <Image
                  height={80}
                  width={80}
                  className="object-cover w-full h-full"
                  src={image}
                  alt={label}
                />
              </div>
              <span className="text-sm font-medium text-blue-800 group-hover:text-blue-600 transition-colors duration-200 text-center">
                {label}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/lawyers">
          <span className="inline-block text-blue-600 font-semibold hover:underline hover:text-blue-800 transition-colors duration-200 text-lg">
            & many more... <span className="animate-pulse">!</span>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Speciality;
