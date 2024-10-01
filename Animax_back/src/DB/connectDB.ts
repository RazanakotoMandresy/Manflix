import mongoose from "mongoose";

export const connectDb = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log(`connected to the database....`);
  } catch (error) {
    console.log(`failed to connecting into the db ${error}`);
  }
};
