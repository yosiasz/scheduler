'use strict';
var mysql = require('mysql');

var connection = mysql.createConnection({
    'host' : 'localhost',
    'port' : '3306',
    'user' : 'scheduler',
    'password' : 'password',
    'database' : 'scheduler'
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
        connection.query('INSERT INTO rooms(roomname) values ("' + req.body.roomname + '")', req.params.id, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                res.send('Room created!');
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