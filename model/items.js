const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    name: String,
    price: Number,
    img: String,
    stock: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", Product);
