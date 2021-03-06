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
const data = [
  {
    id: 1,
    name: "chicken",
    price: 420,
    img: "https://media.istockphoto.com/photos/chicken-isolated-on-white-picture-id148127611?k=20&m=148127611&s=612x612&w=0&h=xQmE1alpIqvVGp9DcvLV8UJ--_xrPauc4Z5R588kZTg=",
    stock: "44",
  },
  {
    id: 2,
    name: "bat ball",
    price: 420,
    img: "https://media.istockphoto.com/photos/cricket-bat-and-ball-place-on-cricket-ground-green-grass-picture-id1306078671?b=1&k=20&m=1306078671&s=170667a&w=0&h=0quNvb3B8AjPw16-AMKltG_gDhLgx_eZISms5p_qWak=",
    stock: "44",
  },
  {
    id: 3,
    name: "comb",
    price: 420,
    img: "https://image.made-in-china.com/44f3j00OrhabFBInjzL/10-Jumbo-Comb-Hair-Combs-Black-Wide-Tooth-Comb-Detangling-Hair-Brush-Paddle-Hair-Comb-Care-Handgrip-Comb-Best-Styling-Comb-for-Long.jpg",
    stock: "44",
  },
];
//Create items
app.post("/api/items", async (req, res) => {
  const items = req.body;
  data.push(items);
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
