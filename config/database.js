import { Sequelize } from "sequelize";

const db = new Sequelize('upbringing_api','ziaq','nolepngoding',{
    host: "localhost",
    dialect: "mysql"
});

export default db;