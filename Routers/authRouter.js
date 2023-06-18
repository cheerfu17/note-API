import { Router } from "express";
import authController from "../Controllers/authController.js";
import { check } from "express-validator";
const userRouter = new Router();

userRouter.post('/sign_in', authController.sign_in);

userRouter.post('/sign_up', [
    check('nick_name', 'Nickname field cannot be empty').notEmpty(),
    check('password', 'Password must be longer than 8 characters').isLength({min: 8})
], authController.sign_up);

export default userRouter;