const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema ({
    restaurantId: {
        type: Schema.Types.ObjectId,
        ref: "restaurants",
        // require: false
    },
    sampleItem: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: false
    },
    imageUrl: {
        type: String,
        require: false,
    }
}, {
    timestamps: true
});

module.exports = Sample = mongoose.model('Sample', SampleSchema);