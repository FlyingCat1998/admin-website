const connection = require('../dbs/index');

connection.query('SELECT * FROM PRODUCT', function (err, rows) {
    if (err) throw err;

    module.exports.list = rows;
});

connection.query('SELECT CATEGORY.id, CATEGORY.name FROM CATEGORY', function (err, rows) {
    if (err) throw err;

    module.exports.CategoryList = rows;
});

module.exports.add = async (game) => {
    const sql = "INSERT INTO PRODUCT (name, cid, avatar, imgurl1, imgurl2, imgurl3, price, quantity, publisher, developer, description) " +
        "VALUES ('" + game.Name + "'," + game.Genre + ",'" + game.Url + "','" + game.Url1 + "','" + game.Url2 + "','" + game.Url3 + "'," + game.Price + "," + game.Quantity + ",'" + game.Publisher + "','" + game.Developer + "','" + game.Description + "');";

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};

module.exports.find = function (id,callback){
    const sql = "SELECT * FROM PRODUCT WHERE PRODUCT.pid = " + id;

    connection.query(sql,function(err,rows) {
        if(err) throw err;

        if(rows.length <=0){}

        callback(rows);
    });
};

module.exports.update = async (id, game) => {
    const sql = "UPDATE PRODUCT SET name = '" + game.Name + "', cid = " + game.Genre + ", avatar = '" + game.Url + "', imgurl1 = '" + game.Url1 +
        "', imgurl2 = '" + game.Url2 + "', imgurl3 = '" + game.Url3 + "', price = " + game.Price + ", quantity = " + game.Quantity +
        ", publisher = '" + game.Publisher + "', developer = '" + game.Developer + "', description = '" + game.Description + "'WHERE pid = " + id;

    console.log(sql);

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};
