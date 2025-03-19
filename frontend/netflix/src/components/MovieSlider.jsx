// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const MovieSlider = ({ category, type }) => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     try {
//       const res = await axios.get(
//         `https://api.themoviedb.org/3/${type}/${category}`,
//         {
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmM1ZmRlZmU1OGJhYWM3M2M3OTA5OTllYjFjYTk3NiIsIm5iZiI6MTczMjM2NzE0Mi42NjA4OTMsInN1YiI6IjY3MTQ2MzZiMGNiNjI1MmY5OTA4OGRjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LFGfyQZ1nMbTPQgOw-0LcXNtQ-lpa44zrJpB4q94Ljw",
//             accept: "application/json",
//           },
//         }
//       );
//       if (res) {
//         setData(res.data.results);
//       }
//     } catch (error) {
//       console.log("Error in movie slider", error);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, [category, type]);

//   const formatCategory =
//     category.replaceAll("_", " ")[0].toUpperCase() +
//     category.replaceAll("_", " ").slice(1);

//   const ref = useRef();
//   const handleRight = () => {
//     ref.current.scrollBy({ left: ref.current.offsetWidth, behavior: "smooth" });
//   };
//   const handleLeft = () => {
//     if (ref.current) {
//       ref.current.scrollBy({
//         left: -ref.current.offsetWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="text-white space-y-5">
//       <h1 className=" text-[35px] font-sans font-semibold">{formatCategory}</h1>
//       <div className="flex space-x-4">
//       <button
//           className="rounded-full focus:outline-none text-white "
//           onClick={handleLeft}
//         >
//           <FaChevronLeft className="transition-all hover:scale-150 duration-150"/>
//         </button>
//       <div className="flex  space-x-4 overflow-hidden h-80 "ref={ref}>
//         {data.map((item, index) => (
//           <div key={index} className=" flex-shrink-0 relative pt-3 cursor-pointer w-52" >
//               <Link to={`/watch/${item.id}`}>
//               <img
//                   src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
//                   className="h-60 w-48 rounded-xl object-cover transition-all hover:scale-110 duration-300 "
//                 />
//                 <p className=" pt-4 font-semibold hover:text-blue-600 cursor-pointer mt-2 ">
//                   {type == "movie" ? (item.title):(item.name)}
//                 </p>
//               </Link>
                
          
//           </div>
//         ))}
//       </div>
//       <button className="rounded-full focus:outline-none  text-white" onClick={handleRight}>
//               <FaChevronRight className="transition-all hover:scale-150 duration-150" />
//               </button> 
//               </div>
//     </div>
//   );
// };

// export default MovieSlider;
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieSlider = ({ category, type }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const endpoint =
      type === "movie"
        ? "https://api.themoviedb.org/3/discover/movie"
        : "https://api.themoviedb.org/3/discover/tv";

    const params = {
      api_key: "4fc5fdefe58baac73c790999eb1ca976", // Replace with your actual API key
      with_original_language: "hi", // Filter for Hindi-language content
      sort_by: "popularity.desc", // Sort by popularity
    };

    try {
      const res = await axios.get(endpoint, { params });
      if (res) {
        setData(res.data.results);
      }
    } catch (error) {
      console.log("Error in movie slider", error);
    }
  };

  useEffect(() => {
    getData();
  }, [category, type]);

  const ref = useRef();
  const handleRight = () => {
    ref.current.scrollBy({ left: ref.current.offsetWidth, behavior: "smooth" });
  };
  const handleLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -ref.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="text-white space-y-5">
      <h1 className=" text-[35px] font-sans font-semibold">
        {type === "movie" ? "Trending Indian Movies" : "Trending Indian TV Shows"}
      </h1>
      <div className="flex space-x-4">
        <button
          className="rounded-full focus:outline-none text-white"
          onClick={handleLeft}
        >
          <FaChevronLeft className="transition-all hover:scale-150 duration-150" />
        </button>
        <div className="flex space-x-4 overflow-hidden h-80" ref={ref}>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 relative pt-3 cursor-pointer w-52"
            >
              <Link to={`/watch/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  className="h-60 w-48 rounded-xl object-cover transition-all hover:scale-110 duration-300"
                  alt={item.title || item.name}
                />
                <p className="pt-4 font-semibold hover:text-blue-600 cursor-pointer mt-2">
                  {type === "movie" ? item.title : item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
        <button
          className="rounded-full focus:outline-none text-white"
          onClick={handleRight}
        >
          <FaChevronRight className="transition-all hover:scale-150 duration-150" />
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;
