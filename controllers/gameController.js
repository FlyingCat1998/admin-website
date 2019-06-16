let Games = require('../models/game');

exports.danh_sach_san_pham = async (req, res, next) => {
    let games = await Games.list;

    res.render('game/danh_sach_san_pham', { title: 'Danh sách sản phẩm', games });
};

exports.them_san_pham = async (req, res, next) => {
    let category = await Games.CategoryList;

    // thong bao them thanh cong
    res.render('game/them_san_pham', { title: 'Thêm sản phẩm', category });
};

exports.them_san_pham_post = async (req, res, next) => {
    await Games.add(req.body);

    res.redirect('./danh_sach_san_pham');
};

exports.chinh_sua_san_pham = async (req, res, next) => {
    let categories = await Games.CategoryList;

    await Games.find(req.params.id, function(result) {
        let selectedCategory = "";

        for (let i = 0; i <  Games.CategoryList.length; i++)
        {
            if ( categories[i].id == result[0].cid)
            {
                selectedCategory = categories[i].name;
            }
        }

        res.render('game/chinh_sua_san_pham', { title: 'Chỉnh sửa sản phẩm', result, categories, selectedCategory});
    });
};

exports.chinh_sua_san_pham_post = async (req, res, next) => {
    await Games.update(req.params.id, req.body);

    // thong bao cap nhat thanh cong
    res.redirect('/game/danh_sach_san_pham');
};

exports.xoa_san_pham = async (req, res, next) => {
    await Games.delete(req.params.id);

    res.redirect('/game/danh_sach_san_pham');
};
// exports.game_create = function(req, res) {
//     res.send('NOT IMPLEMENTED: Game create');
// };
//
// exports.game_update = function(req, res) {
//     res.send('NOT IMPLEMENTED: Game update');
// };
//
// exports.game_detail = function(req, res) {
//     res.send('NOT IMPLEMENTED: Game detail: ' + req.params.id);
// };
//
// exports.game_delete= function(req, res) {
//     res.send('NOT IMPLEMENTED: Game delete');
// };