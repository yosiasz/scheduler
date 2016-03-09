var cors = require('cors'),
    express = require('express'),
    userRouter = express.Router();
     
var router = function(connection){
    /*app.options('/users', cors()); // enable pre-flight request for SELECT request 
    app.options('/users:userid', cors()); // enable pre-flight request for SELECT request 
    app.options('/users', cors()); // enable pre-flight request for INSERT request 
    app.options('/users/:userid', cors()); // enable pre-flight request for DELETE request*/
    userRouter.route('/')    
    .get(function(req,res){
        connection.query('SELECT userid, username FROM users', req.params.id, function(err, rows, fields) {
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
    userRouter.route('/:userid')   
    .get(function(req,res){
        connection.query('SELECT userid, username FROM users WHERE userid = ' + req.params.userid, req.params.id, function(err, rows, fields) {
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
    userRouter.route('/')
    .post(function(req, res){
    connection.query('INSERT INTO users(username) values ("' + req.body.username + '")', req.params.id, function(err, rows, fields) {
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
    userRouter.route('/:userid')
    .delete(function(req, res){

        var userid = req.params.userid;
        
        connection.query('DELETE FROM users Where userid = ' + userid , req.params.id, function(err, rows, fields) {
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
    
    return userRouter;
        
};

module.exports = router;