const router = require('express').Router();
const verify = require('../../config/verifyToken');

router.get('/', verify, (req, res) =>{
    res.json({
        posts : {
            name : 'pravin',
            lastName : 'Dongardive'
        }
    });
})

module.exports = router