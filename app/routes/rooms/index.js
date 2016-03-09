// routes/rooms/index.js
var cors = require('cors'),
    express = require('express'),
    app = express(),
    roomRouter = express.Router()   
    
var router = function (connection) {
    roomRouter.all('*', cors());
    roomRouter.get('/get', require('./get-rooms.js'))(connection);  
/*    roomRouter.get('/get/:id', require('./get-room.js'));  
    roomRouter.post('/new', require('./new-room.js'));  
    roomRouter.post('/delete/:id', require('./delete-room.js'));  */
    
    return router;
}

module.exports = roomRouter; 
