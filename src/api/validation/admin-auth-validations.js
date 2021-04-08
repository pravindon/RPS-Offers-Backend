const Joi = require('@hapi/joi');

const registrationValidate = (data) => {
    const schema = {
        cardNo: Joi.string().max(50).required(),
        orgnaziationName : Joi.string().max(50).required(),
        adminName :  Joi.string().max(30).required(),
        email:  Joi.string().max(30).required().email(),
        password :  Joi.string().min(6).required(),
        confirmPassword :  Joi.string().max(50),
        mobileNo :  Joi.string().max(50),
        mobileNoAlternate :  Joi.string().max(50),
        dateOfBirth :  Joi.string().max(50),
        localAddress :  Joi.string().max(500).required(),
        permanentAddress :  Joi.string().max(500).required(),
        city :  Joi.string().max(50),
        district :  Joi.string().max(50),
        state :  Joi.string().max(50),
        country :  Joi.string().max(50),
        pinCode :  Joi.string().max(50),
        firmType :  Joi.string().max(50),
        description :  Joi.string().max(500),
        gender :  Joi.string().max(50),
        firmLogo :  Joi.string().max(50),
        createdDate: Joi.string(),
        updatedDate: Joi.string(),
        }
    return Joi.validate(data, schema)
};

const loginValidate = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password : Joi.string().min(6).required()
    }
    return Joi.validate(data, schema)
}

module.exports.registrationValidate = registrationValidate;
module.exports.loginValidate = loginValidate;