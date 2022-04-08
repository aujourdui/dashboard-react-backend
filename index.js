const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection successfuly.");
  } catch (err) {
    console.log(err);
  }
};

dbConnect();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend server is running port number ${process.env.PORT}`);
});
