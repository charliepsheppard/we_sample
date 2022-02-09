const Validator = require('validator');
const validText = require('./valid_text');

module.exports = function validateReview(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : "";
  data.body = validText(data.body) ? data.body : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field required"
  };

  if (Validator.isEmpty(data.body)) {
    errors.body = "Body field required"
  };

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}