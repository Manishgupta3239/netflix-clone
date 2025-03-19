// import React, { Children, useEffect, useState } from "react";
// import axios from "axios";
// import { MoviesContext } from "./MoviesContext";

// const MovieProvider = ({children}) => {
    
//     const [data, setData] = useState([]);
//     const fetchMovie = async () => {
//     try {
//       const res = await axios.get(
//         `https://api.themoviedb.org/3/trending/movie/day`,
//         {
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmM1ZmRlZmU1OGJhYWM3M2M3OTA5OTllYjFjYTk3NiIsIm5iZiI6MTczMjM2NzE0Mi42NjA4OTMsInN1YiI6IjY3MTQ2MzZiMGNiNjI1MmY5OTA4OGRjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LFGfyQZ1nMbTPQgOw-0LcXNtQ-lpa44zrJpB4q94Ljw",
//             accept: "application/json",
//           },
//         }
//       );
//       const movies = res.data.results;
//       setData(movies);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchMovie();
//   }, []);

//   return (
//     <div>
//       <MoviesContext.Provider value={data}>
//         {children}
//       </MoviesContext.Provider>
//     </div>
//   )
// }

// export default MovieProvider
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MoviesContext } from "./MoviesContext";

const MovieProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchMovie = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: "4fc5fdefe58baac73c790999eb1ca976",
            with_original_language: "hi", // Hindi movies
            sort_by: "popularity.desc", // Optional: Sort by popularity
          },
          headers: {
            accept: "application/json",
          },
        }
      );
      const movies = res.data.results;
      setData(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <MoviesContext.Provider value={data}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MovieProvider;
