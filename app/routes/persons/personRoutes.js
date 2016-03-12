var cors = require('cors'),
    app = require('express')

var mysql = require('mysql');

var connection = mysql.createConnection({
'host' : '10.0.0.5',
'port' : '3306',
'user' : 'scheduler',
'password' : 'Semrina77',
'database' : 'scheduler'
});
    
module.exports = function(){
    app.get('/', function(req,res){
        connection.query('SELECT personid, firstname, lastname FROM persons', req.params.id, function(err, rows, fields) {
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

    app.route('/:personid')   
    .get(function(req,res){
        connection.query('SELECT personid, firstname, lastname FROM persons WHERE personid = ' + req.params.personid, req.params.id, function(err, rows, fields) {
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
            
    //return express;
        
};
 