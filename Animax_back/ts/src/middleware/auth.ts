import type { NextFunction, Request, Response } from "express";
import jwt, { verify, type JwtPayload } from "jsonwebtoken";

interface CustomRequest extends Request {
  token: string | JwtPayload;
}
export const signToken = (auth: any): string => {
  const token = jwt.sign(
    {
      userId: auth._id,
      userName: auth.name,
      userAccountStatus: auth.isPrenium,
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
