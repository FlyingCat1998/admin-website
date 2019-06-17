const connection = require('../dbs/index');

connection.query('SELECT CATEGORY.id, CATEGORY.name FROM CATEGORY', function (err, rows) {
    if (err) throw err;

    module.exports.list = rows;
});

module.exports.newList = async (callback) => {
    connection.query('SELECT CATEGORY.id, CATEGORY.name FROM CATEGORY',function(err,rows) {
        if(err) throw err;

        callback(rows);
    });
};

module.exports.add = async (category) => {
    const sql = "INSERT INTO CATEGORY (name) VALUES ('" + category.Name + "');";

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};

module.exports.find = function (id,callback){
    const sql = "SELECT * FROM CATEGORY WHERE CATEGORY.id = " + id;

    connection.query(sql,function(err,rows) {
        if(err) throw err;

        if(rows.length <=0){}

        callback(rows);
    });
};

module.exports.update = async (id, category) => {
    const sql = "UPDATE CATEGORY SET name = '" + category.Name + "' WHERE id = " + id;

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};

module.exports.delete = async (id) => {
    const sql = "DELETE FROM CATEGORY WHERE id =" + id;

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};