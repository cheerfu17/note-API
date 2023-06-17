import { Router } from "express";
import authController from "../Controllers/authController.js";
const userRouter = new Router();

userRouter.post('/sign_in', authController.sign_in);
userRouter.post('/sign_up', authController.sign_up);

export default userRouter;