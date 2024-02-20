const { Router } = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const {
  createVideo,
  getVideos,
  getVideo,
  deleteVideo,
  searchVideo,
} = require("../controllers/video");
const authentification = require("../middleware/authentification");

const router = Router();
router.post("/", authentification, upload.single("videosFile"), createVideo);
router.get("/", getVideos);
router.get("/search", searchVideo);
router.get("/:id", authentification, getVideo);
router.delete("/:id", authentification, deleteVideo);
module.exports = router;
