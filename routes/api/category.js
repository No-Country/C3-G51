const router = require('express').Router();
const {Category} = require('../../db');

router.get('/', async (req,res) =>{
    const category = await Category.findAll();
    res.json(category);
});

router.post('/', async (req,res) =>{
    const category = await Category.create(req.body);
    res.json(category);
});

module.exports= router;
