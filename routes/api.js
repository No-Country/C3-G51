const router = require('express').Router();
const apiCategoryRouter = require('./api/category')

router.use('/category', apiCategoryRouter);

module.exports= router;