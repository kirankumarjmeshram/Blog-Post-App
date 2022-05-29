const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

mongoose.connect('mongodb://127.0.0.1:27017/blog_post')

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

