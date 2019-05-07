var express = require('express');
var router = express.Router();


// Require our controllers.
var game_controller = require('../controllers/gameController');
var the_loai_controller = require('../controllers/theloaiController');
var don_hang_controller = require('../controllers/donhangController');
var nguoi_dung_controller = require('../controllers/nguoidungController');

/// GAME ROUTES ///

// GET home page.
// router.get('/', game_controller.index);

// GET request for creating 1 Game. NOTE This must come before routes that display Game (uses id).
router.get('/game/create', game_controller.game_create_get);

// POST request for creating Game.
router.post('/game/create', game_controller.game_create_post);

// GET request to delete Game.
router.get('/game/:id/delete', game_controller.game_delete_get);

// POST request to delete Game.
router.post('/game/:id/delete', game_controller.game_delete_post);

// GET request to update Game.
router.get('/game/:id/update', game_controller.game_update_get);

// POST request to update Game.
router.post('/game/:id/update', game_controller.game_update_post);

// GET request for one Game.
router.get('/game/:id', game_controller.game_detail);

// GET request for list of all Game.
router.get('/games', game_controller.game_list);


/// THE LOAI ROUTES ///

// GET request for creating a TheLoai. NOTE This must come before route that displays The_Loai (uses id).
router.get('/theloai/create', the_loai_controller.theloai_create_get);

// POST request for creating TheLoai.
router.post('/theloai/create', the_loai_controller.theloai_create_post);

// GET request to delete TheLoai.
router.get('/theloai/:id/delete', the_loai_controller.theloai_delete_get);

// POST request to delete TheLoai.
router.post('/theloai/:id/delete', the_loai_controller.theloai_delete_post);

// GET request to update TheLoai.
router.get('/theloai/:id/update', the_loai_controller.theloai_update_get);

// POST request to update TheLoai.
router.post('/theloai/:id/update', the_loai_controller.theloai_update_post);

// GET request for one TheLoai.
router.get('/theloai/:id', the_loai_controller.theloai_detail);

// GET request for list of all TheLoai.
router.get('/cactheloai', the_loai_controller.theloai_list);

/// DON HANG ROUTES ///

// GET request for creating DonHang. NOTE This must come before route for id (i.e. display DonHang).
router.get('/donhang/create', don_hang_controller.donhang_create_get);

// POST request for creating DonHang.
router.post('/donhang/create', don_hang_controller.donhang_create_post);

// GET request to delete DonHang.
router.get('/donhang/:id/delete', don_hang_controller.donhang_delete_get);

// POST request to delete DonHang
router.post('/donhang/:id/delete', don_hang_controller.donhang_delete_post);

// GET request to update DonHang.
router.get('/donhang/:id/update', don_hang_controller.donhang_update_get);

// POST request to update DonHang.
router.post('/donhang/:id/update', don_hang_controller.donhang_update_post);

// GET request for one DonHang.
router.get('/donhang/:id', don_hang_controller.donhang_detail);

// GET request for list of all DonHang.
router.get('/cacdonhang', don_hang_controller.donhang_list);


/// NGUOI DUNG ROUTES ///

// GET request for creating a NguoiDung. NOTE This must come before route that displays NguoiDung (uses id).
router.get('/nguoidung/create', nguoi_dung_controller.nguoidung_create_get);

// POST request for creating NguoiDung.
router.post('/nguoidung/create', nguoi_dung_controller.nguoidung_create_post);

// GET request to delete NguoiDung.
router.get('/nguoidung/:id/delete', nguoi_dung_controller.nguoidung_delete_get);

// POST request to delete NguoiDung.
router.post('/nguoidung/:id/delete', nguoi_dung_controller.nguoidung_delete_post);

// GET request to update NguoiDung.
router.get('/nguoidung/:id/update', nguoi_dung_controller.nguoidung_update_get);

// POST request to update NguoiDung.
router.post('/nguoidung/:id/update', nguoi_dung_controller.nguoidung_update_post);

// GET request for one NguoiDung.
router.get('/nguoidung/:id', nguoi_dung_controller.nguoidung_detail);

// GET request for list of all NguoiDung.
router.get('/nguoidung', nguoi_dung_controller.nguoidung_list);


module.exports = router;