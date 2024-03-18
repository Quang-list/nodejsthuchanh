// product.js

const mongoose = require('mongoose');

// Định nghĩa schema cho sản phẩm
const productSchema = new mongoose.Schema({
  maSanPham: { type: String, required: true }, // Mã sản phẩm
  tenSanPham: { type: String, required: true }, // Tên sản phẩm
  ngaySanPham: { type: Date, required: true }, // Ngày sản phẩm
  xuatXu: { type: String }, // Xuất xứ sản phẩm
  gia: { type: Number, required: true }, // Giá sản phẩm
  soLuong: { type: Number, required: true }, // Số lượng sản phẩm
});

// Tạo model từ schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
