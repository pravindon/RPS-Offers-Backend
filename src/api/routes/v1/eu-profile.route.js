const express = require('express');
const euProfileController = require('../../controllers/eu-profile.controllers');
const router = express.Router();
const verify = require('../../../config/verifyToken');

router.get('/', verify, euProfileController.getAll);
router.post('/', euProfileController.create);
router.get('/:id', euProfileController.getById);
router.put('/:id', euProfileController.updateOne);
router.delete('/:id', euProfileController.findByIdAndRemove);

module.exports = router;
