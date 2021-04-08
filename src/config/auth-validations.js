const Joi = require('@hapi/joi');

const registrationValidate = (data) => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password : Joi.string().min(6).required(),
        mobileNo: Joi.string(),
        gender: Joi.string(),
        address: Joi.string(),
        city: Joi.string(),
        landmark: Joi.string(),
        state: Joi.string(),
        country: Joi.string(),
        pinCode: Joi.string(),
        userProfile : Joi.string(),
        createdDate: Joi.string(),
        updatedDate: Joi.string()
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