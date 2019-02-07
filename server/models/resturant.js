var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name."],
        minlength: [3, "Your name must be at least 3 characters"]
    },
    star: {
      type: Number,
      required: [true, "Must enter a rating"],
  },
  review: {
    type: String,
    required: [true, "Must enter an review."],
    minlength: [3, "Review must be at least 3 characters"]
  }
}, { timestamps: true });

var ResturantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must enter an resturants's name"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    cuisine: {
      type: String,
      required: [true, "Must enter a cuisine."],
      minlength: [3, "Cuisine must be at least 3 characters"]
  },
  review: [ReviewSchema]
}, { timestamps: true });

mongoose.model('Resturant', ResturantSchema); // We are setting this Schema in our Models as 'Author'
mongoose.model('Review', ReviewSchema)
