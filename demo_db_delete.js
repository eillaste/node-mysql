var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'mydb'
});

connection.connect(function(err) {
	if (err) throw err;
	var sql = 'DELETE FROM customers WHERE address = "Mountain 21"';
	connection.query(sql, function(err, result, fields) {
		if (err) throw err;
		console.log('Number of records deleted: ' + result.affectedRows);
	});
});
