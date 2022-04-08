import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import memberRoutes from "./routes/members.js";

// const mongoose = require("mongoose");
// const express = require("express");
// const dotenv = require("dotenv");
// const bodyParser = require("body-parser");
// const cors = require("cors");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/member", memberRoutes);

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
