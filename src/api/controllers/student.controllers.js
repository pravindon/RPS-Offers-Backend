studentService = require("../services/student.service");

async function create(req, res) {
    try {
        var body = req.body;
        var stud = await studentService.create(body);
        res.status(201).json(stud)
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getAll(req, res){
    try { 
        var result = await studentService.getAll();
        res.json(result);
    } catch (e) {
        res.status(500).json(e);
    }
}

async function getById(req, res){
    try {
      var id = req.params.id;
      console.log("inside controller:" + req);
      var result = await studentService.getById(id);
      res.json(result);
    } catch (e) {
      res.status(500).json(e);
    }
}

async function updateOne(req, res){
    try {
      var id = req.params.id;
      var body = req.body;
      var uite = await studentService.updateOne(id, body);
      res.status(201).json(uite);
    }
    catch (e) {
      res.status(500).json(e);
    }
}

async function findByIdAndRemove(req, res){
    try {
      var id = req.params.id;
      console.log("inside controller:" + req);
      var result = await studentService.remove(id);
      res.json(result);
    }
    catch (e) {
      res.status(500).json(e);
    }
}

module.exports = { create, getAll, getById, updateOne, findByIdAndRemove }