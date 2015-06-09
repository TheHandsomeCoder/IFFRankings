angular.module('RankingsApp')
    .controller('SettingsController', function($scope, Restangular, $window) {

        $scope.seasonSectionVisible = false;
        $scope.competitionSectionVisible = true;
        $scope.form = {};
        $scope.updateForm = {};
        $scope.isFocused = true;

        $scope.onBlur = function() {
            $scope.isFocused = false;
        };

        $scope.updateOnBlur = function() {
            $scope.updateIsFocused = false;
        };

        $scope.addCompetition = function(form) {
            if ($scope.form.name && $scope.form.shortName) {

                var competition = Restangular.one('competitions');
                competition.name = $scope.form.name;
                competition.shortName = $scope.form.shortName;

                Restangular.service('competitions').post(competition).then(function(response) {
                    $scope.competitions.push(response);
                    $scope.form = {};

                    $scope.isFocused = true;
                });
            };
        }

        $scope.cancelEditable = function(competition)
        {
            competition.editable = false;
            $scope.tableInEditState = false;
            $scope.updateForm = {

            };
            $scope.onBlur();
        };

         $scope.updateCompetition = function(form, competition) {

            //TODO: some kind of form validation

            competition.name = form.name
            competition.shortName = form.shortName;
            Restangular.copy(competition).save().then(function(response)
            {                
                $scope.cancelEditable(competition);
            });


        };

        $scope.setEditable = function(competition)
        {
            $scope.updateForm.name = competition.name;
            $scope.updateForm.shortName = competition.shortName;          
            $scope.tableInEditState = true;            
            competition.editable = true;
            $scope.updateIsFocused = true;

        };



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
