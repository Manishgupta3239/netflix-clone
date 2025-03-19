import React, { useContext, useRef, useState } from "react";
import hero from "../assets/hero.png";
import logo from "../assets/netflix-logo.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IsAuthenticate } from "../Context/isAuthenticate";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShow] = useState(true);
  const { Verify } = useContext(IsAuthenticate);
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
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("/netflix/login", data);
      if (response.status === 200) {
        Verify();
        toast.success("Logged In");
        setTimeout(() => navigate("/home"), 500);
      }
    } catch (error) {
      setError(true);
      toast.error("Invalid Credentials");
    }
  }

  return (
    <div>
      <Toaster />
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="flex h-20 w-full bg-transparent justify-between items-center px-36">
          <img src={logo} className="h-[50px]" />
        </div>

        <div className="flex mt-10  items-center justify-center text-white text-center">
          <div className=" h-[35rem] w-1/3 py-10 px-16 bg-black bg-opacity-80">
            <h1 className="font-bold text-[30px] text-left">Sign In</h1>
            {error ? (
              <div className="bg-yellow-600 mt-7 text-black rounded-md h-32 py-4 pb-2 px-4 text-left">
                <p className="text-black font-bold">
                  Incorrect password for {email}
                </p>
                <p>
                  You can use a sign-in code, reset your password or try again.
                </p>
              </div>
            ) : (
              ""
            )}

            <form
              className={`space-y-4 border-5px  w-full mt-5 `}
              onSubmit={handleSubmit}
            >
              <input
                placeholder="Email or mobile number"
                className="h-14 w-80 bg-black bg-opacity-90 px-5 rounded-md"
                onChange={handleEmail}
                value={email}
                required
                type="email"
              ></input>

              {/* <br></br> */}
              <div className="flex items-center bg-black  relative">
                <input
                  placeholder="Password"
                  className="h-14 w-96 bg-transparent px-5 rounded-md "
                  onChange={handlePassword}
                  value={password}
                  required
                  ref={ref}
                ></input>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    showPassword == false
                      ? (setShow(true), (ref.current.type = "text"))
                      : (setShow(false),
                        (ref.current.type = "password")
                       );
                  }}
                  className="focus:outline-none hidden rounded-full absolute right-4 hover:bg-gray-500"
                  ref={btnref}
                >
                  {showPassword == false ? <IoMdEye className="size-7"/> : <IoIosEyeOff className="size-7"/>}
                </button>
              </div>

              <br></br>
              <button
                className="bg-red-700 h-10 w-80 hover:bg-red-600 focus:outline-none   rounded-md "
                type="submit"
              >
                Sign In
              </button>
            </form>
            <div className="space-y-4 mt-5">
              <p>or</p>
              <button className="bg-gray-700 h-10 w-80 bg-opacity-70 rounded-md hover:bg-gray-600/75 focus:outline-none">
                Use a sign-in code
              </button>
              <p>
                <Link to="/forgot password" className="hover:underline">
                  Forgot Password ?
                </Link>
              </p>
            </div>
            <div className="text-left space-y-3  mt-2">
              <a>Remember me</a>
              <p className="text-gray-300 ">
                New to Netflix?
                <Link
                  to="/"
                  className="text-white hover:underline mx-1 font-bold"
                >
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

      <div className="h-[535px] bg-black">
        <div className=" w-3/5 ml-48 absolute mt-72 h-52 font-serif text-gray-500">
          <p>Questions? Call 000-800-919-1694</p>
          <br></br>
          <div className="space-y-6">
            <ol className="flex justify-between underline">
              <a>FAQ</a>
              <a>Help Centre</a>
              <a>Terms of Use</a>
              <a>Privacy</a>
            </ol>

            <ol className="flex space-x-20 underline">
              <a>Cookie Preferences</a>
              <a>Corporate Information</a>
            </ol>

            <form>
              <select className="w-28 border-[0.25px] bg-gray-900 text-white h-8 rounded-sm">
                <option value="English" selected>
                  English
                </option>
                <option value="hindi">Hindi</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
