const { verify } = require("jsonwebtoken");

const authentification = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "problemes du auth header veillez vous connecter" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, userName: payload.userName };
    next();
  } catch (error) {
    res.json(error);
  }
};
module.exports = authentification;
