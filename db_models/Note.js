import {Model, DataTypes} from 'sequelize'
import { sequelize } from "../database/db.js";
class Note extends Model{}

Note.init({
    title : {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    }
},{
    sequelize, 
    modelName: "note"
});

export default Note;