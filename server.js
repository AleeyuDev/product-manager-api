const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModels");
const app = express();

// create a midllware to acce[t json]
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//  rouotes
app.get("/", (req, res) => {
  res.send("Hello from api Api");
});

app.get("/blog", (req, res) => {
  res.send("Hello from blog , Im the new nodemond");
});
app.get("/blog/user", (req, res) => {
  res.send("Hello from blog , Im the user upadated");
});

// fetching data from database

app.get("/products", async (req, res) => {
  try {
    const getProducts = await Product.find({});
    res.status(200).json(getProducts);
  } catch (error) {
    res.status(500).json({ mesaage: error.mesaage });
  }
});

// get a single id => products from database

app.get("/products/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getProductId = await Product.findById({ _id });
    res.status(200).json(getProductId);
  } catch (error) {
    res.status(500).json({ mesaage: error.mesaage });
  }
});

// how to save data in database

// app.post("/product", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);

//   //   req.send("Hello from blog , Im the user creatd");
// });
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }

  //   req.send("Hello from blog , Im the user upadated");
});

// updating the  products

app.put("/products/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const _product = await Product.findByIdAndUpdate(_id, req.body);

    //we cannot find any product in database
    if (!_product) {
      return res
        .status(404)
        .json({ mesaage: `cannot find product with id:  ${_id}` });
    }

    //   updatting
    const upadatedProduct = await Product.findById(_id);
    res.status(200).json(upadatedProduct);
    // res.status(200).json(_product);
    // res.status(200).json(updatinProductById);
  } catch (error) {
    res.status(500).json({ mesaage: error.mesaage });
  }
});

// deleting  a prouct

app.delete("/products/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const product_id = await Product.findByIdAndDelete(_id);
    if (!product_id) {
      return res
        .status(404)
        .json({ mesaage: ` cannot find prouct with ID ${_id}` });
    }
    res.status(200).json(product_id);
  } catch (error) {
    res.status(500).json({ mesaage: error.mesaage });
  }
});
//  localhost:27017
// mogoose.set('strictQuery', false)]"mongodb+srv://admin:admin12345@cluster0.nuzhekq.mongodb.net/Node-API?retryWrites=true&w=majority"
//  cluster
mongodb: mongoose
  .connect("mongodb://localhost:27017/products")
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000, () => {
      console.log("server runing on port 3000..");
    });
  })
  .catch((err) => {
    console.log(err);
  });
