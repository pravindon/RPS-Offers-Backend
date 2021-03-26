const euProfileService = require('../services/eu-profile.service');

async function create(req, res) {
    try {
        var body = req.body;
        var euProfile = await euProfileService.create(body);
        res.status(201).json(euProfile);
        console.log(euProfile);
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAll(req, res){
    try {
        var result = await euProfileService.getAll();
        console.log(result);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getById(req, res) {
    try {
        var id = req.params.id;
        var result = await euProfileService.getById(id);
        res.json(result)
    } catch (e) {
        res.status(500).json(e);
    }
}

async function updateOne(req, res) {
    try {
        var id = req.params.id;
        var body = req.body;
        var result = await euProfileService.updateOne(id, body);
        res.status(201).json(result);
    } catch (e) {
        res.status(500).json(e)
    }
}

async function findByIdAndRemove(req, res) {
    try {
        var id = req.params.id;
        var result = await euProfileService.findByIdAndRemove(id);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
}

module.exports = {create, getAll, getById, updateOne, findByIdAndRemove}