const router = require('express').Router();
const apiCategoryRouter = require('./api/category');
const apiUserRouter = require('./api/user');

router.use('/user', apiUserRouter);
router.use('/category', apiCategoryRouter);

module.exports= router;