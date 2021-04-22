const router = require('express').Router();
// const User = require('../../models/user.model');
const User = require('../models/organization.model');
const { registrationValidate, loginValidate} = require('../validation/admin-auth-validations');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) =>{

    // Validate the user
    const {error} = registrationValidate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Check the user email id
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists')

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        cardNo: req.body.cardNo,
        orgnaziationName : req.body.orgnaziationName,
        adminName : req.body.adminName,
        email: req.body.email,
        password : hashPassword,
        confirmPassword : req.body.confirmPassword,
        mobileNo : req.body.mobileNo,
        mobileNoAlternate : req.body.mobileNoAlternate,
        dateOfBirth : req.body.dateOfBirth,
        localAddress : req.body.localAddress,
        permanentAddress : req.body.permanentAddress,
        city : req.body.city,
        district : req.body.district,
        state : req.body.state,
        country : req.body.country,
        pinCode : req.body.pinCode,
        firmType : req.body.firmType,
        description : req.body.description,
        gender : req.body.gender,
        firmLogo : req.body.firmLogo,
        createdDate:req.body.createdDate,
        updatedDate:req.body.updatedDate
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
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Email or password is wrong');

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOEKN_SECRET);
    res.header('access_token', token).send(token);
})

module.exports = router