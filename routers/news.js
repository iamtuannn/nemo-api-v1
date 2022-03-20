import express from "express";
import { createNews, deleteNews, getNewsList, getNews, updateNews } from "../controller/news.js";

const router = express.Router();

router
  .get("/", getNewsList)
  .post("/", createNews)
  .get("/:url", getNews)
  .post("/:id", updateNews)
  .delete("/:id", deleteNews);

export default router;
