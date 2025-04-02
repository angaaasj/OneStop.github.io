const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.render("products", { products });
  } catch (err) {
    res.status(500).send("❌ خطأ في جلب المنتجات");
  }
});

router.post("/add", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect("/products");
  } catch (err) {
    res.status(500).send("❌ فشل في إضافة المنتج");
  }
});

module.exports = router;