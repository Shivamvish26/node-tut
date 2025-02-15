const express = require("express");
const path = require("path");
const app = express();

const publicpath = path.join(__dirname, "Project");

app.use(express.static(publicpath));

app.listen(3000, () => {
  console.log("server is running on 3000 port");
});
