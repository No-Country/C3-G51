const router = require('express').Router();
const middleware = require('./middleware');
const apiCategoryRouter = require('./api/category');
const apiUserRouter = require('./api/user');
const apiProductRouter = require('./api/product');
const apiSuscriptionRouter = require('./api/product');


//middleware.checkToken

router.use('/user', apiUserRouter);
router.use('/category', apiCategoryRouter);
router.use('/product', apiProductRouter);
router.use('/suscription', apiSuscriptionRouter);



module.exports= router;