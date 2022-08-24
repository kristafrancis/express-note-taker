//require express library
const express = require('express');

//create route to front end

//set up server
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

//
app.get('/api/notes', (req, res) => {
    res.json(allNotes.slice(1));
});



//make server run
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`)
});