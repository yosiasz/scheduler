var cors = require('cors'),
    express = require('express'),
    roomRouter = express.Router();
        
    mysql = require('mysql');

var connection = mysql.createConnection({
'host' : 'localhost',
'port' : '3306',
'user' : 'scheduler',
'password' : 'password',
'database' : 'scheduler'
});
    
var router = function(connection){
    
    //roomRouter.all('*', cors());
    
    roomRouter.route('/')    
    .get(function(req,res){
        connection.query('SELECT roomid, roomname FROM rooms', req.params.id, function(err, rows, fields) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.send(err);
            }
            res.send('Hello Rooms');
        });
    });
    roomRouter.route('/:roomid')   
    .get(function(req,res){
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
    })
    roomRouter.route('/:roomname')
    .post(function(req, res){
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
            
    })
    roomRouter.route('/:roomid')    
    .delete(function(req, res){

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
    
    return roomRouter;
        
};

module.exports = router;