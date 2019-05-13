var express = require('express');
var router = express.Router();

var the_loai_controller = require('../controllers/theloaiController');

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

module.exports = router;
