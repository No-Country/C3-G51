const categoryAndProduct = (Category,Product)=>{
    Category.hasMany(Product);
}

const suscriptionAndUser = (Suscription,User)=>{
    Suscription.hasMany(User);
}

const userAndSale = (User,Sale)=>{
    User.hasMany(Sale);
}


const productAndShoppingCart = (Product,ShoppingCart)=>{
    Product.hasMany(ShoppingCart);
}

const saleAndShoppingCart = (Sale,ShoppingCart)=>{
    Sale.hasMany(ShoppingCart);
}



module.exports = {
    categoryAndProduct : categoryAndProduct,
    suscriptionAndUser : suscriptionAndUser,
    userAndSale : userAndSale,
    productAndShoppingCart : productAndShoppingCart,
    saleAndShoppingCart : saleAndShoppingCart
}