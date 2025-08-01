"use client";
import React, { useContext, useEffect } from "react";
import { CardCarousel } from "@/components/ui/card-carousel";
import { AppContext } from "@/context/AppContext";


const Doctors = () => {
  const { doctors, allDoctors } = useContext(AppContext);
  useEffect(() => {
    allDoctors();
  }, []);

  return (
    <div className="py-5">
      <CardCarousel
        images={doctors}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default Doctors;
