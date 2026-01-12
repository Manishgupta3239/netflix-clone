import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const HeroContent = () => {
  const [isFocused, setFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  function handleEmail(e) {
    if (e.target.value === "") {
      e.target.style.border = "3px solid red";
      setErr(true);
    } else {
      e.target.style.border = "3px solid green";
      setErr(false);
    }
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/signup/reform/${email}`);
  };

  return (
    <div>
      <Navbar />
      <div className="font-sans mt-16 px-4">
        <div className="text-white font-extrabold text-center">
          <p className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[65px] leading-tight">
            Unlimited movies, TV <br className="hidden sm:block" />
            shows and more
          </p>
          <p className="text-[18px] sm:text-[20px] md:text-[23px] mt-4">
            Starts at ₹149. Cancel at any time.
          </p>
        </div>

        <div className="text-white text-center mt-8">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] mb-4 px-2">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <form onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-3 w-full max-w-[700px] mx-auto"
          >
            <input
              className="bg-slate-950 border-2 h-[50px] w-full sm:w-[400px] rounded-lg px-4"
              placeholder="Email address"
              onChange={handleEmail}
              onBlur={(e) => (e.target.style.border = "2px solid black")}
              type="email"
              required
            />
            <button
              className="bg-red-700 text-white h-[50px] w-full sm:w-[180px] rounded-lg text-[20px] font-medium hover:bg-red-600"
              type="submit"
            >
              Get Started
            </button>
          </form>

          {err && (
            <p className="text-[14px] text-red-500 font-bold mt-2">
              Invalid email id
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
