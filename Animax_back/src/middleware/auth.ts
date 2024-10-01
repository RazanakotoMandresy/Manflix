// import { verify } from "jsonwebtoken";
// import { type NextFunction, type Request, type Response } from "express";
// import type { Payload } from "../types/types";
// var payloads: Payload

// const authentifiaction = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const authHeader = req?.headers?.authorization;
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res
//       .status(401)
//       .json({ msg: "problemes du auth header veillez vous connecter" });
//   }
  
//   const token = authHeader.split(" ")[1];
//   //   le ! assure que string
//   const jwtSecret = process.env.JWT_SECRET!;
//   try {
//     const payload = verify(token, jwtSecret);
//     req.user = { userId: payloads.userId, userName: payloads.userName };
//     next();
//   } catch (error) {
//     res.json(error);
//   }
// };
// export default authentifiaction;
