"use client";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const DoctorContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);

  const allDoctors = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/doctor/alldoctors`
      );
      console.log(data);
      setDoctors(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const value = {
    doctors,
    allDoctors,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default DoctorContextProvider;
