import express from 'express'
import { sequelize } from './database/db.js'
import { noteRouter } from './Routers/noteRouter.js'
import authRouter from './Routers/authRouter.js'
import 'dotenv/config.js'

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use('/api', noteRouter);
app.use('/auth', authRouter);
sequelize.sync().then(()=>{console.log("DB sync")});

async function startApp(){
    try{
        app.listen(PORT, ()=>{console.log('Server has been started')});
    }catch(e){
        console.log(e);
    }
}

startApp();