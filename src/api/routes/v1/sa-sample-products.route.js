const express = require('express');
const saSampleProductController = require('../../controllers/sa-sample-product.controllers')
const router = express.Router();

router.get('/', saSampleProductController.getAll)
router.post('/', saSampleProductController.create);
router.get('/:id', saSampleProductController.getById);
router.put('/:id', saSampleProductController.updateOne);
router.delete('/:id', saSampleProductController.remove);

module.exports = router;