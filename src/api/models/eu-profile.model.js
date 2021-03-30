const mongoose = require("mongoose");
const validator = require("validator");
const schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const euProfileShcema = new schema ({
    fullName : {type : String, required : true},
    emailId: {type : String},
    mobileNo: {type : Number, required : true},
    password: {type : String},
    gender: {type : String},
    address: {type : String},
    city: {type : String},
    landmark: {type : String},
    state: {type : String},
    country: {type : String},
    pinCode: {type : String},
    userProfile :  {type : String},
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
})

euProfileShcema.pre("save", async function(next) {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

module.exports = mongoose.model('euProfile', euProfileShcema);