var express = require('express');
var router = express.Router();
var the_loai_controller = require('../controllers/theloaiController');

/// THE LOAI ROUTES ///
// GET request for list of all The Loai.
router.get('/danh_sach_the_loai', the_loai_controller.danh_sach_the_loai);

// GET,POST request to create The Loai.
router.get('/them_the_loai', the_loai_controller.them_the_loai);
router.post('/them_the_loai', the_loai_controller.them_the_loai_post);

// GET,POST request to update The Loai.
router.get('/chinh_sua_the_loai/(:id)', the_loai_controller.chinh_sua_the_loai);
router.post('/chinh_sua_the_loai/(:id)', the_loai_controller.chinh_sua_the_loai_post);

// GET request to delete The Loai
router.get('/xoa_the_loai/(:id)', the_loai_controller.xoa_the_loai);

module.exports = router;
