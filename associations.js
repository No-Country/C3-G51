const productAndcategory = (Category,Product)=>{
    Product.belongsToMany(Category, {through: "productCategory"});
    Category.belongsToMany(Product, {through: "productCategory"});

}

const suscriptionAndUser = (Suscription,User)=>{
    Suscription.hasMany(User);
    User.belongsTo(Suscription);
}

const suscriptionAndProduct = (Suscription,Product)=>{
    Suscription.hasMany(Product);
    Product.belongsTo(Suscription);

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
    productAndcategory : productAndcategory,
    suscriptionAndUser : suscriptionAndUser,
    userAndSale : userAndSale,
    productAndShoppingCart : productAndShoppingCart,
    saleAndShoppingCart : saleAndShoppingCart,
    suscriptionAndProduct : suscriptionAndProduct
}