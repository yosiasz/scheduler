var cors = require('cors'),
    express = require('express'),
     userRouter = express.Router();
     
var router = function(connection){
    userRouter.route('/')
        .get(function(req, res){
            connection.query('Select userid, username from users', req.params.id, function(err, rows, fields) {
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
