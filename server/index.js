const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jokeRoutes = require("./routes/jokeRoutes");
const sequelize = require("./config/database");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", jokeRoutes);

sequelize
  .sync()
  .then(() => console.log("Database synchronized"))
  .catch((err) => console.error("Error syncing database", err));

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
