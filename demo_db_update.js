var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'mydb'
});

connection.connect(function(err) {
	if (err) throw err;
	var sql = 'UPDATE customers SET address = "Canyon 123" WHERE address = "Valley 345"';
	connection.query(sql, function(err, result, fields) {
		if (err) throw err;
		console.log(result.affectedRows + 'record(s) updated');
	});
});
