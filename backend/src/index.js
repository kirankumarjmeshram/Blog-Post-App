const express = require("express");
const app = express();
const mongoose = require("mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/blog_post')
.then(()=>{
console.log('connected');
})
.catch((e)=>{
console.log("Something went wrong", e);
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

