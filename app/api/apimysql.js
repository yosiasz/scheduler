var mysql = require('mysql'), 
    express = require('express'),
    cookieParser = require('cookie-parser'),
    app = express(), 
    session = require('express-session'), 
    bodyParser = require('body-parser'),
	util = require('util'), 
	mysqlconfig = require('../config/configmysql.js'),
    cors = require('cors')
    
    
 
// configure app to use bodyParser()
// this will let us get the data from a POST
// Looks to see if there is a body json and parses

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/partials'));

app.use(cors());

//app.use(cookieParser);
app.use(session({secret: 'scheduler',
    name: 'scheduler',
    //store: sessionStore, // connect-mongo session store
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

require('../config/passport')(app);

var connection = mysql.createConnection({
    host: mysqlconfig.host,
    user: mysqlconfig.user,
    password : mysqlconfig.password,
	port : mysqlconfig.port, 
    database: mysqlconfig.database,
    connectionLimit : 100,
}, function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});



var sess;
 
app.all('*', function(req, res, next) {
    sess=req.session;
    res.header("Access-Control-Allow-Origin", "*");
	next();
 });
 
var roomRoutes = require('../routes/rooms/index.js');
var buildingRoutes = require('../routes/buildings/index.js');
var userRoutes = require('../routes/users/index.js');
var personRoutes = require('../routes/persons/index.js');
var authRoutes = require('../routes/auth/index.js');

app.use('/Rooms', roomRoutes);
app.use('/Buildings',buildingRoutes);
app.use('/Users', userRoutes);
app.use('/Persons', personRoutes);
app.use('/Auth', authRoutes);


app.listen(8001);
console.log('Http Server running at http://localhost:8001');