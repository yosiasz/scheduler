var cors = require('cors'),
    express = require('express'),
    app = express(),
    buildingRouter = express.Router()   
    
var router = function(connection){
    
    buildingRouter.all('*', cors());
    
    buildingRouter.route('/')
    .get(function(req,res){
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
    buildingRouter.route('/:buildingid')
     .get(function(req,res){
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
    buildingRouter.route('/:buildingname')
    .post(function(req, res){
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
    buildingRouter.route('/:buildingid')
    .delete(function(req, res){

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
    
    return buildingRouter;
        
};

module.exports = router;