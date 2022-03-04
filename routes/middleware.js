const jwt = require('jwt-simple');
const moment = require('moment');


//VALIDATE USER TOKEN
const checkToken = (req, res, next)=>{
    if (!req.headers['user-token']) {
        return res.json({error: 'headers "user-token" is required'});
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.decode(userToken, 'alula');
    } catch (e) {
        return res.json({error: `invalid "user-token" ${e}`});
    }

    if (payload.expiredAt < moment().unix()) {
        return res.json({error: 'user-token expired'});
    }

    req.userId = payload.id;
    next();
}

module.exports = {
    checkToken: checkToken
}