import { Router } from 'express';
import noteController from '../Controllers/noteController.js'
import {check} from 'express-validator';
import userMiddleware from '../Middleware/userMiddleware.js'
const noteRouter = new Router();

noteRouter.get('/note', userMiddleware, noteController.get);
noteRouter.get('/note/:id', userMiddleware, noteController.get_one)
noteRouter.post('/note', [check('title', 'Title field cannot be empty').notEmpty(), userMiddleware],
 noteController.create);
noteRouter.patch('/note/:id', [check('title', 'Title field cannot be empty').notEmpty(), userMiddleware],
 noteController.put);
noteRouter.delete('/note/:id', userMiddleware, noteController.delete);

export {noteRouter};