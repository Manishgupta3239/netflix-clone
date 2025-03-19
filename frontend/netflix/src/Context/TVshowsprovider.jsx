// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { ShowsContext } from './TVshowsContext';
// import Tvshows from '../components/Tvshows';

// const TVshowsprovider = ({children}) => {
//     const[shows , setShows] = useState([]);

//     const getData = async ()=>{
//         try{
//             const res = await axios.get('https://api.themoviedb.org/3/trending/tv/day',{
//                 headers :{
//                     Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmM1ZmRlZmU1OGJhYWM3M2M3OTA5OTllYjFjYTk3NiIsIm5iZiI6MTczMjM2NzE0Mi42NjA4OTMsInN1YiI6IjY3MTQ2MzZiMGNiNjI1MmY5OTA4OGRjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LFGfyQZ1nMbTPQgOw-0LcXNtQ-lpa44zrJpB4q94Ljw",
//                     accept : "application/json"
//                 }
//             }
//             );
//             const show = res.data.results;
//             setShows(show);
//         }catch(error){
//             console.log("errorin fetching tv shows",error);
//         }
//     }

//     useEffect(() => {
//       getData();
//     }, [])
    
//   return (
//     <div>
//         <ShowsContext.Provider value={shows}>
//             {children}
//         </ShowsContext.Provider>
//     </div>
//   )
// }

// export default TVshowsprovider
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ShowsContext } from './TVshowsContext';

const TVshowsprovider = ({ children }) => {
  const [shows, setShows] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/discover/tv', {
        params: {
          api_key: '4fc5fdefe58baac73c790999eb1ca976', // Replace with your API key
          with_original_language: 'hi', // Filter for Hindi shows
          sort_by: 'popularity.desc', // Sort by popularity
        },
        headers: {
          accept: 'application/json',
        },
      });

      const show = res.data.results;
      setShows(show);
    } catch (error) {
      console.log('Error fetching TV shows:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ShowsContext.Provider value={shows}>
        {children}
      </ShowsContext.Provider>
    </div>
  );
};

export default TVshowsprovider;
