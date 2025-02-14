const express = require("express");
const app = express(); //created to the excuatable state of express

//.get is the route mryhod fot the api binding
app.get("", (req, resp) => {
    console.log("data requested by the browser ===>>>",req.query.name);
  resp.send("Welcome, " + req.query.name);
});

app.get("/about", (req, resp) => {
  resp.send("Hello this is about page");
});
app.get("/help", (req, resp) => {
  resp.send("Hello this is help page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
