module.exports = (sequelize, type) => {
    return sequelize.define('suscription',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        price: type.INTEGER,
        days: type.INTEGER
    });
}