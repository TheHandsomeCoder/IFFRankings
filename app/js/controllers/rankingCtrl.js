'use strict';

angular.module('RankingsApp')
    .controller('RankingController', function($scope, Restangular, $routeParams, $q) {



        var defer = $q.defer();
        var promises = [];

        var rankings = [];

        function calculatePoints(results) {
            var sorted = _.sortBy(results, function(result) {
                result.points
            }).reverse();

            var points = 0;

            for (var i = 0; i < 6; i++) {
                if(sorted[i])
                {
                    points += sorted[i].points;
                }
            }

            return points;
        }

        function getLatestInstance(promiseResults) {
            var instances = [];

            _.each(promiseResults, function(x) {
                var latestInstance = _.first(_.sortBy(x, function(instance) {
                    instance.date
                }));

                var comp = _.find($scope.competitions, function(x) {
                    return x.id === latestInstance.links.competition;
                });

                comp.Instance(latestInstance);
                instances[latestInstance.id] = true;

            });

            Restangular.all('fencers').getList().then(function(fencers) {
                $scope.fencers = fencers;

                _.each($scope.fencers, function(fencer) {
                    fencer.getList('results').then(function(response) {

                        var results = _.filter(response, function(result) {
                            return instances[result.links.instance];
                        });

                        var indexedResults = [];
                        _.each(results, function(i){
                            indexedResults[i.links.instance] = i;
                        });

                        fencer.Results(indexedResults);

                        fencer.Points(calculatePoints(results));


                    })
                });
            });
        };

        Restangular.all('competitions').getList().then(function(competitions) {
            $scope.competitions = competitions;

            _.each($scope.competitions, function(competition) {
                promises.push(competition.getList('instances'));
            });

        }).then(function() {

            var all = $q.all(promises);
            all.then(getLatestInstance)


        });


        $scope.getPointsFromResultAtCompetition = function(fencer, comp){
            if(fencer.Results())
            {
                var results = fencer.Results();
                var points = results[comp.Instance.id].points;
                return points;
            }
            else
            {
                return "-"
            }       
             
        }






    });
