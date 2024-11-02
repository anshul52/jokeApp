const axios = require("axios");
const FavoriteJoke = require("../models/favoriteJoke");

exports.searchJokes = async (req, res) => {
  try {
    const { term } = req.query;
    const response = await axios.get("https://icanhazdadjoke.com/search", {
      headers: { Accept: "application/json" },
      params: { term },
    });
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jokes." });
  }
};

exports.addFavoriteJoke = async (req, res) => {
  try {
    const { jokeId, jokeText, jokeImage } = req.body;
    const [joke, created] = await FavoriteJoke.findOrCreate({
      where: { jokeId },
      defaults: { jokeText, jokeImage },
    });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: "Failed to add favorite joke." });
  }
};

exports.getFavoriteJokes = async (req, res) => {
  try {
    const jokes = await FavoriteJoke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch favorite jokes." });
  }
};
