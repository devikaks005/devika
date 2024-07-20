// import mongoose
var mongoose = require('mongoose');

//connect with db
mongoose
.connect("mongodb+srv://devikaks7907:devika@cluster0.yhhwou1.mongodb.net/sngce?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>console.log(err));