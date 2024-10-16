import { model, Schema } from "mongoose";
import type { IAnimePage, Mess } from "../types/types";

const animePageSchema = new Schema<IAnimePage>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  pageOwner: Array<String>,
  followers: Array<String>,
  notification: Array<Mess>,
  videos: Array<String>,
  Rates: Number,
});
export default model("Pages", animePageSchema);
