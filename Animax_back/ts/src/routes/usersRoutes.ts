import { Router } from "express";
import { GetAllUser, login, register } from "../controllers/users/user";

const userRouter: Router = Router();
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/", GetAllUser);
export default userRouter;
