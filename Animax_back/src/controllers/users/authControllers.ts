import type { Request, Response } from "express";
import { genSalt, hash } from "bcryptjs";
import User from "../../models/User";
import jwt from "jsonwebtoken";
export const register = async (req: Request, res: Response) => {
  const { name, passwords, email } = req.body;
  try {
    if (!name || !passwords || !email) {
      res.status(400).json({ err: "please complete all inputs" });
      return;
    }
    const salt = await genSalt(10);
    const hashes = await hash(passwords, salt);
    const securized = { name, email, passwords: hashes };
    const user = await User.findOne({ name, email });
    if (user) {
      res
        .status(400)
        .json({ err: `email : ${email} or username ${name} is already used` });
      return;
    }
    const auth = await User.create(securized);
    const token = signToken(auth);
    res.status(200).json({ res: token });
    return;
  } catch (error) {
    res.status(500).json({ err: error });
    console.log(error);
  }
};
export const login = async (req: Request, res: Response) => {
  res.json({ s: "ssss" });
};
const signToken = (auth: any): string => {
  const token = jwt.sign(
    { userId: auth._id, userName: auth.name },
    process.env.JWT_SECRET!,
    { expiresIn: "31d" }
  );

  return token;
};
