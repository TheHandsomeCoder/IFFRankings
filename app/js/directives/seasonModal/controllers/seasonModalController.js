"use strict"

angular.module('RankingsApp')
    .controller('SeasonModalController', function($scope, $modalInstance, Restangular, competition) {

    	Restangular.all('seasons').getList().then(function(seasons)
    	{
			$scope.seasons = seasons;
		});

        $scope.ok = function() {

            $modalInstance.close();

        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });
