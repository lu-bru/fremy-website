var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const perfilRouter = require('./routes/perfil');
const registroRouter = require('./routes/registro');
const carritoRouter = require('./routes/carrito');
const adminRouter = require('./routes/admin');
const localesRouter = require('./routes/locales');
const tiendaRouter = require('./routes/tienda');
const faqRouter = require('./routes/faq');
const editarproductoRouter = require('./routes/editarproducto');
const eliminarproductoRouter = require('./routes/eliminarproducto');
const subscripcionRouter = require('./routes/subscripcion');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret : 'CURSOPWI_2019', resave: false, saveUninitialized: false, cookie : {maxAge: null}}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/perfil', perfilRouter);
app.use('/registro', registroRouter);
app.use('/carrito', carritoRouter);
app.use('/admin', adminRouter);
app.use('/locales', localesRouter);
app.use('/tienda', tiendaRouter);
app.use('/faq', faqRouter);
app.use('/editarproducto', editarproductoRouter);
app.use('/eliminarproducto', eliminarproductoRouter);
app.use('/subscripcion', subscripcionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
