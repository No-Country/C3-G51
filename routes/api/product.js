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
            as: "Categories",
            attributes: ['name'],
            through: {
                attributes: ['Category_id','Product_id'],
              }
        },
        {
            model: Suscription,
            as: "Suscriptions",
            attributes: ['name'],
            through: {
                attributes: ['Suscription_id','Product_id'],
              }
        }

    ]
    });
    res.json(product);
});

//GET product BY id
router.get('/:id', async (req,res) =>{
    const id = req.params.id
    const product = await Product.findByPk(id,{
        attributes: ['id','name','description','price','brand','picture'],

        include:[
        {
            model: Category,
            as: "Categories",
            attributes: ['name'],
            through: {
                attributes: ['Category_id','Product_id'],
              }
        },
        {
            model: Suscription,
            as: "Suscriptions",
            attributes: ['name'],
            through: {
                attributes: ['Suscription_id','Product_id'],
              }
        }
        ]
    });
    res.json(product);
});

// //GET product BY suscription
// router.get('/:id', async (req,res) =>{
//     const suscription_id = req.params.id
//     const product = await Product.findOne({
//         attributes: ['id','name','description','price','brand','picture'],

//         include:[
//         {
//             model: Category,
//             as: "Categories",
//             attributes: ['name'],
//             through: {
//                 attributes: ['Category_id','Product_id'],
//               }
//         },
//         {
//             model: Suscription,
//             as: "Suscriptions",
//             attributes: ['name'],
//             through: {
//                 attributes: ['Suscription_id','Product_id'],
//               }
//         }
//         ],

//         where:
//             {suscription_id : Suscription_id}
//     });
//     res.json(product);
// });

//POST product
router.post('/',[
    check('name','Name id required').not().isEmpty(),
    check('description','Description id required').not().isEmpty(),
    check('price','Price id required').not().isEmpty(),
    check('category','Category is required').not().isEmpty(),
    check('brand','Brand is required').not().isEmpty(),
    check('picture','Picture is required').not().isEmpty(),
    check('suscription','Suscription is required').not().isEmpty()
], async (req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    const product = await Product.create(req.body);
    const category = Array.from(req.body.category);
    const suscription = Array.from(req.body.suscription);

    if (category.length > 1) {
        for (let i = 0; i < category.length; i++) {
            product.addCategory(category[i],product.id);
        }
    }else{
        product.addCategory(category,product.id);
    }

    if (suscription.length > 1) {
        for (let i = 0; i < suscription.length; i++) {
            product.addSuscription(suscription[i],product.id);
        }
    }else{
        product.addsuscription(suscription,product.id);
    }

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
