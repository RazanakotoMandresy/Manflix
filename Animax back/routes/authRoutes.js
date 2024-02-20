const { Router } = require("express"); 
const { login, logout, regsiter } = require("../controllers/auth");
const authentification = require("../middleware/authentification");

const router = Router(); 
router.post("/login", login);
router.post("/logout", authentification, logout);
router.post("/register", regsiter);
module.exports = router;
 