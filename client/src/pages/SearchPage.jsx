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
      <div className="w-full h-[55px] bg-red-400 flex items-center justify-center">
        <div class="relative w-full">
          <input
            class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Search for a joke"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        <button
          onClick={searchJokes}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jokes.map((joke) => (
          <JokeCard
            key={joke.id}
            joke={joke}
            onFavorite={() => addFavorite(joke)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
