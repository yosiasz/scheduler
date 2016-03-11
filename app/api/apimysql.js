var mysql = require('mysql'), 
    express = require('express'),
    app = express(), 
    session = require('express-session'), 
    bodyParser = require('body-parser'),
    passport = require('passport'),
	util = require('util'), 
	mysqlconfig = require('../config/configmysql.js'),
    passportconfig = require('../config/passport.js'),
    cors = require('cors'),
    cookieParser = require('cookie-parser')
    
 
// configure app to use bodyParser()
// this will let us get the data from a POST
// Looks to see if there is a body json and parses

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/partials'));


app.use(session({
    secret: 'scheduler',
    name: 'scheduler',
    //store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

//app.use(cookieParser);

var connection = mysql.createConnection({
    host: mysqlconfig.host,
    user: mysqlconfig.user,
    password : mysqlconfig.password,
	port : mysqlconfig.port, 
    database: mysqlconfig.database
});

var sess;
 
app.all('*', function(req, res, next) {
    sess=req.session;
    res.header("Access-Control-Allow-Origin", "*");
	next();
 });
 
<<<<<<< HEAD
var roomRoutes = require('../routes/rooms/index.js');
=======
//var roomRoutes = require('../routes/rooms/roomRoutes.js')(connection);
var roomRoutes = require('../routes/rooms/index.js')(connection);
>>>>>>> origin/master
var buildingRoutes = require('../routes/buildings/buildingRoutes.js')(connection);
var personRoutes = require('../routes/persons/personRoutes.js')(connection);
var userRoutes = require('../routes/persons/userRoutes')(connection);
var authRoutes = require('../routes/auth/authRoutes.js')(connection);

<<<<<<< HEAD
app.use('/Rooms',roomRoutes);
app.use(buildingRoutes);
app.use(personRoutes);
=======
app.use('/Rooms', roomRoutes);
app.use('/Buildings',buildingRoutes);
app.use('/Persons', personRoutes);
>>>>>>> origin/master
app.use('/Users',userRoutes);
app.use('/Auth', authRoutes);

//module.exports = app;

app.listen(8001);
console.log('Http Server running at http://localhost:8001');