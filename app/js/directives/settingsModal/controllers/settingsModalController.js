angular.module('RankingsApp')
    .controller('SettingsModalController', function($scope, $modalInstance, Restangular) {

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
                angular.copy(respone, competitionInArray);
                $scope.reset();
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
