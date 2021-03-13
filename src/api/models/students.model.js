const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const StudentSchema = new Schema ({
    name : {
        type:String,
        required : true,
        minlenght : 4
    },
    email : {
        type: String,
        required: true,
        unique : [true, "Email already available"],
        validator(value){
            if(!validator.isEmail(value)) {
                throw new error("Invalid Error")
            }
        }
    },
    phone : {
        type : Number,
        min : 10,
        required : true,
        unique : true
    },
    address : {
        type: String,
        required : true
    },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
})

module.exports = mongoose.model('StudentsList', StudentSchema);
