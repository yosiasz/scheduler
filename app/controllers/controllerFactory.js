'use strict';

var app = angular.module('schedulerApp');

app.controller('authController', ['$scope', 'authFactory', 
        function ($scope, authFactory) {

    $scope.status;
    $scope.products;    

}]) 
app.controller('profileController', ['$scope', 'authFactory', 
        function ($scope, authFactory) {

    $scope.status;
    $scope.products;    

}]) 
app.controller('personsController', ['$scope', 'personsFactory', 
        function ($scope, personsFactory) {

    $scope.status;
    $scope.persons;
    $scope.person;
    
    getpersons();

    function getpersons() {
        personsFactory.getpersons()
            .success(function (prns) {
                $scope.persons = prns;
            })
            .error(function (error) {
                $scope.status = 'Unable to load persons data: ' + error.message;
            });
    }
            
    $scope.getperson = function (id) {
        personsFactory.getuser(id)
        .success(function (prsn) {
            $scope.status = 'Retrieved person!';
            $scope.user = prsn;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving person! ' + error.message;
        });
    };               

}]) 
app.controller('buildingsController', ['$scope', 'buildingsFactory', 
        function ($scope, buildingsFactory) {

    $scope.status;
    $scope.buildings;
    $scope.building;
    
    getbuildings();

    function getbuildings() {
        buildingsFactory.getbuildings()
            .success(function (bldgs) {
                $scope.buildings = bldgs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load persons data: ' + error.message;
            });
    }
            
    $scope.getbuilding = function (id) {
        buildingsFactory.getbuilding(id)
        .success(function (bldg) {
            $scope.status = 'Retrieved person!';
            $scope.building = bldg;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving person! ' + error.message;
        });
    };               

}]) 
app.controller('roomsController', ['$scope', 'roomsFactory', 
        function ($scope, roomsFactory) {

    $scope.status;
    $scope.rooms;
    $scope.room;

    getrooms();

    function getrooms() {
        roomsFactory.getrooms()
            .success(function (rms) {
                $scope.rooms = rms;
            })
            .error(function (error) {
                $scope.status = 'Unable to load persons data: ' + error.message;
            });
    }
            
    $scope.getroom = function (id) {
        roomsFactory.getroom(id)
        .success(function (rm) {
            $scope.status = 'Retrieved room!';
            $scope.room = rm;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving person! ' + error.message;
        });
    };               

    $scope.createroom = function () {
        roomsFactory.createroom($scope.newroom)
            .success(function () {
                $scope.status = 'Inserted room! Refreshing room list.';
                $scope.rooms.push($scope.newroom);
                getrooms();
            }).
            error(function (error) {
                $scope.status = 'Unable to create room: ' + error.message;
            });
    };

	$scope.deleteroom = function (id) {
			roomsFactory.deleteroom(id)
				.success(function () {
                    var foundIndex = $scope.rooms.indexOf(id);
                    $scope.rooms.splice(foundIndex,1)
                    getrooms();
					$scope.status = 'Deleted room! Refreshing room list.';
				}).
				error(function(error) {
					$scope.status = 'Unable to delete room: ' + error.message;
				});
		};        
}]) 
app.controller('usersController', ['$scope', 'usersFactory', 
        function ($scope, usersFactory) {

    $scope.status;
    $scope.users;
    $scope.user;            

    getusers();

    function getusers() {
        usersFactory.getusers()
            .success(function (prsns) {
                $scope.users = prsns;
            })
            .error(function (error) {
                $scope.status = 'Unable to load users data: ' + error.message;
            });
    } 
	$scope.insertuser = function () {
			usersFactory.insertuser($scope.newuser)
				.success(function () {
					$scope.status = 'Inserted user! Refreshing user list.';
					$scope.users.push($scope.newuser);
				}).
				error(function(error) {
					$scope.status = 'Unable to insert perons: ' + error.message;
				});
		};
           
    $scope.getuser = function (id) {
        usersFactory.getuser(id)
        .success(function (prsn) {
            $scope.status = 'Retrieved user!';
            $scope.user = prsn;
        })
        .error(function (error) {
            $scope.status = 'Error retrieving user! ' + error.message;
        });
    };           

}]);
