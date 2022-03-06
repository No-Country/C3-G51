require('dotenv').config()
const Sequelize = require('sequelize');
const CategoryModel = require('./models/category');
const UserModel = require('./models/user');
const ProductModel = require('./models/product');
const SuscriptionModel = require('./models/suscription');
const SaleModel = require('./models/sale');

const
 { 
    categoryAndProduct,
    suscriptionAndUser,
    userAndSale,
    suscriptionAndProduct

 }
  = require('./associations');



const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql' 
});

const Category = CategoryModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Suscription = SuscriptionModel(sequelize, Sequelize);
const Sale = SaleModel(sequelize, Sequelize);


categoryAndProduct(Category,Product);
suscriptionAndUser(Suscription,User);
userAndSale(User,Sale);
suscriptionAndProduct(Suscription,Product);



sequelize.sync({force: true})
    .then(()=>{
        console.log('synchronized tables');
    });

module.exports = {
    Category,
    User,
    Product,
    Suscription,
    Sale
}
