const express = require('express');
const euProfileController = require('../../controllers/eu-profile.controllers');
const router = express.Router();

router.get('/', euProfileController.getAll);
router.post('/', euProfileController.create);
router.get('/:id', euProfileController.getById);
router.put('/:id', euProfileController.updateOne);
router.delete('/:id', euProfileController.findByIdAndRemove);

module.exports = router;
