'use strict';

angular.module('RankingsApp')
.controller('FencerCtrl', function ($scope, fencers, $modal) {

	$scope.getFencers = function()
	{
		return fencers.getFencers();
	}



	$scope.openFencerModel = function(edit, fencer) {
		

		var modalInstance = $modal.open({
			templateUrl: 'views/newFencerModal.html',
			controller: 'FencerModalCtrl',
			windowClass: 'small',
			resolve: {
				edit: function () {return edit},
				fencer: function(){return fencer}	        		
			}
		});		
	}
});



