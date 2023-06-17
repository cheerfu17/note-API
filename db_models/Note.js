import {Model, DataTypes} from 'sequelize'
import { sequelize } from "../database/db.js";
class Note extends Model{}

Note.init({
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    sequelize, 
    modelName: "note"
});

export default Note;