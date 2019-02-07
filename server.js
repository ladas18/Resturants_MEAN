var express = require("express"),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    models = require('./server/models/resturant.js'),
    db_connect = require('./server/config/mongoose.js');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist/public')));
// All Routes
// Root Request
require('./server/config/routes.js')(app)

// Setting our Server to Listen on Port: 8000
var server = app.listen(8000, () => {
    console.log("Running on port 8000");
});