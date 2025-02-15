const express = require("express");
const app = express(); //created to the excuatable state of express

//.get is the route mryhod fot the api binding
app.get("", (req, resp) => {
  console.log("data requested by the browser ===>>>", req.query.name);
  resp.send("Welcome, " + req.query.name);
});

app.get("/about", (req, resp) => {
  resp.send(
    `<h1>Hello this is about page</h1> <a href="/help">Go to help page</a> `
  );
});
app.get("/help", (req, resp) => {
  resp.send(
    `<h1>Hello this is help page</h1><a href="/json">Got to json page</a>`
  );
});
app.get("/json", (req, resp) => {
  resp.send([
    {
      name: "Shubham",
      age: "26",
    },
    {
      name: "Shvivam",
      age: "20",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
