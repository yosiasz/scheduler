var cors = require('cors'),
    userRouter = require('express').Router();
    
     
var router = function(connection){
    
    userRouter.all('*', cors());
    
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
    userRouter.route('/:username')   
    .get(function(req,res){
        connection.query('SELECT userid, username FROM users WHERE username = "' + req.params.username + '"', req.params.id, function(err, rows, fields) {
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
        res.send(req.params.userid);
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
    });
    userRouter.route('/:username/:password/:email')
    .post(function(req, res){
        username = req.body.username;
        password = req.body.password;
        email = req.body.email;
        
        connection.query('INSERT INTO users(username, password, email) values ("' + username + '", "' + password + '", "' +  email + '")', req.params.id, function(err, rows, fields) {
                    if (err) {
                        console.error(err);
                        res.statusCode = 500;
                        res.send({
                            result: 'error',
                            err:    err.code
                        });
                    }
                   res.json({ message: 'Successfully create user!' });
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