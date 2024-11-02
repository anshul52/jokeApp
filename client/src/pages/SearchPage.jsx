import React, { useState } from "react";
import JokeCard from "../components/JokeCard";
import axios from "axios";
import Nav from "../components/Nav";
const SearchPage = () => {
  const [jokes, setJokes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchJokes = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/search?term=${searchTerm}`
    );
    setJokes(response.data);
  };

  const addFavorite = async (joke) => {
    await axios.post("http://localhost:5000/api/favorites", {
      jokeId: joke.id,
      jokeText: joke.joke,
      jokeImage: null,
    });
  };

  return (
    <div className="w-full min-h-full ">
      <Nav />
      <div className="w-full h-[55px] flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div class="relative w-full">
            <input
              className="bg-gray-50 border w-[300px] outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  "
              type="text"
              placeholder="Search for a joke"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={searchJokes}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Search
          </button>
        </div>
      </div>
      {jokes.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {jokes?.map((joke) => (
            <JokeCard
              key={joke.id}
              joke={joke}
              onFavorite={() => addFavorite(joke)}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="flex h-[500px] items-center justify-center text-[70px]  w-full">
            Search Any Joke
            <div>
              <img src="./pngwing.com.png" alt="" className="h-[150px]" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
