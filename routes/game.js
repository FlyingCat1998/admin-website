var express = require('express');
var router = express.Router();
var game_controller = require('../controllers/gameController');

/// GAME ROUTES ///

// GET request for list of all Game.
router.get('/danh_sach_san_pham', game_controller.danh_sach_san_pham);

// GET,POST request to create Game.
router.get('/them_san_pham/', game_controller.them_san_pham);
router.post('/them_san_pham', game_controller.them_san_pham_post);

// GET,POST request to update Game.
router.get('/chinh_sua_san_pham/(:id)', game_controller.chinh_sua_san_pham);
router.post('/chinh_sua_san_pham/(:id)', game_controller.chinh_sua_san_pham_post);

// GET request to delete Game
router.get('/xoa_san_pham/(:id)', game_controller.xoa_san_pham);
// // GET request for creating 1 Game. NOTE This must come before routes that display Game (uses id).
// router.get('/create', game_controller.game_create_get);
//
// // POST request for creating Game.
// router.post('/create', game_controller.game_create_post);
//
// // GET request to delete Game.
// router.get(':id/delete', game_controller.game_delete_get);
//
// // POST request to delete Game.
// router.post('/:id/delete', game_controller.game_delete_post);
//
// // GET request to update Game.
// router.get('/:id/update', game_controller.game_update_get);
//
// // POST request to update Game.
// router.post('/:id/update', game_controller.game_update_post);
//
// // GET request for one Game.
// router.get('/:id', game_controller.game_detail);

module.exports = router;
