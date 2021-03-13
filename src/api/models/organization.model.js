const mongoose = require("mongoose");
const validator = require("validator");
const schema = mongoose.Schema;

const organisationSchema = new schema ({
    cardNo: {type : String, required : true, max : 10, unique : [true, "Email already available"]},
    orgnaziationName : {type : String, required : true, max : 50},
    adminName :  {type : String, max : 50},
    email:  {type : String, required : true, unique : [true, "Email already available"],
    validator(value){
        if(!validator.isEmail(value)) {
            throw new error("Invalid Error")
        }
    }},
    password :  {type : String, required : true, max : 30},
    confirmPassword :  {type : String, required : true},
    mobileNo :  {type : Number, required : true, unique : [true, "Mobile no is already available"]},
    mobileNoAlternate :  {type : String},
    dateOfBirth :  {type : Date, required : true},
    localAddress :  {type : String, required : true, max : 500},
    permanentAddress :  {type : String, required : true, max : 500},
    city :  {type : String, required : true},
    district :  {type : String, required : true},
    state :  {type : String, required : true},
    country :  {type : String, required : true},
    pinCode :  {type : String, required : true},
    firmType :  {type : String, required : true},
    description :  {type : String, max : 500},
    gender :  {type : String, required : true},
    firmLogo :  {type : String, required : true},
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
}, { versionKey : false });

module.exports = mongoose.model('organizationList', organisationSchema)