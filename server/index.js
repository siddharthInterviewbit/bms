const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dburl = "mongodb+srv://siddharth:FOrYp6GZmOTZWgh9@cluster0.bpjvihj.mongodb.net/scaler?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dburl).then((function () {
  console.log("connected to db");
})).catch(err => console.log(err));

app.listen(8081, () => {
  console.log("server is connected");
});
