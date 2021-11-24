const fs = require('fs');
//const info = JSON.parse(fs.readFileSync('data/news.json', 'utf-8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways - News'});
};

module.exports = {
    news
};