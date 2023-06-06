import mysql from "mysql";

const connection = mysql.createConnection({
  host: process.env.SERVER_HOST,
  user: process.env.SERVER_USER,
  password: process.env.SERVER_PASSWORD,
  database: process.env.SERVER_DATABASE,
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL server!");
  });

  
module.exports = connection;