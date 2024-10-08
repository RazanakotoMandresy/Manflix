import { Router } from "express";
import { register } from "../controllers/users/register";
import { login } from "../controllers/users/login";

const userRouter: Router = Router();
userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;
