import "dotenv/config";
import express from "express";
import { connectDb } from "./DB/connectDB";
import userRoutes from "./routes/usersRoutes";
const PORT = process.env.LOCALPORT;
const app = express();

app.use(express.json());
app.use("/api/v1/", userRoutes);
const start = async () => {
  console.log(`trying to start the server}`);
  try {
    await connectDb(process.env.DATABASE!);
    app.listen(PORT, () => {
      console.log(`connected to the http://localhost:${PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
