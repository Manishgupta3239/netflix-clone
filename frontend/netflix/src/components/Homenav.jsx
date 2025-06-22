import React, { useContext, useState } from "react";
import netflix_logo from '../assets/netflix-logo.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.png';
import { MdLogout } from "react-icons/md";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Hamburger icons
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { IsAuthenticate } from "../Context/isAuthenticate";
import { toast } from 'react-toastify';


const Homenav = () => {
  const avatars = [avatar1, avatar2, avatar3];
  const [randomIndex] = useState(Math.floor(Math.random() * avatars.length));
  const profileImage = avatars[randomIndex];
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const {setAuthenticate} = useContext(IsAuthenticate)
  

  async function logout() {
    try {
      const response = await axios.get("https://netflix-clone-6lp0.onrender.com/netflix/logout",{
        withCredentials:true
      });
      if (response.status === 200 || response.status === 204) {
        setAuthenticate(false)
        toast.success("Logged Out")
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      console.log("Error in logout", error.message);
    }
  }


  return (
    <nav className="w-full h-20 px-4 sm:px-10 md:px-[10%] flex justify-between items-center bg-transparent z-50 relative">
      
      {/* Left: Logo */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <img src={netflix_logo} className="h-10 sm:h-12" alt="Netflix Logo" />

        {/* Nav Links - Hidden on small screens */}
        <ul className="hidden sm:flex text-white space-x-4 sm:space-x-6 text-sm sm:text-base font-medium">
          <NavLink to="/home/movie" className="hover:underline hover:scale-105 transition">Movies</NavLink>
          <NavLink to="/home/tv" className="hover:underline hover:scale-105 transition">TV Shows</NavLink>
          <NavLink to="/search" className="hover:underline hover:scale-105 transition">Search</NavLink>
  
        </ul>
      </div>

      {/* Right Side: Profile + Logout + Menu Button */}
      <div className="flex items-center space-x-4 text-white sm:space-x-4">
        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="sm:hidden text-2xl">
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Profile Image */}
        <img src={profileImage} className="h-8 w-8 rounded-full object-cover hidden sm:block" alt="Profile" />

        {/* Logout */}
        <button
          className="text-2xl hover:scale-110 transition hidden sm:block"
          onClick={() => logout()}
          title="Logout"
        >
          <MdLogout />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-4 py-6 sm:hidden text-white font-medium text-base z-50">
          <NavLink to="/home/movie" onClick={closeMenu} className="hover:underline">Movies</NavLink>
          <NavLink to="/home/tv" onClick={closeMenu} className="hover:underline">TV Shows</NavLink>
          <NavLink to="/search" onClick={closeMenu} className="hover:underline">Search</NavLink>
          <NavLink to="/history" onClick={closeMenu} className="hover:underline">History</NavLink>
          <button onClick={() => { closeMenu(); logout(); }} className="flex items-center space-x-2">
            <MdLogout className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Homenav;
