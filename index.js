const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const product = require("./model/items");
const User = require("./model/users");

//init app
const app = express();
//middlewares
app.use(express.json());
app.use(cors());

//routes

//Create items
app.post("/api/items", async (req, res) => {
  const data = req.body;
  const new_product = await new product(data);
  const items = await new_product.save();
  res.status(200).send({ items });
});

//GET ALL ITEMS GET
app.get("/api/items", async (req, res) => {
  const products = await product.find();
  res.status(200).send(products);
});

//Sign in user

app.post("/api/users", async (req, res) => {
  const user = req.body;
  const user_email = await User.findBYEmail(user.email);
  if (!user_email) {
    const insert_user = await user.save();
  } else {
    res.status(404).send({ message: "user Exist try another mail" });
  }
});

app.get("/api/users", (req, res) => {});

//initialize server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  mongoose.connect("mongodb://localhost/products", () => {
    console.log("connected");
  });
  console.log(`server is running at port ${port}`);
});
