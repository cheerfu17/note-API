import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/db.js';

class User extends Model{}

User.init({
    nick_name: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING},
    picture: {type: DataTypes.STRING}
},{sequelize, modelName: "user"});

export default new User();