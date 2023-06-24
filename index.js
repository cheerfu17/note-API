import express from 'express'
import { sequelize } from './database/db.js';
import { noteRouter } from './Routers/noteRouter.js';
import authRouter from './Routers/authRouter.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import fs, { mkdir, mkdirSync } from 'fs'
import 'dotenv/config.js';
import fileRouter from './Routers/fileRouter.js';
import { error } from 'console';

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static('/upload'))
app.use('/api', noteRouter);
app.use('/auth', authRouter);
app.use('/file', fileRouter);
sequelize.sync().then(()=>{console.log("DB sync")});

async function startApp(){
    try{
        fs.stat('upload',function (error, stat) {
            if(error) mkdirSync('upload');
        });
        app.listen(PORT, ()=>{console.log('Server has been started')});
    }catch(e){
        console.log(e);
    }
}

startApp();