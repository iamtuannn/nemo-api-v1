import mongoose from "mongoose";

const schema = mongoose.Schema({
  quote: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  title: {
    type: String,
  },
});

export const QuoteModel = mongoose.model("Quote", schema);
