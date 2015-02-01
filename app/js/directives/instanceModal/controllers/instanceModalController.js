'use strict';

angular.module('RankingsApp')
    .controller('InstanceModalController', function($scope, $modalInstance, Restangular, competition) {

        $scope.instance = {};
        $scope.instance.competition = competition;

        Restangular.all('seasons').getList().then(function(seasons) {
            $scope.seasons = seasons;
        });

        Restangular.all('tiers').getList().then(function(tiers) {
            $scope.tiers = tiers;
        });

        $scope.ok = function(instanceForm) {
            $scope.submitted = true;
            if (instanceForm.$valid) {
                Restangular.service('instances').post($scope.instance).then(function(response) {
                    $modalInstance.close(response);
                });


            }

            return;

        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });
