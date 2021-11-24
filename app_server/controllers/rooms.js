const fs = require('fs');
const roomsList = JSON.parse(fs.readFileSync('data/rooms.json', 'utf-8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', {title: 'Travlr Getaways - Rooms', roomsList});
};

module.exports = {
    rooms
};