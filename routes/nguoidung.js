var express = require('express');
var router = express.Router();
var nguoi_dung_controller = require('../controllers/nguoidungController');

/// NGUOI DUNG ROUTES ///

// GET request for listing users.
router.get('/danh_sach_nguoi_dung', nguoi_dung_controller.danh_sach_nguoi_dung);

// GET request for changeing admin user profile
router.get('/thong_tin_ca_nhan/', nguoi_dung_controller.thong_tin_ca_nhan);

router.post('/thong_tin_ca_nhan/', nguoi_dung_controller.thong_tin_ca_nhan_post);

// GET request for user profile
router.get('/thong_tin_nguoi_dung/(:id)', nguoi_dung_controller.thong_tin_nguoi_dung);
// router.get('/dang_xuat', nguoi_dung_controller.dangxuat);

// GET request to delete NguoiDung.
// router.get('/nguoidung/:id/delete', nguoi_dung_controller.nguoidung_delete_get);
//
// // POST request to delete NguoiDung.
// router.post('/nguoidung/:id/delete', nguoi_dung_controller.nguoidung_delete_post);
//
// // GET request to update NguoiDung.
// router.get('/nguoidung/:id/update', nguoi_dung_controller.nguoidung_update_get);
//
// // POST request to update NguoiDung.
// router.post('/nguoidung/:id/update', nguoi_dung_controller.nguoidung_update_post);
//
// // GET request for one NguoiDung.
// router.get('/nguoidung/:id', nguoi_dung_controller.nguoidung_detail);
//
// // GET request for list of all NguoiDung.
// router.get('/nguoidung', nguoi_dung_controller.nguoidung_list);

module.exports = router;
