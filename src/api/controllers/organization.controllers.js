organizationService = require('../services/organization.service');

async function create(req, res) {
    try {

        const password = req.body.password;
        const confPassword = req.body.confirmPassword;
        if (password === confPassword) {
            var body = req.body;
            var organization = await organizationService.create(body);
            res.status(201).json(organization);
            console.log(organization);
        } else {
            res.send("Password not matched");
        }
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAll(req, res) {
    try {
        var result = await organizationService.getAll();
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
} 

async function getById(req, res) {
    try {
        var id = req.params.id;
        var result = await organizationService.getById(id);
        res.json(result);
    } catch (e) {
        res.status(500).json(e)
    }
}

async function updateOne(req, res) {
    try {
        var id = req.params.id;
        var body = req.body;
        var result = await organizationService.updateOne(id, body)
        // return result;
        res.status(201).json(result)
    } catch (e) {
        res.status(500).json(e);
    }
}

async function findByIdAndRemove(req, res) {
    try {
        var id = req.params.id;
        var result = await organizationService.remove(id);
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
}

module.exports = { create, getAll, getById, updateOne, findByIdAndRemove }