
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






module.exports = {
    categoryAndProduct : categoryAndProduct,
    suscriptionAndUser : suscriptionAndUser,
    userAndSale : userAndSale,
    suscriptionAndProduct : suscriptionAndProduct
}