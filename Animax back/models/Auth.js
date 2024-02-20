const { Schema, model } = require("mongoose");

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: [true, "les nom doivent etres unique"],
    },
    email: {
      type: String,
      required: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "veillez donner un mail conforme",
      ],
      unique: [true, "les email doivent etres unique "],
    },
    passwords: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("Auth", authSchema);
