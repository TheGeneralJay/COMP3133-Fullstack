const express = require("express");
const db = require("../lab3_restaurant_database/seedDb.js");
const router = express.Router();

db.mongoose.connect(db.uri);

// Step 4.
// Get all restaurant details.
router.get("/restaurants", async (req, res) => {
  let query = req.query.sortBy;

  // Step 6.
  // Return id, cuisine, name, city, restaurant_id.
  // Parameter sorting.

  if (query === "ASC") {
    const restaurantsAsc = await db.Restaurants.find({})
      .select("_id cuisine name city restaurant_id")
      .sort({ restaurant_id: "asc" });

    res.status(200).json(restaurantsAsc);
  } else if (query === "DESC") {
    const restaurantsDesc = await db.Restaurants.find({})
      .select("_id cuisine name city restaurant_id")
      .sort({ restaurant_id: "desc" });

    res.status(200).json(restaurantsDesc);
  } else {
    const restaurants = await db.Restaurants.find({});
    res.status(200).json(restaurants);
  }
});

// Step 5.
// Return by cuisine.

// Japanese.
router.get("/restaurants/cuisine/Japanese", async (req, res) => {
  const restaurants = await db.Restaurants.find({ cuisine: "Japanese" });

  res.status(200).json(restaurants);
});

// Bakery.
router.get("/restaurants/cuisine/Bakery", async (req, res) => {
  const restaurants = await db.Restaurants.find({ cuisine: "Bakery" });

  res.status(200).json(restaurants);
});

// Italian.
router.get("/restaurants/cuisine/Italian", async (req, res) => {
  const restaurants = await db.Restaurants.find({ cuisine: "Italian" });

  res.status(200).json(restaurants);
});

// Step 7.
// Return all Delicatessen restaurants outside of Brooklyn.
router.get("/restaurants/Delicatessen", async (req, res) => {
  const delicatessenRestaurants = await db.Restaurants.find({
    cuisine: "Delicatessen",
    city: { $ne: "Brooklyn" },
  })
    .select("-_id cuisine name city")
    .sort({ name: "asc" });

  res.status(200).json(delicatessenRestaurants);
});

module.exports = router;
