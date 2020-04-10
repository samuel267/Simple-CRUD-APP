const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/api");

mongoose.connect("mongodb://127.0.0.1:27017/BlogPosts" , {});
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/api", routes);
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(" listening to port " + port);
});
