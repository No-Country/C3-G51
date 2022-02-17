const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {User} = require('../../db');
const {check, validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

//POST user
router.post('/register',[

    check('id','Id is required').not().isEmpty(),
    check('name','Name is required').not().isEmpty(),
    check('last_name','Last name is required').not().isEmpty(),
    check('date_of_birth','Date of birth is required').not().isEmpty(),
    check('address','Address is required').not().isEmpty(),
    check('suscription_id','Suscription is required').not().isEmpty(),
    check('email','Email is required').isEmail(), 
    check('password','Password min length 8').isLength({ min: 8 })

], async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);

});

//LOGIN
router.post('/login', async (req,res)=>{
    const user = await User.findOne({where:{
        email: req.body.email
    }});

    if (user) {

        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (validPassword) {
            res.json({success: 'TOKEN'}); 
        } else {
            res.json({error: 'Invalid email or password'}); 
        }

    } else {
        res.json({error: 'Invalid email or password'});
    }

});

module.exports = router