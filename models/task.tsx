import mongoose from "mongoose";
// const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: Number,
  task: String,
  assignee: String,
  image: String,
  due: String,
  priority: String,
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
