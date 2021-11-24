const fs = require('fs');
//const info = JSON.parse(fs.readFileSync('data/about.json', 'utf-8'));

/* GET about view */
const about = (req, res) => {
    res.render('about', {title: 'Travlr Getaways - About'});
};

module.exports = {
    about
};