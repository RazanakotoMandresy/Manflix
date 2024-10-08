import jwt from "jsonwebtoken";

export const signToken = (auth: any): string => {
  const token = jwt.sign(
    { userId: auth._id, userName: auth.name },
    process.env.JWT_SECRET!,
    { expiresIn: "31d" }
  );
  return token;
};
