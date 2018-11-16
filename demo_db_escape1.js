var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'mydb'
});

connection.connect(function(err) {
	if (err) throw err;
	var adr = 'Mountain 21';
	var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
	connection.query(sql, function(err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});
