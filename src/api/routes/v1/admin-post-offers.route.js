const express = require('express');
const adminPostOffersController = require('../../controllers/admin-post-offers.controllers');
const router = express.Router();

router.post('/', adminPostOffersController.create);
router.get('/', adminPostOffersController.getAll);
router.get('/:id', adminPostOffersController.getById);
router.put('/:id', adminPostOffersController.update);
router.delete('/:id', adminPostOffersController.remove);

module.exports = router;