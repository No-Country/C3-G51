const Sequelize = require('sequelize');
const CategoryModel = require('./models/category');
const UserModel = require('./models/user');
const ProductModel = require('./models/product');
const SuscriptionModel = require('./models/suscription');
const SaleModel = require('./models/sale');
const ShoppingCartModel = require('./models/shoppingCart');

const
 { 
    categoryAndProduct,
    suscriptionAndUser,
    userAndSale,
    productAndShoppingCart,
    saleAndShoppingCart,
    suscriptionAndProduct

 }
  = require('./associations');



const sequelize = new Sequelize('L2kV8emHXn', 'L2kV8emHXn', 'oVGZrhch8M',{
    host: 'remotemysql.com',
    dialect: 'mysql' 
});

const Category = CategoryModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Suscription = SuscriptionModel(sequelize, Sequelize);
const Sale = SaleModel(sequelize, Sequelize);
const ShoppingCart = ShoppingCartModel(sequelize, Sequelize);


categoryAndProduct(Category,Product);
suscriptionAndUser(Suscription,User);
userAndSale(User,Sale);
productAndShoppingCart(Product,ShoppingCart);
saleAndShoppingCart(Sale,ShoppingCart);
suscriptionAndProduct(Suscription,Product);



sequelize.sync({force: false})
    .then(()=>{
        console.log('synchronized tables');
    });

module.exports = {
    Category,
    User,
    Product,
    Suscription,
    Sale,
    ShoppingCart
}
