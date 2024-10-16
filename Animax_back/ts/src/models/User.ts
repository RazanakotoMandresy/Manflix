import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import type { IUser, Mess } from "../types/types";

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
    // video uuid
    StaredVideo: Array<String>,
    // UUID
    FollowedPages: Array<String>,
    isPrenium: {
      Boolean,
    },
    Notification: Array<Mess>,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("passwords")) {
    user.passwords = await bcrypt.hash(user.passwords, 10);
  }
  next();
});

export default model("User", userSchema);
