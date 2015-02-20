angular.module('RankingsApp')
    .controller('SettingsController', function($scope, Restangular, $window) {

        $scope.seasonSectionVisible = false;
        $scope.competitionSectionVisible = true;

        $scope.resetView = function() {
            $scope.seasonSectionVisible = false;
            $scope.competitionSectionVisible = false;
        }

        $scope.showCompetitionSection = function() {
            $scope.resetView();
            $scope.competitionSectionVisible = true;


        }
        $scope.showSeasonSection = function() {
            $scope.resetView();
            $scope.seasonSectionVisible = true;

        }

        Restangular.all("competitions").getList().then(function(response) {
            $scope.comps = response;
        })

        $scope.competitionToEdit = {};
        $scope.editCompetition = false;


        $scope.showEditCompetition = function(comp) {
            $scope.editCompetition = true;
            angular.copy(comp, $scope.competitionToEdit);
        }

        $scope.saveEdit = function(selectedCompetition) {
            Restangular.copy($scope.competitionToEdit).save().then(function(respone) {
                var competitionInArray = _.find($scope.comps, function(x) {
                    return x.id = respone;
                });
                return angular.copy(respone, competitionInArray);
            }).then(function() {
               $window.location.reload();
            });

        }

        $scope.reset = function() {
            $scope.editCompetition = false;
            $scope.newCompetition = false;
            $scope.selectedCompetition = "";
        }

        $scope.processFile = function($fileContent) {
            if (true) //Replace this with JSON Schema Validation
            {
                $scope.content = angular.fromJson($fileContent);
            }
        };

        $scope.cancel = function() {
            $modalInstance.close($scope.comps);
        };


    });
