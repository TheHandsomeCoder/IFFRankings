angular.module('RankingsApp')
.controller('NavCtrl', function ($scope, Restangular)
{	
	Restangular.all('competitions').getList().then(function(competitions){
		$scope.competitions = competitions;
	});
});