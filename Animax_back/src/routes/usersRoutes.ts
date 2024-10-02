import { Router } from "express";
import { login, register } from "../controllers/users/authControllers";

const userRouter: Router = Router();
userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;
