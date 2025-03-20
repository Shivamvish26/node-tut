const dbconnect = require("./Mongo__Connection/mongodb");

const update = async () => {
  let data = await dbconnect();
  let result = await data.updateOne(
    { name: "shubham" },
    { $set: { name: "Shubham Vishwakarma" } }
  );

  if (result.acknowledged) {
    console.log("Data updated successfully!", result);
  } else {
    console.log("Update failed!");
  }
};

update();
