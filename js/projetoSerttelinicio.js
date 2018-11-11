exports.config = {
        'default' : {
        'host' : 'localhost',
        'user' : 'root',
        'password' : 'root',
        'database' : 'blog'
    }
};

var db_config = require('../config/database.js'),
    mysql = require('mysql'),
    db_connection = mysql.createConnection(db_config);


connection.connect();
 
    connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
      if (err) throw err;
     
      console.log('The solution is: ', rows[0].solution);
    });
     
    connection.end();    