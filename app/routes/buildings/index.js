/*
routes/rooms/index.js
http://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/
http://stackoverflow.com/questions/32290971/nodejs-express-routing-with-passport-returning-undefined-req-url
*/
var buildingRouter = require('express').Router(),
    cors = require('cors');

buildingRouter.all('*', cors());

buildingRouter.get('/', require('./get-buildings.js'));  
buildingRouter.get('/:buildingid', require('./get-building.js')); 
buildingRouter.post('/:buildingname', require('./new-building.js'));  
buildingRouter.delete('/:buildingid', require('./delete-building.js')); 


module.exports = buildingRouter;