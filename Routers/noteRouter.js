import { Router } from 'express';
import noteController from '../Controllers/noteController.js'
import {check} from 'express-validator';
const noteRouter = new Router();

noteRouter.get('/note', noteController.get);
noteRouter.get('/note/:id', noteController.get_one)
noteRouter.post('/note', [check('title', 'Title field cannot be empty').notEmpty()],
 noteController.create);
noteRouter.patch('/note/:id', check('title', 'Title field cannot be empty').notEmpty(),
 noteController.put);
noteRouter.delete('/note/:id', noteController.delete);

export {noteRouter};