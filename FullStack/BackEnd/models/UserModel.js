// struktur table
import { Sequelize } from "sequelize";

// Koneksinya
import db from "../config/database.js";

// fungsi sequelize
const{DataTypes} = Sequelize;

// struktur table
const User = db.define('users', {
    // field
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    // digunakan untuk mengksekusi table ini saja
    freezeTableName:true
});

export default User;

// fungsi menyederet table jika table user tidak ada di database

(async()=>{
    await db.sync();
})();