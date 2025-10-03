"use client";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const LawyerContextProvider = ({ children }) => {
  const [lawyers, setLawyers] = useState([]);

  const allLawyers = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lawyer/alllawyers`
      );
      setLawyers(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  const value = {
    lawyers,
    allLawyers,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default LawyerContextProvider;
