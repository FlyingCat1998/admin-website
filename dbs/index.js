const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'qlgamedb'
});

// const connection = mysql.createConnection({
//     host: 'mysql-2972-0.cloudclusters.net',
//     user: 'test',
//     password: '123456',
//     database: 'qlgamedb',
//     connectTimeout: 200000,
//     acquireTimeout: 200000,
//     ssl  : {
//         // DO NOT DO THIS
//         // set up your ca correctly to trust the connection
//         rejectUnauthorized: false
//     }
// });

connection.connect(function(error){
    if(!error) {
        console.log(error);
    }
});

module.exports = connection;