import { model, Schema } from "mongoose";
import type { IVideo } from "../types/types";

const videoSchema = new Schema<IVideo>(
  {
    src: {
      type: String,
      required: true,
      unique: true,
    },
    categories: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    views: Number,
  },
  { timestamps: true }
);
export default model("Video", videoSchema);
