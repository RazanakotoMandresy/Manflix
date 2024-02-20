const bcryptjs = require("bcryptjs");
const Auth = require("../models/Auth");
const jwt = require("jsonwebtoken");

const regsiter = async (req, res) => {
  const { name, passwords, email } = req.body;
  try {
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(passwords, salt);

    if (!name || !passwords || !email) {
      return res
        .status(400)
        .json({ msg: " tous les champs sont tous obligatoires" });
    }
    const Securised = { name, email, passwords: hash };
    const user = await Auth.findOne({ name, email });
    if (user) {
      return res.status(400).json({
        msg: `le nom : ${name} et l'email :${email} est deja utiliser par un autre utilisateur`,
      });
    }
    const auth = await Auth.create(Securised);
    const token = await jwt.sign(
      { userId: auth._id, userName: auth.name },
      process.env.JWT_SECRET,
      { expiresIn: "31d" }
    );
    res.status(201).json({ auth, token });
  } catch (error) {
    if (error.code == 11000 && error.keyPattern.name) {
      return res.status(400).json({
        msg: `l'${name} est deja utiliser par un autre utilisateur `,
      });
    } else if (error.code == 11000 && error.keyPattern.email) {
      return res.status(400).json({
        msg: `l'${email} est deja utiliser par un autre utilisateur `,
      });
    } else {
      res.status(400).json({ msg: error });
    }
  }
};
const login = async (req, res) => {
  try {
    const { email, passwords } = req.body;
    if (!email || !passwords) {
      return res
        .status(400)
        .json({ msg: "veillez remplires tous les champs svp" });
    }
    const auth = await Auth.findOne({ email });
    if (!auth) {
      return res
        .status(404)
        .json({ msg: `l'utilisateur avec l'email ${email} n'existe pas` });
    }
    const correctMdp = await bcryptjs.compare(passwords, auth.passwords);
    if (!correctMdp) {
      return res.status(401).json({
        msg: "le mots de passes que vous avez entrer est incorrectes",
      });
    }
    // token
    const token = await jwt.sign(
      { userId: auth._id, userName: auth.name },
      process.env.JWT_SECRET,
      { expiresIn: "31d" }
    );
    res.status(200).json({ name: auth.name, email: auth.email, token });
  } catch (error) {
    res.status(400).json(error);
    console.log({ msg: error });
  }
};

const logout = async (req, res) => {
  try {
    req.user = null;
    res.json({ user: req.user });
  } catch (error) {
    res.json(error);
  }
};
module.exports = { login, regsiter, logout };
