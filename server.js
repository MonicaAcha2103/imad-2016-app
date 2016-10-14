var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('https://www.instagram.com/p/BLSuNhaBqnK6krx1EfImbd3YSgj6fInAoGGuTc0/?taken-by=monica_acha2103', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'https://www.instagram.com/p/BLSuNhaBqnK6krx1EfImbd3YSgj6fInAoGGuTc0/?taken-by=monica_acha2103'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
