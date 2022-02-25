const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  restaurantName: {
    type: String,
    required: true
  },
  restaurantOwnerId: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  samples: {
    type: Array,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String, 
    required: false
  },
  address: {
    type: String, 
    required: true
  },
  averageRating: {
    type: Number,
    required: false
  },
  imageUrl: {
    type: String,
    required: false,
  }
}, {
  timestamps: true
});

module.exports = Restaurant = mongoose.model('Restaurant', RestaurantSchema);