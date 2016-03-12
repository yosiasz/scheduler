/*
routes/rooms/index.js
http://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/
http://stackoverflow.com/questions/32290971/nodejs-express-routing-with-passport-returning-undefined-req-url
*/
var personRouter = require('express').Router(),
    cors = require('cors');

personRouter.all('*', cors());

personRouter.get('/', require('./get-persons.js'));      
personRouter.get('/:personid', require('./get-person.js')); 
personRouter.post('/:personname/:password/:email', require('./new-person.js'));  
personRouter.delete('/:personid', require('./delete-person.js')); 

module.exports = personRouter;