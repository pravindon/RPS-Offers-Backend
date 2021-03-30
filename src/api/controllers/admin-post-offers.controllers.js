const adminPostOffersService = require('../services/admin-post-offers.service');

async function create(req, res) {
    try {
        var body = req.body;
        var adminPostPayload = await adminPostOffersService.create(body);
        res.status(201).json(adminPostPayload);
        console.log(adminPostPayload);
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAll(req, res) {
    try {
        const adminPostOffers = await adminPostOffersService.getAll();
        res.json(adminPostOffers)
    } catch (e) {
        res.status(500).json(e)
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const adminPostOffers = await adminPostOffersService.getById(id);
        res.json(adminPostOffers);
    } catch (e) {
        res.status(500).json(e)
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const adminPostOffers = await adminPostOffersService.update(id, body);
        res.status(201).json(adminPostOffers);
    } catch (e) {
        res.status(500).json(e)
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        const adminPostOffers = await adminPostOffersService.remove(id);
        res.json(adminPostOffers);
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports = { create, getAll, getById, update, remove }