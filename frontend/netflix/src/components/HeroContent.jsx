import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const HeroContent = () => {
  const [isFocused, setFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);

  function handleEmail(e) {
    if (e.target.value == "") {
      e.target.style.border = "3px solid red";
      setErr(true);
    } else {
      e.target.style.border = "3px solid green";
      setErr(false);
    }
    setEmail(e.target.value);
  }

  function handleBlur(e) {
    setFocused(false);
  }
  function handleFocus(e) {
    setFocused(false);
  }

  return (
    <div>
      <div>
        <Navbar />
        <div className="font-sans mt-16">
          <div className=" text-white font-extrabold text-center">
            <p className="text-[65px]">
              Unlimited movies,TV <br />
              shows and more
            </p>
            <br />
            <p className="text-[23px]">Starts at ₹149. Cancel at any time.</p>
          </div>

          <div className="text-white text-center space-x-3 mt-6">
            <p className="text-[20px] mb-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form
              action={`/signup/reform/${email}`}
              className="space-x-3 w-[50%] translate-x-[50%] "
            >
              <input
                className=" mx-auto mt-2 bg-slate-950 border-2 h-[57px] w-[450px] rounded-lg px-4 inline-block"
                placeholder="Email address"
                onChange={handleEmail}
                onBlur={(e) => (e.target.style.border = "2px solid black")}
                type="email"
                required
              />

              <button
                className="border-1 focus:outline-none boder-red bg-red-700 text-slate-100 h-[57px] w-[180px] rounded-lg text-[25px] px-2 text-center font-medium hover:bg-red-600 "
                type="submit"
              >
                Get Started
              </button>
              {err ? (
                <p className="text-[15px] text-red-600 font-bold text-left">
                  Invalid email id
                </p>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
