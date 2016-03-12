var mysql = require('mysql');

var connection = mysql.createConnection({
'host' : '10.0.0.5',
'port' : '3306',
'user' : 'scheduler',
'password' : 'Semrina77',
'database' : 'scheduler'
});

module.exports = function (req, res) {
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
                res.json({ message: 'Successfully added!' });
            });     
    };


