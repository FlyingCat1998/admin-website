var express = require('express');
var router = express.Router();
var don_hang_controller = require('../controllers/donhangController');

/// THE LOAI ROUTES ///
// GET request for list of all Don Hang.
router.get('/danh_sach_don_hang', don_hang_controller.danh_sach_don_hang);

// GET,POST request to create Don Hang
router.get('/them_don_hang', don_hang_controller.them_don_hang);
router.post('/them_don_hang', don_hang_controller.them_don_hang_post);

// GET,POST request to update Don Hang.
router.get('/chinh_sua_don_hang/(:id)', don_hang_controller.chinh_sua_don_hang);
router.post('/chinh_sua_don_hang/(:id)', don_hang_controller.chinh_sua_don_hang_post);

// GET request to delete Don Hang
router.get('/xoa_don_hang/(:id)', don_hang_controller.xoa_don_hang);

module.exports = router;
