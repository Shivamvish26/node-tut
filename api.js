const express = require("express");
const app = express();
const dbconnect = require("./Mongo__Connection/mongodb");

app.use(express.json());

// GET METHOD
app.get("/", async (req, resp) => {
  let data = await dbconnect();
  data = await data.find({}).toArray();
  // console.log("Reterving the data..", data);
  resp.send(data);
});

// POST METHOD
app.post("/", async (req, resp) => {
  let data = await dbconnect();
  let result = await data.insertMany(req.body);
  resp.send(result);
});

// PUT METHOD
app.put("/", async (req, resp) => {
  let data = await dbconnect();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );
  resp.send({ result: "Result Updated" });
});

// Delete METHOD

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
