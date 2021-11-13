const fs = require('fs');
//const info = JSON.parse(fs.readFileSync('data/about.json', 'utf-8'));

/* GET travel view */
const contact = (req, res) => {
    res.render('contact', {title: 'Travlr Getaways - Contact'});
};

module.exports = {
    contact
};