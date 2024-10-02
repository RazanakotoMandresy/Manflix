import { model, Schema } from "mongoose";
interface IUser {
  name: string;
  email: string;
  passwords: string;
  videos: Array<string>;
}
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      match:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      unique: true,
    },
    passwords: {
      type: String,
      required: true,
    },
    videos: Array,
  },
  { timestamps: true }
);
export default model("User", userSchema);
