import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    host: "./data.sqlite",
    logging: false
});

export {sequelize};