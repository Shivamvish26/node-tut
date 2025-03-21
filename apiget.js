const express = require("express");
const app = express();
const dbconnect = require("./Mongo__Connection/mongodb");

app.get("/", async (req, resp) => {
  let data = await dbconnect();
  data = await data.find({}).toArray();
  // console.log("Reterving the data..", data);
  resp.send(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
