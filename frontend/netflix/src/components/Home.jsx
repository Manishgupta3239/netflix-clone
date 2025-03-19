import React, { useContext, useEffect, useState, version } from "react";
import Homenav from "./Homenav";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MoviesContext } from "../Context/MoviesContext";
import { ShowsContext } from "../Context/TVshowsContext";
import { Movie_category, TV_category } from "./Constants";
import MovieSlider from "./MovieSlider";
import Loading from "./Loading";


const Home = () => {
    const movies = useContext(MoviesContext);
    const shows = useContext(ShowsContext);
    const [data, setData] = useState(movies[Math.floor(Math.random() * movies.length)]);
    const { type = "movie" } = useParams();
    const [overview, setOverview] = useState(false);
    const [btntext, setBtntext] = useState("More Info");
    // const { setAuthenticate, authenticate ,Verify} = useContext(IsAuthenticate);
    const authenticate = JSON.parse(localStorage.getItem("authenticate"));
    const navigate = useNavigate();

      useEffect(() => {
        if(! authenticate){
          return navigate("/login");
        }
      }, [])
      

  useEffect(() => {
    if (type === "tv") {
      setData(shows[Math.floor(Math.random() * shows.length)]);
    } else if (type === "movie") {
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
    <>
      <div>
        <div className=" h-screen relative">
          <Homenav />
         
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            className=" absolute -z-50 top-0 left-0 h-screen w-full bg-cover bg-center object-cover"
          />
        

          <div
            className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50"
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center">
            <div
              className="bg-gradient-to-b from-black via transparent to-transparent
              top-0 left-0 absolute -z-10 h-full w-full"
            />

            <div className="mx-[10%]  w-[35%] text-white">
              <h1 className="text-white text-[40px] font-bold">
                {type === "tv" ? data.name : data.title}
              </h1>
              <p>
                {type === "movie"
                  ? new Date(data.release_date).getFullYear()
                  : new Date(data.first_air_date).getFullYear()}
                | {data.adult ? "18+" : "PG-18"}
              </p>
              <p className="mt-5">
                {overview
                  ? data.overview
                  : data?.overview && data.overview.length > 50
                  ? data.overview.slice(0, 200) + "..."
                  : data.overview}
              </p>

              <div className="flex space-x-7 mt-5">
                <Link to={`/watch/${data.id}`}
                  className="bg-white text-black h-[45px] w-[100px] font-semibold rounded-lg 
              hover:scale-110 focus:outline-none text-center py-2.5"
                >
                  <FaPlay className="inline mr-3" />
                  Play
                </Link>

                <button
                  className="bg-gray-500/70 text-white h-[45px] w-[120px] font-semibold rounded-lg focus:outline-none hover:scale-110
                "
                  onClick={(e) => {
                    overview === false
                      ? (setOverview(true), setBtntext("Read Less"))
                      : (setOverview(false), setBtntext("More Info"));
                  }}
                >
                  <IoIosInformationCircleOutline className="inline mr-3" />
                  {btntext}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full bg-black text-white px-8 py-10 ">
          {type === "movie"
            ? Movie_category.map((item, index) => (
                <MovieSlider category={item} type={type} key={index} />
              ))
            : TV_category.map((item, index) => (
                <MovieSlider category={item} type={type} key={index} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
