const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
