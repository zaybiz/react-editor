
var fs = require('fs');
var path = require('path');
var tempWrite = require('temp-write');

require('node-jsx').install();
var React = require('react/addons');
var reactTools = require('react-tools');
var sampleFileString = fs.readFileSync(path.resolve(__dirname, './app/sample.js'), 'utf-8');
//var sampleFilepath = tempWrite.sync(reactTools.transform(sampleFileString), 'sample.js');
//var SampleComponent = React.createFactory(require(sampleFilepath));
console.log(reactTools.transform(sampleFileString));

var express = require('express');
var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);

var bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'app/templates'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.get('/', function(req, res) {
  res.render('index');
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