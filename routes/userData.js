const express = require("express");
const router = express.Router();

const data = {
  firstName: "Vladimir",
  lastName: "Putin",
  emailAddress: "vladmirputin@gmail.com",
};

router.get("/getData", (req, res) => {
  try{
  res.send(data);
  }catch (err) {
    res.send("Error: " + err.message);
  }
});

router.post("/postData", (req, res) => {
  try{
  data.firstName = req.body.firstName;
  data.lastName = req.body.lastName;
  data.emailAddress = req.body.emailAddress;
  console.log(req.body);
  res.send("User Data updated successfully!");
  }catch (err) {
    res.send("Error: " + err.message);
  }
});

module.exports = router;
