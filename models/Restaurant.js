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
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String, 
    required: true
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