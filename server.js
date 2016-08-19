var express = require("express");

var app = express();
const PORT = process.env.PORT | 8080;

app.use(function(req, res, next) {
  console.log("here: " + JSON.stringify(req.headers));
  if (!req.headers['x-forwarded-proto'] || 
      req.headers['x-forwarded-proto'] === 'http') {
    next();
  }
  else {
    req.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log("server started on " + PORT);
});

