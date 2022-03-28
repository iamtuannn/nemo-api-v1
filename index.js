import express from "express";
import cors from "cors";
import quotes from "./routers/quotes.js";
import news from "./routers/news.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
// app.use(cors());

const allowList = [
  "http://192.168.1.34:3000",
  "http://localhost:3000",
  process.env.NEMO_CINEMA,
  process.env.NEMO_QUOTES,
  process.env.NEMO_DASHBOARD,
];

const corsOptions = {
  origin: allowList,
};

app.use("/quotes", cors(corsOptions), quotes);
app.use("/news", cors(corsOptions), news);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5agm2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
