const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  Title: {
    type: String,
    required: [true, "This property is required"]
  },
  Content: {
    type: String,
    required: [true, "This property is required"]
  },
  Views: {
    type: Number,
    default: 10
  }
});

const Posts = mongoose.model("Posts", postSchema);

module.exports = Posts;
