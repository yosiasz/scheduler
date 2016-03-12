'use strict';

var app = angular.module('schedulerApp')

app.factory('authFactory', ['$http', function($http) {

    //var urlBase = 'http://localhost:8001/api/auth/';
	var urlBase = 'http://localhost:8001/api/auth/';
    var authFactory = {};

 	authFactory.LogIn= function (q) {
		return $http.post('http://localhost:8001/api/auth/login');
    }; 

	authFactory.LogOut= function (q) {
	return $http.get('http://localhost:8001/api/auth/logout');
    };	

    authFactory.GetSession = function (q) {
        return $http.post('http://localhost:8001/api/auth/login/session');
    };

	
    authFactory.Signup = function (q) {
        return $http.post(urlBase + q);
    };

   authFactory.get = function (q) {
		return $http.get(urlBase + q).then(function (results) {
			return results.data;
		});
	};

    return authFactory;
}]);
app.factory('usersFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8001/users';
    var usersFactory = {};

    usersFactory.getusers= function () {
        return $http.get(urlBase);
    };

    usersFactory.getuser = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    usersFactory.insertuser = function (user) {
        return $http.post(urlBase, user);
    };

    usersFactory.updateuser = function (harbor) {
        return $http.put(urlBase + '/' + user.userid, user)
    };

    usersFactory.deleteuser = function (useridid) {
        return $http.delete(urlBase + '/' + userid);
    };

    return usersFactory;
}]);
app.factory('personsFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8001/persons';
    var personsFactory = {};

    personsFactory.getpersons= function () {
        return $http.get(urlBase);
    };

    personsFactory.getperson = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    personsFactory.insertperson = function (person) {
        return $http.post(urlBase, person);
    };

    personsFactory.updateperson = function (person) {
        return $http.put(urlBase + '/' + person.personid, person)
    };

    personsFactory.deleteperson = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return personsFactory;
}]);
app.factory('buildingsFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8001/buildings';
    var buildingsFactory = {};

    buildingsFactory.getbuildings= function () {
        return $http.get(urlBase);
    };

    buildingsFactory.getbuilding = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    buildingsFactory.insertbuilding = function (harbor) {
        return $http.post(urlBase, harbor);
    };

    buildingsFactory.updatebuilding = function (harbor) {
        return $http.put(urlBase + '/' + harbor.harborid, harbor)
    };

    buildingsFactory.deletebuilding = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return buildingsFactory;
}]);
app.factory('roomsFactory', ['$http', function($http) {

    var urlBase = 'http://localhost:8001/rooms';
    var roomsFactory = {};

    roomsFactory.getrooms= function () {
        return $http.get(urlBase);
    };

    roomsFactory.getroom = function (id) {
        return $http.get(urlBase, id);
    };

    roomsFactory.insertroom = function (room) {
        return $http.post(urlBase, room);
    };

    roomsFactory.updateroom = function (id) {
        return $http.put(urlBase + '/' + id)
    };

    roomsFactory.deleteroom = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return roomsFactory;
}]);