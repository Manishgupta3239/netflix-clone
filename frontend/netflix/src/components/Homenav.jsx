import React, { useState } from "react";
import netflix_logo from '../assets/netflix-logo.png'
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.png'
import { MdLogout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Homenav = () => {
    const img = [avatar1 , avatar2 ,avatar3];
    const navigate = useNavigate();
    const [randomIndex] = useState(Math.floor(Math.random() * img.length));
    const profileImage = img[randomIndex];
  return (
    <div>
      <div className=" w-full  h-20  flex px-[14%] justify-between">
        <div className="flex space-x-10 z-50">
          <img src={netflix_logo} className="h-[50px] my-3" />
          <ul className="text-white flex my-6 space-x-3 text-[18px] items-center">
            <NavLink to="/home/movie"className="hover:underline focus:outline-none hover:scale-110" >Movies</NavLink>
            <NavLink to="/home/tv" className="hover:underline focus:outline-none hover:scale-110">TV Shows</NavLink>
            <NavLink to="/search" className="hover:underline focus:outline-none hover:scale-110">Search</NavLink>
            <NavLink to="/history" className="hover:underline focus:outline-none hover:scale-110">History</NavLink>
          </ul>
        </div>

        <div className=" flex bg-transparent text-white items-center justify-center
        space-x-4 z-50">
       
        <img src={profileImage} className="h-[30px]"/>
            <button className="focus:outline-none text-[30px] hover:scale-110"
            onClick={()=>navigate('/logout')}>
        <MdLogout/>
        </button>
        
        </div>
      </div>
    </div>
  );
};

export default Homenav;
