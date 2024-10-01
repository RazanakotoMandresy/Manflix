import "dotenv/config";
import express from "express";
import connectDb from "./DB/connectDB";
const PORT = process.env.LOCALPORT;

const app = express();

app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());

const start = async () => {
  try {
    // process.env.NODE_ENV:
    // dot.configDotenv.name
    const url = process.env.DATABASE!;
    await connectDb(url);
    app.listen(PORT, () => {
      console.log(`connected to the http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
