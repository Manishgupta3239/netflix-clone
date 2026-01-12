import React, { useEffect, useState } from "react";
import { IsAuthenticate } from "./isAuthenticate";
import axios from "axios";

const AuthProviderNew = ({ children }) => {
  // const [authenticate, setAuthenticate] = useState(
  //   () => JSON.parse(localStorage.getItem("authenticate")) || false
  // );  
  const [authenticate, setAuthenticate ] = useState(false);
  const [loading, setLoading ] = useState(true);

  const Verify = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:3000/netflix/authenticate",
        {
          withCredentials: true,
        }
      );
      if (res.status == 200) {
          setAuthenticate(true)
            setLoading(false)
      }else{
        setLoading(false)
      }
    } catch (error) {
      setAuthenticate(false);
      setLoading(false)
      // localStorage.setItem("authenticate", JSON.stringify(false));
      console.error("Error in Auth Provider:", error.message);
    }
  };

  useEffect(()=>{
    Verify();
  },[])

  return (
    <IsAuthenticate.Provider value={{ authenticate, setAuthenticate, Verify,loading }}>
      {children}
    </IsAuthenticate.Provider>
  );
};

export default AuthProviderNew;
