/*
routes/rooms/index.js
http://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/
http://stackoverflow.com/questions/32290971/nodejs-express-routing-with-passport-returning-undefined-req-url
*/
var userRouter = require('express').Router(),
    cors = require('cors');

userRouter.all('*', cors());

userRouter.get('/', require('./get-users.js'));      
userRouter.get('/:userid', require('./get-user.js')); 
userRouter.post('/signup:username/:password/:email', require('./new-user.js'));  
userRouter.delete('/:userid', require('./delete-user.js')); 

module.exports = userRouter;