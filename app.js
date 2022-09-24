const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://localhost/userData";
const userRouter = require("./routes/userData");

app.use(express.json());
app.use(cors());

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected...");
});

app.use("/userData", userRouter);

app.get("/", (req, res) => {
  res.send("You are almost there!");
});

const port = process.env.PORT || "5000";
app.listen(port, () => console.log(`Server started on Port ${port}`));
