'use strict';

angular.module('RankingsApp')
    .controller('CompetitionController', function($scope, Restangular, $routeParams, $location) {

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

                    Restangular.one('instances', $scope.selectedInstance.id).getList('results').then(function(results) {
                        $scope.results = results;
                    });
                }
            });


        });

        Restangular.all('fencers').getList().then(function(fencers) {
            $scope.fencers = fencers;
        });

        $scope.addResult = function() {
            var result = Restangular.one('results');
            result.fencer = $scope.selectedFencer.id;
            result.competition = $routeParams.competitionID;
            result.instance = $routeParams.instanceID;

            Restangular.service('results').post(result).then(function(response) {
                $scope.results.push(response);
            });
        };

        $scope.$watch('selectedInstance', function() {
            if ($scope.selectedInstance) {
                $location.path('/competition/' + $scope.competition.id + '/instance/' + $scope.selectedInstance.id);
            }
        });



        function updateResults() {
            Restangular.all('instances').getList().then(function(fencers) {
                $scope.fencers = fencers;
            });
        }



    });
