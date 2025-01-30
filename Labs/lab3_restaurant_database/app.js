const express = require("express");
const app = express();
const db = require("./seedDb.js");
const port = 3000;

db.mongoose.connect(db.uri);

// Seed the data then comment this out.
// db.seed(db);

const restaurantRoutes = require("./restaurantRoutes.js");

app.use("/", restaurantRoutes);

app.listen(port, () => {
  console.log(`App listening at port ${port}.`);
});
