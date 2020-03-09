const express = require('express');
const router = express.Router();
const { Customer, validate } = require('../models/Customer');

router.get('/', async (req, res) => {
    const customers = await Customer.find();
    res.send(customers);
});

router.post('/', async(req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    const { name, isGold, phone } = req.body;
    const customer = new Customer({ name, isGold, phone});
    customer = await customer.save();

    res.send(customer);
});

module.exports = router;