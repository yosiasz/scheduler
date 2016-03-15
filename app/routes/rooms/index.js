'use strict';

/*
routes/rooms/index.js
http://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/
http://stackoverflow.com/questions/32290971/nodejs-express-routing-with-passport-returning-undefined-req-url
*/
var express = require('express');
var roomRouter = express.Router();
var cors = require('cors');

var roomsController = require('../../controllers/roomsController.js')();
roomRouter.all('*', cors());

roomRouter.route('/:roomname')
    .post(roomsController.createRoom);

//roomRouter.post('/:roomname', require('./new-room.js'));  

roomRouter.route('/')
    .get(roomsController.getRooms);

roomRouter.route('/:roomid')
    .get(roomsController.getRoomById);

roomRouter.route('/:roomid')
    .delete(roomsController.deleteRoomById);


/*roomRouter.get('/', require('./get-rooms.js')); 
roomRouter.get('/:roomid', require('./get-room.js')); 

roomRouter.delete('/:roomid', require('./delete-room.js')); 
*/
module.exports = roomRouter;