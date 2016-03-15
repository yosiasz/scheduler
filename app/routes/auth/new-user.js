var mysql = require('mysql');

var connection = mysql.createConnection({
'host' : '10.0.0.5',
'port' : '3306',
'user' : 'scheduler',
'password' : 'Semrina77',
'database' : 'scheduler'
});

module.exports = function(req, res){

    username = mysql.escape(req.body.username);
    password = mysql.escape(req.body.password);
    email = mysql.escape(req.body.email);
    dmlaction = mysql.escape('I');
    var dt = new Date();

    createddate = dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

    //var query = 'CALL users_iud(' + dmlaction + ', ' +  username + ', ' + password + ', ' +  email +  ', -1' + ' )';
    //connection.query('INSERT INTO users(username, password, email, createddate, active) values ("' + username + '", "' + password + '", "' +  email + '", "' + createddate + '", 1 )', req.params.id, function(err, rows, fields) {
     connection.query('CALL users_iud(' + dmlaction + ', ' +  username + ', ' + password + ', ' +  email +  ', -1' + ' )', req.params.id, function(err, rows, fields) {
        if (err) {
            res.send(err);
        }
        
        //res.send({ message: 'User added!' });
        
    });
};

