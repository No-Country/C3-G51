module.exports = (sequelize, type) => {
    return sequelize.define('user',{
        id: {
            type: type.INTEGER,
            primaryKey: true
        },
        name: type.STRING,
        last_name: type.STRING,
        date_of_birth: type.DATE,
        address: type.STRING,
        suscription_id: {
            type: type.INTEGER,
            
        },
        email: type.STRING,
        password: type.STRING
    });
}