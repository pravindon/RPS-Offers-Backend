const saSampleProductModel = require('../models/sa-sample-product.model');
const saSampleProductService = require('../services/sa-sample-product.service');

async function create(req, res) {
    try {
        const body = req.body;
        const saSampleProduct = await saSampleProductService.create(body);
        res.status(201).json(saSampleProduct);
        console.log(saSampleProduct);
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAll(req, res) {
    try {
        const saSampleProduct = await saSampleProductService.getAll();
        res.json(saSampleProduct);
        console.log(saSampleProduct);
    } catch (e) {
        res.status(500).json(e)
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const saSampleProduct = await saSampleProductService.getById(id);
        res.json(saSampleProduct)
    } catch (e) {
        res.status(500).json(e)
    }
}

async function updateOne(req, res) {
    try {
        const id = req.params.id;
        const body = req.body;
        const saSampleProduct = await saSampleProductService.updateOne(id, body);
        res.status(201).json(saSampleProduct);
        console.log(saSampleProduct);
    } catch (e) {
        res.status(500).json(e)
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        const saSampleProduct = await saSampleProductService.remove(id);
        res.json(saSampleProduct);
        console.log(saSampleProduct);
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports = { create, getAll, getById, updateOne, remove }