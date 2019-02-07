var mongoose = require('mongoose')
var Resturant = mongoose.model('Resturant') // We are retrieving this Schema from our Models, named 'Author'
var resturants = require('../controllers/resturants.js')
var path = require('path');

module.exports = (app) => {

    // Index request to show all users
    app.get('/resturant', resturants.index);

    // Retrieve a specific task by ID
    app.get('/resturant/:id', resturants.show);

    // POST route to create task
    app.post('/resturant', resturants.create);

    // Update a specific task by ID
    app.put('/resturant/:id', resturants.update);

    // Delete a specific task by ID
    app.delete('/resturant/:id', resturants.destroy);

    app.get('/find/:id', resturants.find);

    app.get('/review/:id', resturants.findReview);

    app.post('/review/:id', resturants.addreview)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
