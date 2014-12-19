'use strict';

angular.module('RankingsApp')
    .controller('CompetitionCtrl', function($scope, Restangular, $routeParams) {

        Restangular.one('competitions', $routeParams.competitionID).get().then(function(competition) {
            $scope.competition = competition;
            $scope.competition.getList('results').then(function(results) {
                $scope.results = results;
            })
        });

        Restangular.all('fencers').getList().then(function(fencers) {
            $scope.fencers = fencers;
        });

        

        $scope.addResult = function() {
            var result = Restangular.one('results');
            result.fencer = $scope.selectedFencer.id;
            result.competition = $routeParams.competitionID;
            result.points = 100;
            result.placing = 1;


            Restangular.all('results').post(result).then(function(response) {
                $scope.results.push(response);
            });
        }

        $scope.addNewResult = function() {
            var result = {
                "fencer": $scope.selectedFencer.id,
                "competition": $routeParams.competitionID,
                "placing": $scope.getNextPlacing(),
                "points": 50
            };
            results.insertResult(result);
            $scope.selectedFencer = null;

        }






    });
