import mysql from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.SERVER_HOST,
  user: process.env.SERVER_USER,
  password: process.env.SERVER_PASSWORD,
  database: process.env.SERVER_DATABASE,
  port : process.env.DB_PORT,

});

connection.getConnection(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL server!");
  });

  
export default connection;