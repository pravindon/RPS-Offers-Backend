const euProfileData = require('../models/eu-profile.model');

async function create(body) {
    try {
        var euProData = euProfileData(body);
        euData = await euProData.save();
        return euData;
    } catch (e) {
        throw e;
    }
}

async function getAll() {
    try {
        var result = await euProfileData.find({});
        return result;
    } catch (e) {
        throw e;
    }
}

async function getById(id) {
    try {
        var result = await euProfileData.findById(id);
        return result;
    } catch (e) {
        throw e;
    }
}

async function updateOne(id, body) {
    try {
        const result = await euProfileData.findByIdAndUpdate(id, body);
        return result;
    } catch (e) {
        throw e;
    }
}

async function findByIdAndRemove(id) {
    try {
        const result = await euProfileData.findByIdAndRemove(id);
        return result;
    } catch (e) {
        throw e;
    }
}

module.exports = {create, getAll, getById, updateOne, findByIdAndRemove};