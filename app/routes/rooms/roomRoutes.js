var cors = require('cors'),
    express = require('express'),
     roomRouter = express.Router();
     
var router = function(connection){
    /*app.options('/rooms', cors()); // enable pre-flight request for SELECT request 
    app.options('/rooms:roomid', cors()); // enable pre-flight request for SELECT request 
    app.options('/rooms', cors()); // enable pre-flight request for INSERT request 
    app.options('/rooms/:roomid', cors()); // enable pre-flight request for DELETE request*/
    roomRouter.route('/rooms')    
    .get(function(req,res){
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
    roomRouter.route('/rooms/:roomid')   
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
    roomRouter.route('/rooms')
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
    roomRouter.route('/rooms/:roomid')
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