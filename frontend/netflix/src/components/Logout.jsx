import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import hero from "../assets/hero.png";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Logout = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  async function logout() {
    try {
      const response = await axios.get("/netflix/logout");
      if (response.status === 200 || response.status === 204) {
        localStorage.setItem("authenticate", JSON.stringify(false));
        setCount(0); // Trigger the countdown end and navigation
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
      localStorage.setItem("authenticate", JSON.stringify(false));
      toast.success("Logged Out");
      setTimeout(()=>navigate('/'),1000);
      
    }
  }, [count]);

  return (
    <div
      className="h-full w-full bg-center absolute top-0"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Toaster />
      <div className="text-black bg-white w-[40%] h-[50vh] translate-x-[65%] mt-6 text-center px-3 py-7">
        <h1 className="text-[50px] font-sans-serif font-semibold">Leaving So Soon?</h1>
        <p className="text-left text-[20px] pt-2">
          Just so you know, you don’t always need to sign out of Netflix. It’s
          only necessary if you’re on a shared or public computer.
        </p>
        <p className="text-[20px]">You’ll be redirected to Netflix.com in {count} seconds.</p>
        <button
          className="mt-5 focus:outline-none underline text-[30px] font-semibold hover:text-blue-800"
          onClick={logout}
        >
          Go Now
        </button>
      </div>
      <div className="bg-black w-[80%] translate-x-[10%] opacity-90">
        <Footer />
      </div>
    </div>
  );
};

export default Logout;