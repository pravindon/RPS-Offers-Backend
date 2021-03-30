const adminPostOffersModel = require('../models/admin-post-offers.model');

async function create(body){
    try {
        var adminPostData = adminPostOffersModel(body);
        postData = await adminPostData.save();
        return postData;
    } catch (e) {
        throw e;
    }
}

async function getAll() {
    try {
        var adminPostOffer = await adminPostOffersModel.find();
        return adminPostOffer;
    } catch (e) {
        throw e;
    }
}

async function getById(id) {
    try {
        var adminPostOffers = await adminPostOffersModel.findById(id);
        return adminPostOffers;
    } catch (e) {
        throw e;
    }
}

async function update(id, body) {
    try {
        var adminPostOffers = await adminPostOffersModel.findByIdAndUpdate(id, body);
        return adminPostOffers;
    } catch (e) {
        throw e;
    }
}

async function remove(id) {
    try {
        var adminPostffers = await adminPostOffersModel.findByIdAndRemove(id);
        return adminPostffers;
    } catch (e) {
        throw e;
    }
}

module.exports = { create, getAll, getById, update, remove }