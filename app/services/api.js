/* 
	Gotchas
		CASE SENSITIVE on column names. Always use AngularJS plugin for debugging to see models 

        Route	             HTTP     Verb	Description
        /api/bears	         GET	  Get all the bears.
        /api/bears	         POST	  Create a bear.
        /api/bears/:bear_id	 GET	  Get a single bear.
        /api/bears/:bear_id	 PUT	  Update a bear with new info.
        /api/bears/:bear_id	 DELETE	  Delete a bear.
*/


var mysql = require('mysql'), 
    express = require('express'),
    session = require('express-session'), 
    bodyParser = require('body-parser'),
	util = require('util'), 
    app = module.exports = express(), 
	config = require('../config/config.js'),
    cors = require('cors')
 
 
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 var connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password : config.password,
	port : config.port, 
    database: config.database
});

var sess;
 
//console.log(connection);

app.all('*', function(req, res, next) {
    sess=req.session;
    res.header("Access-Control-Allow-Origin", "*");
	next();
 });
 
var rooms = require('../routes/rooms/rooms.js')(connection);
var buildings = require('../routes/buildings/buildings.js')(connection);
var persons = require('../routes/persons/persons.js')(connection);
var users = require('../routes/users/users.js')(connection);

app.use(rooms);
app.use(buildings);
app.use(persons);
app.use(users);
app.listen(8001);

console.log('Http Server running at http://localhost:8001/api/*');