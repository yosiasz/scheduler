var cors = require('cors'),
    express = require('express'),
    personRouter = express.Router();
    
var persons = function(connection){
    personRouter.route('/')
     .get(function(req,res){
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

    personRouter.route('/:personid')   
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
            
    return personRouter;
        
};
module.exports = persons;