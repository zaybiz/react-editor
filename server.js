var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'app/templates'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routing
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

http.listen(app.get('port'), function(){
  console.log('listen on: 3000');
});

module.exports = app;