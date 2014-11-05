'use strict';

angular.module('RankingsApp')
.controller('FencerCtrl', function ($scope, fencers, $modal) {

	$scope.getFencers = function()
	{
		return fencers.getFencers();
	}
	
});



