const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const FavoriteJoke = sequelize.define("FavoriteJoke", {
  jokeId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  jokeText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  jokeImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = FavoriteJoke;
