import { Router } from "express";
const userRouter = new Router();

userRouter.post('/sign_in');
userRouter.post('/sign_up');

export default userRouter;