import React from "react";
import Navbar from "./Navbar";
import hero from "../assets/hero.png";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>


      {/* Hero content */}
      <div className="relative z-20">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
