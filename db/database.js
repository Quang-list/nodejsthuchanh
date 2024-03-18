// database.js

const mongoose = require('mongoose');

// Kết nối tới MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/database01', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Đã kết nối tới MongoDB!');
  } catch (error) {
    console.error('Lỗi khi kết nối tới MongoDB:', error.message);
    process.exit(1); // Thoát ứng dụng nếu không kết nối được
  }
};

module.exports = connectDB;
