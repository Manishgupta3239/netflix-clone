// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import Card from "./Card";
// import Footer from "./Footer";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const Trending = () => {
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const [btn, setBtn] = useState(5);

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

//   const getdata = async () => {
//     await axios
//       .get("https://api.themoviedb.org/3/trending/movie/day", {
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmM1ZmRlZmU1OGJhYWM3M2M3OTA5OTllYjFjYTk3NiIsIm5iZiI6MTczMjM2NzE0Mi42NjA4OTMsInN1YiI6IjY3MTQ2MzZiMGNiNjI1MmY5OTA4OGRjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LFGfyQZ1nMbTPQgOw-0LcXNtQ-lpa44zrJpB4q94Ljw",
//           Accept: "application/json",
//         },
//       })
//       .then((response) => {
//         setData(response.data.results);
//       })
//       .catch((error) => {
//         console.log("Error in fetching data", error.message);
//       });
//   };

//   useEffect(() => {
//     getdata();
//   }, []);

//   return (
//     <div>
//       <div className="  bg-black flex justify-center">
//         <div className="w-[80%]">
//           <div className="my-14 space-y-5 ">
//             <h1 className="text-white font-sans text-[28px] font-semibold">
//               Trending Now
//             </h1>

//             <form className="space-x-6 ">
//               <select className="w-24 border-[0.25px] bg-gray-900 text-white h-9 rounded-sm font-sans px-3 ">
//                 <option value="India" selected>
//                   India
//                 </option>
//                 <option value="Global">Global</option>
//               </select>
//               <select className="w-32 border-[0.25px] bg-gray-900 text-white h-9 rounded-sm px-3 ">
//                 <option value="Movies" selected>
//                   Movies
//                 </option>
//                 <option value="TV Shows">TV Shows</option>
//               </select>
//             </form>

//             <div
//               className="flex justify-center items-center"
//               onMouseEnter={() => setShow(true)}
//               onMouseDown={() => setShow(false)}
//             >
//               <button
//                 className="rounded-full focus:outline-none text-white"
//                 onClick={handleLeft}
//               >
//                 <FaChevronLeft />
//               </button>
//               <div
//                 className="flex h-68 space-x-6 py-6 overflow-hidden  "
//                 ref={ref}
//               >
//                 {data.map((movie, index) => (
//                   <div
//                     key={index}
//                     className="flex-shrink min-w-40 transform transition duration-300 hover:scale-110"
//                   >
//                     <img
//                       src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                       className="rounded-2xl "
//                     />
//                     <p className="text-white text-[]20px">{movie.title}</p>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 className="rounded-full focus:outline-none   text-white"
//                 onClick={handleRight}
//               >
//                 <FaChevronRight />
//               </button>
//             </div>

//             <div className="py-2 ">
//               <h1 className="text-white text-left text-[25px] font-semibold">
//                 More reasons to join
//               </h1>
//               <div className="flex space-x-4 mt-5">
//                 <Card
//                   title="Enjoy on your TV"
//                   desc="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
//                 />
//                 <Card
//                   title="Download your shows to watch offline"
//                   desc="Save your favourites easily and always have something to watch."
//                 />
//                 <Card
//                   title="Watch everywhere"
//                   desc="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
//                 />
//                 <Card
//                   title="Create profiles for kids"
//                   desc="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
//                 />
//               </div>
//             </div>
//           </div>
//           <div className=" w-full h-screen text-white text-center py-24">
//             <h1 className="">
//               Ready to watch? Enter your email to create or restart your
//               membership.
//             </h1>
//             <form className="space-x-3">
//               <input
//                 className=" mx-auto mt-2 bg-slate-950  border-2 h-[57px] w-[515px] rounded-lg px-4 inline"
//                 placeholder="Email address"
//               />
//               <button
//                 className="border-1 boder-red bg-red-700 text-slate-100 h-[57px] w-[200px] rounded-lg text-[25px] px-2 text-center font-medium"
//                 type="submit"
//               >
//                 Get Started
//               </button>
//             </form>
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trending;
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Footer from "./Footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Trending = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [region, setRegion] = useState("India"); // State for region
  const [type, setType] = useState("Movies"); // State for content type

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

  const getData = async () => {
    const apiEndpoint =
      type === "Movies"
        ? "https://api.themoviedb.org/3/discover/movie"
        : "https://api.themoviedb.org/3/discover/tv";
    const params = {
      api_key: "4fc5fdefe58baac73c790999eb1ca976", // Replace with your API key
      with_original_language: region === "India" ? "hi" : undefined, // Filter for Hindi if India is selected
      sort_by: "popularity.desc", // Sort by popularity
    };

    try {
      const response = await axios.get(apiEndpoint, { params });
      setData(response.data.results);
    } catch (error) {
      console.log("Error in fetching data", error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [region, type]); // Refetch data when region or type changes

  return (
    <div>
      <div className="bg-black flex justify-center">
        <div className="w-[80%]">
          <div className="my-14 space-y-5">
            <h1 className="text-white font-sans text-[28px] font-semibold">
              Trending Now
            </h1>

            <form className="space-x-6">
              <select
                className="w-24 border-[0.25px] bg-gray-900 text-white h-9 rounded-sm font-sans px-3"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="India">India</option>
                <option value="Global">Global</option>
              </select>
              <select
                className="w-32 border-[0.25px] bg-gray-900 text-white h-9 rounded-sm px-3"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Movies">Movies</option>
                <option value="TV Shows">TV Shows</option>
              </select>
            </form>

            <div
              className="flex justify-center items-center"
              onMouseEnter={() => setShow(true)}
              onMouseDown={() => setShow(false)}
            >
              <button
                className="rounded-full focus:outline-none text-white"
                onClick={handleLeft}
              >
                <FaChevronLeft />
              </button>
              <div
                className="flex h-68 space-x-6 py-6 overflow-hidden"
                ref={ref}
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink min-w-40 transform transition duration-300 hover:scale-110"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title || item.name}
                      className="rounded-2xl"
                    />
                    <p className="text-white text-[20px]">
                      {item.title || item.name}
                    </p>
                  </div>
                ))}
              </div>

              <button
                className="rounded-full focus:outline-none text-white"
                onClick={handleRight}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="py-2">
              <h1 className="text-white text-left text-[25px] font-semibold">
                More reasons to join
              </h1>
              <div className="flex space-x-4 mt-5">
                <Card
                  title="Enjoy on your TV"
                  desc="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                />
                <Card
                  title="Download your shows to watch offline"
                  desc="Save your favourites easily and always have something to watch."
                />
                <Card
                  title="Watch everywhere"
                  desc="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
                />
                <Card
                  title="Create profiles for kids"
                  desc="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
                />
              </div>
            </div>
          </div>
          <div className="w-full h-screen text-white text-center py-24">
            <h1>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
            <form className="space-x-3">
              <input
                className="mx-auto mt-2 bg-slate-950 border-2 h-[57px] w-[515px] rounded-lg px-4 inline"
                placeholder="Email address"
              />
              <button
                className="border-1 border-red bg-red-700 text-slate-100 h-[57px] w-[200px] rounded-lg text-[25px] px-2 text-center font-medium"
                type="submit"
              >
                Get Started
              </button>
            </form>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
