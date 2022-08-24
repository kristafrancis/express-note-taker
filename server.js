//require express library
const express = require('express');

//gives each note a unique ID
const uniqid = require('uniqid');

//set up server
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

//use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//make server run
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}!`)
});