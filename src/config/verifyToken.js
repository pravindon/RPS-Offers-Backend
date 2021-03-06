const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('access_token');
    if(!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOEKN_SECRET);
        res.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}