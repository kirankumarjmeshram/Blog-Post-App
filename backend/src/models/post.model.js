

const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    author: {
      type: Array,
      required: false,
    },
    label: {
      type: Array,
      required: false,
    },
    likes:[{type:ObjectId,ref:"User"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
