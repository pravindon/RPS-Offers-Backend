const express = require('express');
const organizationController = require('../../controllers/organization.controllers');

const router = express.Router();

router.get('/', organizationController.getAll);
router.post('/', organizationController.create);
router.get('/:id', organizationController.getById);
router.put('/:id', organizationController.updateOne);
router.delete('/:id', organizationController.findByIdAndRemove);

module.exports = router;
