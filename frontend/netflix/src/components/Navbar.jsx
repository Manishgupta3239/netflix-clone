import React, { useContext } from "react";
import logo from "../assets/netflix-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IsAuthenticate } from "../Context/isAuthenticate";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex h-20 w-full bg-transparent justify-between items-center px-36">
          <img src={logo} className="h-[50px] " />

          <div className="flex space-x-4">
            <form>
              <select className="w-28 border-[0.25px] bg-gray-900 text-white h-8 rounded-sm">
                <option value="English">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </form>
            <NavLink
              to={"/login"}
              className="bg-red-600 rounded-[5px] w-20 h-[35px] text-center text-white flex justify-center py-1 text-[16px]
          hover:bg-red-500"
            >
              Sign In
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
