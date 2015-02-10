'use strict';

angular.module('RankingsApp')
    .controller('CompetitionController', function($scope, Restangular, $routeParams, $location, ResultsCalculator, CategoriesService) {

        $scope.results = [];
        $scope.fencers = [];

        Restangular.one('competitions', $routeParams.competitionID).get().then(function(competition) {
            $scope.competition = competition;

            $scope.competition.getList('instances').then(function(instances) {
                $scope.instances = instances;
                if ($routeParams.instanceID) {
                    $scope.selectedInstance = _.find($scope.instances, function(instance) {
                        return instance.id === $routeParams.instanceID
                    });

                    $scope.selectedInstance.getList('results').then(function(results) {
                        $scope.results = results;
                    });
                }
            });


        });

        Restangular.all('fencers').getList().then(function(fencers) {
            $scope.fencers = fencers;
        });



        $scope.addResult = function(selectedFencer) {
            var result = Restangular.one('results');
            result.fencer = selectedFencer.id;
            result.competition = $routeParams.competitionID;
            result.instance = $routeParams.instanceID;
            result.placing = $scope.getNextPlacing();
            result.points = $scope.getPointsForPlacing(result.placing);
            Restangular.service('results').post(result).then(function(response) {
                $scope.results.push(response);
               
                

            });
            $scope.selectedFencer = "";
        };

        $scope.$watch('selectedInstance', function() {
            if ($scope.selectedInstance) {
                $location.path('/competition/' + $scope.competition.id + '/instance/' + $scope.selectedInstance.id);
            }
        });

        $scope.getNextPlacing = function() {

            var x = $scope.results.length;

            if (x === 3) {
                return 3;
            } else {
                return x + 1;
            }
        };

        $scope.maximumNumberOfResultsReached = function() {
            if ($scope.selectedInstance) {
                var competitorCategories = CategoriesService.numberOfCompetitorsCategories();

                var category = _.find(competitorCategories, function(x) {
                    return x.code === $scope.selectedInstance.numberOfCompetitors;
                });


                if ($scope.results.length < category.max) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        }

        $scope.getPointsForPlacing = function(placing) {
            return ResultsCalculator.calculatePoints(placing, $scope.selectedInstance);
        }

        $scope.log = function(result) {
            console.log(result)
        }



    });
