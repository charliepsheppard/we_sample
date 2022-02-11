const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    sample: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    userName: {
      type: String,
      required: false
    },
    restaurantId: {
        type: Schema.Types.ObjectId,
        ref: "restaurants",
    },
    restaurantName: {
      type: String,
      required: false
    },
    timeFrame: {
        type: String,
        required: false
    },
    //need to make these plural or an array?
    sampleId: {
        type: Schema.Types.ObjectId,
        ref: "samples",
    },
    imageUrl: {
        type: String,
    },
    message: {
        type: String,
    }
}, {
    timestamps: true
});

const Order = mongoose.model('order', OrderSchema);

module.exports = Order;