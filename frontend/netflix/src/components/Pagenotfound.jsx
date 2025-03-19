import React from 'react'
import notfound from '../assets/404.png'
import netflix_logo from '../assets/netflix-logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Pagenotfound = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div>
            <div className='bg-black h-20 flex items-center px-10'>
                <img src={netflix_logo} className='h-8' />
            </div>
            <div className=" flex items-center justify-center h-[587px] w-full bg-cover bg-center overflow-hidden"style={{ backgroundImage: `url(${notfound})` }}>
               <div className='text-center'>
               <h1  className='text-white  text-[65px] font-semibold'>Lost Your Way ?</h1>
               <p  className='text-white  text-[20px]'>Sorry,we can't find that page. You'll will find lots to explore on the home <br/> page</p>
               
               <button className="bg-white h-10 focus:outline-none mt-3 rounded-md hover:opacity-75 w-36 font-semibold"
               onClick={()=>navigate("/home")}>Netflix Home</button>
               </div>
               
            </div>
        </div>
    </div>
  )
}

export default Pagenotfound