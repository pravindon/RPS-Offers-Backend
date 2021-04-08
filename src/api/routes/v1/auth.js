const router = require('express').Router();
// const User = require('../../models/user.model');
const User = require('../../models/eu-profile.model');
const { registrationValidate, loginValidate} = require('../../../config/validate');
const jwt = require('jsonwebtoken');
const bcript = require('bcryptjs');

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
        mobileNo: req.body.mobileNo,
        gender: req.body.gender,
        address: req.body.address,
        city: req.body.city,
        landmark: req.body.landmark,
        state: req.body.state,
        country: req.body.country,
        pinCode: req.body.pinCode,
        userProfile : req.body.userProfile,
        createdDate: req.body.createdDate,
        updatedDate: req.body.updatedDate
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
    const token = jwt.sign({_id: user._id}, process.env.TOEKN_SECRET);
    res.header('auth-token', token).send(token);
})

module.exports = router