const Product = require("../models/product");
const Purchase = require("../models/purchase");
const Sales = require("../models/sales");
const Store = require("../models/store");
const User = require("../models/users");
const routes = require("express").Router();

// Get all products
routes.get("/getproduct", async (req, res) => {
  try {
    const result = await Product.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all purchases
routes.get("/getpurchase", async (req, res) => {
  try {
    const result = await Purchase.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all sales
routes.get("/getsales", async (req, res) => {
  try {
    const result = await Sales.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all stores
routes.get("/getstore", async (req, res) => {
  try {
    const result = await Store.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
routes.get("/getuser", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routes;
