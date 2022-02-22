const router = require('express').Router();
const {Suscription} = require('../../db');
const {check, validationResult} = require('express-validator');

//GET all suscriptions
router.get('/', async (req,res) =>{
    const suscription = await Suscription.findAll();
    res.json(suscription);
});


module.exports= router;