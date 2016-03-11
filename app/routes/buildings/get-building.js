var cors = require('cors'),
    roomRouter =require('express').Router()   
 mysql = require('mysql');

var connection = mysql.createConnection({
'host' : 'localhost',
'port' : '3306',
'user' : 'scheduler',
'password' : 'password',
'database' : 'scheduler'
});

var router = function(req, res){
    connection.query('SELECT buildingid, buildingname FROM buildings WHERE buildingid = ' + req.params.buildingid, req.params.id, function(err, rows, fields) {
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

module.exports = router;
