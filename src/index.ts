import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { bookRouter } from "./routes/bookRouter";
import { authRouter } from "./routes/authRouter";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL!)
  .then(() => console.log("Connection success! Yeah!"))
  .catch(() => console.error("Yo, Connection error!"));

const app = express();
app.use(express.json()); // buat baca json
app.use(express.urlencoded({ extended: true })); //buat baca formData
app.use(express.static("public")); //buat serving static file sehingga bisa diakses di localhost:8000
app.use(cors({ origin: ["http://127.0.0.1:5173"] }));
app.use("/books", bookRouter);
app.use("/auth", authRouter)
app.listen(8000);
