import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../Context/MoviesContext";
import Homenav from '../components/Homenav'
import { ShowsContext } from "../Context/TVshowsContext";
import SearchContent from "../components/SearchContent";

const Search = () => {
  const movies = useContext(MoviesContext);
  const tvshows = useContext(ShowsContext);
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="bg-black h-screen w-full">
      <Homenav title="abc"/>
      <div className=" flex items-center w-full space-x-2 justify-center">
        <button value="Movies" 
        className={`px-4 py-2 rounded  ${
            activeTab === "Movies" ? "bg-red-600 " : "bg-gray-600"
          } border-none focus:outline-none text-white`}  onClick={(e)=>setActiveTab(e.target.value)}>Movies</button>

        <button value="TV Shows" 
        className={`px-4 py-2 rounded  ${
            activeTab === "TV Shows" ? "bg-red-600 text-white" : "bg-gray-600"
          } border-none focus:outline-none text-white`}  onClick={(e)=>setActiveTab(e.target.value)}>TV Shows</button>

        <button value="People" 
        className={`px-4 py-2 rounded  ${
            activeTab === "Person" ? "bg-red-600 text-white" : "bg-gray-600"
          } border-none focus:outline-none text-white`}  onClick={(e)=>setActiveTab(e.target.value)}>Person</button>
        
      </div>

      <div>
        {activeTab == "Movies"? <SearchContent placeholder="Search Movies..." movies={movies} type="movies"/>:<SearchContent placeholder="Search TV Shows..." tvshows={tvshows} type="tvshows"/>}
      </div>
   
    </div>
  );
};

export default Search;
