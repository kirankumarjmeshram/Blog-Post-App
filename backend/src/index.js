const express = require("express");
const app = express();
const mongoose = require("mongoose");

const authController = require("../src/controllers/auth.controller");
const userController = require("../src/controllers/user.controller");
const postController = require("../src/controllers/posts.controller");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect('mongodb://127.0.0.1:27017/blog_post')
.then(()=>{
console.log('connected');
})
.catch((e)=>{
console.log("Something went wrong", e);
})



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
  
  app.use("/auth", authController);
  app.use("/users", userController);
  app.use("/posts", postController);
  // app.use("/",()=>{
  //   console.log("Hello world")
  // })




app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

