// importing express
var express = require('express');
require('./connection');
var stuModel = require('./model/student');
var cors = require('cors');
// intialization
var app= express();

// middleware
app.use(express.json());
app.use(cors());

//api
// add 
app.post("/add",async(req,res) => {
    try {
        await stuModel(req.body).save();
        res.send({message : "data added"});
    } catch (error) {
        console.log(error);
    }
});
// to view
app.get("/view",async(req,res)=>{
    console.log("h")
    try {
        var data = await stuModel.find()
        res.send(data);
    } catch (error) {
        console.log(error);
    }
});
// delete
app.delete('/remove/:id',async(req,res)=>{
    try {
        var id = req.params.id;
        await stuModel.findByDelete(id)
        res.send({message: 'deleted successfully'})
    } catch (error) {
        console.log(error)
    }
})
// UPDATE
app.put('/edit/:id',async (req,res)=>{
    var id = req.params.id
    try {
        var data = await stuModel.findByUpdate(id,req.body);
        res.send({message: 'updated sucessfully',data});
    } catch (error) {
       console.log(error)
    }
})
//connecting to port
app.listen('3009',()=>{
    console.log("port is  up and running!!")
});
