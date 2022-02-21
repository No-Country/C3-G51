const router = require('express').Router();
const {Product} = require('../../db');
const {check, validationResult} = require('express-validator');

//GET all product
router.get('/', async (req,res) =>{
    const product = await Product.findAll();
    res.json(product);
});


module.exports= router;
