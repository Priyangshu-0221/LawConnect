"use client";
import React, { useContext, useEffect } from "react";
import { CardCarousel } from "@/Components/ui/card-carousel";
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
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
};

export default Lawyers;
