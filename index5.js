const { name } = require("ejs");
const dbconnection = require("./Mongo__Connection/mongodb");

const main = async () => {
  let data = await dbconnection();
  data = await data.find({}).toArray();
  console.log("Reterving the data..", data);
};

main();