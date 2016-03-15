var roomRouter =require('express').Router()   
    mysql = require('mysql');

var connection = mysql.createConnection({
 connectionLimit : 1, //important    
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

module.exports = function(req, res){
    connection.query('SELECT roomid, roomname FROM rooms', req.params.id, function(err, rows, fields) {
        connection.end();
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
};
