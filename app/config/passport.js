var passport = require('passport');
var express = require('express'),     
    app = express();
    
module.exports = function(app){
    app.use(passport.initialize());
    app.use(passport.session());
    
    passport.serializeUser(function(user, done){
        done(null, user);
    });
    
    passport.deserializeUser(function(user, done){
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

