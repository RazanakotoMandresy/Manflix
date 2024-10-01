import { Router } from "express";
import { register } from "../controllers/users/authControllers";

const userRouter: Router = Router();
userRouter.post("/", register);
export default userRouter