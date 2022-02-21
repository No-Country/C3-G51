const Sequelize = require('sequelize');
const CategoryModel = require('./models/category');
const UserModel = require('./models/user');
const ProductModel = require('./models/product');



const sequelize = new Sequelize('L2kV8emHXn', 'L2kV8emHXn', 'oVGZrhch8M',{
    host: 'remotemysql.com',
    dialect: 'mysql' 
});

const Category = CategoryModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);



sequelize.sync({force: false})
    .then(()=>{
        console.log('synchronized tables');
    });

module.exports = {
    Category,
    User,
    Product
}
