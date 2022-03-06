module.exports = (sequelize, type) => {
    return sequelize.define('user',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        lastName: type.STRING,
        dateOfBirth: type.DATE,
        address: type.STRING,
        suscriptionId: {
            type: type.INTEGER,
            
        },
        email: type.STRING,
        password: type.STRING
    });
}