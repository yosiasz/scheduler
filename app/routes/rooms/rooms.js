var cors = require('cors'),
    express = require('express'),
     app = express();
     
var mysql = require('mysql');     
 var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'Semrina77',
	port : 3306, 
    database: 'scheduler'
});


module.exports = function(){
    app.options('/rooms', cors()); // enable pre-flight request for SELECT request 
    app.options('/rooms:roomid', cors()); // enable pre-flight request for SELECT request 
    app.options('/rooms', cors()); // enable pre-flight request for INSERT request 
    app.options('/rooms/:roomid', cors()); // enable pre-flight request for DELETE request 

    app.get('/rooms/',  cors(), function(req,res){
        connection.query('SELECT roomid, roomname FROM rooms', req.params.id, function(err, rows, fields) {
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
    app.get('/rooms/:roomid',  cors(), function(req,res){
        connection.query('SELECT roomid, roomname FROM rooms WHERE roomid = ' + req.params.roomid, req.params.id, function(err, rows, fields) {
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
    app.post('/rooms',  cors(), function(req, res){
    connection.query('INSERT INTO rooms(roomname) values ("' + req.body.roomname + '")', req.params.id, function(err, rows, fields) {
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
    app.delete('/rooms/:roomid',  cors(), function(req, res){

        var roomid = req.params.roomid;
        
        connection.query('DELETE FROM rooms Where roomid = ' + roomid , req.params.id, function(err, rows, fields) {
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