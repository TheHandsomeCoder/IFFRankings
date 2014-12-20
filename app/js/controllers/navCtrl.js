"use strict";

angular.module('RankingsApp')
.controller('NavigationBarController', function ($scope, Restangular)
{	
	Restangular.all('competitions').getList().then(function(competitions){
		$scope.competitions = competitions;
	});
});