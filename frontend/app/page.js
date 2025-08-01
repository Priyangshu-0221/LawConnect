import Bottom from "@/Components/Home/Bottom";
import Doctors from "@/Components/Home/Doctors";
import HomePage from "@/Components/Home/HomePage";
import Speciality from "@/Components/Home/Speciality";
import React from "react";

const page = () => {
  return (
    <div>
      <HomePage />
      <Speciality />
      <Doctors />
      <Bottom />
    </div>
  );
};

export default page;
