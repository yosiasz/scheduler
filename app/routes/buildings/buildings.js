var cors = require('cors'),
    express = require('express'),
    app = express();

var buildings = function(connection){
    app.options('/buildings', cors()); // enable pre-flight request for SELECT request 
    app.options('/buildings:buildingid', cors()); // enable pre-flight request for SELECT request 
    app.options('/buildings', cors()); // enable pre-flight request for INSERT request 
    app.options('/buildings/:buildingid', cors()); // enable pre-flight request for DELETE request
    
    app.get('/buildings/',  cors(), function(req,res){
        connection.query('SELECT buildingid, buildingname FROM buildings', req.params.id, function(err, rows, fields) {
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
    app.get('/buildings/:buildingid',  cors(), function(req,res){
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
    });
    app.post('/buildings',  cors(), function(req, res){
    connection.query('INSERT INTO buildings(buildingname) values ("' + req.body.buildingname + '")', req.params.id, function(err, rows, fields) {
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
    app.delete('/buildings/:buildingid',  cors(), function(req, res){

        var buildingid = req.params.buildingid;
        
        connection.query('DELETE FROM buildings Where buildingid = ' + buildingid , req.params.id, function(err, rows, fields) {
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

module.exports = buildings;