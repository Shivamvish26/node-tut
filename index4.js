const express = require("express");
const app = express();
const reqFilter = require("./Middleware/middlware"); //Middleware from other folder

const route = express.Router(); //single declear for validation purpose for globally to use this use "route"

route.use(reqFilter);
// app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("Welcome to Home Page");
});

route.get("/users", (req, resp) => {
  //Route Level Middleware:- Added to the specific route..[refers notes]
  resp.send("Welcome User");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome to the about page");
});

app.use("/", route);

app.listen(3000);
