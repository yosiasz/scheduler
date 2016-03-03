var cors = require('cors'),
    express = require('express');
     app = express();
     
var mysql = require('mysql');
     
 var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'Semrina77',
	port : 3306, 
    database: 'scheduler'
});

app.options('/buildings', cors()); // enable pre-flight request for SELECT request 
app.options('/buildings:buildingid', cors()); // enable pre-flight request for SELECT request 
app.options('/buildings', cors()); // enable pre-flight request for INSERT request 
app.options('/buildings/:buildingid', cors()); // enable pre-flight request for DELETE request 

module.exports = function(){
app.get('/buildings/', function(req,res){
	connection.query('SELECT buildingid, buildingname  FROM buildings', req.params.id, function(err, rows, fields) {
		if (err) {
			console.error(err);
			res.statusCode = 500;
			res.send({
				result: 'error',
				err:    err.code
			});
		}
		res.send(rows);
	});
});

    return app;
        
}();