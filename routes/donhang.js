var express = require('express');
var router = express.Router();

var don_hang_controller = require('../controllers/donhangController');

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

module.exports = router;
