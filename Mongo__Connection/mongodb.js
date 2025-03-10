const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "e-commerce";
const client = new MongoClient(url);

async function dbconnection() {
  //   let result = await client.connect();
  //   let db = result.db(database);
  //   let collection = db.collection("shop");
  //   let response = await collection.find({}).toArray();
  //   console.log(response);

  let result = await client.connect();
  db = result.db(database);
  return db.collection("shop");
}
module.exports = dbconnection;
console.log("Connecting to MongoDB...");
console.log("Connected to MongoDB");
