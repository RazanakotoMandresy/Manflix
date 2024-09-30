import mongoose from "mongoose";

const connectDb = async (url: string | undefined) => {
  // TODO pr to the mongoose repo accept undifined and string into the connect
  try {
    await mongoose.connect(url);
    console.log(`connected to the database`);
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;
