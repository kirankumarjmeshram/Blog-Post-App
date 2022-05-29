const express = require("express");
const app = express();

app.use("/user",(req,res)=>{
    console.log("Hello World 234")
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

