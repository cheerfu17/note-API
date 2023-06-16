import { Router } from 'express';
import noteController from '../Controllers/noteController.js'
const noteRouter = new Router();

noteRouter.get('/note', noteController.get);
noteRouter.get('/note/:id', noteController.get_one)
noteRouter.post('/note', noteController.create);
noteRouter.patch('/note/:id', noteController.put);
noteRouter.delete('/note/:id', noteController.delete);

export {noteRouter};