let TheLoai = require('../models/theloai');

exports.danh_sach_the_loai = async (req, res, next) => {
    // let categories = await TheLoai.nlist;
    //
    // res.render('theloai/danh_sach_the_loai', { title: 'Danh sách thể loại', categories });

    await TheLoai.newList(function (categories) {
        res.render('theloai/danh_sach_the_loai', { title: 'Danh sách thể loại', categories });
    })
};

exports.them_the_loai = async (req, res, next) => {
    // thong bao them thanh cong
    res.render('theloai/them_the_loai', { title: 'Thêm thể loại' });
};

exports.them_the_loai_post = async (req, res, next) => {
    await TheLoai.add(req.body);

    res.redirect('./danh_sach_the_loai');
};

exports.chinh_sua_the_loai = async (req, res, next) => {
    await TheLoai.find(req.params.id, function(category) {
        res.render('theloai/chinh_sua_the_loai', { title: 'Chỉnh sửa thể loại', category});
    });
};

exports.chinh_sua_the_loai_post = async (req, res, next) => {
    await TheLoai.update(req.params.id, req.body);

    // thong bao cap nhat thanh cong
    res.redirect('/theloai/danh_sach_the_loai');
};

exports.xoa_the_loai = async (req, res, next) => {
    await TheLoai.delete(req.params.id);

    res.redirect('/theloai/danh_sach_the_loai');
};
