angular.module('RankingsApp')
.controller('NavCtrl', function ($scope, competitions)
{

	$scope.competitions = competitions.getCompetitions();

	
});