const connection = require('../dbs/index');

connection.query('SELECT * FROM ADMIN_ACCOUNT', function (err, rows) {
    if (err) throw err;

    exports.admin_account_list = rows;
});

module.exports.admin_account_new_list = async (callback) => {
    const sql = "SELECT * FROM ADMIN_ACCOUNT";
    connection.query(sql,function(err,rows) {
        if(err) throw err;

        callback(rows);
    });
};

module.exports.find_admin_account = async (id, callback) => {
    const sql = "SELECT * FROM ADMIN_ACCOUNT WHERE ID = " + id;
    await connection.query(sql,function(err,rows) {
        if(err) throw err;

        callback(rows);
    });
};

module.exports.update_admin_account = async (id, adminUser) => {
    const sql = "UPDATE ADMIN_ACCOUNT SET username = '" + adminUser.username + "', password = '" + adminUser.password + "', name ='" + adminUser.name + "', url = '" + adminUser.url +
        "', email = '" + adminUser.email + "', phonenumber = '" + adminUser.phonenumber + "', address = '" + adminUser.address + "' WHERE id = " + id;
    await connection.query(sql,function(err,rows) {
        if(err) throw err;
    });
};
// connection.query('SELECT * FROM ADMIN_ACCOUNT WHERE ADMIN_ACCOUNT.USERNAME = "SC"  ' , function (err, result) {
//     if (err) throw err;
//     exports.admin_profile = result;
// });

connection.query('SELECT * FROM USER_ACCOUNT', function (err, rows) {
    if (err) throw err;
    exports.user_account_list = rows;
});

module.exports.user_account_new_list = async (callback) => {
    const sql = "SELECT * FROM USER_ACCOUNT";
    await connection.query(sql,function(err,rows) {
        if(err) throw err;

        callback(rows);
    });
};

module.exports.find_user_account = async (id, callback) => {
    const sql = "SELECT * FROM USER_ACCOUNT WHERE ID =" + id;
    await connection.query(sql,function(err,rows) {
        if(err) throw err;

        callback(rows);
    });
};

// exports.login = async (req, res) => {
//     var message = '';
//     // var sess = req.session;
//
//     if(req.method == "POST"){
//         const post  = req.body;
//         const name = post.username;
//         const pass = post.password;
//
//         const sql="SELECT id, username, name, email FROM ADMIN_ACCOUNT WHERE username=" + name + "AND password = " + pass;
//         connection.query(sql, function(err, results){
//             if (err) throw err;
//
//             if(results.length){
//                 // req.session.userId = results[0].id;
//                 // req.session.user = results[0];
//                 console.log(results[0].id);
//                 res.redirect('/trang-chu');
//             }
//             else{
//                 message = 'Wrong Credentials.';
//                 res.render('dang-nhap',{ layout: 'dang-nhap', message: message });
//             }
//
//         });
//     } else {
//         res.render('dang-nhap',{ layout: 'dang-nhap', message: message });
//     }
// }
// });

// exports.verify = async (username, password) => {
//     const user = await dbs.production.collection(USERS).findOne({email: username})
//     if (user)
//         return undefined;
//     // verify password
//     // ...
//     return results[0];
// };