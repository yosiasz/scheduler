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
 
var roomRoutes = require('../routes/rooms/index.js')(connection);
var buildingRoutes = require('../routes/buildings/index.js')(connection);
var personRoutes = require('../routes/persons/personRoutes.js')(connection);
var userRoutes = require('../routes/persons/userRoutes')(connection);
var authRoutes = require('../routes/auth/authRoutes.js')(connection);

app.use('/Rooms', roomRoutes);
app.use('/Buildings',buildingRoutes);
app.use('/Persons', personRoutes);
app.use('/Users', userRoutes);
app.use('/Auth', authRoutes);

app.listen(8001);
console.log('Http Server running at http://localhost:8001');