const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qlgamedb'
});

connection.connect(function(err) {
    if (err) throw err;

    connection.query('SELECT * FROM PRODUCT', function (err, rows) {
        if (err) throw err;
        exports.list = rows;
    });
});