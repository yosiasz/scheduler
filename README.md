# scheduler
simple tool to help in scheduling events

uses

node.js
angular
express.js
mysql backend

1. clone locally

2. at root scheduler folder run
   npm install
   
3. open a node command console. go to path scheduler run
   node server.js

4. open a node command console. go to path scheduler node app/services/api.js
    this will run the API
    
5. Open MySQL and run script under folder sqlscripts

6. make sure to create a user: scheduler pwd:dasscheduler or change config references to your own user

7. go to http://localhost:8000/app/Index.html#/        

Work in Progress


TODO

    use one config file
    prevents folder traversal when landing on localhost:8000
    solidify routing