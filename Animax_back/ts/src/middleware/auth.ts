import type { NextFunction, Request, Response } from "express";
import jwt, { verify, type JwtPayload } from "jsonwebtoken";
import type { Types } from "mongoose";
interface CustomRequest extends Request {
  token: string | JwtPayload;
}
// Document<unknown, {}, IUser> &
// IUser & {
//   _id: Types.ObjectId;
// } & {
//   __v?: number;
// },
export const signToken = (
  authId: Types.ObjectId,
  authName: string,
  authPrenium: boolean
): string => {
  const token = jwt.sign(
    {
      userId: authId,
      userName: authName,
      userAccountStatus: authPrenium,
    },
    process.env.JWT_SECRET!,
    { expiresIn: "31d" }
  );
  return token;
};
export const authentified = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeaders = req.headers.authorization;
    if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
      res.status(401).json({ msg: "invalid auth headers" });
      return;
    }
    const token = authHeaders.split(" ")[1];
    const decode = verify(token, process.env.JWT_SECRET!);
    (req as CustomRequest).token = decode;
    next();
  } catch (error) {
    res.status(401).json(error);
  }
};
