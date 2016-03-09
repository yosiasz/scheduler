var cors = require('cors'),
    express = require('express'),
    authRouter = express.Router();
     

var router = function(connection){
    
    authRouter.route('/signup')
        .post(function(req, res){
            var username = req.body.username;
            var password = req.body.password;
            var email = req.body.email;

            
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
    
    authRouter.route('/signin/:username/:password')
        .get(function(req,res){
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
/*    authRouter.route('/profile:userid')
        .get(function(req, res) {
            req.json(req.user);            
        })*/
            
    return authRouter;
        
};
module.exports = router;
