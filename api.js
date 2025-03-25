const express = require("express");
const app = express();
const dbconnect = require("./Mongo__Connection/mongodb");
const mongodb = require("mongodb");

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
app.delete("/:id", async (req, resp) => {
  // console.log(req.params.id);
  const data = await dbconnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
