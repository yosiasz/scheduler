module.exports = function Router(req, res, connection) {
        connection.query('SELECT roomid, roomname FROM rooms', req.params.id, function(err, rows, fields) {
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
    };
