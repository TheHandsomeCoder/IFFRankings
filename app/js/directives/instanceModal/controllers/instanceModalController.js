'use strict';

angular.module('RankingsApp')
    .controller('InstanceModalController', function ($scope, $modalInstance, Restangular, competition, instance, edit, CategoriesService) {

        Restangular.all('seasons').getList().then(function (seasons) {
            $scope.seasons = seasons;
            $scope.catagories = CategoriesService.numberOfCompetitorsCategories();
            $scope.tiers = CategoriesService.competitionCategories();
            setupInstance(instance);
        });

        function setupInstance(instance) {
            if(edit) {
                $scope.instance = instance;
                $scope.instance.date = new Date(instance.date);
                $scope.instance.season = instance.links.season;
                $scope.instance.competition = competition;
                $scope.instance.tier = instance.tier;
                $scope.instance.numberOfCompetitors = instance.numberOfCompetitors;
            }
            else
            {
                $scope.instance = {
                    competition: competition
                };
            }


        }


        $scope.ok = function (instanceForm) {
            $scope.submitted = true;

            if (instanceForm.$valid) {
                $scope.instance.weapon = CategoriesService.selectedWeapon;
                if(edit) {
                    Restangular.copy($scope.instance).save().then(function (response) {
                        $modalInstance.close(response);
                    });
                }
                else
                {
                    Restangular.service('instances').post($scope.instance).then(function (response) {
                        $modalInstance.close(response);
                    });
                }
            }


            return;

        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });
