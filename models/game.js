const connection = require('../dbs/index');

connection.query('SELECT PRODUCT.*, CATEGORY.name as catName, PUBLISHER.name as pubName FROM PRODUCT, CATEGORY, PUBLISHER WHERE PRODUCT.cid = CATEGORY.ID AND PRODUCT.pbid = PUBLISHER.pbid ORDER BY PRODUCT.pid', function (err, rows) {
    if (err) throw err;

    module.exports.list = rows;
});

module.exports.newList = async (callback) => {
    connection.query('SELECT PRODUCT.*, CATEGORY.name as catName, PUBLISHER.name as pubName FROM PRODUCT, CATEGORY, PUBLISHER WHERE PRODUCT.cid = CATEGORY.ID AND PRODUCT.pbid = PUBLISHER.pbid ORDER BY PRODUCT.pid',function(err,rows) {
        if(err) throw err;

        callback(rows);
    });
};


connection.query('SELECT CATEGORY.id, CATEGORY.name FROM CATEGORY', function (err, rows) {
    if (err) throw err;

    module.exports.CategoryList = rows;
});

connection.query('SELECT PUBLISHER.pbid, PUBLISHER.name FROM PUBLISHER', function (err, rows) {
    if (err) throw err;

    module.exports.PublisherList = rows;
});

module.exports.add = async (game) => {
    const sql = "INSERT INTO PRODUCT (name, cid, avatar, imgurl1, imgurl2, imgurl3, price, quantity, pbid, developer, description) " +
        "VALUES ('" + game.Name + "'," + game.Genre + ",'" + game.Url + "','" + game.Url1 + "','" + game.Url2 + "','" + game.Url3 + "'," + game.Price + "," + game.Quantity + "," + game.Publisher + ",'" + game.Developer + "','" + game.Description + "');";

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};

module.exports.find = function (id, callback){
    const sql = "SELECT * FROM PRODUCT WHERE PRODUCT.pid = " + id;

    connection.query(sql,function(err,rows) {
        if(err) throw err;

        callback(rows);
    });
};

module.exports.update = async (id, game) => {
    const sql = "UPDATE PRODUCT SET name = '" + game.Name + "', cid = " + game.Genre + ", avatar = '" + game.Url + "', imgurl1 = '" + game.Url1 +
        "', imgurl2 = '" + game.Url2 + "', imgurl3 = '" + game.Url3 + "', price = " + game.Price + ", quantity = " + game.Quantity +
        ", pbid = " + game.Publisher + ", developer = '" + game.Developer + "', description = '" + game.Description + "' WHERE pid = " + id;

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};

module.exports.delete = async (id) => {
    const sql = "DELETE FROM PRODUCT WHERE pid =" + id;

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};