require("dotenv").config();
const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routes/videoRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./DB/connect");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors({ Credential: true, origin: "http://localhost:5173" }));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/video", videoRoutes);

const start = async () => {
  try {
    await connectDB(process.env.DATABASE);
    app.listen(PORT, () => {
      console.log(`connecter aux port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
