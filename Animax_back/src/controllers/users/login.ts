import type { Request, Response } from "express";
import bcrypt, { genSalt, hash } from "bcryptjs";
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
