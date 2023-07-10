const  mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'blood_bank'
});


connection.connect(function(err){
    if(err) throw err;
    console.log("connected database");
});

module.exports = connection;