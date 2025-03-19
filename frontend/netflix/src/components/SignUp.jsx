import React, { useContext, useState } from "react";
import logo from "../assets/netflix-logo.png";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { IsAuthenticate } from "../Context/isAuthenticate";

const SignUp = () => {
  const { email } = useParams();
  const [steps, setSteps] = useState(1);
  const [mail, setmail] = useState(email);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [signout, setSignout] = useState("Sign In");
  const {Verify} = useContext(IsAuthenticate);
  

  function handleEmail(e) {
    if(e.target.value === ''){
      e.target.style.border='3px solid red';
    }else{
      e.target.style.border='3px solid green';
    }
    setmail(e.target.value);
  }

  function handleBlur(e){
    e.target.style.border='3px solid gray';
  }
  
  function handlePassword(e) {
    if(e.target.value === ''){
      e.target.style.border='3px solid red';
    }else{
      e.target.style.border='3px solid green';
    }
    setPassword(e.target.value);
  }
  function handleIn() {
    navigate("/");
  }
  // async function handleOut() {
  //   try {
  //     const res = await axios.get("/netflix/logout");
  //     if (res) {
  //       setSignout("Sign In");
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  async function sendData(e) {
    e.preventDefault();
    const data = {
      email: mail,
      password: password,
    };
    try {
      const response = await axios.post("/netflix/signup", data);
      if (response) {
        setSignout("Sign Out");
        setmail("");
        setPassword("");
        Verify();
        toast.success("Registered");
        return setTimeout(()=>navigate("/home") , 1000);
        // navigate(`/signup/verifyemail/${mail}`)
      }
    } catch (error) {
      toast.error("Invalid Credentials");
      console.log("Error in signup", error.message);
    }
  }
  return (
    <div>
      <Toaster/>
      <div className="flex justify-center flex-wrap items-center">
        <div className="border-2 border-red h-20 py-2 flex justify-between items-center w-full px-9">
          <img src={logo} className="h-[50px] " />
          <button
            className={
              "text-black font-sans text-[20px] font-semibold focus:outline-none"
            }
            onClick={handleIn}
          >
            {signout}
          </button>
        </div>

        <div className="h-[75vh] w-[500px] mt-9 text-center">
          <p className="text-left">Steps {steps} OF 4</p>
          <h1 className="text-[40px] font-semibold text-left text-gray-800">
            Create a password to start your membership
          </h1>
          <p className="font-medium text-left text-gray-700">
            Just a few more steps and you're done!
            <br />
            We hate paperwork, too.
          </p>
          <form
            className="mt-4 space-y-6"
            onSubmit={sendData}
          >
            <input
              placeholder="Email"
              className="w-full h-16 border-2 border-gray-600 px-5"
              onChange={handleEmail}
            
              onBlur={handleBlur}
              value={mail}
              required
              type="email"
            />
            <br></br>
            <input
              placeholder="Add Password"
              className="w-full h-16 border-2 border-gray-600 px-5"
              onChange={handlePassword}
          
              onBlur={handleBlur}
              value={password}
              required
            />
            <button
              className="w-full h-16 border-2 bg-red-700 text-white border-red-700 mt-12"
              type="submit"
            >
              Next
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SignUp;
