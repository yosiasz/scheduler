var cors = require('cors'),
    express = require('express'),
    authRouter = express.Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
'host' : 'localhost',
'port' : '3306',
'user' : 'scheduler',
'password' : 'password',
'database' : 'scheduler'
});
     

var router = function(connection){

    authRouter.get('/', function(req, res){
            res.send('Auth Route Working!')
    });
        
    authRouter.post('/signup', function(req, res){
            var username = req.body.username;
            var password = req.body.password;
            var email = req.body.email;
               req.login(req.body, function() {
                   res.redirect('/auth/profile');
               })
            connection.query('INSERT INTO users(username, password, email) values ("' + username + '","' +  password + '","' +  email + '")', req.params.id, function(err, rows, fields) {
                    if (err) {
                        console.error(err);
                        res.statusCode = 500;
                        res.send({
                            result: 'error',
                            err:    err.code
                        });
                    }
                    req.login(rows, function() {
                        res.redirect('/auth/profile');
                    });                    
                });       
    })
    
    authRouter.get('/signin/:username/:password', function(req,res){
            connection.query('SELECT userid, username FROM users WHERE username = "' + req.params.username + '" and password = "' + req.params.password  + '"', req.params.id, function(err, rows, fields) {
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
        
    authRouter.route('/profile:userid')
        .get(function(req, res) {
            req.json(req.user);            
        })
            
    return authRouter;
        
};
module.exports = router;
