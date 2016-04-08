var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello World from Epxress');
});
app.use('/', express.static('.'));

app.use('/dev', express.static('dev'));
app.use('/node_modules', express.static('node_modules'));

app.listen(8080, function() {
  console.log('Nodejs server content on port 8080');
});
