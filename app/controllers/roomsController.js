'use strict';
var mysql = require('mysql');

var connection = mysql.createConnection({
    'host' : 'localhost',
    'port' : '3306',
    'user' : 'scheduler',
    'password' : 'password',
    'database' : 'scheduler'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

var roomController = function () {
    var middleware = function (req, res, next) {
        res.send('Middleware!');
        next();
        
    };
    
    var getRooms = function (req, res) {
            connection.query('SELECT roomid, roomname FROM rooms', req.params.id, function (err, rows, fields) {
                if (err) {
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                res.send(rows);
            });
        };

    var getRoomById = function (req, res) {
            connection.query('SELECT roomid, roomname FROM rooms where roomid = ' + req.params.roomid, req.params.id, function (err, rows, fields) {
                if (err) {
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                res.send(rows);
            });
        };    

    var deleteRoomById = function (req, res) {
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
                res.json({ message: 'Successfully deleted' });
            });
        };   

    var createRoom = function (req, res) {
        

        var roomname = mysql.escape(req.body.roomname);
        var dt = new Date();            
        var createddate = mysql.escape(dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate());
        var query = 'INSERT INTO rooms(roomname, createddate, active) values (' + roomname +  ',' + createddate + ', 1 ' + ')';
        connection.query(query, req.params.id, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                if (!err) {
                    res.send('Room created!');
                }
            });
        };   
                    
    return {
        createRoom: createRoom,
        getRooms : getRooms,
        getRoomById: getRoomById,
        deleteRoomById: deleteRoomById
    };
};

module.exports = roomController;