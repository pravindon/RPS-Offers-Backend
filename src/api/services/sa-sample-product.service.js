const saSampleProductModel = require('../models/sa-sample-product.model');

async function create(body) {
    try {
        var saSampleProductData = saSampleProductModel(body);
        saSampleData = await saSampleProductData.save();
        return saSampleData;
    } catch (e) {
        throw e;
    }
}

async function getAll () {
    try {
        var saSampleProductData = await saSampleProductModel.find({});
        return saSampleProductData;
    } catch (e) {
        throw e;
    }
}

async function getById(id) {
 try {
     const saSampleProductData = await saSampleProductModel.findById(id);
     return saSampleProductData;
 } catch (e) {
     throw e;
 }
}

async function updateOne(id, body) {
    try {
        const saSampleProductData = await saSampleProductModel.findByIdAndUpdate(id, body);
        return saSampleProductData;
    } catch (e) {
        throw e;
    }
}

async function remove(id) {
    try {
        const saSampleProductData = await saSampleProductModel.findByIdAndRemove(id);
        return saSampleProductData;
    } catch (e) {
        throw e;
    }
}

module.exports = { create, getAll, getById, updateOne, remove }