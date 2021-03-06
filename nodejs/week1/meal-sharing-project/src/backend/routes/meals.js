const express = require ('express');
const router = express.Router ();
const fs = require ('fs');

// Read and parse meals.json file
const rawDataMeals = fs.readFileSync (
  __dirname + '/../data/meals.json',
  'utf8'
);
const meals = JSON.parse (rawDataMeals);
// console.log(meals);


router.get ('/', function (req, res) {
  res.json (meals);
});



// Add reviews to meals 

// Read and parse reviews.json file
const rawDataReviews = fs.readFileSync(__dirname + '/../data/reviews.json', 'utf8');
const reviews = JSON.parse(rawDataReviews);

// Give reviews to the right meals according to meal_id
meals.forEach(meal => {
  meal.reviews = [];
  for (let review of reviews) {
    if (meal.id === review.meal_id) {
      meal.reviews.push(review); 
    }
  }
});

module.exports = router;
