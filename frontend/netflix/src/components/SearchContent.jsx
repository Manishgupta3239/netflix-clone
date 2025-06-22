import React, { useState } from "react";

const SearchContent = ({ placeholder, movies, tvshows, type }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);

    const content = type === "movies" ? movies : tvshows;
    const filtered = content.filter((item) =>
      (item.title?.toLowerCase().includes(keyword) ||
        item.name?.toLowerCase().includes(keyword))
    );
    setData(filtered);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 py-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          placeholder={placeholder}
          value={search}
          onChange={handleChange}
          className="bg-gray-700 h-10 w-full max-w-xl px-4 rounded-md text-white focus:outline-none"
        />
      </div>

      {/* Results */}
      <div className="flex flex-wrap justify-center gap-6">
        {search && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="w-[160px] sm:w-[200px] md:w-[250px] text-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              <p className="mt-2 font-semibold hover:text-blue-500 cursor-pointer">
                {type === "movies" ? item.title : item.name}
              </p>
            </div>
          ))
        ) : search ? (
          <p className="text-center text-gray-400">No results found.</p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchContent;
