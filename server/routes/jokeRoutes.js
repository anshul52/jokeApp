const express = require("express");
const router = express.Router();
const {
  searchJokes,
  addFavoriteJoke,
  getFavoriteJokes,
} = require("../controllers/jokesController");

router.get("/search", searchJokes);
router.post("/favorites", addFavoriteJoke);
router.get("/favorites", getFavoriteJokes);

module.exports = router;
