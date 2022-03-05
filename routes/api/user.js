const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {User,Suscription} = require('../../db');
const {check, validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');

//GET all user
router.get('/', async (req,res) =>{
    const user = await User.findAll({
        attributes: ['name','lastName','dateOfBirth','address','email'],    
        include:[
        {
            model: Suscription,
            attributes: ['name','price','days']
        }
    ]
    });
    res.json(user);
});

//POST user, register.
router.post('/register',[

    check('id','Id is required').not().isEmpty(),
    check('name','Name is required').not().isEmpty(),
    check('last_name','Last name is required').not().isEmpty(),
    check('date_of_birth','Date of birth is required').not().isEmpty(),
    check('address','Address is required').not().isEmpty(),
    check('suscriptionId','Suscription is required').not().isEmpty(),
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

//PUT user
router.put('/:id', async (req,res) =>{
    const id = req.params.id
    await User.update(req.body,{
        where: {id : id}
    });
    res.json({success : `User update id: ${id}`});
});

//DELETE user
router.delete('/:id', async (req,res) =>{
    const id = req.params.id
    await User.destroy({
        where: {id : id}
    });
    res.json({success : `User delete id: ${id}`});
});

//LOGIN
router.post('/login', async (req,res)=>{
    const user = await User.findOne({where:{
        email: req.body.email
    }});

    if (user) {
        // res.send('Wellcome');
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (validPassword) {
            res.json({success: createToken(user)}); 
        } else {
            res.json({error: 'Invalid email or password'}); 
        }

    } else {
        res.json({error: 'Invalid email or password'});
    }

});

//CREATE WEB TOKEN
const createToken = (user)=>{
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(10,'minutes').unix()
    }
    return jwt.encode(payload, 'alula');
}

module.exports = router