const Games = require('../models/game');

exports.danh_sach_san_pham = async (req, res, next) => {
    const games = await Games.list;

    res.render('game/danh_sach_san_pham', { title: 'Danh sách sản phẩm', games });
};

exports.chinh_sua_san_pham = async (req, res, next) => {
    const games = await Games.list;

    res.render('game/chinh_sua_san_pham', { title: 'Chỉnh sửa sản phẩm', games });
};

exports.them_san_pham = async (req, res, next) => {
    const games = await Games.list;

    res.render('game/them_san_pham', { title: 'Thêm sản phẩm', games });
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