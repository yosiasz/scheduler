var passport = require('passport');
var express = require('express'),     
    app = module.exports = express();
    
module.exports = function(){
    app.use(passport.initialize);
    app.use(passport.session());
    
    passport.serializeUser(function(user, done){
        done(null, user);
    });
    
    passport.deserializeUser(function(userid, done){
        //sql existing find
        done(null, userid);
    });
    
    require('./strategies/local.strategy')();
            
    /*   
        deserialize
        serialize
        strategy
    */
};

