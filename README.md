# scheduler
simple tool to help in scheduling events

uses

node.js
angular
express.js
mysql backend

* clone locally

* open a node command console and traverse to folder scheduler. at root scheduler folder run
   npm install
   
* then run
   node server.js

* open a node command console. go to path scheduler node app/services/api.js
    this will run the API
    
* Open MySQL and run script under folder sqlscripts

* make sure to create a user: scheduler pwd:dasscheduler or change config references to your own user

* go to http://localhost:8000/app/Index.html#/        

Work in Progress


TODO

    use one config file                                             done
    prevents folder traversal when landing on localhost:8000        
    solidify routing