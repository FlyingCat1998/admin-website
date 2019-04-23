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

router.get('/danh-sach-san-pham.hbs', function(req, res, next) {
  res.render('danh-sach-san-pham', { title: 'DoubleT | Quản lý sản phẩm' });
});

router.get('/danh-sach-don-dat-hang.hbs', function(req, res, next) {
  res.render('danh-sach-don-dat-hang', { title: 'DoubleT | Quản lý đơn đặt hàng' });
});

router.get('/thong-ke-doanh-so.hbs', function(req, res, next) {
  res.render('thong-ke-doanh-so', { title: 'DoubleT | Thống kê doanh số' });
});

router.get('/thong-ke-top-10.hbs', function(req, res, next) {
  res.render('thong-ke-top-10', { title: 'DoubleT | Thống kê theo top 10' });
});

module.exports = router;
