import React from "react";
import Navbar from "./Navbar";
import hero from '../assets/hero.png'
import HeroContent from "./HeroContent";
const Hero = () => {
  return (
    <div>
      <div className="h-screen w-full bg-cover bg-center overflow-hidden"style={{ backgroundImage: `url(${hero})` }}>
        <HeroContent/>
        
      </div>
    </div>
  );
};

export default Hero;
