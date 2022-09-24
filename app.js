const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const data = {
  firstName: "Vladimir",
  lastName: "Putin",
  emailAddress: "vladmirputin@gmail.com",
};

app.use(cors());
app.use(bodyParser.json());



app.use(`/.netlify/functions/api`, userRouter);

app.listen(8000, () => {
  console.log("API Server is running...");
});
