var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
var passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
var flash = require('req-flash');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var donHangRouter = require('./routes/donhang');
var gameRouter = require('./routes/game');
var nguoiDungRouter = require('./routes/nguoidung');
var theLoaiRouter = require('./routes/theloai');

const User = require('./models/nguoidung');

passport.use(new LocalStrategy({usernameField: 'username'},
    async function (username, password, done) {
      try {
        const user = await User.get(username);
        if (!user) {
          return done(null, false, {message: 'Incorrect username.'});
        }
        const isPasswordValid = await User.validPassword(username, password);
        if (!isPasswordValid) {
          return done(null, false, {message: 'Incorrect password.'});
        }
        return done(null, user);
      } catch (ex) {
        return done(ex);
      }
    }));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  const user = await User.get(email);
  done(undefined, user);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  cookie: { maxAge: 60000 },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/donhang', donHangRouter);
app.use('/game', gameRouter);
app.use('/nguoidung', nguoiDungRouter);
app.use('/theloai', theLoaiRouter);

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