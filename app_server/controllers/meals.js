const fs = require('fs');
const mealsList = JSON.parse(fs.readFileSync('data/meals.json', 'utf-8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', {title: 'Travlr Getaways - Meals', mealsList});
};

module.exports = {
    meals
};