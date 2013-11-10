
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'ytghhgiikjlkjghjjhh'}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//Routs

app.get('/', routes.index); // GET localhost/
app.get('/users', user.list); // GET localhost/users
app.get('/users/dash', user.dash); // GET localhost/dash
app.get('/users/login', user.login); // GET localhost/users/login
app.post('/users/logger', user.logger); // POST localhost/users/logger
app.get('/users/logout', user.logout); // GET localhost/users/logout
app.get('/users/:username', user.profile); // GET  localhost/users/bill

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
