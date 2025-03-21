const dbconnect = require("./Mongo__Connection/mongodb");

const deletedata = async () => {
  let data = await dbconnect();
  let result = await data.deleteOne({
    name: "Manish Nishad",
  });
  if (result.acknowledged) {
    console.log("Data Deleted Succeddfully", result);
  } else {
    console.log("Data Deletion Failed");
  }
};

deletedata();
