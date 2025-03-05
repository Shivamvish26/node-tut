const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  // ?age=10 URL
  //   console.log("Request Filter");
  if (!req.query.age) {
    resp.send("Age is mandatory");
  } else if (req.query.age < 18) {
    resp.send("Age should be greater than 18");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("Welcome to Home Page");
});

app.get("/users", (req, resp) => {
  resp.send("Hello User");
});

app.listen(3000);
