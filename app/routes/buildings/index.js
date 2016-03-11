/*
routes/rooms/index.js
http://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/
http://stackoverflow.com/questions/32290971/nodejs-express-routing-with-passport-returning-undefined-req-url
*/
var roomRouter = require('express').Router(),
    cors = require('cors');

roomRouter.all('*', cors());

 var router = function (connection) {  
    
    roomRouter.get('/', require('./get-buildings.js'));  
    roomRouter.get('/:buildingid', require('./get-building.js')); 
    roomRouter.post('/:buildingname', require('./new-building.js'));  
    roomRouter.delete('/:buildingid', require('./delete-building.js')); 

    return roomRouter;
};

module.exports = router;