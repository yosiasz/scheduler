/*
routes/rooms/index.js
http://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/
http://stackoverflow.com/questions/32290971/nodejs-express-routing-with-passport-returning-undefined-req-url
*/
var roomRouter = require('express').Router(),
    cors = require('cors');
<<<<<<< HEAD
   
roomRouter.all('*', cors());

module.exports = function () {   



    roomRouter.get('/get', require('./get-rooms.js'));  
    
/*    roomRouter.get('/get/:roomid', require('./get-room.js')); 
    router.post('/new', require('./new-room.js'));  
    router.post('/delete/:id', require('./delete-room.js'));  
*/    
=======

roomRouter.all('*', cors());

module.exports = function (connection) {   



roomRouter.get('/', require('./get-rooms.js'));  
roomRouter.get('/:roomid', require('./get-room.js')); 
roomRouter.post('/:roomname', require('./new-room.js'));  
 
/* 

router.post('/delete/:id', require('./delete-user.js'));  
*/  
>>>>>>> origin/master
    return roomRouter;
};