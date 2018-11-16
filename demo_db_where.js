var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'mydb'
});

connection.connect(function(err) {
	if (err) throw err;
	var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
	connection.query(sql, function(err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
