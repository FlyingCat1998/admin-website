var NguoiDung = require('../models/nguoidung');

// exports.index = async (req, res) => {
//     res.render('dang_nhap', {layout: 'dang_nhap', title: 'DoubleT | Đăng nhập'});
// };
//
// exports.dangxuat = async (req, res) => {
//     req.logout();
//     res.redirect('/');
// };

exports.danh_sach_nguoi_dung = async (req, res, next) => {
    await NguoiDung.user_account_new_list(function (users) {
        res.render('nguoidung/danh_sach_nguoi_dung', {title: 'Danh sách người dùng', users});
    });
};

exports.thong_tin_ca_nhan = async (req, res, next) => {
    await NguoiDung.find_admin_account(1,function (adminUser) {
        res.render('nguoidung/thong_tin_ca_nhan', { title: 'Thông tin cá nhân', adminUser});
    });
};

exports.thong_tin_ca_nhan_post = async (req, res, next) => {
    await NguoiDung.update_admin_account(1, req.body);

    // res.render('nguoidung/thong_tin_ca_nhan', { title: 'Thông tin cá nhân', adminUser})
    res.redirect('/nguoidung/thong_tin_ca_nhan');
};

exports.thong_tin_nguoi_dung = async (req, res, next) => {
    await NguoiDung.find_user_account(req.params.id, function(user) {
        res.render('nguoidung/thong_tin_nguoi_dung', { title: 'Thông tin người dùng', user});
    });
};
// exports.nguoidung_list = function(req, res) {
//     res.send('NOT IMPLEMENTED: Nguoi dung list');
// };
//
// exports.nguoidung_detail = function(req, res) {
//     res.send('NOT IMPLEMENTED: Nguoi dung detail: ' + req.params.id);
// };
//
// exports.nguoidung_delete = function(req, res) {
//     res.send('NOT IMPLEMENTED: Nguoi dung delete');
// };