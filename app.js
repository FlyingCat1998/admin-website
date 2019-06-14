var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var donHangRouter = require('./routes/donhang');
var gameRouter = require('./routes/game');
// var nguoiDungRouter = require('./routes/nguoidung');
// var theLoaiRouter = require('./routes/theloai');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/donhang', donHangRouter);
app.use('/game', gameRouter);
// app.use('/nguoidung', nguoiDungRouter);
// app.use('/theloai', theLoaiRouter);

app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// catch 404 and forward to error handler
app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('hbs')) {
    res.render('404', { layout: '404' });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;