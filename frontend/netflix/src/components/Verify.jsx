import React, { useContext } from "react";
import logo from "../assets/netflix-logo.png";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from "axios";
import Logout from "./Logout";
import { IsAuthenticate } from "../Context/isAuthenticate";

const Verify = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const { Verify } = useContext(IsAuthenticate);

  return (
    <div>
      <div className="flex justify-center flex-wrap items-center">
        <div className="border-2 border-red h-20 py-2 flex justify-between items-center w-full px-9">
          <img src={logo} className="h-[50px]" />
          <NavLink
            to="/logout"
            className="text-black font-sans text-[20px] font-semibold border-none"
          >
            Sign Out
          </NavLink>
        </div>

        <div className="h-[75vh] w-[500px] mt-9 text-center ">
          <div className="space-y-8">
            <h1 className="text-[35px] font-semibold">
              Great, now let us verify your email
            </h1>

            <p className="text-[21px] text-gray-500">
              Click the link we sent to {email}.
            </p>

            <p className="text-[20px] text-gray-500">
              Verifying your email will improve account security and help you
              receive important Netflix communications.
            </p>
          </div>
          <NavLink
            to="/home"
            className="w-full text-[30px] h-16 border-2 bg-gray-400 text-black mt-12"
          >
            Skip
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Verify;
