"use client";
import React, { useContext, useEffect } from "react";
import { CardCarousel } from "@/components/ui/card-carousel";
import { AppContext } from "@/context/AppContext";

const Lawyers = () => {
  const { lawyers, allLawyers } = useContext(AppContext);
  useEffect(() => {
    allLawyers();
  }, []);

  return (
    <div className="py-5">
      <CardCarousel
        images={lawyers}
        autoplayDelay={3000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default Lawyers;
