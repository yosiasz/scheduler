// routes/users/index.js
var router = require('express').Router();  
router.get('/get', require('./get-rooms.js'));  
router.get('/get/:id', require('./get-room.js'));  
router.post('/new', require('./new-room.js'));  
router.post('/delete/:id', require('./delete-room.js'));  
module.exports = router; 