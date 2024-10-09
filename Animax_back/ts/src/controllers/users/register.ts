import type { Request, Response } from "express";
import User from "../../models/User";
import { signToken } from "../../middleware/auth";
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
