'use strict';

/*
routes/rooms/index.js
http://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/
http://stackoverflow.com/questions/32290971/nodejs-express-routing-with-passport-returning-undefined-req-url
*/
var express = require('express');
var authRouter = express.Router();
var cors = require('cors');

authRouter.all('*', cors());
authRouter.get('/', require('./get-users.js'));
authRouter.post('/signin', require('./get-user.js'));
authRouter.post('/signup', require('./new-user.js')); 
/*
    authRouter.delete('/:roomid', require('./delete-user.js')); 
*/
module.exports = authRouter;