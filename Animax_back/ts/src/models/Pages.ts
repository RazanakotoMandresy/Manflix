import { model, Schema } from "mongoose";
import type { IAnimePage, IUser, Mess } from "../types/types";

const animePageSchema = new Schema<IAnimePage>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    pageOwner: Array<String>,
    // usrUUID
    followers: Array<String>,
    notification: Array<Mess>,
    videos: Array<String>,
    Rates: Number,
  },
  { timestamps: true }
);
export default model("Pages", animePageSchema);
