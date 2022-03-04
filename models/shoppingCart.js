module.exports = (sequelize, type) => {
    return sequelize.define('shoppingCart',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        saleId: type.INTEGER,
        productId: type.INTEGER
    });
}