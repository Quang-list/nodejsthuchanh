// controller.js

const express = require('express');
const router = express.Router();
const Product = require('../db/model/product'); // Import model

// Phương thức thêm sản phẩm mới vào ProductCollection
router.post('/add-product', async (req, res) => {
  try {
    const { maSanPham, tenSanPham, ngaySanPham, xuatXu, gia, soLuong } = req.body;
    const newProduct = new Product({
      maSanPham,
      tenSanPham,
      ngaySanPham,
      xuatXu,
      gia,
      soLuong,
    });
    await newProduct.save();
    res.status(201).json({ message: 'Thêm sản phẩm thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Phương thức xóa sản phẩm khỏi ProductCollection
router.delete('/delete-product/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: 'Xóa sản phẩm thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
// Lấy danh sách sản phẩm đã sắp xếp theo ProductStoreCode
router.get('/products', async (req, res) => {
    try {
      const products = await Product.find().sort({ ProductStoreCode: -1 }); // Sắp xếp giảm dần
      res.render('home', { products }); // Truyền danh sách sản phẩm vào view
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });