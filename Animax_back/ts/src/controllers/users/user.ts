import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../../models/User";
import { signToken } from "../../middleware/auth";
export const login = async (req: Request, res: Response) => {
  try {
    const { passwords, email } = req.body;
    if (!passwords || !email) {
      res.status(400).json({ res: "email and passwords are required" });
      return;
    }
    // check passwords
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(400)
        .json({ res: "please verify you have enter the correct email" });
      return;
    }
    const correctPsswd = bcrypt.compareSync(passwords, user?.passwords);
    if (!correctPsswd) {
      res.status(401).json({ err: "incrorrect passwords" });
      return;
    }
    const token = signToken(user);
    if (token == "") {
      res.status(500).json({ err: "an error occured during token's creation" });
      return;
    }
    res.status(200).json({ res: token });
  } catch (error) {
    res.json({ err: error }).status(500);
  }
};
// just for dev purpose
export const GetAllUser = async (req: Request, res: Response) => {
  try {
    const user = await User.find();
    res.json({ res: user }).status(200);
  } catch (error) {
    console.log(error);
  }
};
export const register = async (req: Request, res: Response) => {
  const { name, passwords, email } = req.body;
  try {
    if (!name || !passwords || !email) {
      res.status(400).json({ err: "please complete all inputs" });
      return;
    }
    const body = { name, email, passwords };
    const user = await User.findOne({ name, email });
    if (user) {
      res
        .status(400)
        .json({ err: `email : ${email} or username ${name} is already used` });
      return;
    }
    const auth = await User.create(body);
    const token = signToken(auth);
    res.status(200).json({ res: token, user: auth });
    return;
  } catch (error) {
    res.status(500).json({ err: error });
    console.log(error);
  }
};
