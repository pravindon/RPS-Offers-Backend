const organization = require('../models/organization.model');

async function create(body){
    try {
        var org = organization(body);
        org = await org.save();
        return org;
    } catch (e) {
        throw e;
    }
}

async function getAll() {
    try {
        const result = await organization.find({}).sort({createdAt : 1});
        return result;
    } catch (e) {
        throw e;
    }
}

async function getById(id) {
    try {
        const res = await organization.findById(id);
        return res;
    } catch (e) {
        throw e;
    }
}

async function updateOne(id, body) {
    try {
        const result = await organization.findByIdAndUpdate(id, body);
        return result;
    } catch (e) {
        throw e;
    }
}

async function remove(id) {
    try {
        const result = await organization.findByIdAndRemove(id);
        return result;
    } catch (e) {
        throw e;
    }
}

module.exports = { create, getAll, getById, updateOne, remove }
