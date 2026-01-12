import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ShowsContext } from '../Context/TVshowsContext';

const Tvshows = () => {
    
  const shows = useContext(ShowsContext); 
 
  return (
    <div>
      <img
          src={`https://image.tmdb.org/t/p/w500${shows.poster_path}`}
          className=" absolute -z-50 top-0 left-0 h-screen w-full bg-cover bg-center object-cover"
        />
    </div>
  )
}

export default Tvshows
