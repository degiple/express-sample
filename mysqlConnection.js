var mysql = require('mysql');

var dbConfig = {
  host: '127.0.0.1',
  user: 'nodejs',
  password: 'password',
  database: 'test'
};

var connection = mysql.createConnection(dbConfig);

module.exports = connection;