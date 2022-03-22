import express from "express";
import { createNews, deleteNews, getNewsByID, getNewsByUrl, getNewsList, updateNews } from "../controller/news.js";

const router = express.Router();

router
  .get("/", getNewsList)
  .post("/", createNews)
  .get("/:id", getNewsByID)
  .get("/:url", getNewsByUrl)
  .put("/:id", updateNews)
  .delete("/:id", deleteNews);

export default router;
