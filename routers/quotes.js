import express from "express";
import { createQuote, deleteQuote, getQuote, getQuotes, updateQuote } from "../controller/quotes.js";

const router = express.Router();

router
  .get("/", getQuotes)
  .post("/", createQuote)
  .get("/:id", getQuote)
  .post("/:id", updateQuote)
  .delete("/:id", deleteQuote);

export default router;
