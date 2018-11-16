var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password'
	// database: 'nodemysql'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected!');
	connection.query('CREATE DATABASE mydb', function(err, result) {
		if (err) throw err;
		console.log('Database created');
	});
});
