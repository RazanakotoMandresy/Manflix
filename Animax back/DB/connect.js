const { default: mongoose } = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log(`connected to db`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
