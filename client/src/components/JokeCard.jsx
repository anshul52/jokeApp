import React from "react";

const JokeCard = ({ joke, onFavorite }) => {
  return (
    <div
      className="p-4 border rounded shadow"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p>{joke.jokeText || joke.joke}</p>
      {onFavorite && (
        <button
          onClick={onFavorite}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
        >
          Favorite
        </button>
      )}
    </div>
  );
};

export default JokeCard;
