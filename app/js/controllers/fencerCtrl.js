'use strict';

angular.module('RankingsApp')
.controller('FencerController', function ($scope, Restangular, $modal) {

	Restangular.all('fencers').getList().then(function(fencers){
		$scope.fencers = fencers;
	});
	
	//TODO: Add in some sort of confimation dialog
	$scope.deleteFencer = function(fencer)
	{
		fencer.remove().then(function(){
			var index = $scope.fencers.indexOf(fencer);
 		 if (index > -1) $scope.fencers.splice(index, 1);
		});
	};
});



