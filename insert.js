const dbconnect = require("./Mongo__Connection/mongodb");

const insert = async () => {
  const db = await dbconnect();
  //   console.log(db);
  const result = await db.insertMany([
    {
      name: "Manish",
      Age: 28,
    },
    {
      name: "Nimish",
      Age: 22,
    },
    {
      name: "Rahul",
      Age: 22,
    },
  ]);
  if (result.acknowledged) {
    console.log("Data inserted successfully!", result);
  } else {
    console.log("Data insertion failed!");
  }
};

insert();
