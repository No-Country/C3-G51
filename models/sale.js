module.exports = (sequelize, type) => {
    return sequelize.define('sale',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: type.INTEGER,
        total: type.INTEGER
    });
}