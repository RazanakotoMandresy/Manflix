import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

interface IUser {
  name: string;
  email: string;
  passwords: string;
  isPrenium: boolean;
  StaredVideo: Array<string>;
  FollowedPages: Array<string>;
  Notification: Array<notif>;
}

interface notif {
  // du genre new anime dandan hier op dimanche
  messages: string;
  time: string;
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
    StaredVideo: Array<string>,
    // TODO changing  string with pages and videos type rehefa vita
    FollowedPages: Array<string>,
    isPrenium: {
      Boolean,
    },
    Notification: Array<notif>,
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
