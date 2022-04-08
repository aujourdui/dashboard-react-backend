const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

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
