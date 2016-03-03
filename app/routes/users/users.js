var cors = require('cors'),
    express = require('express'),
     app = express();
     
var mysql = require('mysql');     
 var connection = mysql.createConnection({
    host: 'localhost',
    user: 'scheduler',
    password : 'dasscheduler',
	port : 3306, 
    database: 'scheduler'
});


module.exports = function(){
app.get('users/', function(req,res){
	connection.query('SELECT userid, username, firstname, lastname FROM users', req.params.id, function(err, rows, fields) {
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

app.post('/users', function(req, res){
    connection.query('INSERT INTO persons(firstname, lastname) values ("' + req.body.firstname + '","' +  req.body.lastname + '")', req.params.id, function(err, rows, fields) {
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