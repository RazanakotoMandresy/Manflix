const { Schema, Types, model } = require("mongoose");

const videoSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  like: {
    type: Number,
    default: 0,
  },
  disLike: {
    type: Number,
    default: 0,
  },
  postedBy: {
    type: Types.ObjectId,
    ref: "Auth",
    required: [true, "Please provide user"],
  },
  nameOfPoster: {
    type: String,
  },
  likedBy: {
    type: Types.ObjectId,
    ref: "Auth",
  },
  videosPath: {
    type: String,
    required: true,
  },
  VideoOriginalName: {
    type: String,
  },
  VideoFileName: {
    type: String,
  },
  IsSerie: {
    type: Boolean,
    default: false,
  },
  Views: {
    type: Number,
    default: 0,
  },
});
module.exports = model("Video", videoSchema);
