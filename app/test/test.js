siege = require('siege');

siege()
  .concurrent(100)  
  .on(8001)  
  .get('/rooms').for(10000).times
  .get('/rooms/1').for(10000).times
/*  .get('/persons').for(10000).times
  .get('/buildings').for(10000).times
  .get('/users').for(10000).times
  .get('/users/1').for(10000).times
*/  .attack()