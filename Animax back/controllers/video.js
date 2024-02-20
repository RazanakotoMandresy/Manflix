const Video = require("../models/Video");

const createVideo = async (req, res) => {
  try {
    const { title, like, likedBy, desc } = req.body;
    if (!title) {
      return res.status(400).json("les titres sonts obligatoires ");
    }
    const videosPath = req.file.path;
    const VideoOriginalName = req.file.originalname;
    const VideoFileName = req.file.filename;
    const postedBy = req.user.userId;
    const nameOfPoster = req.user.userName;
    const body = {
      title,
      like,
      likedBy,
      videosPath,
      VideoFileName,
      VideoOriginalName,
      nameOfPoster,
      postedBy,
      desc,
    };
    const video = await Video.create(body);
    res.status(200).json({ video });
  } catch (error) {
    res.json(error);
  }
};
const getVideo = async (req, res) => {
  try {
    const { id: videoId } = req.params;
    const video = await Video.findOne({ _id: videoId });
    if (!video) {
      return res.json({ msg: `video avec l'id ${videoId} n'existes pas ` });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getVideos = async (req, res) => {
  try {
    const video = await Video.find().sort({ title: 1 })
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id: videoId } = req.params;
    const pplVideo = await Video.findOne({ _id: videoId });
    if (!pplVideo) {
      return res.json({
        msg: `video avec l'id ${videoId} supprimer n'existes pas `,
      });
    } else if (pplVideo.postedBy == req.user.userId) {
      await Video.deleteOne({ _id: videoId });
      return res.json({ msg: `video avec l'id ${videoId} supprimer ` });
    } else {
      res.json({ msg: " ce n'est pas votres video " });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};
const searchVideo = async (req, res) => {
  try {
    const { title } = req.query;
    const video = await Video.find({ title: { $regex: title, $options: "i" } });
    if (video) {
      return res.json({ video });
    }
    res.json({ msg: `la videon'existes pas ` });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  createVideo,
  getVideo,
  getVideos,
  deleteVideo,
  searchVideo,
};
