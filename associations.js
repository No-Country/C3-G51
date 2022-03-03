// const categoryAndProduct = (Category,Product)=>{
//     Category.hasMany(Product);
//     Product.belongsTo(Category);
// }

const categoryAndProduct = (Category,Product)=>{
    
Category.belongsToMany(Product, {
    through: "Category_Product",
    as: "Products",
    foreignKey: "Category_id",
  });

  Product.belongsToMany(Category, {
    through: "Category_Product",
    as: "Categories",
    foreignKey: "Product_id",
  });
}

const suscriptionAndUser = (Suscription,User)=>{
    Suscription.hasMany(User);
    User.belongsTo(Suscription);
}

 const suscriptionAndProduct = (Suscription,Product)=>{
    Suscription.belongsToMany(Product, {
        through: "Suscription_Product",
        as: "Products",
        foreignKey: "Suscription_id",
      });
    
      Product.belongsToMany(Suscription, {
        through: "Suscription_Product",
        as: "Suscriptions",
        foreignKey: "Product_id",
      });
 }

const userAndSale = (User,Sale)=>{
    User.hasMany(Sale);
    Sale.belongsTo(User);

}


const productAndShoppingCart = (Product,ShoppingCart)=>{
    Product.hasMany(ShoppingCart);
    ShoppingCart.belongsTo(Product);

}

const saleAndShoppingCart = (Sale,ShoppingCart)=>{
    Sale.hasMany(ShoppingCart);
    ShoppingCart.belongsTo(Sale);
}



module.exports = {
    categoryAndProduct : categoryAndProduct,
    suscriptionAndUser : suscriptionAndUser,
    userAndSale : userAndSale,
    productAndShoppingCart : productAndShoppingCart,
    saleAndShoppingCart : saleAndShoppingCart,
    suscriptionAndProduct : suscriptionAndProduct
}