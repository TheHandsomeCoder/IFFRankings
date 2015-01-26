'use strict';

angular.module('RankingsApp')
    .controller('InstanceModalController', function($scope, $modalInstance, Restangular) {

        $scope.instance = {};

        $scope.submitted = false;

        Restangular.all('seasons').getList().then(function(seasons) {
            $scope.seasons = seasons;
        });

        Restangular.all('tiers').getList().then(function(tiers) {
            $scope.tiers = tiers;
        });

        $scope.tierIsNotValid = function() {
            return ($scope.instance.tier === "" || angular.isUndefined($scope.instance.tier));
        };

        $scope.seasonIsNotValid = function() {
            return ($scope.instance.season === "" || angular.isUndefined($scope.instance.season));
        };

        $scope.dateIsNotValid = function() {
            //TODO: Put some kind of date formatting in here       
            return ($scope.instance.date === "" || angular.isUndefined($scope.instance.date));
        };

        $scope.formIsValid = function() {
            return ($scope.tierIsNotValid() && $scope.seasonIsNotValid() && $scope.dateIsNotValid())
        }

        $scope.ok = function() {
            $scope.submitted = true;
            if (!$scope.formIsValid()) 
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
