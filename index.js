import express from 'express'
import { sequelize } from './database/db.js'
import { noteRouter } from './Routers/noteRouter.js'


const PORT = 5050;
const app = express();

app.use(express.json());
app.use('/api', noteRouter);

sequelize.sync().then(()=>{console.log("DB sync")});

async function startApp(){
    try{
        app.listen(PORT, ()=>{console.log('Server has been started')});
    }catch(e){
        console.log(e);
    }
}

startApp();