import { QuoteModel } from "../models/QuoteModel.js";

export const getQuotes = async (req, res) => {
  try {
    const quotes = await QuoteModel.find();
    res.status(200).json({
      totalQuote: quotes.length,
      quotes,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getQuote = async (req, res) => {
  try {
    const quote = await QuoteModel.find({ _id: req.params.id });
    res.status(200).json(quote[0]);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createQuote = async (req, res) => {
  try {
    const newQuote = req.body;
    const quote = new QuoteModel(newQuote);
    await quote.save();

    res.status(201).json(quote);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateQuote = async (req, res) => {
  try {
    const updateQuote = req.body;

    const quote = await QuoteModel.findOneAndUpdate(
      { _id: updateQuote._id },
      updateQuote,
      { new: true }
    );

    res.status(200).json(quote);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const deleteQuote = async (req, res) => {
  try {
    await QuoteModel.findOneAndDelete({ _id: req.params.id });

    res.status(204).json(null);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
