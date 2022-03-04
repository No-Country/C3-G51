const router = require('express').Router();
const {Sale,Product,User,Suscription} = require('../../db');
const {check, validationResult} = require('express-validator');



//GET all sales
router.get('/', async (req,res) =>{
    const sale = await Sale.findAll({
        include:[
            {
                model: User,
                attributes : ['id','name'],
                include:[
                    {
                        model: Suscription,
                        attributes : ['name','price'],
                        include:                     
                        {
                            model: Product,
                            as: "Products",
                            attributes: ['id','name','description','price','brand','picture'],
                            through: {
                                attributes: ['Product_id','Suscription_id'],
                              }
                        }
                    }
                ]
            }
        ],
    });
    res.json(sale);
});

//GET sale BY id 
router.get('/:id', async (req,res) =>{
    const id = req.params.id
    const sale = await Sale.findByPk(id,{
        include:[
            {
                model: User,
                attributes : ['id','name'],
                include:[
                    {
                        model: Suscription,
                        attributes : ['name','price'],
                        include:                     
                        {
                            model: Product,
                            as: "Products",
                            attributes: ['id','name','description','price','brand','picture'],
                            through: {
                                attributes: ['Product_id','Suscription_id'],
                              }
                        }
                    }
                ]
            }
        ],
    });
    res.json(sale);
});

//POST sale
router.post('/',[
    check('userId','User id required').not().isEmpty(),
], async (req,res) =>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
    //Deber hacer un update en el usuario.
    const sale = await Sale.create(req.body);
    res.json(sale);
});

module.exports = router;
