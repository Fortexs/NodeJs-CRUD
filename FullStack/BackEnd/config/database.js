import { Sequelize } from "sequelize";

const db = new Sequelize('belajar_nodejs','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;