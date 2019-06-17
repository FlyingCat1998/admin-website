var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var passport = require('passport');
var nguoidung = require('../models/nguoidung');
var nguoi_dung_controller = require('../controllers/nguoidungController');
/* GET home page. */
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.get('/', function(req, res, next) {
    res.render('dang-nhap', { layout: 'dang-nhap', title: 'DoubleT | Đăng nhập' });
});

// router.get('/dang-nhap',nguoi_dung_controller.index);
//
// router.post('/dang-nhap',
//     passport.authenticate('local',{
//       successRedirect: '/trang-chu',
//       failureRedirect: '/'})
// );

router.get('/dang-nhap', function(req, res, next) {
  res.render('dang-nhap', { layout: 'dang-nhap', title: 'DoubleT | Đăng nhập' });
});

// router.post('/trang-chu', nguoidung.login);

// router.post('/trang-chu', function(req, res){
//   nguoidung.login();
// });

router.post('/dang-nhap',function(req, res, next){
  const username = req.body.username;
  const password = req.body.password;
  let isAuthenticated = false;

  if (nguoidung.admin_account_list[0].username == username)
  {
    if (nguoidung.admin_account_list[0].password == password)
    {
      isAuthenticated = true;
    }
  }

  if (isAuthenticated)
  {
    res.render('trang-chu', { title: 'DoubleT\'s Admin website' });
  }
  else
  {
    res.redirect('/');
  }
  res.render('trang-chu', { title: 'DoubleT\'s Admin website' });
});

router.get('/dang-ki', function(req, res, next) {
  res.render('dang-ki', { layout: 'dang-ki', title: 'DoubleT | Đăng kí' });
});

router.get('/trang-chu', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT\'s Admin website' });
});

router.get('/danh-sach-nguoi-dung', function(req, res, next) {
  res.render('danh-sach-nguoi-dung', { title: 'DoubleT | Danh sách người dùng' });
});

router.get('/thong-tin-ca-nhan', function(req, res, next) {
  res.render('thong-tin-ca-nhan', { title: 'DoubleT | Thông tin cá nhân' });
});

router.get('/thong-ke-doanh-so', function(req, res, next) {
  res.render('thong-ke-doanh-so', { title: 'DoubleT | Thống kê doanh số' });
});

router.get('/thong-ke-top-10', function(req, res, next) {
  res.render('thong-ke-top-10', { title: 'DoubleT | Thống kê theo top 10' });
});

module.exports = router;
