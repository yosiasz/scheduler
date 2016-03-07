// routes/rooms/index.js
var router = require('express').Router();  

var varRoomsRouters = function (connection) {
    router.get('/get', require('./get-rooms.js'))(connection);  
    /*router.get('/get/:id', require('./get-room.js'));  
    router.post('/new', require('./new-room.js'));  
    router.post('/delete/:id', require('./delete-room.js'));  
    */
    return router;
}

module.exports = varRoomsRouters; 
