const mongoose = require('mongoose');
const validator = require("validator");
const schema = mongoose.Schema;

const AdminPostOffersSchema = new schema({
    cardNo : {type :String},
    title : {type :String},
    description : {type :String},
    offerImage : { type : String},
    startDate : { type : String},
    endDate : { type : String},
    status : { type : Boolean},
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('offerList', AdminPostOffersSchema);