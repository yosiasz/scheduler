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
    multer = require('multer'), 
	util = require('util'), 
    app = module.exports = express(), 
	config = require('../config/config'),
    cors = require('cors')
 
 
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 var connection = module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'Semrina77',
	port : 3306, 
    database: 'scheduler'
});

var sess;
 

app.all('*', function(req, res, next) {
    sess=req.session;
    res.header("Access-Control-Allow-Origin", "*");
	next();
 });
 
var rooms = require('../routes/rooms/rooms.js');
var buildings = require('../routes/buildings/buildings.js');
var persons = require('../routes/persons/persons.js');
var users = require('../routes/users/users.js');

app.use(rooms);
app.use(buildings);
app.use(users);
app.use(persons);

app.listen(8001);

console.log('Http Server running at http://localhost:8001/api/*');