var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'mydb'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected!');
	var sql = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))';
	connection.query(sql, function(err, result) {
		if (err) throw err;
		console.log('Table created');
	});
});

// if table already exists use:
// var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
