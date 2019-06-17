let DonHang = require('../models/donhang');
let Games = require('../models/game');

exports.danh_sach_don_hang = async (req, res, next) => {
    // let categories = await TheLoai.nlist;
    //
    // res.render('theloai/danh_sach_the_loai', { title: 'Danh sách thể loại', categories });

    await DonHang.newList(function (orders) {
        res.render('donhang/danh_sach_don_hang', { title: 'Danh sách đơn hàng', orders });
    })
};

exports.them_don_hang = async (req, res, next) => {
    await Games.newList(function (games) {
        res.render('donhang/them_don_hang', { title: 'Thêm đơn hàng', games});
    })
};

exports.them_don_hang_post = async (req, res, next) => {
    await DonHang.add(req.body);

    res.redirect('./danh_sach_don_hang');
};

exports.chinh_sua_don_hang = async (req, res, next) => {
    let games = Games.list;
    await DonHang.find(req.params.id, function(order) {
        let selectedGame = "";
        for (let i = 0; i <  Games.list.length; i++)
        {
            if (games[i].pid == order[0].pid)
            {
                selectedGame = games[i].name;
            }
        }
        res.render('donhang/chinh_sua_don_hang', { title: 'Chỉnh sửa đơn hàng', order, games, selectedGame});
    });
};

exports.chinh_sua_don_hang_post = async (req, res, next) => {
    await DonHang.update(req.params.id, req.body);

    // thong bao cap nhat thanh cong
    res.redirect('/donhang/danh_sach_don_hang');
};

exports.xoa_don_hang = async (req, res, next) => {
    await DonHang.delete(req.params.id);

    res.redirect('/donhang/danh_sach_don_hang');
};
