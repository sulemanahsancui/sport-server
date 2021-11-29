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
const data = {
  name: "chicken",
  price: 420,
  img: "https://media.istockphoto.com/photos/chicken-isolated-on-white-picture-id148127611?k=20&m=148127611&s=612x612&w=0&h=xQmE1alpIqvVGp9DcvLV8UJ--_xrPauc4Z5R588kZTg=",
  stock: "44",
};
//Create items
app.post("/api/items", async (req, res) => {
  // const data = req.body;
  // const new_product = await new product(data);
  // const items = await new_product.save();
  res.status(200).send({ data });
});

//GET ALL ITEMS GET
app.get("/api/items", async (req, res) => {
  // const products = await product.find();
  res.status(200).send(data);
});

//Sign in user

// app.post("/api/users", async (req, res) => {
//   const user = req.body;
//   const user_email = await User.findBYEmail(user.email);
//   if (!user_email) {
//     const insert_user = await user.save();
//   } else {
//     res.status(404).send({ message: "user Exist try another mail" });
//   }
// });

// app.get("/api/users", (req, res) => {});

//initialize server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  // mongoose.connect("mongodb://localhost/products", () => {
  //   console.log("connected");
  // });
  console.log(`server is running at port ${port}`);
});
