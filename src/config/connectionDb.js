require('dotenv').config()
const  mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
  });


connection.connect(function(err){
    if(err) throw err;
    console.log("connected database");
});

module.exports = connection;