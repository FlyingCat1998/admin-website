const connection = require('../dbs/index');

connection.query('SELECT * FROM ADMIN_ACCOUNT', function (err, rows) {
    if (err) throw err;

    exports.admin_account_list = rows;
});

    // connection.query('SELECT * FROM ADMIN_ACCOUNT WHERE ADMIN_ACCOUNT.USERNAME = "SC"  ' , function (err, result) {
    //     if (err) throw err;
    //     exports.admin_profile = result;
    // });

connection.query('SELECT * FROM USER_ACCOUNT', function (err, rows) {
    if (err) throw err;
    exports.user_account_list = rows;
});

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

