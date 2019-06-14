const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qlgamedb'
});

connection.connect(function(error){
    if(!!error) {
        console.log(error);
    }
});

module.exports = connection;