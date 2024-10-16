import { model, Schema } from "mongoose";

interface IVideo {
  src: string;
  categories: string;
  description: string;
  views: number;
  comments: Array<mess>;
  createdBy: string;
}
interface mess {
  // du genre new anime dandan hier op dimanche
  text: string;
  time: string;
}
const videoSchema = new Schema<IVideo>({
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
});
export default model("Video", videoSchema);
