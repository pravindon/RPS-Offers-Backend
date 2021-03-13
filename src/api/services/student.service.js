var student = require('./../models/students.model');

async function create(body) {
    try {
        var stud = new student(body);
        stud = await stud.save(); //when fail its goes to catch
        return stud;
    } catch (e) {
        console.log('err' + e);
        throw e;
    }
}

async function getAll(){
    try {
        const result = await student.find({}).sort({createdAt:1});
        return result;
    }catch(e){
        console.log('err',e);
        throw e;
    }
}

async function getById(id){
    try{
        console.log("id, body: " + id);
        const res = await student.findById(id);
        console.log("res: " + res);
        return res;
    }catch(e){
        console.log('err',e);
        throw e;
    }
}

async function updateOne(id,body){
    try{
        const res = await student.findByIdAndUpdate(id,body);
        return res;
    }catch(e){
        console.log('err',e);
        throw e;
    }
}

async function remove(id){
    try{
        const res = await student.findByIdAndRemove(id);
        return res;
    }catch(e){
        console.log('err',e);
        throw e;
    }
}

module.exports = { create, getAll, getById, updateOne, remove };