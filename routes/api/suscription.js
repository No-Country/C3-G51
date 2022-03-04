const router = require('express').Router();
const {Suscription} = require('../../db');
const {check, validationResult} = require('express-validator');

//GET all suscriptions
router.get('/', async (req,res) =>{
    const suscription = await Suscription.findAll();
    res.json(suscription);
});

//GET suscriptions BY id 
router.get('/:id', async (req,res) =>{
    const id = req.params.id
    const suscription = await Suscription.findOne({
        where: {id : id}
    });
    res.json(suscription);
});

//POST suscription
router.post('/',[
    check('name','Name id required').not().isEmpty(),
    check('price','Price id required').not().isEmpty(),
    check('days','Days id required').not().isEmpty()
], async (req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    const suscription = await Suscription.create(req.body);
    res.json(suscription);

});

//PUT suscription
router.put('/:id', async (req,res) =>{
    const id = req.params.id
    await Suscription.update(req.body,{
        where: {id : id}
    });
    res.json({success : `Suscription update id: ${id}`});
});

//DELETE suscription
router.delete('/:id', async (req,res) =>{
    const id = req.params.id
    await Suscription.destroy({
        where: {id : id}
    });
    res.json({success : `Suscription delete id: ${id}`});
});


module.exports= router; 