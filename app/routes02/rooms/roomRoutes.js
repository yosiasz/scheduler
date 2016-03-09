'use strict';

var cors = require('cors'),
    express = require('express'),
    app = express(),
    roomRouter = express.Router(),
    mongodb = require('mongodb').MongoClient;

var router = function (connection) {
    
    roomRouter.all('*', cors());
    
    roomRouter.route('/rooms')
        .get(function (req, res) {
            mongodb.connect(connection, function (err, db) {
                var collection = db.collection('rooms');
            
                collection.find({}).toArray(function (err, results) {
                /*if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.send({
                        result: 'error',
                        err:    err.code
                    });
                }*/
                    res.send('We are in!');
                });
            });

        });
    

    return roomRouter;
        
};

module.exports = router;