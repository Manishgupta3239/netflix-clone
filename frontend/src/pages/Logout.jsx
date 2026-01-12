import React, { useContext, useEffect, useState } from "react";
import hero from "../assets/hero.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { IsAuthenticate } from "../Context/isAuthenticate";

const Logout = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);
  const {authenticate , setAuthenticate} = useContext(IsAuthenticate)
  async function logout() {
    try {
      const response = await axios.get("http://localhost:3000/netflix/logout",{
        withCredentials:true
      });
      if (response.status === 200 || response.status === 204) {
        setAuthenticate(false)
        toast.success("Logged Out")
        setCount(0);
      }
    } catch (error) {
      console.log("Error in logout", error.message);
    }
  }

  useEffect(() => {
    if (count > 0) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setAuthenticate(fasle)
      toast.success("Logged Out");
      setTimeout(() => navigate('/'), 1000);
    }
  }, [count]);

  return (
    <div
      className="min-h-screen w-full bg-center bg-cover flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${hero})` }}
    >

      <div className="bg-white text-black w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-2/5 p-6 sm:p-10 rounded-md text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Leaving So Soon?</h1>
        <p className="text-sm sm:text-base md:text-lg text-left mb-3">
          Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a shared or public computer.
        </p>
        <p className="text-base sm:text-lg">You’ll be redirected to Netflix.com in <span className="font-bold">{count}</span> seconds.</p>
        <button
          className="mt-5 text-lg sm:text-xl underline font-semibold text-blue-600 hover:text-blue-800 transition duration-200"
          onClick={logout}
        >
          Go Now
        </button>
      </div>

  
    </div>
  );
};

export default Logout;
