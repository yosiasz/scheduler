var cors = require('cors'),
    express = require('express'),
    authRouter = express.Router();
     

var router = function(connection){
    authRouter.route('/signup')
        .post(function(req, res){
            //console.log(req.body);
            var firstname = req.body.firstname;
            var lastname = req.body.lastname;
            var genderid = req.body.genderid;
            
            connection.query('INSERT INTO persons(firstname, lastname, genderid) values ("' + firstname + '","' +  lastname + '","' +  genderid + '")', req.params.id, function(err, rows, fields) {
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
                    //res.send(rows);
                });
                            
    authRouter.route('/profile')
        .get(function(req, res) {
            req.json(req.user);
            
        })
    });
    
/*    app.get('/users', function(req,res){
        connection.query('SELECT userid, username, firstname, lastname FROM users', req.params.id, function(err, rows, fields) {
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
    */
    return authRouter;
        
};
module.exports = router;
