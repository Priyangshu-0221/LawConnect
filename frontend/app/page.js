import Bottom from "@/Components/Home/Bottom";
import HomePage from "@/Components/Home/HomePage";
import Speciality from "@/Components/Home/Speciality";
import React from "react";
import Lawyers from "@/Components/Home/Lawyers";

const page = () => {
  return (
    <div>
      <HomePage />
      <Speciality />
      <Lawyers/>
      <Bottom />
    </div>
  );
};

export default page;
