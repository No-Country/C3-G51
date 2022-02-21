const router = require('express').Router();
const middleware = require('./middleware');
const apiCategoryRouter = require('./api/category');
const apiUserRouter = require('./api/user');
const apiProductRouter = require('./api/product');



router.use('/user', apiUserRouter);
router.use('/category', middleware.checkToken , apiCategoryRouter);
router.use('/product', apiProductRouter);


module.exports= router;