var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT\'s Admin website' });
});

router.get('/trang-chu.hbs', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT\'s Admin website' });
});

router.get('/danh-sach-nguoi-dung.hbs', function(req, res, next) {
  res.render('danh-sach-nguoi-dung', { title: 'DoubleT | Danh sách người dùng' });
});

router.get('/thong-tin-ca-nhan.hbs', function(req, res, next) {
  res.render('thong-tin-ca-nhan', { title: 'DoubleT | Thông tin cá nhân' });
});

module.exports = router;
