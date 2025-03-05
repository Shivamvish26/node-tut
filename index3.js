const express = require("express");
const path = require("path");
const app = express();

const publicpath = path.join(__dirname, "Project");

app.set("view engine", "ejs");

// app.use(express.static(publicpath));

// with out extension (user should not know the extension)
app.get("", (_, resp) => {
  resp.sendFile(`${publicpath}/index.html`);
});

app.get("/about", (_, resp) => {
  resp.sendFile(`${publicpath}/about.html`);
});

app.get("/profile", (_, resp) => {
  const user = {
    name: "Shubham Vishwakarma",
    email: "shubham@test.com",
    city: "Pune",
  };
  resp.render("profile",{user});
});

app.get("*", (_, resp) => {
  resp.sendFile(`${publicpath}/404.html`);
});

app.listen(3000, () => {
  console.log("server is running on 3000 port");
});
