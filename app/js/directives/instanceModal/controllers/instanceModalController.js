'use strict';

angular.module('RankingsApp')
    .controller('InstanceModalController', function($scope, $modalInstance, Restangular, competition, CategoriesService) {

        $scope.catagories = CategoriesService.numberOfCompetitorsCategories();
        $scope.tiers = CategoriesService.competitionCategories();
        $scope.instance = {};
        $scope.instance.competition = competition;



        Restangular.all('seasons').getList().then(function(seasons) {
            $scope.seasons = seasons;
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
