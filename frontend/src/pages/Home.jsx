import React, { useContext, useEffect, useState } from "react";
import Homenav from "../components/Homenav";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link,  useParams } from "react-router-dom";
import { MoviesContext } from "../Context/MoviesContext";
import { ShowsContext } from "../Context/TVshowsContext";
import { Movie_category, TV_category } from "../components/Constants";
import MovieSlider from "../components/MovieSlider";
import Loading from "../components/Loading";

const Home = () => {
  const movies = useContext(MoviesContext);
  const shows = useContext(ShowsContext);
  const [data, setData] = useState(null);
  const { type = "movie" } = useParams();
  const [overview, setOverview] = useState(false);
  const [btntext, setBtntext] = useState("More Info");

  useEffect(() => {
    if (type === "tv" && shows.length) {
      setData(shows[Math.floor(Math.random() * shows.length)]);
    } else if (type === "movie" && movies.length) {
      setData(movies[Math.floor(Math.random() * movies.length)]);
    }
  }, [type, movies, shows]);

  if (!data) {
    return (
      <div>
        <Homenav />
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen relative">
        <Homenav />

        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          className="absolute -z-50 top-0 left-0 h-full w-full object-cover object-center"
          alt="background"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-40" />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black via-transparent to-black -z-10" />

          <div className="max-w-full sm:max-w-2xl text-white">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              {type === "tv" ? data.name : data.title}
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-3">
              {type === "movie"
                ? new Date(data.release_date).getFullYear()
                : new Date(data.first_air_date).getFullYear()}{" "}
              | {data.adult ? "18+" : "PG-18"}
            </p>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
              {overview
                ? data.overview
                : data?.overview && data.overview.length > 50
                ? data.overview.slice(0, 200) + "..."
                : data.overview}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
              <Link
                to={`/watch/${data.id}`}
                className="bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
              >
                <FaPlay className="inline mr-2" />
                Play
              </Link>

              <button
                className="bg-gray-500/70 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
                onClick={() => {
                  setOverview(!overview);
                  setBtntext(overview ? "More Info" : "Read Less");
                }}
              >
                <IoIosInformationCircleOutline className="inline mr-2" />
                {btntext}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        {(type === "movie" ? Movie_category : TV_category).map((item, index) => (
          <MovieSlider category={item} type={type} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
