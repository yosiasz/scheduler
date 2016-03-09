var cors = require('cors'),
    express = require('express'),
     app = express();
     
var persons = function(connection){
    app.get('/persons/', function(req,res){
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
        
    return app;
        
};
module.exports = persons;