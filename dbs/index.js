const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'mysql-2972-0.cloudclusters.net',
    user: 'test',
    password: '123456',
    database: 'qlgamedb'
});

connection.connect(function(error){
    if(!!error) {
        console.log(error);
    }
});

module.exports = connection;