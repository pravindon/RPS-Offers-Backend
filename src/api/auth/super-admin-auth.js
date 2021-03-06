const router = require('express').Router();
// const User = require('../../models/user.model');
const User = require('../models/user.model');
const { registrationValidate, loginValidate} = require('../validation/super-admin-auth-validations');
const jwt = require('jsonwebtoken');
const bcript = require('bcryptjs');
var randtoken = require('rand-token');

router.post('/register', async (req, res) =>{

    // Validate the user
    const {error} = registrationValidate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Check the user email id
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists')

    //Hash the password
    const salt = await bcript.genSalt(10);
    const hashPassword = await bcript.hash(req.body.password, salt);

    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashPassword,
        date: req.body.date
    });

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    // Validate the user
    const {error} = loginValidate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Check the user email id
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email or password is wrong')

    //Check password 
    const validPass = await bcript.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Email or password is wrong');

    //Create and assign a token
    const payload = { email: user.email, _id: user._id };
    const token = jwt.sign(payload, process.env.TOEKN_SECRET);
    res.header('access_token', token).send({'access_token': token, 'refresh_token': randtoken.generate(16)});
})

module.exports = router