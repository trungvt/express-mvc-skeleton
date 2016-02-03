var express = require('express');

var app = express();

// server port
app.set('port', process.env.PORT || 8080); // 8080 port for default value

// handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// all static files in 'public' folder
app.use(express.static(__dirname + '/public'));

// 'views' folder
app.set('views', __dirname + '/views');

// 'controllers' registration
var indexRoute = require('./controllers/index');
indexRoute.registerRoutes(app);

var errorRoute = require('./controllers/error');
errorRoute.registerRoutes(app);

// start the server
var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("express-mvc web application has been started at http://%s:%s", host, port);
});