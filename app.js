var http = require('http');
var express = require('express');
var multer = require('multer');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 9090);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(multer({
  dest: './uploads/',
  rename: function(fieldname, filename) {
    return filename;
  }
}));

app.post('/', function(req, res) {
  var form = {
    body: req.body,
    files: req.files
  }
  res.send(form);
});

app.get('/', function(req, res){
  res.render('index');
});

var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('uploader is started at ' + app.get('port'));
});
