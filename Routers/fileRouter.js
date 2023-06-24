import { Router } from "express";
import userMiddleware from "../Middleware/userMiddleware.js";
import fileController from "../Controllers/fileController.js";
const fileRouter = new Router();

fileRouter.post('/upload', userMiddleware, fileController.uploadFiles);

export default fileRouter;