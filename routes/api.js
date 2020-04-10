const express = require("express");
const router = express.Router();
const Posts = require("../models/posts");

router.get("/posts", (req, res, next) => {
  Posts.find({})
    .then(posts => {
      posts.forEach(post => {
        res.send(post.Title);
      });
    })
    .catch(next);
});

router.post("/posts", (req, res, next) => {
  Posts.create(req.body)
    .then(post => {
      res.send(post);
    })
    .catch(next);
});

router.put("/posts/:id", (req, res, next) => {
  Posts.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Posts.findOne({ _id: req.params.id }).then(post => {
      res.send(post);
    });
  });
});

router.delete("/posts/:id", (req, res, next) => {
  Posts.findByIdAndRemove({ _id: req.params.id }).then(post => {
    res.send(post);
  });
});

module.exports = router;
