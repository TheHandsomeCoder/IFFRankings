"use strict";

angular.module('RankingsApp')
    .directive('seasonModal', function() {
        return {
            restrict: 'E',
            scope: {
                competition:'@'
            },
            replace: true,
            transclude: true,
            template: '<a class="button postfix" ng-click="openModel()"><ng-transclude></ng-transclude></a>', 
            controller: function($scope, $element, $modal) {

                $scope.openModel = function() {

                    $modal.open({
                        templateUrl: 'js/directives/seasonModal/views/seasonModalView.html',
                        controller: 'SeasonModalController',
                        windowClass: 'small',
                        resolve:{
                             competition: function () {return $scope.competition},
                        }
                        

                    });
                };
            }
        };
    });
