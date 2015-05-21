var express = require('express');
var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);
var path = require('path');
//var favicon = require('static-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


app.set('views', path.join(__dirname, 'app/templates'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
//app.use(favicon());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());


app.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.set('port', process.env.PORT || 3000);

io.on('connection', function(socket){
  console.log('user connected ', socket.id);
  socket.on('disconnect', function () {
    console.log('User disconnected. %s. Socket id %s', socket.id);
  });
});


http.listen(app.get('port'), function(){
  console.log('listen on: 3000');
});

module.exports = app;