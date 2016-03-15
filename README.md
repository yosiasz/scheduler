# scheduler
simple tool to help in scheduling events

Install the following

* node.js
* angular
* express.js
* mysql backend

* Open mysql and and run script under folder sqlscripts

* make sure to create a user: scheduler pwd:dasscheduler or change config references to your own user

* clone this repo locally

* open a node command console and traverse to folder scheduler. at root scheduler folder run
   npm install
   
* then run
   node server.js

* open a node command console. go to path scheduler node app/services/api.js
    this will run the API
    
* install live-server 
    npm install live-server
    
    from scheduler\app folder run live-server        

Work in Progress


TODO

    use one config file                                             done
    prevents folder traversal when landing on localhost:8000        
    solidify routing

GOTCHAS
    MySQL at times would wig out with time outs. See the following article on how to manage connection pooling etc
    https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/    