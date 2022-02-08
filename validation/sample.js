const Validator = require("validator");
const validText = require("./valid-text");
// const validNum = require("./valid-num");

module.exports = function validateSample(data) {
  let errors = {};

  // data.stylistId = validText(data.stylistId) ? data.stylistId : "";
  data.sampleItem = validText(data.sampleItem) ? data.sampleItem : "";
  data.description = validText(data.description) ? data.description : "";
  data.price = validText(data.price) ? data.price : "";

  if (Validator.isEmpty(data.sampleItem)) {
    errors.sampleItem = "Style type field required"
  };

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field required"
  };

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};