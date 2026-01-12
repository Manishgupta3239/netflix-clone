import React from "react";
import logo from "../assets/netflix-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-transparent py-4 px-4 sm:px-6 md:px-10 lg:px-24">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <img src={logo} className="h-10 sm:h-12 mb-4 sm:mb-0" alt="Netflix Logo" />

        {/* Right side controls */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <form>
            <select className="w-32 border border-gray-600 bg-gray-900 text-white h-9 rounded-sm text-sm px-2">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </form>

          <NavLink
            to={"/login"}
            className="bg-red-600 hover:bg-red-500 text-white text-sm sm:text-base rounded-md px-4 py-2 text-center"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
