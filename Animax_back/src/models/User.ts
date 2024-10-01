import { Schema } from "mongoose";

const autSchema = new Schema({
  UserName: {
    type: String,
    required: true,
    unique: [true, "name should be unique"],
  },
});
