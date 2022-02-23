const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewerId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        // required: false 
    },
    // restaurantId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "restaurants",
    //     // required: false 
    // },
    sampleId: {
        type: Schema.Types.ObjectId,
        ref: "samples",
        // required: false 
    },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: "orders",
        // required: false 
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    sampleName: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});


module.exports = Review = mongoose.model('Review', ReviewSchema);