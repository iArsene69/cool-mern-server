import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bookRouter from "./routes/api/book";
import cors from 'cors'
const app = express();
const allowedOrigin = ['http://localhost:5173']
const options: cors.CorsOptions = {
  origin: allowedOrigin
}
dotenv.config();

(async () => {
  try {
    await mongoose.connect(String(process.env.MONGODB_URI));
    console.log("Connected to MongoDB");

    app.use(cors(options))

    app.use(express.json())
    app.use("/book", bookRouter);
    app.listen(process.env.PORT, () =>
      console.log(`Server started at port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
})();
