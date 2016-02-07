var express = require('express');
var PORT = process.env.PORT || 8090;

var app = express();


app.use('/static', express.static('public'));

app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));
app.use('/img', express.static('public/img'));

app.get('/blog', function(req, res) {
  res.sendFile(process.cwd() + "/public/blog.html");
});

app.get('/contact', function(req, res) {
  res.sendFile(process.cwd() + "/public/contact.html");
});

app.get('/portfolio', function(req, res) {
  res.sendFile(process.cwd() + "/public/portfolio.html");
});

app.get('/resume', function(req, res) {
  res.sendFile(process.cwd() + "/public/resume.html");
});

app.get('/github', function(req, res) {
  res.sendFile(process.cwd() + "/public/github.html");
});

app.get("/index", function(req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.listen(PORT, function() {
  console.log('Listening on port %s', PORT);
});