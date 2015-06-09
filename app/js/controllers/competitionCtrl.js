'use strict';

angular.module('RankingsApp')
    .controller('CompetitionController', function($scope, Restangular, $routeParams, $location, ResultsCalculator, CategoriesService) {

        $scope.results = [];
        $scope.fencers = [];
        $scope.instances = [];
        $scope.isFocused = false;
        $scope.updateIsFocused = false;
        $scope.tableInEditState = false;

        $scope.updateForm = {};

        $scope.onBlur = function(){
            $scope.isFocused = false;
        }; 

        $scope.updateOnBlur = function(){
            $scope.updateIsFocused = false;
        };

        $scope.getNextPlacing = function() {

            var x = $scope.results.length;

            if (x === 3) {
                return 3;
            } else {
                return x + 1;
            }
        };



        Restangular.one('competitions', $routeParams.competitionID).get().then(function(competition) {
            $scope.competition = competition;

            $scope.competition.getList('instances').then(function(instances) {
                $scope.instances = _.where(instances, {'weapon': CategoriesService.selectedWeapon});
                if ($routeParams.instanceID) {
                    $scope.selectedInstance = _.find($scope.instances, function(instance) {
                        return instance.id === $routeParams.instanceID
                    });

                    $scope.selectedInstance.getList('results').then(function(results) {
                        $scope.results = results;

                        $scope.form = {
                            placing: $scope.getNextPlacing()
                        };


                    });
                }
            });


        });

        Restangular.all('fencers').getList().then(function(fencers) {
            $scope.fencers = fencers;
        });


        $scope.addResult = function(form) {

            //TODO: some kind of form validation

            var result = Restangular.one('results');
            result.fencer = $scope.form.selectedFencer.id;
            result.competition = $routeParams.competitionID;
            result.instance = $routeParams.instanceID;
            result.placing = $scope.form.placing;
            result.points = $scope.getPointsForPlacing(result.placing);
            result.excludedFromRankings = form.excludedFromRankings;
            result.weapon = CategoriesService.selectedWeapon;

            Restangular.service('results').post(result).then(function(response) {
                $scope.results.push(response);
                $scope.form = {
                    placing: $scope.getNextPlacing()
                };

                $scope.isFocused = true;
            });
        };

        $scope.updateResult = function(form, result) {

            //TODO: some kind of form validation

            result.links.fencer = form.selectedFencer.id;
            result.placing = form.placing;
            result.points = $scope.getPointsForPlacing(result.placing);
            result.excludedFromRankings = form.excludedFromRankings;
            Restangular.copy(result).save().then(function(response)
            {
                result.Fencer(_.find($scope.fencers, function(x)
                {
                     return x.id === form.selectedFencer.id;
                }));
                $scope.cancelEditable(result);
            });


        };


        $scope.$watch('selectedInstance', function() {
            if ($scope.selectedInstance) {
                $location.path('/competition/' + $scope.competition.id + '/instance/' + $scope.selectedInstance.id);
            }
        });


        $scope.setEditable = function(result)
        {
            $scope.updateForm.excludedFromRankings = result.excludedFromRankings;
            $scope.updateForm.selectedFencer = result.fencer;
            $scope.updateForm.placing = result.placing;
            $scope.tableInEditState = true;            
            result.editable = true;
            $scope.updateIsFocused = true;

        };

        $scope.cancelEditable = function(result)
        {
            result.editable = false;
            $scope.tableInEditState = false;
            $scope.updateForm = {

            };
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
        };

        $scope.getPointsForPlacing = function(placing) {
            return ResultsCalculator.calculatePoints(placing, $scope.selectedInstance);
        };

        $scope.log = function(result) {
            console.log(result)
        }


    });
