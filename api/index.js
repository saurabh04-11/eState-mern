import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mdb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running!!!");
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/user", userRouter);
