const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateRestaurant(data) {
  let errors = {};

  data.restaurantName = validText(data.restaurantName) ? data.restaurantName : "";
  data.address = validText(data.address) ? data.address : "";

  if (Validator.isEmpty(data.restaurantName)) {
    errors.title = "Name field required"
  };

  if (Validator.isEmpty(data.address)) {
    errors.body = "Address field required"
  };

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
