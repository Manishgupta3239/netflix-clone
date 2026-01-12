import React, { useContext, useRef, useState } from "react";
import hero from "../assets/hero.png";
import logo from "../assets/netflix-logo.png";
import axios from "axios";
import { toast } from 'react-toastify';

import { Link, useNavigate } from "react-router-dom";
import { IsAuthenticate } from "../Context/isAuthenticate";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShow] = useState(true);
  const [loading , setLoading] = useState(false);
  const { setAuthenticate } = useContext(IsAuthenticate);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const btnref = useRef();

  function handlePassword(e) {
    setError(false);
    btnref.current.style.display = "block";
    setPassword(e.target.value);
  }

  function handleEmail(e) {
    setError(false);
    setEmail(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("https://netflix-clone-6lp0.onrender.com/netflix/login",data, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      
      if (response.status === 200) {
        toast.success("Signed In");
        setAuthenticate(true)
        setTimeout(() => navigate("/home"), 1000);
      }
    } catch (error) {
      setError(true);
      toast.error("Invalid Credentials");
    }finally{
      setLoading(false);
    }
  }

  return (
  <div>
  
    <div
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex h-20 w-full bg-transparent justify-between items-center px-6 md:px-36">
        <img src={logo} className="h-[50px]" />
      </div>

      <div className="flex mt-10 items-center justify-center text-white text-center px-4">
        <div className="w-full max-w-md md:w-2/3 lg:w-1/3 py-10 px-6 md:px-10 bg-black bg-opacity-80">
          <h1 className="font-bold text-[30px] text-left">Sign In</h1>

          {error && (
            <div className="bg-yellow-600 mt-7 text-black rounded-md py-4 px-4 text-left">
              <p className="font-bold">
                Incorrect password for {email}
              </p>
              <p>
                You can use a sign-in code, reset your password or try again.
              </p>
            </div>
          )}

          <form className="space-y-4 w-full mt-5" onSubmit={handleSubmit}>
            <input
              placeholder="Email or mobile number"
              className="h-14 w-full bg-black bg-opacity-90 px-5 rounded-md"
              onChange={handleEmail}
              value={email}
              required
              type="email"
            />
            <div className="flex items-center bg-black relative">
              <input
                placeholder="Password"
                className="h-14 w-full bg-transparent px-5 rounded-md"
                onChange={handlePassword}
                value={password}
                required
                ref={ref}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  showPassword
                    ? (setShow(false), (ref.current.type = "password"))
                    : (setShow(true), (ref.current.type = "text"));
                }}
                className="focus:outline-none hidden rounded-full absolute right-4 hover:bg-gray-500"
                ref={btnref}
              >
                {showPassword ? <IoIosEyeOff className="size-7" /> : <IoMdEye className="size-7" />}
              </button>
            </div>

            <button
              className={`${loading ? ('bg-red-800 h-10') : ('bg-red-700 h-10') }  w-full hover:bg-red-600 focus:outline-none rounded-md`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}

            </button>
          </form>

          <div className="space-y-4 mt-5">
            <p>or</p>
            <button className="bg-gray-700 h-10 w-full bg-opacity-70 rounded-md hover:bg-gray-600/75 focus:outline-none">
              Use a sign-in code
            </button>
            <p>
              <Link to="/forgot password" className="hover:underline">
                Forgot Password ?
              </Link>
            </p>
          </div>

          <div className="text-left space-y-3 mt-2 text-sm">
            <label className="inline-flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <p className="text-gray-300">
              New to Netflix?
              <Link to="/" className="text-white hover:underline mx-1 font-bold">
                Sign up now.
              </Link>
            </p>
            <p className="text-[12px] text-gray-400">
              This page is protected by Google reCAPTCHA to
              <br />
              ensure you're not a bot. <a>Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-black px-6 py-10 text-gray-500 text-sm">
      <div className="max-w-5xl mx-auto">
        <p>Questions? Call 000-800-919-1694</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 underline">
          <a href="#">FAQ</a>
          <a href="#">Help Centre</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Corporate Information</a>
        </div>
        <form className="mt-6">
          <select className="w-28 border px-2 bg-gray-900 text-white h-8 rounded-sm">
            <option value="English" selected>English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </form>
      </div>
    </div>
  </div>
);
};

export default Login;
