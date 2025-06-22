import React, { useContext, useState } from "react";
import logo from "../assets/netflix-logo.png";
import {  Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { IsAuthenticate } from "../Context/isAuthenticate";

const SignUp = () => {
  const { email } = useParams();
  const [loading, setLoading] = useState(false);
  const [mail, setmail] = useState(email);
  const [password, setPassword] = useState("");
  const [signout, setSignout] = useState("Sign In");
  const { setAuthenticate } = useContext(IsAuthenticate);
  const navigate = useNavigate();

  function handleEmail(e) {
    e.target.style.border = e.target.value === '' ? '3px solid red' : '3px solid green';
    setmail(e.target.value);
  }

  function handleBlur(e) {
    e.target.style.border = '2px solid gray';
  }

  function handlePassword(e) {
    e.target.style.border = e.target.value === '' ? '3px solid red' : '3px solid green';
    setPassword(e.target.value);
  }

  function handleIn() {
    navigate("/");
  }

  async function sendData(e) {
    e.preventDefault();
    setLoading(true);
    const data = { email: mail, password: password };
    try {
      const response = await axios.post("https://netflix-clone-6lp0.onrender.com/netflix/signup", data);
      if (response) {
        setSignout("Sign Out");
        setmail("");
        setPassword("");
        setAuthenticate(true);
        toast.success("Registered");
        return setTimeout(() => navigate("/home"), 1000);
      }
    } catch (error) {
      toast.error("Invalid Credentials");
      console.log("Error in signup", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>

      <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-white">
        {/* Header */}
        <div className="w-full flex justify-between items-center h-20 px-4 sm:px-10 md:px-20 lg:px-36">
          <img src={logo} alt="Netflix Logo" className="h-[40px] sm:h-[50px]" />
          <button
            className="text-black text-[16px] sm:text-[20px] font-semibold"
            onClick={handleIn}
          >
            {signout}
          </button>
        </div>

        {/* Form Section */}
        <div className="w-full sm:max-w-lg bg-white mt-8">
          <h1 className="text-[26px] sm:text-[36px] md:text-[40px] font-semibold text-left text-gray-800 leading-snug">
            Create a password to start your membership
          </h1>
          <p className="text-gray-700 mt-2 text-left font-medium">
            Just a few more steps and you're done!
            <br />
            We hate paperwork, too.
          </p>

          <form className="mt-6 space-y-6" onSubmit={sendData}>
            <input
              placeholder="Email"
              className="w-full h-14 sm:h-16 border-2 border-gray-600 px-4 sm:px-5 text-black"
              onChange={handleEmail}
              onBlur={handleBlur}
              value={mail}
              required
              type="email"
            />
            <input
              placeholder="Add Password"
              className="w-full h-14 sm:h-16 border-2 border-gray-600 px-4 sm:px-5 text-black"
              onChange={handlePassword}
              onBlur={handleBlur}
              value={password}
              required
              type="password"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-14 sm:h-16 mt-10 border-2 border-red-700 text-white ${loading ? "bg-red-500" : "bg-red-700"} hover:bg-red-600`}
            >
              {loading ? "Signing Up..." : "Next"}
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SignUp;
