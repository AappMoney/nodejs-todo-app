var express = require('express');
var bodyParser = require('body-parser');

var todoControllers = require('./controllers/todoControllers');

var app = express();

app.use( bodyParser.urlencoded({ extended: true }) );
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('./public'));

todoControllers(app);

app.listen(3000)
console.log('You are listen port to 3000');