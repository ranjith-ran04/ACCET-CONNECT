const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Ranjith@123",
  database: "accetconnect", 
});


module.exports = connection;