var cors = require('cors'),
    roomRouter =require('express').Router()   
    mysql = require('mysql');

var connection = mysql.createConnection({
'host' : 'localhost',
'port' : '3306',
'user' : 'scheduler',
'password' : 'password',
'database' : 'scheduler'
});

var router = function(req, res){
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
            res.json({ message: 'Successfully deleted' });
        });
};

module.exports = router;

