import React, { useEffect, useState } from "react";
import JokeCard from "../components/JokeCard";
import axios from "axios";
import Nav from "../components/Nav";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const response = await axios.get("http://localhost:5000/api/favorites");
      setFavorites(response.data);
    };
    fetchFavorites();
  }, []);

  return (
    <div className="w-full min-h-full ">
      <Nav />
      <h1 className="text-2xl font-bold">Favorite Jokes</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((joke) => (
          <JokeCard key={joke.jokeId} joke={joke} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
