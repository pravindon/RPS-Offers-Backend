var studentController = require("../../controllers/student.controllers");
var express = require("express");

var router = express.Router();

router.get("/", studentController.getAll);
router.post("/", studentController.create);
router.put("/:id", studentController.updateOne);
router.get("/:id", studentController.getById);
router.delete("/:id", studentController.findByIdAndRemove);

module.exports = router;