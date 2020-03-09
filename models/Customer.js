const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: String,
    isGold: Boolean,
    phone: String
});

const Customer = mongoose.model('Customer', Schema);

function validateCustomer(customer) {
    const schema = {
      name: Joi.string().min(3).required()
    };
  
    return Joi.validate(customer, schema);
  }

module.exports.Customer = Customer;
module.exports.validate = validateCustomer;