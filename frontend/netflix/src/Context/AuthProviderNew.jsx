import React, { useEffect, useState } from "react";
import { IsAuthenticate } from "./isAuthenticate";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AuthProviderNew = ({ children }) => {
  const [authenticate, setAuthenticate] = useState(
    () => JSON.parse(localStorage.getItem("authenticate")) || false
  );
  const Verify = async () => {
    try {
      const res = await axios.get("/netflix/authenticate");
      if (res.status == 200) {
        localStorage.setItem("authenticate", JSON.stringify(true));
      }
    } catch (error) {
      setAuthenticate(false);
      alert(error.message);
      localStorage.setItem("authenticate", JSON.stringify(false));
      console.log("Error in Auth Provider", error.message);
    }
  };

  return (
    <IsAuthenticate.Provider value={{ authenticate, setAuthenticate, Verify }}>
      {children}
    </IsAuthenticate.Provider>
  );
};

export default AuthProviderNew;
