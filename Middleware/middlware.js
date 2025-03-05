module.exports = reqFilter = (req, resp, next) => {
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