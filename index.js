var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'nodemysql'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected!');
	// connection.query('SELECT * FROM one', function(err, result) {
	// 	if (err) throw err;
	// 	console.log('Result:' + result);
	// });
});
