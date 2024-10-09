import { register } from "../controllers/users/register";
import { login } from "../controllers/users/login";
import { CreateAnProfile } from "../controllers/users/users";
import { authentified } from "../middleware/auth";
import { Router } from "express";

const userRouter: Router = Router();
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.patch("/:id", authentified, CreateAnProfile);
export default userRouter;
