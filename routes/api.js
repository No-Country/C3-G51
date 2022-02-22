const router = require('express').Router();
const middleware = require('./middleware');
const apiCategoryRouter = require('./api/category');
const apiUserRouter = require('./api/user');
const apiProductRouter = require('./api/product');
const apiSuscriptionRouter = require('./api/suscription');
const apiShoppingCartRouter = require('./api/shoppingCart');
const apiSaleRouter = require('./api/sale');




//middleware.checkToken

router.use('/user', apiUserRouter);
router.use('/category', apiCategoryRouter);
router.use('/product', apiProductRouter);
router.use('/suscription', apiSuscriptionRouter);
router.use('/shoppingCart', apiShoppingCartRouter);
router.use('/sale', apiSaleRouter);





module.exports= router;