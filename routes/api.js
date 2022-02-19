const router = require('express').Router();
const middleware = require('./middleware');
const apiCategoryRouter = require('./api/category');
const apiUserRouter = require('./api/user');

router.use('/user', apiUserRouter);
router.use('/category',middleware.checkToken, apiCategoryRouter);

module.exports= router;