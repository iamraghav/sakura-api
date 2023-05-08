const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};


  if (!Validator.isLength(data.text, { min: 1, max: 300 })) {
		errors.text = 'Post must be between 10 and 300 characters';
	}

 
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
