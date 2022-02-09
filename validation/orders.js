const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateTweetInput(data) {
    let errors = {};

    data.sample = validText(data.sample) ? data.sample : '';

    // if (!Validator.isLength(data.text, { min: 5, max: 140 })) {
    //     errors.text = 'Order must be between 5 and 140 chars'
    // }

    if (Validator.isEmpty(data.sample)) {
        errors.sample = 'Sample field is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }


    
}