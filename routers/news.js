import express from "express";
import { createNews, deleteNews, getNews, getNewsList, updateNews } from "../controller/news.js";

const router = express.Router();

router
  .get("/", getNewsList)
  .post("/", createNews)
  .get("/:keyword", getNews)
  .put("/:id", updateNews)
  .delete("/:id", deleteNews);

export default router;
