//Database package
const mysql = require('mysql');
//connection settings
var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '34646979',
    database: 'burgers_db'
  });
};
//Connect
connection.connect(function(err){
  if(err){
    console.error('ERROR connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' +  connection.threadId);
});
//Export
module.exports = connection;
