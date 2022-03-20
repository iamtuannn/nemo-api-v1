import { NewsModel } from "../models/NewsModel.js";

export const getNewsList = async (req, res) => {
  try {
    const news = await NewsModel.find();
    res.status(200).json({
      totalNews: news.length,
      data: news
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getNews = async (req, res) => {
  try {
    const news = await NewsModel.find({ _id: req.params.id });
    res.status(200).json(news[0]);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createNews = async (req, res) => {
  try {
    const input = req.body;
    const news = new NewsModel(input);
    await news.save();

    res.status(201).json(news);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateNews = async (req, res) => {
  try {
    const updateNews = req.body;

    const news = await NewsModel.findOneAndUpdate(
      { _id: updateNews._id },
      updateNews,
      { new: true }
    );

    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteNews = async (req, res) => {
  try {
    await NewsModel.findOneAndDelete({ _id: req.params.id });

    res.status(204).json(null);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
