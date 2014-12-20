'use strict';

angular.module('RankingsApp')
    .controller('FencerModalController', function($scope, $modalInstance,Restangular, edit, fencer, fencers) {





        $scope.edit = edit;        
        $scope.submitted = false;

        if ($scope.edit == 'true') {
            $scope.fencer =  Restangular.copy(fencer);
        } 
        else 
        {
            $scope.fencer = Restangular.one('fencers');
        }




        $scope.ok = function() {
            $scope.submitted = true;

            if ($scope.firstNameIsNotValid() || $scope.lastNameIsNotValid() || $scope.clubIsNotValid() || $scope.genderIsNotValid()) {
                return false;
            } else {
                if ($scope.edit == 'false') {                  
                    fencers.post($scope.fencer).then(function(response){
                         fencers.push(response);
                    });  
                    $modalInstance.close(); 
                                
                } else {
                    Restangular.copy($scope.fencer).save().then(function(response){
                        fencer = angular.extend(fencer, response);
                    });

                    $modalInstance.close();
                }

            }
        };

        $scope.firstNameIsNotValid = function() {
            return ($scope.fencer.firstname === "" || angular.isUndefined($scope.fencer.firstname));
        };

        $scope.lastNameIsNotValid = function() {
            return ($scope.fencer.lastname === "" || angular.isUndefined($scope.fencer.lastname));
        };

        $scope.clubIsNotValid = function() {
            return ($scope.fencer.club === "" || angular.isUndefined($scope.fencer.club));
        };

        $scope.genderIsNotValid = function() {
            return ($scope.fencer.gender === "" || angular.isUndefined($scope.fencer.gender));
        };
        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };
    });
