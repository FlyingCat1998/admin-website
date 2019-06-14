var express = require('express');
var router = express.Router();
var nguoi_dung_controller = require('../controllers/nguoidungController');

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
