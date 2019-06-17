const connection = require('../dbs/index');

connection.query('SELECT PRODUCT_ORDER.*, PRODUCT.name as productName FROM PRODUCT_ORDER, PRODUCT WHERE PRODUCT_ORDER.pid = PRODUCT.pid', function (err, rows) {
    if (err) throw err;

    module.exports.list = rows;
});

module.exports.newList = async (callback) => {
    const sql = "SELECT PRODUCT_ORDER.*, PRODUCT.name as productName, DATE_FORMAT(PRODUCT_ORDER.dateorder, " +
        "'%d/%m/%Y'" + ") as orderdate, DATE_FORMAT(PRODUCT_ORDER.datedeliver," + "'%d/%m/%Y') as deliverdate " +
    "FROM PRODUCT_ORDER, PRODUCT " +
    "WHERE PRODUCT_ORDER.pid = PRODUCT.pid ORDER BY PRODUCT_ORDER.oid";
    connection.query(sql,function(err,rows) {
        if(err) throw err;

        callback(rows);
    });
};

module.exports.add = async (order) => {
    const sql = "INSERT INTO PRODUCT_ORDER (pid, status, total, name, phonenumber, address, description, dateorder, datedeliver) " +
        "VALUES (" + order.pid + ",'" + order.status + "'," + order.total + ",'" + order.customerName + "','"  + order.phonenumber + "','" + order.address + "','" + order.description + "','" + order.dateorder + "','" + order.datedeliver + "');";

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};

module.exports.find = function (id,callback){
    const sql = "SELECT *, DATE_FORMAT(dateorder, " +
        "'%Y-%m-%d'" + ") as orderdate, DATE_FORMAT(datedeliver," + "'%Y-%m-%d') as deliverdate " +
        "FROM PRODUCT_ORDER WHERE PRODUCT_ORDER.oid = " + id;

    connection.query(sql,function(err,rows) {
        if(err) throw err;

        if(rows.length <=0){}

        callback(rows);
    });
};

module.exports.update = async (id, order) => {
    const sql = "UPDATE PRODUCT_ORDER SET pid = " + order.pid + ", status = '" + order.status + "', total = " + order.total + ", name = '" + order.customerName +
        "', phonenumber = '" + order.phonenumber + "', address = '" + order.address + "', description = '" + order.description + "', dateorder = '" + order.dateorder + "', datedeliver = '" + order.datedeliver + "' WHERE oid = " + id;
console.log(sql);
    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};

module.exports.delete = async (id) => {
    const sql = "DELETE FROM PRODUCT_ORDER WHERE oid =" + id;

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};