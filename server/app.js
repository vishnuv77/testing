import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/mydatabase")
  .then(() => console.log("database connection is successful"))
  .catch((err) => console.log(err));

app.listen(3000, () =>
  console.log("Backend server is running on port 3000")
);
