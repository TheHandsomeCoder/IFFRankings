'use strict';

angular.module('RankingsApp')
    .controller('InstanceModalController', function($scope, $modalInstance, Restangular) {

        $scope.instance = {};

       

        Restangular.all('seasons').getList().then(function(seasons) {
            $scope.seasons = seasons;
        });

        Restangular.all('tiers').getList().then(function(tiers) {
            $scope.tiers = tiers;
        });

       $scope.ok = function() {
            $scope.submitted = true;
            if ($scope.form.$valid) 
            {
               console.log($scope.instance);
                //$modalInstance.close();
            }

            return;

        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });
