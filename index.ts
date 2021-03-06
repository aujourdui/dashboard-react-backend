import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import memberRoutes from "./routes/members";
import taskRoutes from "./routes/tasks";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/members", memberRoutes);
app.use("/tasks", taskRoutes);

app.get("/test", (_req, res) => {
  res.json({
    author: "test",
    message: "server test",
  });
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection successfully.");
  } catch (err) {
    console.log(err);
  }
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Backend server is running port number ${process.env.PORT}`);
  });
};

dbConnect();
