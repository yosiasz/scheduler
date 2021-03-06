var express = require('express'),
    app = express(),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
	util = require('util'),
	configmongo = require('../config/configmongo.js'),
    passportconfig = require('../config/passport.js'),
    cookieParser = require('cookie-parser'),
    sess;
    
 
// configure app to use bodyParser()
// this will let us get the data from a POST
//Looks to see if there is a body json and parses
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/partials'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'scheduler',
    name: 'scheduler',
    //store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));


 
app.all('*', function(req, res, next) {
    sess = req.session;
    res.header("Access-Control-Allow-Origin", "*");
	next();
});
 
//app.use(cookieParser);
//console.log(configmongo.url);

var roomRoutes = require('../routes02/rooms/roomRoutes.js')(configmongo.url);

/*
var buildingRoutes = require('./routes/buildings/buildingRoutes.js')(connection);
var personRoutes = require('./routes/persons/personRoutes.js')(connection);
var userRoutes = require('./routes/persons/userRoutes')(connection);
var authRoutes = require('./routes/auth/authRoutes.js')(connection);
*/

app.use(roomRoutes);

/*
app.use(buildingRoutes);
app.use(personRoutes);
app.use('/Users',userRoutes);
app.use('/Auth', authRoutes);
*/
//module.exports = app;

app.listen(8001);
console.log('Http Server running at http://localhost:8001');