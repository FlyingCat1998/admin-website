var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT\'s Admin website' });
});

router.get('/trang-chu.hbs', function(req, res, next) {
  res.render('trang-chu', { title: 'DoubleT\'s Admin website' });
});


module.exports = router;
