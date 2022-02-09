const Validator = require('validator');
const validText = require('./valid_text');
const validPhoneNum = require('./valid_phone_num');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.restaurantName = validText(data.restaurantName) ? data.restaurantName : '';
  data.restaurantOwner = validText(data.restaurantOwner) ? data.restaurantOwner : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  data.phoneNumber = validPhoneNum(data.phoneNumber) ? data.phoneNumber : '';
  data.address = validText(data.address) ? data.address : '';



  if (Validator.isEmpty(data.restaurantName)) {
    errors.restaurantName = 'Restaurant Name field is required';
  }

  if (Validator.isEmpty(data.restaurantOwner)) {
    errors.restaurantOwner = 'Restaurant Owner field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }
  if(!validPhoneNum(data.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number"
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required"
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};