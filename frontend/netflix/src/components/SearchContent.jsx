import React, { useState } from "react";
import Loading from "./Loading";

const SearchContent = ({ placeholder, movies, tvshows,type}) => {
  
    const[Load,setLoad] = useState(true);
    const[data , setData]  = useState([]);
    const[search , setSearch] = useState('');

    function handleChange(e) {
    setSearch(e.target.value.toLowerCase());
    const content = type ==="movies" ? (movies):(tvshows);  
    const data = content.filter(
            (item) =>( item.title?.toLowerCase().includes(search) ||
            item.name?.toLowerCase().includes(search))
          );
          setData(data);
          console.log(data);
        }

    return (
    <div className="w-full h-full bg-black">
      <div className="flex justify-center mt-3">
        <input
          placeholder={placeholder}
          className="bg-gray-700 h-10 w-[50%] px-2 rounded-md text-white focus:outline-none"
        onChange={handleChange}
        />
      </div>
        
        <div className=" w-[90%] h-full bg-yellow- mt-9 mx-auto px-20 space-x-4">
            { search && data.length > 0 ? (data.map((item,index)=>(
                <div key={item.id} className="inline-block ">
                      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} className="w-80 "/>
                      <p className="  font-semibold hover:text-blue-600 cursor-pointer text-white mb-3">
                  {type == "movies" ? (item.title):(item.name)}
                </p>
                </div>
            ))) : ("")} 
      
        </div>
    </div>
  );
};

export default SearchContent;
