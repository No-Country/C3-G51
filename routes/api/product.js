const router = require('express').Router();
const {Product,Category, Suscription} = require('../../db');
const {check, validationResult} = require('express-validator');

//GET all product
router.get('/', async (req,res) =>{
    const product = await Product.findAll({
        attributes: ['id','name','description','price','brand','picture'],
        
        include:[
        {
            model: Category,
            attributes: ['name']
        },
        {
            model: Suscription,
            attributes: ['name','price','days']
        }
    ]
    });
    res.json(product);
});

//GET product BY id
router.get('/:id', async (req,res) =>{
    const id = req.params.id
    const product = await Product.findOne({
        attributes: ['id','name','description','price','brand','picture'],

        include:[
        {
            model: Category,
            attributes: ['name']
        },
        {
            model: Suscription,
            attributes: ['name','price','days']
        }
        ],

        where:
            {id : id}
    });
    res.json(product);
});

//POST product
router.post('/',[
    check('name','Name id required').not().isEmpty(),
    check('description','Description id required').not().isEmpty(),
    check('price','Price id required').not().isEmpty(),
    check('categoryId','Category is required').not().isEmpty(),
    check('brand','Brand is required').not().isEmpty(),
    check('picture','Picture is required').not().isEmpty(),
    check('suscriptionId','Suscription is required').not().isEmpty()

], async (req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    const product = await Product.create(req.body);
    res.json(product);

});

//PUT product
router.put('/:id', async (req,res) =>{
    const id = req.params.id
    await Product.update(req.body,{
        where: {id : id}
    });
    res.json({success : `Product update id: ${id}`});
});

//DELETE product
router.delete('/:id', async (req,res) =>{
    const id = req.params.id
    await Product.destroy({
        where: {id : id}
    });
    res.json({success : `Product delete id: ${id}`});
});



module.exports= router;
