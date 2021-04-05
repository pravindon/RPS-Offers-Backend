const mongoose = require('mongoose');
const validator = require('Validator');
const schema = mongoose.Schema;

const saSampleProductSchema = new schema ({
    productName : { type : String},
    brandName : { type : String },
    productImage : { type : String },
    description : { type : String},
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }

})

module.exports = mongoose.model('SampleProductList', saSampleProductSchema);