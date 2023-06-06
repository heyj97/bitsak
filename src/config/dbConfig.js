import mysql from "mysql";
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.SERVER_HOST,
  user: process.env.SERVER_USER,
  password: process.env.SERVER_PASSWORD,
  database: process.env.SERVER_DATABASE,
  port : 3306,
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL server!");
  });

  
export default connection;
 

 


