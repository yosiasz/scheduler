/*
routes/rooms/index.js
http://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/
http://stackoverflow.com/questions/32290971/nodejs-express-routing-with-passport-returning-undefined-req-url
*/
var roomRouter = require('express').Router(),
    cors = require('cors');

roomRouter.all('*', cors());

module.exports = function (connection) {   



roomRouter.get('/get', require('./get-rooms.js'));  
roomRouter.get('/get/:roomid', require('./get-room.js')); 
 
/* 
router.post('/new', require('./new-user.js'));  
router.post('/delete/:id', require('./delete-user.js'));  
*/  
    return roomRouter;
};