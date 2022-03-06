const router = require('express').Router();
const {Category,Product} = require('../../db');
const {check, validationResult} = require('express-validator');


//GET all categoy
router.get('/', async (req,res) =>{
    const category = await Category.findAll({
        attributes:['id','name'],
        include:                     
        {
            model: Product,
            as: "Products",
            attributes: ['id','name','description','price','brand','picture'],
            through: {
                attributes: ['Product_id','Category_id'],
              }
        }
    });
    res.json(category);
});

//GET category BY id
router.get('/:id', async (req,res) =>{
    const id = req.params.id
    const category = await Category.findByPk(id,{
        attributes:['id','name'],
        include:                     
        {
            model: Product,
            as: "Products",
            attributes: ['id','name','description','price','brand','picture'],
            through: {
                attributes: ['Product_id','Category_id'],
              }
        }
    });
    res.json(category);
});


//POST category
router.post('/',[

    check('name','Name id required').not().isEmpty()

], async (req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    const category = await Category.create(req.body);
    res.json(category);

});

//PUT category
router.put('/:id', async (req,res) =>{
    const id = req.params.id
    await Category.update(req.body,{
        where: {id : id}
    });
    res.json({success : `Category update id: ${id}`});
});

//DELETE category
router.delete('/:id', async (req,res) =>{
    const id = req.params.id
    await Category.destroy({
        where: {id : id}
    });
    res.json({success : `Category delete id: ${id}`});
});

module.exports= router;
