var express = require('express');
var favicon = require('express-favicon');
var indexCtrl = require('./controller/controller-index.js');

var app = express();

app.use(express.static('static'));
app.use(favicon(__dirname + '/static/img/favicon.ico'));
app.set('view engine', 'ejs');



app.get('/', indexCtrl);


app.use(function(req, res, next) {
    res.status(404).render('index-error');
});




app.listen(1337);
console.log('Express server listening on port 1337');
