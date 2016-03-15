var mysql = require('mysql');

var connection = mysql.createConnection({
'host' : '10.0.0.5',
'port' : '3306',
'user' : 'scheduler',
'password' : 'Semrina77',
'database' : 'scheduler'
});

module.exports = function(req, res){
    
        roomname = mysql.escape(req.body.roomname);
        var dt = new Date();            
        createddate = mysql.escape(dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate());
        query = 'INSERT INTO rooms(roomname, createdate, active) values (' + roomname +  ',' + createddate + ', 1 ' + ')';
        /*
        connection.query(query, req.params.id, function(err, rows, fields) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }
                res.send('Room created!');
            });*/
            res.send(query);
};

