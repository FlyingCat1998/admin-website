const connection = require('../dbs/index');

connection.query('SELECT * FROM PRODUCT', function (err, rows) {
    if (err) throw err;

    module.exports.list = rows;
});

connection.query('SELECT CATEGORY.id, CATEGORY.name FROM CATEGORY', function (err, rows) {
    if (err) throw err;

    module.exports.CategoryList = rows;
});

exports.add = async (game) => {
    const sql = "INSERT INTO PRODUCT (name, cid, avatar, imgurl1, imgurl2, imgurl3, price, quantity, publisher, developer, description) " +
        "VALUES ('" + game.Name + "','" + game.Genre + "','" + game.Url + "','" + game.Url1 + "','" + game.Url2 + "','" + game.Url3 + "','" + game.Price + "','" + game.Quantity + "','" + game.Publisher + "','" + game.Developer + "','" + game.Description + "');";

    return await connection.query(sql, function (err, result) {
        if (err) throw err;
    });
};
