'use strict';

angular.module('RankingsApp')
    .controller('RankingController', function($scope, Restangular, $routeParams) {

        Restangular.all('fencers').getList().then(function(fencers) {
            $scope.fencers = fencers;

            _.each($scope.fencers, function(fencer) {
                fencer.getList('results').then(function(response) {
                    fencer.Results(response);
                })
            });

            


        });

    });
