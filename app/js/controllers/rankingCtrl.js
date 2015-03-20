'use strict';

angular.module('RankingsApp')
    .controller('RankingController', function($scope, Restangular, $routeParams, $q) {




        var promises = [];

        $scope.rankings = [];
        $scope.rankingsComplete = false;

        function calculatePoints(results) {
            var sorted = _.sortBy(results, function(result) {
                return result.points
            }).reverse();

            var points = 0;

            for (var i = 0; i < 6; i++) {
                if (sorted[i]) {
                    points += sorted[i].points;
                }
            }

            return points;
        }


        function createRanking(fencer, results, instances) {
            var results = _.filter(results, function(result) {
                return instances[result.links.instance];
            });

            if (results.length > 0) {
                var ranking = {
                    fencer: fencer.fullName(),
                    points: calculatePoints(results)
                };

                _.each(results, function(i) {
                    ranking[i.links.instance] = i.points;
                });

                return ranking;
            } else {
                return null;
            }


        }



        function calculateRanking(fencer, previousFencer, numSamePoints) {

            if (fencer.points == previousFencer.points) {
                fencer.rank = previousFencer.rank;
                numSamePoints++;
            } else {
                fencer.rank = previousFencer.rank + numSamePoints;
                numSamePoints = 1;
            }

            return numSamePoints;
        }


        function createRankingsFromResults(instances, fencers, resultsList) {
            var rankings = []

            for (var i = 0; i < fencers.length; i++) {

                var newRanking = createRanking(fencers[i], resultsList[i], instances);
                if (newRanking) {
                    rankings.push(newRanking);
                }

            }

            rankings = _.sortBy(rankings, function(rank) {
                return rank.points
            }).reverse();

            rankings[0].rank = 1;
            var numSamePoints = 1;

            for (var i = 1; i < rankings.length; i++) {
                numSamePoints = calculateRanking(rankings[i], rankings[i - 1], numSamePoints);
            }

            return rankings;
        }



        function getLatestInstance(promiseResults) {


            var instances = [];

            _.each(promiseResults, function(x) {               

                var latestInstance = _.first(_.sortBy(x, function(instance) {
                    return instance.date
                }).reverse());

                var monthsSinceCompRan = moment().diff(moment(latestInstance.date), 'months', true);

                if (monthsSinceCompRan < 13) {
                    var comp = _.find($scope.competitions, function(x) {
                        return x.id === latestInstance.links.competition;
                    });

                    comp.Instance(latestInstance);
                    instances[latestInstance.id] = true;
                }
                else
                {
                    _.remove($scope.competitions, function(x) {
                        return x.id === latestInstance.links.competition;
                    });
                }
            
            });



            Restangular.all('fencers').getList().then(function(fencers) {

               var fencerResultsPromises = [];

                _.each(fencers, function(fencer) {
                    fencerResultsPromises.push(fencer.getList('results'));
                })

                var all = $q.all(fencerResultsPromises);
                all.then(function(response) {
                    $scope.rankings = createRankingsFromResults(instances, fencers, response);
                    $scope.rankingsComplete = true;
                });
            });
        };





        Restangular.all('competitions').getList().then(function(competitions) {
            $scope.competitions = competitions;

            _.each($scope.competitions, function(competition) {
                if(competition.excluded === true)
                {
                   
                }
                else
                {
                  promises.push(competition.getList('instances'));
                }
            });

        }).then(function() {

            var all = $q.all(promises);
            all.then(getLatestInstance)
                .then(function(rankings) {
                    $scope.rankings = rankings;
                })

        });


        $scope.getPointsFromResultAtCompetition = function(fencer, comp) {
            if (fencer.Results()) {
                var results = fencer.Results();
                var points = results[comp.Instance.id].points;
                return points;
            } else {
                return "-"
            }

        }






    });
